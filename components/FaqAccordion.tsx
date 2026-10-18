"use client";

import { useState } from "react";
import type { Block, Faq, Segment } from "@/lib/faq";

function Inline({ segments }: { segments: Segment[] }) {
  return segments.map((s, i) => (typeof s === "string" ? <span key={i}>{i ? " " : ""}{s}</span> : <strong key={i}>{i ? " " : ""}{s.strong}</strong>));
}

function Answer({ blocks }: { blocks: Block[] }) {
  return blocks.map((b, i) =>
    "p" in b ? (
      <p key={i}>
        <Inline segments={b.p} />
      </p>
    ) : (
      <ul key={i}>
        {b.ul.map((li, j) => (
          <li key={j}>
            <Inline segments={li} />
          </li>
        ))}
      </ul>
    ),
  );
}

/**
 * Two-column FAQ accordion. Items toggle independently (as on the source), and every answer is
 * rendered into the server HTML; closed panels just carry the `hidden` attribute.
 */
export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(() => new Set(items.flatMap((f, i) => (f.open ? [i] : []))));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="fq-grid">
      {items.map((f, i) => {
        const isOpen = open.has(i);
        const n = String(i + 1).padStart(2, "0");
        return (
          <div key={f.q} className={`fq-item${isOpen ? " is-open" : ""}`}>
            <h3 className="fq-q-wrap">
              <button type="button" id={`fq-q-${n}`} className="fq-q" aria-expanded={isOpen} aria-controls={`fq-a-${n}`} onClick={() => toggle(i)}>
                <span className="fq-num" aria-hidden="true">
                  {n}
                </span>
                <span className="fq-q-text">{f.q}</span>
                <span className="fq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={`fq-a-${n}`} className="fq-a" role="region" aria-labelledby={`fq-q-${n}`} hidden={!isOpen}>
              <Answer blocks={f.a} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
