"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/content";
import { site } from "@/lib/content";
import { ArrowRight, ChevronLeft, ChevronRight, socialIcon } from "./icons";

const AUTOPLAY_MS = 7000;
const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function HeroSlider({ slides, initial = 0 }: { slides: HeroSlide[]; initial?: number }) {
  const [active, setActive] = useState(initial);
  // Only the initial slide's image is in the server HTML. Others mount once
  // they are (about to be) shown, so the first load fetches a single hero image.
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([initial]));
  const [paused, setPaused] = useState(false);
  const [changed, setChanged] = useState(false);
  const n = slides.length;

  const go = useCallback(
    (i: number) => {
      const next = (i + n) % n;
      setMounted((m) => (m.has(next) ? m : new Set(m).add(next)));
      setActive(next);
      setChanged(true);
    },
    [n],
  );

  // Warm the next slide after the page has settled.
  useEffect(() => {
    const warm = () => setMounted((m) => new Set(m).add((initial + 1) % n));
    const t = window.setTimeout(warm, 3500);
    return () => window.clearTimeout(t);
  }, [initial, n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => {
      setMounted((m) => new Set(m).add((active + 2) % n));
      go(active + 1);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [active, paused, go, n]);

  return (
    <section
      className="hero"
      data-animate={changed}
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={s.kicker}
            className="hero-slide"
            data-active={isActive}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${n}`}
            aria-hidden={!isActive}
            inert={!isActive}
          >
            {mounted.has(i) && (
              <Image
                className="hero-img"
                src={s.image.src}
                alt={s.image.alt}
                fill
                sizes="100vw"
                quality={75}
                preload={i === initial}
                loading={i === initial ? undefined : "lazy"}
              />
            )}
            <div className="hero-content container">
              <p className="hero-kicker">{s.kicker}</p>
              <h2 className="hero-title">
                {s.lines[0]}
                <br />
                {s.lines[1]}
              </h2>
              <a className="btn btn-gold hero-btn" href={s.href}>
                View Project <ArrowRight />
              </a>
            </div>
          </div>
        );
      })}

      <div className="hero-social" aria-label="Social media">
        <span className="hero-social-line" aria-hidden="true" />
        {site.social.map((s) => {
          const Icon = socialIcon[s.icon];
          return (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Icon />
            </a>
          );
        })}
      </div>

      <div className="hero-controls">
        <ol className="hero-dots">
          {slides.map((s, i) => (
            <li key={s.kicker}>
              <button
                type="button"
                aria-label={`${pad(i)} – ${s.kicker}`}
                aria-current={i === active}
                onClick={() => go(i)}
              >
                {pad(i)}
              </button>
            </li>
          ))}
        </ol>
        <div className="hero-arrows">
          <button type="button" aria-label="Previous slide" onClick={() => go(active - 1)}>
            <ChevronLeft width={22} height={22} />
          </button>
          <button type="button" aria-label="Next slide" onClick={() => go(active + 1)}>
            <ChevronRight width={22} height={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
