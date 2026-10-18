"use client";

import Image from "next/image";
import { useRef } from "react";
import { Close } from "./icons";
import LeadForm from "./LeadForm";
import { chatForm, tiles } from "@/lib/rental-resale";

/** The four image tiles; on the source page each one opens the same "Let's have a chat" popup. */
export default function ResaleTiles() {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  return (
    <>
      <ul className="rr-tiles">
        {tiles.map((t) => (
          <li key={t.label}>
            <button type="button" className="rr-tile" onClick={open} aria-haspopup="dialog">
              <span className="rr-tile-img">
                <Image {...t.image} alt={t.image.alt} sizes="(max-width: 767px) 50vw, 300px" />
              </span>
              <span className="rr-tile-label">{t.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        className="promo rr-chat"
        aria-labelledby="rr-chat-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="promo-body rr-chat-body">
          <button type="button" className="promo-close" aria-label="Close" onClick={close}>
            <Close />
          </button>
          <h2 id="rr-chat-title" className="rr-chat-title">
            {chatForm.heading}
          </h2>
          <p className="rr-chat-sub">{chatForm.subheading}</p>
          <LeadForm id="chat" name={chatForm.name} fields={chatForm.fields} />
        </div>
      </dialog>
    </>
  );
}
