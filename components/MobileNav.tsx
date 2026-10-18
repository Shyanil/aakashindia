"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/lib/content";

export default function MobileNav({
  items,
  current,
  phone,
  phoneHref,
}: {
  items: NavItem[];
  current: string;
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);
  const navId = useId(); // unique even while Next keeps a previous page mounted (hidden)
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    document.documentElement.classList.add("nav-open");
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls={navId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="mobile-nav-backdrop" data-open={open} onClick={() => setOpen(false)} aria-hidden="true" />
      <div
        id={navId}
        ref={panelRef}
        className="mobile-nav"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
      >
        <button type="button" className="mobile-nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          ×
        </button>
        <ul>
          {items.map((item) => (
            <li key={item.label}>
              <Link href={item.href} aria-current={item.href === current ? "page" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children && (
                <ul>
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <Link href={c.href}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link className="mobile-nav-phone" href={phoneHref}>
          Call {phone}
        </Link>
      </div>
    </>
  );
}
