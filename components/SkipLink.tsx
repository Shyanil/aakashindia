"use client";

/**
 * "Skip to content". Every page renders <main id="top">, and Next.js keeps recently visited pages
 * in the DOM (hidden), so a plain #top link could target a hidden page. This focuses the visible
 * <main> instead; without JavaScript the #top fallback is correct (only one page is loaded).
 */
export default function SkipLink() {
  return (
    <a
      className="skip-link"
      href="#top"
      onClick={(e) => {
        const main = [...document.querySelectorAll<HTMLElement>("main")].find((m) => m.offsetParent !== null || m.getClientRects().length > 0);
        if (!main) return;
        e.preventDefault();
        main.tabIndex = -1;
        main.focus();
        main.scrollIntoView();
      }}
    >
      Skip to content
    </a>
  );
}
