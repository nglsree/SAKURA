/**
 * Site-wide configuration.
 * Values marked PLACEHOLDER must be replaced once the real repository / domain / inbox exist.
 * They can be overridden at build time via VITE_* env vars (see .env.example).
 */
const env = import.meta.env;

export const GITHUB_URL: string = env.VITE_GITHUB_URL || "https://github.com/your-org/sakura"; // PLACEHOLDER
export const IS_GITHUB_PLACEHOLDER = !env.VITE_GITHUB_URL;

export const CONTACT_EMAIL: string = env.VITE_CONTACT_EMAIL || "hello@sakura.example"; // PLACEHOLDER

/** Illustrative profile domain used in mockups. `.example` is reserved and never resolves. */
export const PROFILE_DOMAIN = "sakura.example";

export const LINKS = {
  repo: GITHUB_URL,
  source: `${GITHUB_URL}`,
  contribute: `${GITHUB_URL}/blob/main/CONTRIBUTING.md`,
  issues: `${GITHUB_URL}/issues`,
};

export const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "Explore", href: "#explore" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "#community" },
] as const;
