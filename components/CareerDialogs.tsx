"use client";

import { useEffect, useRef, useState } from "react";
import { Close } from "./icons";
import LeadForm from "./LeadForm";
import { applyForms, disclaimer } from "@/lib/career";

type Apply = { mode: "job" | "general"; role?: string; n: number };

const SEEN_KEY = "career-disclaimer-seen";

/**
 * The career page's popups. "Apply Now" links (server-rendered `mailto:` links carrying
 * data-apply / data-role, so they still work without JavaScript) open the application form;
 * the fraud disclaimer opens once per session, 5 seconds after load, as on the source.
 */
export default function CareerDialogs() {
  const applyRef = useRef<HTMLDialogElement>(null);
  const noticeRef = useRef<HTMLDialogElement>(null);
  const [apply, setApply] = useState<Apply | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLElement>("[data-apply]");
      if (!link) return;
      e.preventDefault();
      noticeRef.current?.close();
      setApply((p) => ({ mode: link.dataset.apply === "job" ? "job" : "general", role: link.dataset.role, n: (p?.n ?? 0) + 1 }));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (apply && !applyRef.current?.open) applyRef.current?.showModal();
  }, [apply]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = window.setTimeout(() => {
      if (applyRef.current?.open) return; // never interrupt an application in progress
      noticeRef.current?.showModal();
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, disclaimer.delayMs);
    return () => window.clearTimeout(t);
  }, []);

  const form = apply?.mode === "job" ? applyForms.job : applyForms.general;
  const backdropClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) e.currentTarget.close();
  };

  return (
    <>
      <dialog ref={applyRef} className="promo cr-dialog" aria-labelledby="cr-apply-title" onClick={backdropClose}>
        <div className="promo-body cr-dialog-body">
          <button type="button" className="promo-close" aria-label="Close" onClick={() => applyRef.current?.close()}>
            <Close />
          </button>
          <p className="kicker">{applyForms.kicker}</p>
          <h2 id="cr-apply-title" className="cr-dialog-title">
            {applyForms.title}
          </h2>
          {apply && (
            <LeadForm
              key={apply.n}
              id={`apply-${apply.mode}`}
              name={form.name}
              fields={form.fields}
              defaults={apply.role ? { job_role: apply.role } : undefined}
              contact={applyForms.hr}
            />
          )}
          <p className="cr-alt">
            Alternatively, you can mail us at <a href={`mailto:${applyForms.hr.email}`}>{applyForms.hr.email}</a> or call us on{" "}
            <a href={applyForms.hr.phone.href}>{applyForms.hr.phone.label}</a>.
          </p>
        </div>
      </dialog>

      <dialog ref={noticeRef} className="promo cr-dialog cr-notice" aria-labelledby="cr-notice-title" onClick={backdropClose}>
        <div className="promo-body cr-dialog-body">
          <button type="button" className="promo-close" aria-label="Close" onClick={() => noticeRef.current?.close()}>
            <Close />
          </button>
          <h2 id="cr-notice-title" className="cr-dialog-title">
            {disclaimer.title}
          </h2>
          {disclaimer.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </dialog>
    </>
  );
}
