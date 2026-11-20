import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { PROFILE_DOMAIN } from "../../config";
import { BrandIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function ClaimVisual() {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
      <p className="text-[11px] text-ink-faint">Choose your address</p>
      <div className="mt-2 flex items-center rounded-xl border border-line-strong bg-ivory px-3 py-2.5 font-medium text-[13px]">
        <span className="text-ink-faint">{PROFILE_DOMAIN}/</span>
        <span className="text-ink">hana</span>
        <motion.span
          className="ml-0.5 inline-block h-4 w-[1.5px] bg-rose"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          aria-hidden
        />
      </div>
      <p className="mt-2 flex items-center gap-1 text-[11px] text-moss">
        <Check size={12} aria-hidden /> Looks good
      </p>
    </div>
  );
}

function CustomizeVisual() {
  const colors = ["#f4c7d1", "#1f1b1a", "#9b87f5", "#d4ff3a", "#e2512b"];
  const fonts = [
    { f: '"Instrument Serif"', label: "Serif" },
    { f: '"Syne"', label: "Display" },
    { f: '"Geist Mono"', label: "Mono" },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
      <p className="text-[11px] text-ink-faint">Palette</p>
      <div className="mt-2 flex gap-2">
        {colors.map((c, i) => (
          <motion.span
            key={c}
            className="h-7 w-7 rounded-full ring-1 ring-black/10"
            style={{ background: c }}
            animate={i === 0 ? { scale: [1, 1.15, 1] } : undefined}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        ))}
      </div>
      <p className="mt-4 text-[11px] text-ink-faint">Typeface</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {fonts.map((x, i) => (
          <span
            key={x.label}
            className={`rounded-lg border px-2 py-1.5 text-center text-[18px] leading-none ${i === 0 ? "border-ink bg-ivory" : "border-line"}`}
            style={{ fontFamily: x.f }}
          >
            Aa
          </span>
        ))}
      </div>
    </div>
  );
}

function ShareVisual() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
      <p className="text-[11px] text-ink-faint">Your link (example)</p>
      <button
        type="button"
        onClick={() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        }}
        className="mt-2 flex w-full items-center justify-between rounded-xl bg-ink px-3 py-2.5 font-medium text-[13px] text-ivory"
        aria-label="Example copy button (demo only)"
      >
        {PROFILE_DOMAIN}/hana
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
      </button>
      <div className="mt-3 flex items-center gap-2 text-ink-soft">
        {(["instagram", "tiktok", "x", "linkedin"] as const).map((b) => (
          <span key={b} className="grid h-8 w-8 place-items-center rounded-full border border-line">
            <BrandIcon name={b} width={14} height={14} />
          </span>
        ))}
        <span className="ml-auto text-[11px] text-ink-faint">{copied ? "Copied (demo)" : "Paste in any bio"}</span>
      </div>
    </div>
  );
}

const steps = [
  { n: "01", title: "Create your page.", body: "Pick a name and an address. Add your photo, a short bio and the links that matter.", Visual: ClaimVisual },
  { n: "02", title: "Customize your world.", body: "Wallpaper, fonts, colors, buttons, icons. Start from a theme or start from nothing.", Visual: CustomizeVisual },
  { n: "03", title: "Share your Sakura link.", body: "One link for every bio, business card and email signature. Update it anytime.", Visual: ShareVisual },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="How it works"
          jp="使い方"
          align="center"
          title={
            <>
              Three steps. <em className="text-rose">Then it's yours.</em>
            </>
          }
        />

        <ol className="relative mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* connector line */}
          <svg className="pointer-events-none absolute left-0 top-[44px] hidden h-4 w-full lg:block" preserveAspectRatio="none" viewBox="0 0 100 4" aria-hidden>
            <motion.path
              d="M8 2 L92 2"
              stroke="var(--line-strong)"
              strokeWidth="0.25"
              strokeDasharray="1 1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          {steps.map(({ n, title, body, Visual }, i) => (
            <Reveal as="li" key={n} delay={i * 0.12} className="relative">
              <div className="flex h-full flex-col rounded-[28px] border border-line bg-ivory p-6 sm:p-7">
                <span className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-full border border-line-strong bg-ivory font-display text-[17px] font-medium text-rose">
                  {n}
                </span>
                <h3 className="mt-6 text-[22px] font-semibold leading-tight tracking-[-0.025em] text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{body}</p>
                <div className="mt-8 flex-1" />
                <Visual />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
