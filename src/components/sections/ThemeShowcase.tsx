import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Image, LayoutGrid, MousePointer2, Type } from "lucide-react";
import { hana } from "../../profile/profiles";
import { showcaseThemes } from "../../profile/themes";
import { PhoneFrame, statusToneFor } from "../../profile/PhoneFrame";
import { ProfileCard } from "../../profile/ProfileCard";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function ThemeShowcase() {
  const [active, setActive] = useState(showcaseThemes[0].id);
  const theme = showcaseThemes.find((t) => t.id === active)!;

  const recipe = [
    { icon: Type, label: "Typography", value: theme.recipe.font },
    { icon: Image, label: "Wallpaper", value: theme.recipe.wallpaper },
    { icon: MousePointer2, label: "Link buttons", value: theme.recipe.buttons },
    { icon: LayoutGrid, label: "Icons & layout", value: `${theme.recipe.icons} · ${theme.align === "left" ? "Left-aligned" : "Centered"}` },
  ];

  return (
    <section id="themes" className="relative border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          index="01"
          eyebrow="Live customization"
          jp="着せ替え"
          title={
            <>
              Same links. <em className="text-rose">Six completely different people.</em>
            </>
          }
          lead="Sakura themes are just data — colors, fonts, wallpapers, shapes. Pick one below and watch the exact same profile become someone new."
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
          {/* Theme picker */}
          <Reveal className="order-1">
            <div
              role="radiogroup"
              aria-label="Choose a theme"
              className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
            >
              {showcaseThemes.map((t) => {
                const on = t.id === active;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setActive(t.id)}
                    className={`group relative flex min-w-[200px] items-center gap-3.5 rounded-2xl p-3 text-left transition-all duration-300 lg:min-w-0 ${
                      on ? "bg-white shadow-soft ring-1 ring-line-strong" : "ring-1 ring-transparent hover:bg-white/60"
                    }`}
                  >
                    <span
                      className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl ring-1 ring-black/10"
                      style={{ background: t.swatch[0] }}
                      aria-hidden
                    >
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 h-2 rounded-sm" style={{ background: t.swatch[1] }} />
                      <span
                        className="absolute left-1.5 top-1.5 text-[13px] leading-none"
                        style={{ color: t.swatch[2], fontFamily: t.vars["--pf-font-display"] }}
                      >
                        Aa
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[14.5px] font-medium text-ink">{t.name}</span>
                      <span className="block text-[12.5px] leading-snug text-ink-soft">{t.description}</span>
                    </span>
                    {on && (
                      <motion.span
                        layoutId="theme-dot"
                        className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-rose"
                        aria-hidden
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal className="order-2 mx-auto" delay={0.1}>
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-16 rounded-full opacity-60 blur-3xl transition-colors duration-700"
                style={{ background: `radial-gradient(circle, ${theme.swatch[1]}33, transparent 65%)` }}
                aria-hidden
              />
              <PhoneFrame statusTone={statusToneFor(theme.id)}>
                <span className="sr-only" aria-live="polite">
                  Preview now showing the {theme.name} theme.
                </span>
                <div aria-hidden className="h-full">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={theme.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 38px)" }}
                      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 38px)" }}
                      exit={{ opacity: 1 }}
                      transition={{ duration: 0.7, ease }}
                    >
                      <ProfileCard profile={hana} theme={theme} topInset={20} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </PhoneFrame>
            </div>
          </Reveal>

          {/* Recipe */}
          <Reveal className="order-3" delay={0.2}>
            <div className="rounded-[24px] border border-line bg-ivory p-6">
              <p className="eyebrow">Theme recipe</p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.h3
                  key={theme.id}
                  className="mt-2 text-[28px] font-bold leading-none tracking-[-0.03em] text-ink"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme.name}
                </motion.h3>
              </AnimatePresence>
              <dl className="mt-6 divide-y divide-line">
                {recipe.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 py-3.5">
                    <Icon size={16} className="mt-0.5 text-ink-faint" aria-hidden />
                    <div className="min-w-0">
                      <dt className="text-[12px] text-ink-faint">{label}</dt>
                      <dd className="text-[14px] font-medium text-ink">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex gap-1.5" aria-label="Palette">
                {theme.swatch.map((c, i) => (
                  <span key={i} className="h-6 flex-1 rounded-md ring-1 ring-black/10 transition-colors duration-500" style={{ background: c }} title={c} />
                ))}
              </div>
              <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">
                In Sakura you'll be able to start from a theme like this, then change any piece of it — or build your own
                from scratch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
