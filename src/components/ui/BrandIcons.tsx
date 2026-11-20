import type { SVGProps } from "react";

/**
 * Lightweight, hand-drawn social glyphs (Lucide v1 no longer ships brand marks).
 * Simplified on purpose — they inherit `currentColor` so every theme can restyle them.
 */
export type BrandKey =
  | "instagram"
  | "x"
  | "dribbble"
  | "behance"
  | "github"
  | "youtube"
  | "linkedin"
  | "tiktok"
  | "mail"
  | "web";

type P = SVGProps<SVGSVGElement>;
const base = (p: P): P => ({
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...p,
});

const glyphs: Record<BrandKey, (p: P) => React.ReactElement> = {
  instagram: (p) => (
    <svg {...base(p)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  x: (p) => (
    <svg {...base(p)}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  ),
  dribbble: (p) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M6 5.6c3.4 3.8 6 8.6 7.4 14.6M3.2 10.4c5.4.5 10.3-.8 14.6-4.4M8.6 20.2c1.8-4 5.8-6.4 12.2-5.4" />
    </svg>
  ),
  behance: (p) => (
    <svg {...base(p)}>
      <path d="M3 6.5h4.8a2.6 2.6 0 0 1 0 5.2H3zM3 11.7h5.4a2.9 2.9 0 0 1 0 5.8H3z" />
      <path d="M14.5 7.5h5M14 13.8h7a3.5 3.5 0 1 0-1.1 2.6" />
    </svg>
  ),
  github: (p) => (
    <svg {...base({ ...p, viewBox: "0 0 16 16", stroke: "none", fill: "currentColor" })}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  ),
  youtube: (p) => (
    <svg {...base(p)}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.3l5 2.7-5 2.7z" fill="currentColor" />
    </svg>
  ),
  linkedin: (p) => (
    <svg {...base(p)}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M8 10.5V17M12 17v-6.5M12 13.4a2.6 2.6 0 0 1 5 .6V17" />
      <circle cx="8" cy="7.4" r="0.6" fill="currentColor" />
    </svg>
  ),
  tiktok: (p) => (
    <svg {...base(p)}>
      <path d="M14 3.5v11a3.6 3.6 0 1 1-3.6-3.6" />
      <path d="M14 3.5c.5 2.6 2.4 4.5 5 4.9" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
  web: (p) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9S14.6 18.4 12 21c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" />
    </svg>
  ),
};

export const brandLabels: Record<BrandKey, string> = {
  instagram: "Instagram",
  x: "X",
  dribbble: "Dribbble",
  behance: "Behance",
  github: "GitHub",
  youtube: "YouTube",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
  mail: "Email",
  web: "Website",
};

export function BrandIcon({ name, ...props }: { name: BrandKey } & P) {
  return glyphs[name](props);
}
