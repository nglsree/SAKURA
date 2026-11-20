import { PETAL_PATH } from "../../profile/Wallpaper";

/** A handful of slow-falling petals. CSS-only animation; hidden for reduced-motion users. */
const petals = [
  { left: 6, delay: 0, dur: 19, size: 14, drift: 80, spin: 300 },
  { left: 18, delay: 7, dur: 23, size: 10, drift: -40, spin: 220 },
  { left: 34, delay: 3, dur: 21, size: 12, drift: 60, spin: -260 },
  { left: 52, delay: 11, dur: 25, size: 9, drift: 90, spin: 200 },
  { left: 66, delay: 5, dur: 20, size: 13, drift: -70, spin: 320 },
  { left: 81, delay: 14, dur: 24, size: 11, drift: 40, spin: -200 },
  { left: 93, delay: 9, dur: 22, size: 10, drift: -50, spin: 280 },
];

export function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 20 22"
          className="petal absolute -top-8"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              animation: `petal-fall ${p.dur}s linear ${p.delay}s infinite`,
              "--drift": `${p.drift}px`,
              "--spin": `${p.spin}deg`,
            } as React.CSSProperties
          }
        >
          <path d={PETAL_PATH} fill="#f2b3c3" opacity="0.8" />
        </svg>
      ))}
    </div>
  );
}
