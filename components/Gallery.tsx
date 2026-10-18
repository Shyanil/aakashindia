"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import type { GalleryPanel, GalleryTab, Photo, Video } from "@/lib/about";
import { ChevronLeft, ChevronRight, Play } from "./icons";

/** Accessible tab row: arrow keys move between tabs (WAI-ARIA tabs pattern). */
function Tabs({
  labels,
  active,
  onChange,
  idBase,
  small,
}: {
  labels: string[];
  active: number;
  onChange: (i: number) => void;
  idBase: string;
  small?: boolean;
}) {
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (active + d + labels.length) % labels.length;
    onChange(next);
    document.getElementById(`${idBase}-tab-${next}`)?.focus();
  };
  return (
    <div className={`gal-tabs${small ? " gal-tabs--sub" : ""}`} role="tablist" onKeyDown={onKey}>
      {labels.map((l, i) => (
        <button
          key={l + i}
          id={`${idBase}-tab-${i}`}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-controls={`${idBase}-panel-${i}`}
          tabIndex={i === active ? 0 : -1}
          onClick={() => onChange(i)}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function PhotoGrid({ photos, onOpen }: { photos: Photo[]; onOpen: (i: number) => void }) {
  return (
    <ul className="gal-grid">
      {photos.map((p, i) => (
        <li key={p.src}>
          <button type="button" className="gal-thumb" onClick={() => onOpen(i)} aria-label={`Open ${p.alt}`}>
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 390px" />
          </button>
        </li>
      ))}
    </ul>
  );
}

function Playlist({ videos }: { videos: Video[] }) {
  const [i, setI] = useState(0);
  const v = videos[i];
  return (
    <div className="playlist">
      <div className="playlist-player">
        {/* preload="none": nothing is downloaded until the visitor presses play */}
        <video key={v.src} controls preload="none" poster={v.poster.src} playsInline>
          <source src={v.src} type="video/mp4" />
        </video>
      </div>
      <div className="playlist-side">
        <div className="playlist-head">
          <h3>Playlist</h3>
          <span>{videos.length} Videos</span>
        </div>
        <ul>
          {videos.map((x, k) => (
            <li key={x.src}>
              <button type="button" aria-current={k === i} onClick={() => setI(k)}>
                <span className="playlist-thumb">
                  <Image src={x.poster.src} alt="" fill sizes="96px" />
                  <Play width={16} height={16} />
                </span>
                <span className="playlist-title">{x.title}</span>
                <span className="playlist-dur">{x.duration}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Lightbox({ photos, index, onClose, onMove }: { photos: Photo[]; index: number; onClose: () => void; onMove: (d: number) => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);
  const p = photos[index];
  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={p.alt}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") onMove(1);
        if (e.key === "ArrowLeft") onMove(-1);
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
    >
      <div className="lightbox-stage">
        <Image key={p.src} src={p.src} alt={p.alt} fill sizes="100vw" quality={75} />
      </div>
      <p className="lightbox-count" aria-live="polite">
        {index + 1} / {photos.length}
      </p>
      <button type="button" className="lightbox-close" aria-label="Close" onClick={() => ref.current?.close()}>
        ×
      </button>
      <button type="button" className="lightbox-nav lightbox-prev" aria-label="Previous photo" onClick={() => onMove(-1)}>
        <ChevronLeft width={28} height={28} />
      </button>
      <button type="button" className="lightbox-nav lightbox-next" aria-label="Next photo" onClick={() => onMove(1)}>
        <ChevronRight width={28} height={28} />
      </button>
    </dialog>
  );
}

function Album({ panels, idBase }: { panels: GalleryPanel[]; idBase: string }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const panel = panels[active];
  const photos = panel.photos ?? [];
  const move = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + photos.length) % photos.length)), [photos.length]);

  return (
    <>
      {panels.length > 1 && <Tabs labels={panels.map((p) => p.label)} active={active} onChange={setActive} idBase={idBase} small />}
      {panels.map((p, i) => (
        <div
          key={p.label}
          id={`${idBase}-panel-${i}`}
          role={panels.length > 1 ? "tabpanel" : undefined}
          aria-labelledby={panels.length > 1 ? `${idBase}-tab-${i}` : undefined}
          hidden={i !== active}
        >
          {p.photos && <PhotoGrid photos={p.photos} onOpen={setOpen} />}
          {p.videos && i === active && <Playlist videos={p.videos} />}
        </div>
      ))}
      {open !== null && photos.length > 0 && <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onMove={move} />}
    </>
  );
}

export default function Gallery({ tabs }: { tabs: GalleryTab[] }) {
  const [active, setActive] = useState(0);
  const id = useId().replace(/:/g, "");
  return (
    <div className="gallery">
      <Tabs labels={tabs.map((t) => t.label)} active={active} onChange={setActive} idBase={`g${id}`} />
      {tabs.map((t, i) => (
        // Inactive albums stay in the HTML but hidden; their lazy images are not fetched.
        <div key={t.label} id={`g${id}-panel-${i}`} role="tabpanel" aria-labelledby={`g${id}-tab-${i}`} hidden={i !== active}>
          <Album panels={t.panels} idBase={`g${id}-${i}`} />
        </div>
      ))}
    </div>
  );
}
