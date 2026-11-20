/** Minimal five-petal blossom mark + wordmark. */
export function BlossomMark({
  size = 22,
  className = "",
  center = true,
}: {
  size?: number;
  className?: string;
  /** Rose centre dot — off for faint decorative watermarks */
  center?: boolean;
}) {
  return (
    <svg width={size} height={size} viewBox="-24 -24 48 48" className={className} aria-hidden>
      {[0, 72, 144, 216, 288].map((a) => (
        <path
          key={a}
          d="M0 -3.5C-6.5 -9.5 -7.5 -17.5 -3.2 -21.5L0 -18.4 3.2 -21.5C7.5 -17.5 6.5 -9.5 0 -3.5Z"
          fill="currentColor"
          transform={`rotate(${a})`}
        />
      ))}
      {center && <circle r="3.4" fill="var(--rose)" />}
    </svg>
  );
}

/**
 * Wordmark: DM Sans 700 with open tracking.
 * `kanji` adds a small 桜 (sakura) in Noto Sans JP as a quiet brand accent.
 */
export function Logo({ tone = "dark", kanji = false }: { tone?: "dark" | "light"; kanji?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 ${tone === "dark" ? "text-ink" : "text-ivory"}`}>
      <BlossomMark className={tone === "dark" ? "text-[#f0b3c2]" : "text-blossom"} />
      <span className="font-sans text-[15.5px] font-bold leading-none tracking-[0.2em]">SAKURA</span>
      {kanji && (
        <span lang="ja" className="ml-0.5 text-[12px] font-medium leading-none text-rose !tracking-normal">
          桜
        </span>
      )}
    </span>
  );
}
