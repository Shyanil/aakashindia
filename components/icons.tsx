import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { "aria-hidden": true, focusable: false } as const;

export const ArrowRight = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <path d="M3 12h17M14 6l6 6-6 6" />
  </svg>
);
export const ChevronLeft = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);
export const ChevronDown = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export const ChevronUp = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M6 15l6-6 6 6" />
  </svg>
);
export const Play = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
    <path d="M8 5.5v13l10.5-6.5z" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3" {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    <path d="M15 3a6 6 0 016 6M15 6.5a2.5 2.5 0 012.5 2.5" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
export const Building = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3" {...p}>
    <path d="M3 21h18M5 21V5l7-2v18M12 7h7v14M8 8h1M8 12h1M8 16h1M15 11h1M15 15h1" />
  </svg>
);
export const CircleDot = (p: P) => (
  <svg {...base} viewBox="0 0 512 512" width="14" height="14" fill="currentColor" {...p}>
    <path d="M256 56a200 200 0 110 400 200 200 0 010-400m0-48a248 248 0 100 496 248 248 0 000-496zm0 168a80 80 0 100 160 80 80 0 000-160z" />
  </svg>
);
export const Quote = (p: P) => (
  <svg {...base} viewBox="0 0 80 56" width="74" height="52" fill="currentColor" {...p}>
    <path d="M18 56C8 56 0 48 0 38 0 22 12 6 30 0l2 4C22 10 18 18 18 22c10 0 17 7 17 17s-8 17-17 17zm40 0c-10 0-18-8-18-18 0-16 12-32 30-38l2 4c-10 6-14 14-14 18 10 0 17 7 17 17s-8 17-17 17z" />
  </svg>
);
export const Facebook = (p: P) => (
  <svg {...base} viewBox="0 0 320 512" width="16" height="16" fill="currentColor" {...p}>
    <path d="M279 288l14-93h-89v-60c0-25 12-50 52-50h40V6S260 0 225 0c-73 0-121 44-121 125v70H23v93h81v224h100V288z" />
  </svg>
);
export const Instagram = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
export const Youtube = (p: P) => (
  <svg {...base} viewBox="0 0 576 512" width="18" height="18" fill="currentColor" {...p}>
    <path d="M550 124c-6-24-25-42-49-49C458 64 288 64 288 64S118 64 75 75c-24 7-43 25-49 49C15 167 15 256 15 256s0 89 11 132c6 24 25 41 49 48 43 12 213 12 213 12s170 0 213-12c24-7 43-24 49-48 11-43 11-132 11-132s0-89-11-132zM232 338V174l142 82z" />
  </svg>
);
export const WhatsApp = (p: P) => (
  <svg {...base} viewBox="0 0 32 32" width="34" height="34" fill="currentColor" {...p}>
    <path d="M16 3a13 13 0 00-11.2 19.6L3 29l6.6-1.7A13 13 0 1016 3zm0 23.6c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1116 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.7 8.7 0 01-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 00-.9.4 3.6 3.6 0 00-1.1 2.7 6.3 6.3 0 001.3 3.3c.2.2 2.2 3.4 5.4 4.8 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5-.3-.2-.6-.4z" />
  </svg>
);

export const Clock = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const socialIcon = { facebook: Facebook, instagram: Instagram, youtube: Youtube } as const;
export const Close = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const Search = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
);
export const MapPin = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
