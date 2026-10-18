import { NextResponse, type NextRequest } from "next/server";

// Clean URLs for the projects archive.
//   Old WordPress links:  /portfolio/?osf_portfolio_status=Completed&osf_portfolio_type=Residential
//                         /portfolio/page/2/?osf_portfolio_status=Completed
//   No-JS form submits:   /portfolio/?status=completed&type=&location=
// all redirect (308) to   /portfolio/completed/[page/2/][?type=residential]
// Kept self-contained (no app imports), as Proxy should be.

const slugify = (v: string) =>
  v
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const LEGACY = { status: "osf_portfolio_status", type: "osf_portfolio_type", location: "osf_portfolio_location" } as const;

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const isLegacy = Object.values(LEGACY).some((k) => searchParams.has(k));
  const hasStatusParam = searchParams.has("status");
  const hasEmpty = [...searchParams.entries()].some(([, v]) => v === "");
  if (!isLegacy && !hasStatusParam && !hasEmpty) return NextResponse.next();

  // Only the bare archive and its /page/<n>/ form carry query-based status.
  const m = /^\/portfolio\/(?:page\/(\d+)\/)?$/.exec(pathname);
  const pageMatch = m ?? /^\/portfolio\/([a-z]+)\/(?:page\/(\d+)\/)?$/.exec(pathname);
  if (!pageMatch) return NextResponse.next();

  const pick = (key: keyof typeof LEGACY) => slugify(searchParams.get(LEGACY[key]) || searchParams.get(key) || "");
  const status = m ? pick("status") : pageMatch[1];
  const page = m ? m[1] : pageMatch[2];
  const query = new URLSearchParams();
  for (const k of ["type", "location"] as const) {
    const v = pick(k);
    if (v) query.set(k, v);
  }
  // A status change resets to page 1, like the archive's own filters do.
  const keepPage = page && page !== "1" && !(m && hasStatusParam && !isLegacy) ? `page/${page}/` : "";
  const url = request.nextUrl.clone();
  url.pathname = `/portfolio/${status ? `${status}/` : ""}${keepPage}`;
  url.search = query.toString();
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/portfolio/", "/portfolio/:path*"],
};
