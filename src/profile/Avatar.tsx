import type { Profile, ProfileTheme } from "./types";

const hairPaths: Record<Profile["avatar"]["hairStyle"], React.ReactNode> = {
  bob: (
    <path d="M31 50C29 28 40 20 51 20 63 20 72 29 70 50L70 60C65 58 66 45 63 36 54 40 43 38 38 33 35 42 36 52 31 60Z" />
  ),
  short: <path d="M33 42C32 27 42 20 51 20 61 20 69 28 67 42 61 34 47 31 33 42Z" />,
  long: (
    <path d="M30 52C27 28 41 19 51 19 63 19 73 29 70 52L73 78C64 76 66 50 63 37 55 40 43 37 38 33 35 46 37 62 29 78Z" />
  ),
  bun: (
    <>
      <circle cx="51" cy="17" r="8" />
      <path d="M33 42C32 27 42 21 51 21 61 21 69 28 67 42 61 33 46 31 33 42Z" />
    </>
  ),
};

/** Stylised illustrated portrait — a tasteful stand-in for an uploaded profile photo. */
export function Avatar({ profile, theme, size = 84 }: { profile: Profile; theme: ProfileTheme; size?: number }) {
  const a = profile.avatar;
  const radius = theme.avatarShape === "circle" ? "999px" : theme.avatarShape === "squircle" ? "28%" : "0px";
  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        boxShadow: `0 0 0 3px var(--pf-ring)`,
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-label={`Illustrated avatar of ${profile.name}`}>
        <rect width="100" height="100" fill={a.bg} />
        <path d="M14 104C17 80 33 71 50 71S83 80 86 104Z" fill={a.shirt} />
        <rect x="43" y="56" width="14" height="17" rx="6" fill={a.skin} />
        <ellipse cx="50" cy="44" rx="16" ry="18" fill={a.skin} />
        <g fill={a.hair}>{hairPaths[a.hairStyle]}</g>
        <circle cx="44" cy="47" r="1.4" fill="#2a2220" opacity=".75" />
        <circle cx="56" cy="47" r="1.4" fill="#2a2220" opacity=".75" />
        <path d="M46.5 54.5c2 1.6 5 1.6 7 0" stroke="#2a2220" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity=".6" />
        <circle cx="41" cy="52" r="2.6" fill="#ff8fa3" opacity=".25" />
        <circle cx="59" cy="52" r="2.6" fill="#ff8fa3" opacity=".25" />
      </svg>
    </div>
  );
}
