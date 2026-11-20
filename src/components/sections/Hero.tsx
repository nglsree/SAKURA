import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { hana } from "../../profile/profiles";
import { futuristic, pastel, sakura } from "../../profile/themes";
import { PhoneFrame, statusToneFor } from "../../profile/PhoneFrame";
import { ProfileCard } from "../../profile/ProfileCard";
import { BlossomBranch } from "../ui/BlossomBranch";
import { Button } from "../ui/Button";
import { useInfoDialog } from "../ui/InfoDialog";
import { Petals } from "../ui/Petals";

const heroThemes = [sakura, pastel, futuristic];
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const openDialog = useInfoDialog();
  const [themeIdx, setThemeIdx] = useState(0);
  const theme = heroThemes[themeIdx];
  const reduce = useReducedMotion();

  // Gentle 3D tilt that follows the pointer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const notes = [
    { k: "Wallpaper", v: theme.recipe.wallpaper, pos: "left-[-8%] top-[18%] sm:left-[-14%]" },
    { k: "Typeface", v: theme.recipe.font.split(" + ")[0], pos: "right-[-6%] top-[40%] sm:right-[-16%]" },
    { k: "Buttons", v: theme.recipe.buttons, pos: "left-[-4%] bottom-[16%] sm:left-[-18%]" },
  ];

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-[112px] sm:pt-[132px] lg:pb-28">
      {/* Atmosphere */}
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, #fae3e8 0%, transparent 65%)" }}
        aria-hidden
      />
      <Petals />
      {/* Vertical Japanese accent — "Sakura · be yourself, freely" */}
      <p
        lang="ja"
        aria-hidden
        className="pointer-events-none absolute left-6 top-[150px] hidden text-[12px] text-ink-faint/70 [writing-mode:vertical-rl] !tracking-[0.5em] xl:block"
      >
        桜 ・ 自分らしく、自由に。
      </p>
      <BlossomBranch className="pointer-events-none absolute -left-24 top-[62%] hidden w-[380px] -scale-x-100 rotate-[8deg] opacity-[0.55] lg:block" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.08fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="max-w-[640px]">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 py-1.5 pl-1.5 pr-3.5 text-[12.5px] text-ink-soft backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="whitespace-nowrap rounded-full bg-blossom-soft px-2 py-0.5 font-semibold text-[10.5px] uppercase tracking-wider text-rose-deep">
              In development
            </span>
            <span className="whitespace-nowrap">
              Open-source · Free-first<span className="hidden sm:inline"> · For creatives</span>
            </span>
          </motion.p>

          <motion.h1
            className="mt-7 font-display text-[44px] font-medium leading-[1.06] tracking-[-0.045em] text-ink sm:text-[62px] lg:text-[72px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
          >
            Your corner of the internet.{" "}
            <em className="relative whitespace-nowrap text-rose">
              Your rules.
              <svg viewBox="0 0 300 18" className="absolute -bottom-2 left-0 w-full" aria-hidden preserveAspectRatio="none">
                <motion.path
                  d="M3 12C60 4 140 3 297 9"
                  stroke="#f0b3c2"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.7, ease }}
                />
              </svg>
            </em>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-[540px] text-[17.5px] leading-relaxed text-ink-soft sm:text-[19px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
          >
            Create a beautiful link-in-bio page that actually feels like you. Customize everything, showcase your
            creativity and share your world. Free to start. No expensive subscriptions.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
          >
            <Button size="lg" onClick={() => openDialog("early-access")}>
              Create your Sakura
              <ArrowRight size={17} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
            </Button>
            <Button size="lg" variant="secondary" href="#themes">
              Explore designs
            </Button>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-ink-soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {["Free foundation, always useful", "Open source", "Your page, your data"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Check size={15} className="text-rose" aria-hidden /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Product preview */}
        <motion.div
          className="relative mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
        >
          <div className="relative [perspective:1400px]" onPointerMove={onMove} onPointerLeave={onLeave}>
            <div
              className="absolute inset-x-6 bottom-[-28px] h-12 rounded-[50%] bg-ink/25 blur-2xl"
              aria-hidden
            />
            <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
              <PhoneFrame statusTone={statusToneFor(theme.id)}>
                <span className="sr-only">
                  Example Sakura profile for a fictional illustrator, Hana Mori, shown in the {theme.name} theme.
                </span>
                <div aria-hidden className="h-full">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={theme.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease }}
                    >
                      <ProfileCard profile={hana} theme={theme} topInset={20} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </PhoneFrame>
            </motion.div>

            {/* Floating annotations — they update with the theme */}
            {notes.map((n, i) => (
              <motion.div
                key={n.k}
                className={`absolute z-10 hidden rounded-2xl border border-line bg-white/85 px-3.5 py-2.5 shadow-soft backdrop-blur-md sm:block ${n.pos}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.9 + i * 0.15, duration: 0.6 },
                  y: { delay: 1 + i * 0.4, duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                aria-hidden
              >
                <p className="font-semibold text-[9.5px] uppercase tracking-[0.14em] text-ink-faint">{n.k}</p>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={n.v}
                    className="text-[13px] font-medium text-ink"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {n.v}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Theme quick-switch */}
          <div className="mt-12 flex items-center gap-3 rounded-full border border-line bg-white/70 p-1.5 backdrop-blur sm:pl-4" role="group" aria-label="Preview theme">
            <span className="hidden whitespace-nowrap text-[12.5px] text-ink-soft sm:inline">Try a look</span>
            <div className="flex gap-1">
              {heroThemes.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setThemeIdx(i)}
                  aria-pressed={i === themeIdx}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[12.5px] transition-all ${
                    i === themeIdx ? "bg-ink text-ivory" : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full ring-1 ring-black/10"
                    style={{ background: `linear-gradient(135deg, ${t.swatch[0]} 50%, ${t.swatch[1]} 50%)` }}
                    aria-hidden
                  />
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
