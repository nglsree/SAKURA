import type { CSSProperties } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandIcon, brandLabels } from "../components/ui/BrandIcons";
import { PROFILE_DOMAIN } from "../config";
import { Avatar } from "./Avatar";
import { Wallpaper } from "./Wallpaper";
import type { Profile, ProfileTheme } from "./types";

interface Props {
  profile: Profile;
  theme: ProfileTheme;
  /** Compact = creator showcase cards (fewer elements, tighter spacing) */
  compact?: boolean;
  /** Extra top padding for the phone status bar */
  topInset?: number;
}

/**
 * Renders a Sakura profile page purely from theme data (CSS variables).
 * Purely visual: it's an example, so links are not navigable.
 */
export function ProfileCard({ profile, theme, compact = false, topInset = 0 }: Props) {
  const left = theme.align === "left";
  const links = compact ? profile.links.slice(0, 3) : profile.links;

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ ...(theme.vars as CSSProperties), background: "var(--pf-bg)", color: "var(--pf-fg)", fontFamily: "var(--pf-font-body)" }}
    >
      <Wallpaper kind={theme.wallpaper} />

      <div
        className={`no-scrollbar relative z-10 flex h-full flex-col overflow-y-auto ${compact ? "px-4 pb-5" : "px-5 pb-7"} ${
          left ? "items-start text-left" : "items-center text-center"
        }`}
        style={{ paddingTop: topInset + (compact ? 22 : 30) }}
      >
        <Avatar profile={profile} theme={theme} size={compact ? 62 : 84} />

        <h3
          className={compact ? "mt-3" : "mt-4"}
          style={{
            fontFamily: "var(--pf-font-display)",
            fontSize: compact ? "calc(var(--pf-name-size) * 0.78)" : "var(--pf-name-size)",
            fontWeight: "var(--pf-name-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--pf-name-tracking)",
            textTransform: "var(--pf-name-transform)" as CSSProperties["textTransform"],
            fontStyle: "var(--pf-name-style)",
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </h3>

        <div className={`mt-2 flex flex-wrap items-center gap-1.5 text-[11px] ${left ? "" : "justify-center"}`}>
          <span className="rounded-full px-2 py-0.5" style={{ background: "var(--pf-chip-bg)", color: chipColor(theme) }}>
            {profile.role}
          </span>
          {profile.location && !compact && (
            <span className="inline-flex items-center gap-0.5" style={{ color: "var(--pf-muted)" }}>
              <MapPin size={11} aria-hidden /> {profile.location}
            </span>
          )}
        </div>

        <p
          className={`mt-2.5 leading-snug ${compact ? "text-[11.5px]" : "text-[12.5px]"} ${left ? "" : "max-w-[30ch]"}`}
          style={{ color: "var(--pf-muted)" }}
        >
          {profile.bio}
        </p>

        {/* Social icons */}
        <ul className={`mt-3.5 flex gap-2 ${left ? "" : "justify-center"}`} aria-label="Social links">
          {profile.socials.map((s) => (
            <li
              key={s}
              title={brandLabels[s]}
              className="grid place-items-center"
              style={{
                width: compact ? 28 : 32,
                height: compact ? 28 : 32,
                background: "var(--pf-icon-bg)",
                color: "var(--pf-icon-fg)",
                border: "var(--pf-icon-border)",
                borderRadius: "var(--pf-icon-radius)",
              }}
            >
              <BrandIcon name={s} width={compact ? 14 : 16} height={compact ? 14 : 16} />
              <span className="sr-only">{brandLabels[s]}</span>
            </li>
          ))}
        </ul>

        {/* Link cards */}
        <ul className={`flex w-full flex-col ${compact ? "mt-4 gap-2" : "mt-5 gap-2.5"}`}>
          {links.map((l, i) => {
            const featured = i === 0;
            const Icon = l.icon;
            return (
              <li
                key={l.label}
                className={`group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5 ${
                  compact ? "px-3 py-2.5" : "px-3.5 py-3"
                }`}
                style={{
                  background: featured ? "var(--pf-accent)" : "var(--pf-card)",
                  color: featured ? "var(--pf-accent-fg)" : "var(--pf-card-fg)",
                  border: featured ? "var(--pf-card-border)" : "var(--pf-card-border)",
                  borderColor: featured && theme.id !== "brutalist" ? "transparent" : undefined,
                  borderRadius: "var(--pf-radius)",
                  boxShadow: "var(--pf-shadow)",
                  backdropFilter: featured ? undefined : "var(--pf-blur)",
                  WebkitBackdropFilter: featured ? undefined : "var(--pf-blur)",
                }}
              >
                {Icon && <Icon size={compact ? 14 : 16} strokeWidth={1.8} aria-hidden className="shrink-0 opacity-80" />}
                <span className="min-w-0 flex-1 text-left">
                  <span className={`block truncate font-medium ${compact ? "text-[11.5px]" : "text-[13px]"}`}>{l.label}</span>
                  {l.sub && !compact && (
                    <span className="block truncate text-[11px] opacity-70">{l.sub}</span>
                  )}
                </span>
                <ArrowUpRight size={14} aria-hidden className="shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
              </li>
            );
          })}
        </ul>

        {/* Featured work tiles */}
        {!compact && profile.projectsLabel && (
          <div className="mt-5 w-full">
            <p className={`mb-2 text-[10px] uppercase tracking-[0.16em] ${left ? "" : "text-center"}`} style={{ color: "var(--pf-muted)" }}>
              {profile.projectsLabel}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/5]"
                  style={{
                    background: `var(--pf-tile-${n})`,
                    borderRadius: "calc(var(--pf-radius) * 0.6)",
                    border: theme.id === "brutalist" ? "2px solid #000" : undefined,
                    maxHeight: 96,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <p className="mt-auto pt-5 text-[10px] tracking-wide" style={{ color: "var(--pf-muted)" }}>
          {PROFILE_DOMAIN}/{profile.handle}
        </p>
      </div>
    </div>
  );
}

function chipColor(theme: ProfileTheme) {
  // Brutalist uses a black chip, so flip the text.
  return theme.id === "brutalist" ? "#ffe600" : "var(--pf-fg)";
}
