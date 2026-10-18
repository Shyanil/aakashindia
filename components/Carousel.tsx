"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

type Props = {
  label: string;
  /** Rendered beside the arrows (section heading). */
  header?: ReactNode;
  /** Extra control shown next to the arrows, e.g. a "view all" link. */
  action?: ReactNode;
  /** "dots" shows page dots under the track, "progress" a scroll progress bar. */
  indicator?: "dots" | "progress";
  arrows?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Native scroll-snap carousel. Slides are server-rendered children; this
 * component only adds arrow buttons and an indicator, so content is fully
 * usable (swipe / scroll / keyboard) even before hydration.
 */
export default function Carousel({ label, header, action, indicator, arrows = true, className, children }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ page: 0, pages: 1, start: 0, size: 0 });

  const step = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step() || 1;
    const perView = Math.max(1, Math.round(track.clientWidth / s));
    const pages = Math.max(1, Math.ceil(track.children.length / perView));
    const max = track.scrollWidth - track.clientWidth;
    const ratio = max > 0 ? track.scrollLeft / max : 0;
    setState({
      page: Math.round(ratio * (pages - 1)),
      pages,
      size: track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1,
      start: track.scrollWidth > 0 ? track.scrollLeft / track.scrollWidth : 0,
    });
  }, [step]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(track);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [measure]);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    // Wrap around at the ends, like the original looping sliders.
    if (dir === 1 && track.scrollLeft >= max - 2) return track.scrollTo({ left: 0 });
    if (dir === -1 && track.scrollLeft <= 2) return track.scrollTo({ left: max });
    track.scrollBy({ left: dir * step() });
  };

  const goPage = (p: number) => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: state.pages > 1 ? (p / (state.pages - 1)) * max : 0 });
  };

  const arrowButtons = (where: "head" | "foot") => (
    <div className={`carousel-arrows carousel-arrows--${where}`}>
      <button type="button" aria-label="Previous" onClick={() => scrollBy(-1)}>
        <ChevronLeft />
      </button>
      <button type="button" aria-label="Next" onClick={() => scrollBy(1)}>
        <ChevronRight />
      </button>
    </div>
  );

  return (
    <div className={`carousel ${className ?? ""}`} role="region" aria-roledescription="carousel" aria-label={label}>
      {(header || action || arrows) && (
        <div className="carousel-head container">
          {header}
          {(action || arrows) && (
            <div className="carousel-head-side">
              {action}
              {/* Arrows sit beside the heading on wide screens and under the track on phones (CSS). */}
              {arrows && arrowButtons("head")}
            </div>
          )}
        </div>
      )}

      <div className="carousel-viewport">
        <ul ref={trackRef} className="carousel-track" tabIndex={0}>
          {children}
        </ul>
      </div>

      {indicator === "dots" && (
        <div className="carousel-foot container">
          <div className="carousel-dots">
            {state.pages > 1 &&
              Array.from({ length: state.pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={i === state.page}
                  onClick={() => goPage(i)}
                />
              ))}
          </div>
          {arrows && arrowButtons("foot")}
        </div>
      )}
      {indicator === "progress" && (
        <div className="carousel-progress container" aria-hidden="true">
          <div className="carousel-progress-track">
            <span
              style={{
                width: `${state.size * 100}%`,
                transform: `translateX(${(state.start / Math.max(state.size, 0.0001)) * 100}%)`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
