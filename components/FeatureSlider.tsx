"use client";

import Image from "next/image";
import { useState } from "react";
import type { Img } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "./icons";

type Feature = { title: string; text: string; image: Img };

export default function FeatureSlider({ items }: { items: Feature[] }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  const f = items[i];

  return (
    <div className="why-box">
      <div className="why-media">
        {/* Keyed so each slide fades in; only the visible slide's image is requested. */}
        <Image
          key={f.image.src}
          className="why-img"
          src={f.image.src}
          alt={f.image.alt || f.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 90vw, 620px"
        />
      </div>
      <div className="why-text">
        <div aria-live="polite" key={f.title} className="why-copy">
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
        <div className="why-nav">
          <button type="button" aria-label="Previous reason" onClick={() => go(-1)}>
            <ChevronLeft />
          </button>
          <button type="button" aria-label="Next reason" onClick={() => go(1)}>
            <ChevronRight />
          </button>
          <span className="why-count" aria-hidden="true">
            <b>{String(i + 1).padStart(2, "0")}</b> / {String(items.length).padStart(2, "0")}
          </span>
          <span className="why-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(i + 1) / items.length})` }} />
          </span>
        </div>
        {/* Full list stays in the HTML for search engines and screen readers. */}
        <ul className="sr-only">
          {items.map((x) => (
            <li key={x.title}>
              <strong>{x.title}</strong> {x.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
