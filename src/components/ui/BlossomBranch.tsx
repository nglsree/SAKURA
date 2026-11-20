/** Hand-composed botanical branch — used sparingly as a decorative accent. */
const flowers: Array<[number, number, number, number]> = [
  [312, 64, 1.15, 0],
  [250, 112, 0.9, 20],
  [366, 132, 0.8, -15],
  [188, 150, 1, 40],
  [118, 196, 0.75, 10],
  [282, 178, 0.6, 30],
  [70, 236, 0.55, -20],
];
const buds: Array<[number, number]> = [
  [338, 98],
  [214, 128],
  [156, 182],
  [94, 222],
];

export function BlossomBranch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 280" className={className} aria-hidden fill="none">
      <path
        d="M420 20C370 40 334 58 300 90 262 126 222 140 180 160 140 179 104 205 40 262"
        stroke="#5f4640"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M300 90C318 112 336 124 368 132" stroke="#5f4640" strokeWidth="2" strokeLinecap="round" />
      <path d="M232 132C240 118 246 114 252 112" stroke="#5f4640" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M318 74C316 64 314 60 312 58" stroke="#5f4640" strokeWidth="1.6" strokeLinecap="round" />
      {buds.map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="6" fill="#e99aae" transform={`rotate(${i * 25} ${x} ${y})`} />
      ))}
      {flowers.map(([x, y, s, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s}) rotate(${r})`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <path
              key={a}
              d="M0 -3C-9 -11 -10.5 -22 -4.5 -27L0 -23.5 4.5 -27C10.5 -22 9 -11 0 -3Z"
              fill={i % 2 ? "#f6c9d3" : "#f2b7c5"}
              stroke="#e59fb1"
              strokeWidth=".6"
              transform={`rotate(${a})`}
            />
          ))}
          {[0, 72, 144, 216, 288].map((a) => (
            <line key={a} x1="0" y1="0" x2="0" y2="-8" stroke="#b8405e" strokeWidth=".8" transform={`rotate(${a + 36})`} />
          ))}
          <circle r="3.2" fill="#b8405e" />
        </g>
      ))}
    </svg>
  );
}
