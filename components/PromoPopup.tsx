"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, Close } from "./icons";
import type { Img } from "@/lib/content";

export default function PromoPopup({ href, image }: { href: string; image: Img }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      className="promo"
      aria-label={image.alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) close(); // backdrop click
      }}
    >
      <div className="promo-body">
        <button type="button" className="promo-close" aria-label="Close" onClick={close}>
          <Close />
        </button>
        <a href={href} className="promo-image">
          <Image {...image} alt={image.alt} sizes="(max-width: 767px) 92vw, 800px" loading="eager" />
        </a>
        <a href={href} className="btn btn-gold promo-cta">
          View now <ArrowRight />
        </a>
      </div>
    </dialog>
  );
}
