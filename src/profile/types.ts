import type { LucideIcon } from "lucide-react";
import type { BrandKey } from "../components/ui/BrandIcons";

export type WallpaperKind =
  | "petals"
  | "plain"
  | "grid-glow"
  | "studio"
  | "blobs"
  | "brutal"
  | "film"
  | "iridescent"
  | "terminal"
  | "energy"
  | "swiss";

export type HairStyle = "bob" | "short" | "long" | "bun";

/**
 * A profile theme is pure data: CSS custom properties + a few layout switches.
 * This is the same idea the real product will use — themes are just JSON.
 */
export interface ProfileTheme {
  id: string;
  name: string;
  description: string;
  wallpaper: WallpaperKind;
  align: "center" | "left";
  avatarShape: "circle" | "squircle" | "square";
  /** Short human-readable recipe shown in the customization demo */
  recipe: { font: string; wallpaper: string; buttons: string; icons: string };
  /** [background, accent, foreground] — used for the theme picker chip */
  swatch: [string, string, string];
  vars: Record<`--pf-${string}`, string>;
}

export interface ProfileLink {
  label: string;
  sub?: string;
  icon?: LucideIcon;
  brand?: BrandKey;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  location?: string;
  bio: string;
  avatar: { bg: string; skin: string; hair: string; shirt: string; hairStyle: HairStyle };
  socials: BrandKey[];
  links: ProfileLink[];
  projectsLabel?: string;
}
