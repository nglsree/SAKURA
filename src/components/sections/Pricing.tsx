import { ArrowRight, Check, Heart, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { useInfoDialog } from "../ui/InfoDialog";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { BlossomMark } from "../ui/Logo";

const free = [
  "Create your own profile",
  "Customize themes and wallpapers",
  "Add social links",
  "Customize colors and icons",
  "Mobile-friendly design",
];

const supporter = ["Additional premium customization", "Optional advanced features", "Support the development of Sakura"];

export function Pricing() {
  const openDialog = useInfoDialog();
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          index="07"
          eyebrow="Pricing philosophy"
          jp="料金"
          align="center"
          title={
            <>
              Free at the root. <em className="text-rose">Support is optional.</em>
            </>
          }
          lead="The free plan isn't a trial or a teaser. It's the foundation — and it has to stay genuinely useful."
        />

        <div className="mx-auto mt-16 grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-[1.15fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-[30px] bg-ink p-8 text-ivory sm:p-10">
            <BlossomMark center={false} size={260} className="pointer-events-none absolute -bottom-20 -right-16 text-white/[0.05]" />
            <div className="relative">
              <p className="font-semibold text-[11px] uppercase tracking-[0.16em] text-blossom">Free</p>
              <h3 className="mt-3 text-[40px] font-bold leading-none tracking-[-0.035em]">The foundation.</h3>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60">
                Everything you need for a page that looks and feels like you.
              </p>
              <ul className="mt-8 space-y-3.5">
                {free.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15px]">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-blossom text-ink">
                      <Check size={12} strokeWidth={3} aria-hidden />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="light" size="lg" className="mt-10 w-full sm:w-auto" onClick={() => openDialog("early-access")}>
                Create your Sakura <ArrowRight size={17} aria-hidden />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative flex flex-col rounded-[30px] border border-dashed border-line-strong bg-paper/60 p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[11px] uppercase tracking-[0.16em] text-ink-faint">Future supporter plan</p>
              <span className="rounded-full border border-line-strong px-2.5 py-1 font-semibold text-[10px] uppercase tracking-wider text-ink-soft">
                Planned · optional
              </span>
            </div>
            <h3 className="mt-3 text-[32px] font-bold leading-[1.05] tracking-[-0.03em] text-ink">For those who want more.</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              An idea we're exploring, not something you can buy. Pricing hasn't been decided.
            </p>
            <ul className="mt-8 space-y-3.5">
              {supporter.map((f, i) => (
                <li key={f} className="flex items-center gap-3 text-[15px] text-ink-soft">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-line-strong text-rose">
                    {i === 2 ? <Heart size={11} aria-hidden /> : <Sparkles size={11} aria-hidden />}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <Button variant="secondary" size="lg" disabled className="w-full sm:w-auto">
                Not available yet
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
