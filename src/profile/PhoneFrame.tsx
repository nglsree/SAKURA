import type { ReactNode } from "react";
import { BatteryFull, Signal, Wifi } from "lucide-react";

/**
 * A device frame drawn in CSS. Children fill the screen.
 * `statusTone` sets the colour of the status bar glyphs.
 */
export function PhoneFrame({
  children,
  statusTone = "dark",
  className = "",
}: {
  children: ReactNode;
  statusTone?: "dark" | "light";
  className?: string;
}) {
  const tone = statusTone === "dark" ? "text-[#1a1a1a]" : "text-white";
  return (
    <div
      className={`relative aspect-[9/19.2] w-[290px] rounded-[48px] bg-[#141212] p-[10px] shadow-[0_50px_100px_-30px_rgb(31_27_26/0.45),0_20px_40px_-20px_rgb(31_27_26/0.3),inset_0_0_0_1.5px_rgb(255_255_255/0.08)] ${className}`}
    >
      {/* side buttons */}
      <span className="absolute -left-[3px] top-[22%] h-10 w-[3px] rounded-l bg-[#2a2626]" aria-hidden />
      <span className="absolute -left-[3px] top-[33%] h-14 w-[3px] rounded-l bg-[#2a2626]" aria-hidden />
      <span className="absolute -right-[3px] top-[28%] h-20 w-[3px] rounded-r bg-[#2a2626]" aria-hidden />

      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-white">
        {children}
        {/* status bar */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-7 pt-[14px] text-[12px] font-semibold ${tone}`}
          aria-hidden
        >
          <span style={{ fontFamily: "var(--font-sans)" }}>9:41</span>
          <span className="flex items-center gap-1">
            <Signal size={13} strokeWidth={2.4} />
            <Wifi size={13} strokeWidth={2.4} />
            <BatteryFull size={16} strokeWidth={2} />
          </span>
        </div>
        {/* dynamic island */}
        <div className="pointer-events-none absolute left-1/2 top-[10px] z-30 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" aria-hidden />
        {/* home indicator */}
        <div
          className={`pointer-events-none absolute bottom-[7px] left-1/2 z-20 h-[4px] w-[104px] -translate-x-1/2 rounded-full ${
            statusTone === "dark" ? "bg-black/70" : "bg-white/70"
          }`}
          aria-hidden
        />
      </div>
    </div>
  );
}

export const statusToneFor = (themeId: string): "dark" | "light" =>
  ["futuristic", "film", "iridescent", "terminal", "energy"].includes(themeId) ? "light" : "dark";
