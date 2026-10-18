"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import type { Field } from "@/lib/forms";
import { submitForm, type SubmitResult } from "@/lib/submit-form";

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type Status = { status: "idle" } | { status: "sending" } | SubmitResult;

const MB = 1024 * 1024;

function messageFor(el: Control, field: Field): string {
  const v = el.validity;
  if (v.customError) return el.validationMessage;
  if (v.valueMissing) {
    if (field.kind === "files") return `Please choose a file for “${field.label}”.`;
    return field.kind === "select" ? `Please choose a ${field.label.toLowerCase()}.` : `Please enter your ${field.label.toLowerCase()}.`;
  }
  if (v.typeMismatch && field.kind === "email") return "Enter a valid email address, e.g. name@example.com.";
  if (v.patternMismatch && field.kind === "tel") return "Enter a valid 10-digit mobile number.";
  return el.validationMessage;
}

/** True when `file` matches an `accept` list such as "image/*" or ".pdf,.doc,.docx". */
function accepts(file: File, accept: string): boolean {
  const name = file.name.toLowerCase();
  return accept.split(",").some((raw) => {
    const a = raw.trim().toLowerCase();
    if (a.startsWith(".")) return name.endsWith(a);
    if (a.endsWith("/*")) return file.type.startsWith(a.slice(0, -1));
    return file.type === a;
  });
}

function fileError(files: FileList | null, field: Extract<Field, { kind: "files" }>): string {
  if (!files) return "";
  if (files.length > field.maxFiles) return field.maxFiles === 1 ? "Choose one file." : `Choose up to ${field.maxFiles} files.`;
  const kind = field.acceptLabel ?? (field.accept.startsWith("image/") ? "an image" : field.accept.startsWith("video/") ? "a video" : "an accepted file type");
  for (const f of Array.from(files)) {
    if (!accepts(f, field.accept)) return `“${f.name}” isn’t ${kind}.`;
    if (f.size > field.maxMB * MB) return `“${f.name}” is larger than ${field.maxMB} MB.`;
  }
  return "";
}

export default function LeadForm({
  id,
  name,
  fields,
  submitLabel = "Send",
  defaults = {},
  contact = { email: site.email, phone: { label: site.phone, href: site.phoneHref } },
}: {
  id: string;
  name: string;
  fields: Field[];
  submitLabel?: string;
  /** Initial values by field name (e.g. a pre-selected job role). */
  defaults?: Record<string, string>;
  /** Who to reach instead when online submission isn't available (defaults to the main office). */
  contact?: { email: string; phone: { label: string; href: string } };
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [attempted, setAttempted] = useState(false);
  const [fileInfo, setFileInfo] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ status: "idle" });

  const fid = (n: string) => `${id}-${n}`;
  const byName = new Map(fields.map((f) => [f.name, f]));

  const validate = (el: Control) => {
    const field = byName.get(el.name);
    if (!field) return "";
    if (field.kind === "files" && el instanceof HTMLInputElement) el.setCustomValidity(fileError(el.files, field));
    return el.checkValidity() ? "" : messageFor(el, field);
  };

  const onFieldChange = (e: React.FormEvent<HTMLFormElement>) => {
    const el = e.target as Control;
    const field = byName.get(el.name);
    if (field?.kind === "files" && el instanceof HTMLInputElement) {
      const n = el.files?.length ?? 0;
      const total = Array.from(el.files ?? []).reduce((s, f) => s + f.size, 0);
      setFileInfo((p) => ({ ...p, [el.name]: n ? `${n} file${n > 1 ? "s" : ""} selected (${(total / MB).toFixed(1)} MB)` : "" }));
      setErrors((p) => ({ ...p, [el.name]: validate(el) }));
    } else if (attempted && field) {
      setErrors((p) => ({ ...p, [el.name]: validate(el) }));
    }
    if (status.status !== "idle" && status.status !== "sending") setStatus({ status: "idle" });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setAttempted(true);
    const next: Record<string, string> = {};
    let first: Control | null = null;
    for (const el of Array.from(form.elements) as Control[]) {
      if (!byName.has(el.name) || next[el.name]) continue;
      const msg = validate(el);
      if (msg) {
        next[el.name] = msg;
        first ??= el;
      }
    }
    setErrors(next);
    if (first) {
      first.focus();
      return;
    }
    setStatus({ status: "sending" });
    try {
      const result = await submitForm(name, new FormData(form));
      setStatus(result);
      if (result.status === "sent") {
        form.reset();
        setFileInfo({});
      }
    } catch {
      setStatus({ status: "error", message: "Something went wrong. Please try again." });
    }
  };

  const err = (n: string) => errors[n];
  const described = (n: string) => (err(n) ? `${fid(n)}-err` : undefined);
  const errorText = (n: string) =>
    err(n) ? (
      <p id={`${fid(n)}-err`} className="lead-error">
        {err(n)}
      </p>
    ) : null;

  return (
    <form className="lead-form" name={name} noValidate onSubmit={onSubmit} onChange={onFieldChange} aria-label={name}>
      {fields.map((f) => {
        const cls = `lead-field${"half" in f && f.half ? " lead-half" : ""}`;
        switch (f.kind) {
          case "select":
            return (
              <div key={f.name} className={cls}>
                <label className="sr-only" htmlFor={fid(f.name)}>
                  {f.label}
                </label>
                <select id={fid(f.name)} name={f.name} required={f.required} defaultValue={defaults[f.name] ?? ""} aria-invalid={!!err(f.name)} aria-describedby={described(f.name)}>
                  <option value="">{f.label}</option>
                  {f.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                {errorText(f.name)}
              </div>
            );
          case "checkboxes":
            return (
              <fieldset key={f.name} className="lead-field lead-checks">
                <legend>{f.label}</legend>
                {f.options.map((o, i) => (
                  <label key={o.value} htmlFor={fid(`${f.name}-${i}`)}>
                    <input type="checkbox" id={fid(`${f.name}-${i}`)} name={f.name} value={o.value} /> {o.label}
                  </label>
                ))}
              </fieldset>
            );
          case "files":
            return (
              <div key={f.name} className="lead-field lead-files">
                <label htmlFor={fid(f.name)}>{f.label}</label>
                <input
                  type="file"
                  id={fid(f.name)}
                  name={f.name}
                  accept={f.accept}
                  multiple={f.maxFiles > 1}
                  required={f.required}
                  aria-invalid={!!err(f.name)}
                  aria-describedby={`${fid(f.name)}-hint${err(f.name) ? ` ${fid(f.name)}-err` : ""}`}
                />
                <p id={`${fid(f.name)}-hint`} className="lead-hint">
                  {fileInfo[f.name] || (f.maxFiles > 1 ? `Up to ${f.maxFiles} files, ${f.maxMB} MB each.` : `${f.acceptLabel ? `${f.acceptLabel[0].toUpperCase()}${f.acceptLabel.slice(1)}, up` : "Up"} to ${f.maxMB} MB.`)}
                </p>
                {errorText(f.name)}
              </div>
            );
          case "textarea":
            return (
              <div key={f.name} className="lead-field">
                <label className="sr-only" htmlFor={fid(f.name)}>
                  {f.label}
                </label>
                <textarea
                  id={fid(f.name)}
                  name={f.name}
                  rows={f.rows ?? 3}
                  placeholder={f.label}
                  required={f.required}
                  aria-invalid={!!err(f.name)}
                  aria-describedby={described(f.name)}
                />
                {errorText(f.name)}
              </div>
            );
          default:
            return (
              <div key={f.name} className={cls}>
                <label className="sr-only" htmlFor={fid(f.name)}>
                  {f.label}
                </label>
                <input
                  id={fid(f.name)}
                  name={f.name}
                  type={f.kind}
                  placeholder={f.label}
                  required={f.required}
                  autoComplete={f.autoComplete}
                  inputMode={f.kind === "tel" ? "tel" : undefined}
                  pattern={f.kind === "tel" ? "(\\+91 ?)?[6-9][0-9]{9}" : undefined}
                  aria-invalid={!!err(f.name)}
                  aria-describedby={described(f.name)}
                />
                {errorText(f.name)}
              </div>
            );
        }
      })}
      <div className="lead-field">
        <button type="submit" className="btn btn-gold lead-submit" disabled={status.status === "sending"}>
          {status.status === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>
      <div className="lead-status" role="status" aria-live="polite">
        {status.status === "sent" && <p className="lead-ok">Thank you — your details have been sent.</p>}
        {status.status === "not-configured" && (
          <p className="lead-warn">
            Online submission isn’t set up yet, so this form was <strong>not sent</strong>
            {fields.some((f) => f.kind === "files") ? " and no files were uploaded" : ""}. Your details are still filled in — please call{" "}
            <a href={contact.phone.href}>{contact.phone.label}</a> or email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        )}
        {status.status === "error" && <p className="lead-warn">{status.message}</p>}
      </div>
    </form>
  );
}
