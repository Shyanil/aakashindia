#!/usr/bin/env node
// Downloads the WordPress homepage image inventory into assets/aakash-india-originals/
// (not served) and writes a URL -> local file manifest. Failures are recorded, not fatal.
// scripts/optimize-images.mjs then turns the images the page uses into WebP.
//
// WordPress size variants (e.g. "-768x432.jpg") are skipped when the full-size
// original is also in the list: next/image generates responsive sizes from the
// original, so the variants would only add dead weight to the repo.
//
// Usage: node scripts/download-images.mjs [--force]

import { mkdir, writeFile, stat, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "assets/aakash-india-originals");
const listFile = path.join(root, "scripts/image-urls.txt");
const manifestFile = path.join(outDir, "manifest.json");
const force = process.argv.includes("--force");

const TIMEOUT_MS = 30_000;
const RETRIES = 3;
const CONCURRENCY = 6;

const urls = [
  ...new Set(
    (await readFile(listFile, "utf8"))
      .split("\n")
      .map((l) => l.replace(/^-\s*/, "").trim())
      .filter((l) => l.startsWith("http")),
  ),
];

const variantRe = /-(\d+)x(\d+)(\.[a-z]+)$/i;
const urlSet = new Set(urls);
const isRedundantVariant = (u) => {
  const m = u.match(variantRe);
  if (!m) return false;
  return urlSet.has(u.replace(variantRe, m[3]));
};

// Safe, stable filename: <yyyy>-<mm>-<basename>, lowercased, no odd characters.
const localName = (u) => {
  const { pathname } = new URL(u);
  const parts = pathname.split("/").filter(Boolean);
  const file = parts.at(-1);
  const prefix = parts.slice(-3, -1).join("-");
  return `${prefix}-${file}`.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function download(u, dest) {
  let lastErr;
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(u, {
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const type = res.headers.get("content-type") ?? "";
      if (!type.startsWith("image/")) throw new Error(`unexpected content-type ${type}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(dest, buf);
      return { bytes: buf.length, type };
    } catch (err) {
      lastErr = err;
      if (attempt < RETRIES) await sleep(800 * attempt);
    }
  }
  throw lastErr;
}

await mkdir(outDir, { recursive: true });
const manifest = {};
const queue = [...urls];
let ok = 0, skipped = 0, failed = 0;

async function worker() {
  while (queue.length) {
    const u = queue.shift();
    if (isRedundantVariant(u)) {
      manifest[u] = { status: "skipped-variant" };
      skipped++;
      continue;
    }
    const name = localName(u);
    const dest = path.join(outDir, name);
    if (!force) {
      const existing = await stat(dest).catch(() => null);
      if (existing?.size) {
        manifest[u] = { status: "ok", file: `assets/aakash-india-originals/${name}`, bytes: existing.size, cached: true };
        ok++;
        continue;
      }
    }
    try {
      const { bytes, type } = await download(u, dest);
      manifest[u] = { status: "ok", file: `assets/aakash-india-originals/${name}`, bytes, type };
      ok++;
      console.log(`ok   ${name} (${Math.round(bytes / 1024)} KB)`);
    } catch (err) {
      manifest[u] = { status: "failed", error: String(err?.message ?? err) };
      failed++;
      console.error(`FAIL ${u} -> ${err?.message ?? err}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(manifestFile, JSON.stringify(sorted, null, 2) + "\n");
console.log(`\n${ok} downloaded/cached, ${skipped} size variants skipped, ${failed} failed`);
console.log(`manifest: ${path.relative(root, manifestFile)}`);
process.exitCode = failed ? 1 : 0;
