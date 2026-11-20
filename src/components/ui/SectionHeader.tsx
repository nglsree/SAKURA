import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  eyebrow,
  jp,
  title,
  lead,
  align = "left",
  tone = "dark",
}: {
  index?: string;
  eyebrow: string;
  /** Optional Japanese label shown beside the eyebrow (Noto Sans JP) */
  jp?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const center = align === "center";
  const light = tone === "light";
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow flex items-center gap-3 ${center ? "justify-center" : ""} ${light ? "!text-white/55" : ""}`}>
        {index && <span className={light ? "text-blossom" : "text-rose"}>{index}</span>}
        <span className={`h-px w-6 ${light ? "bg-white/25" : "bg-line-strong"}`} aria-hidden />
        {eyebrow}
        {jp && (
          <span lang="ja" className={`text-[11px] font-medium normal-case ${light ? "text-blossom/80" : "text-rose/80"}`}>
            {jp}
          </span>
        )}
      </p>
      {/* Editorial heading — Noto Sans JP */}
      <h2
        className={`mt-5 font-display text-[34px] font-medium leading-[1.12] tracking-[-0.035em] sm:text-[44px] lg:text-[52px] ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-[16.5px] leading-relaxed sm:text-[17.5px] ${light ? "text-white/65" : "text-ink-soft"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
