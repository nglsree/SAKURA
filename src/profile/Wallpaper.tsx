import type { WallpaperKind } from "./types";

/**
 * All wallpapers are generated with CSS gradients and inline SVG —
 * no image requests, crisp at any density, and each theme can recolor them.
 */

export const PETAL_PATH =
  "M10 0C4.5 3.6 0.6 10.6 3.4 16.6 5 20 8.2 21.4 10 19.2 11.8 21.4 15 20 16.6 16.6 19.4 10.6 15.5 3.6 10 0Z";

const scattered = [
  { x: 12, y: 18, s: 0.7, r: 20, o: 0.55 },
  { x: 78, y: 9, s: 0.9, r: -35, o: 0.6 },
  { x: 86, y: 36, s: 0.5, r: 70, o: 0.45 },
  { x: 8, y: 52, s: 0.55, r: 140, o: 0.4 },
  { x: 70, y: 64, s: 0.75, r: -80, o: 0.45 },
  { x: 22, y: 82, s: 0.6, r: 200, o: 0.5 },
  { x: 90, y: 88, s: 0.8, r: 15, o: 0.5 },
  { x: 48, y: 4, s: 0.45, r: 95, o: 0.35 },
];

function Petal({ x, y, s, r, o, fill }: { x: number; y: number; s: number; r: number; o: number; fill: string }) {
  return (
    <svg
      viewBox="0 0 20 22"
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, width: 22 * s, transform: `rotate(${r}deg)`, opacity: o }}
      aria-hidden
    >
      <path d={PETAL_PATH} fill={fill} />
    </svg>
  );
}

export function Wallpaper({ kind }: { kind: WallpaperKind }) {
  const layer = "pointer-events-none absolute inset-0 overflow-hidden";
  switch (kind) {
    case "petals":
      return (
        <div className={layer} aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 60% at 100% 0%, #f8d3dc 0%, transparent 55%), radial-gradient(90% 50% at 0% 100%, #f6e1d3 0%, transparent 60%)",
            }}
          />
          {/* Blossom branch, top-right */}
          <svg viewBox="0 0 200 120" className="absolute -right-6 -top-2 w-[78%] opacity-80">
            <path d="M200 8C160 20 130 30 96 58 80 71 64 78 40 82" stroke="#6b4a44" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M128 36c-6 14-4 26 4 36" stroke="#6b4a44" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            {[
              [96, 56, 1],
              [62, 76, 0.8],
              [132, 70, 0.9],
              [150, 26, 0.75],
              [40, 82, 0.6],
            ].map(([cx, cy, s], i) => (
              <g key={i} transform={`translate(${cx} ${cy}) scale(${s})`}>
                {[0, 72, 144, 216, 288].map((a) => (
                  <path
                    key={a}
                    d="M0 -2C-5 -7 -6 -13 -2.5 -16L0 -13.5 2.5 -16C6 -13 5 -7 0 -2Z"
                    fill="#f4b9c7"
                    transform={`rotate(${a})`}
                  />
                ))}
                <circle r="2.4" fill="#c24e6a" />
              </g>
            ))}
          </svg>
          {scattered.map((p, i) => (
            <Petal key={i} {...p} fill="#f2b3c3" />
          ))}
        </div>
      );

    case "grid-glow":
      return (
        <div className={layer} aria-hidden>
          <div className="absolute -left-16 -top-10 h-56 w-56 rounded-full bg-[#7c3aed] opacity-40 blur-3xl" />
          <div className="absolute -right-16 top-24 h-48 w-48 rounded-full bg-[#06b6d4] opacity-35 blur-3xl" />
          <div
            className="absolute inset-x-[-50%] bottom-[-10%] h-[55%]"
            style={{
              backgroundImage:
                "linear-gradient(rgb(110 231 249 / .35) 1px, transparent 1px), linear-gradient(90deg, rgb(110 231 249 / .35) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              transform: "perspective(260px) rotateX(62deg)",
              transformOrigin: "50% 0%",
              maskImage: "linear-gradient(to bottom, transparent, black 40%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 40%)",
            }}
          />
          <div className="absolute inset-x-0 top-[45%] h-px bg-gradient-to-r from-transparent via-[#6ee7f9] to-transparent opacity-60" />
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-px w-px rounded-full bg-white"
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 42}%`, opacity: 0.35 + ((i * 7) % 5) / 10 }}
            />
          ))}
        </div>
      );

    case "studio":
      return (
        <div className={layer} aria-hidden>
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border-[18px] border-[#e2512b]" />
          <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#1b1814]" />
          <div className="absolute bottom-24 right-6 h-10 w-10 rotate-12 bg-[#52796f]" />
        </div>
      );

    case "blobs":
      return (
        <div className={layer} aria-hidden>
          <div className="absolute -left-10 top-6 h-48 w-48 rounded-full bg-[#c4b5fd] opacity-70 blur-2xl" />
          <div className="absolute -right-12 top-40 h-52 w-52 rounded-full bg-[#a7f3d0] opacity-70 blur-2xl" />
          <div className="absolute bottom-0 left-10 h-48 w-48 rounded-full bg-[#fecdd3] opacity-80 blur-2xl" />
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#fde68a] opacity-60 blur-2xl" />
        </div>
      );

    case "brutal":
      return (
        <div className={layer} aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{ backgroundImage: "radial-gradient(#000 1.1px, transparent 1.5px)", backgroundSize: "9px 9px" }}
          />
          <div className="absolute -right-6 top-14 h-16 w-40 rotate-[-8deg] bg-[#ff3d2e]" />
          <div className="absolute bottom-10 left-0 h-3 w-full bg-black" />
        </div>
      );

    case "film":
      return (
        <div className={layer} aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 30% at 70% 22%, rgb(255 205 140 / .95), transparent 70%), linear-gradient(180deg,#e9925a 0%,#b5546a 28%,#4a2a3c 52%,#17110f 78%)",
            }}
          />
          <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="absolute inset-x-0 top-[34%] h-[22%] w-full">
            <path d="M0 80L40 52 70 66 110 30 150 62 190 40 230 70 270 46 300 60V120H0Z" fill="#2b1a22" />
            <path d="M0 96L50 76 100 90 160 70 220 92 300 78V120H0Z" fill="#1c1216" />
          </svg>
          <div className="grain absolute inset-0" />
        </div>
      );

    case "iridescent":
      return (
        <div className={layer} aria-hidden>
          <div
            className="absolute -inset-1/4 blur-2xl"
            style={{
              background:
                "conic-gradient(from 210deg at 50% 40%, #ff7ac6, #a78bfa, #60a5fa, #34d399, #fde047, #ff7ac6)",
            }}
          />
          <div className="absolute inset-0 bg-[#120a24]/45" />
        </div>
      );

    case "terminal":
      return (
        <div className={layer} aria-hidden>
          <div className="absolute -top-20 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[#22c55e] opacity-20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, rgb(74 222 128 / .08) 0 1px, transparent 1px 3px)" }}
          />
        </div>
      );

    case "energy":
      return (
        <div className={layer} aria-hidden>
          <div
            className="absolute inset-x-0 top-0 h-[40%] opacity-20"
            style={{ backgroundImage: "repeating-linear-gradient(-55deg, #d4ff3a 0 10px, transparent 10px 26px)" }}
          />
          <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-transparent to-[#101010]" />
        </div>
      );

    case "swiss":
      return (
        <div className={layer} aria-hidden>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#e3262e]" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "linear-gradient(90deg, rgb(0 0 0 / .06) 1px, transparent 1px)",
              backgroundSize: "25% 100%",
            }}
          />
        </div>
      );

    default:
      return null;
  }
}
