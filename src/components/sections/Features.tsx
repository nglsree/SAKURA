import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Image,
  Infinity as InfinityIcon,
  Layers,
  Link2,
  ListChecks,
  Palette,
  Share2,
  Shapes,
  Smartphone,
  SunMoon,
  UserRound,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

type Status = "mvp" | "planned";

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
  status: Status;
}

/**
 * Status is honest: "mvp" = scoped for the first release, "planned" = on the roadmap.
 * Nothing on this page claims a feature is already live.
 */
const features: Feature[] = [
  { icon: InfinityIcon, title: "Unlimited creative freedom", body: "A visual editor plus advanced theme controls, so your page isn't limited to presets.", status: "planned" },
  { icon: Image, title: "Custom wallpapers & backgrounds", body: "Upload your own image, or use solid colors, gradients and patterns.", status: "mvp" },
  { icon: Palette, title: "Custom fonts & colors", body: "Pair typefaces and build a palette that matches your brand.", status: "mvp" },
  { icon: Shapes, title: "Changeable social icons", body: "Pick icon styles, shapes and colors — or hide the ones you don't use.", status: "mvp" },
  { icon: Link2, title: "Custom link cards & buttons", body: "Shapes, borders, shadows and featured links that stand out.", status: "mvp" },
  { icon: UserRound, title: "Profile pictures & avatars", body: "Upload a photo or illustration, with frame and shape options.", status: "mvp" },
  { icon: LayoutGrid, title: "Portfolio & project showcases", body: "Image grids and project cards that put your work front and center.", status: "planned" },
  { icon: Smartphone, title: "Responsive mobile layouts", body: "Designed phone-first, so your page looks right where people actually see it.", status: "mvp" },
  { icon: SunMoon, title: "Dark & light modes", body: "Offer both, and let your page follow the visitor's system setting.", status: "mvp" },
  { icon: Layers, title: "Custom themes & layouts", body: "Save, remix and share full themes and alternative layouts.", status: "planned" },
  { icon: ListChecks, title: "Easy link management", body: "Add, reorder and hide links without fighting the editor.", status: "mvp" },
  { icon: Share2, title: "Shareable profile URLs", body: "A clean, memorable address for your page, ready for any bio.", status: "mvp" },
];

const filters: Array<{ id: "all" | Status; label: string }> = [
  { id: "all", label: "Everything" },
  { id: "mvp", label: "First release (MVP)" },
  { id: "planned", label: "On the roadmap" },
];

export function Features() {
  const [filter, setFilter] = useState<"all" | Status>("all");
  const list = features.filter((f) => filter === "all" || f.status === filter);
  const counts = { all: features.length, mvp: features.filter((f) => f.status === "mvp").length, planned: features.filter((f) => f.status === "planned").length };

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeader
            index="02"
            eyebrow="Features"
            jp="機能"
            title={
              <>
                Everything you need to <em className="text-rose">look like yourself.</em>
              </>
            }
            lead="Sakura is in active development. Here's what's scoped for the first release, and what comes after — clearly labelled, no pretending."
          />

          <div role="tablist" aria-label="Filter features" className="no-scrollbar -mx-5 flex shrink-0 gap-1 overflow-x-auto px-5 lg:mx-0 lg:px-0">
            <div className="flex gap-1 rounded-full border border-line bg-white/60 p-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  type="button"
                  aria-selected={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative whitespace-nowrap rounded-full px-4 py-2 text-[13px] transition-colors ${
                    filter === f.id ? "text-ivory" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {filter === f.id && (
                    <motion.span layoutId="feature-tab" className="absolute inset-0 -z-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                  )}
                  <span className="relative">
                    {f.label} <span className="opacity-60">{counts[f.id]}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.ul layout className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {list.map((f) => (
              <motion.li
                layout
                key={f.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory p-7 transition-colors duration-300 hover:bg-white sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blossom-soft text-rose-deep transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <f.icon size={20} strokeWidth={1.7} aria-hidden />
                  </span>
                  <StatusBadge status={f.status} />
                </div>
                <h3 className="mt-6 text-[17px] font-medium tracking-[-0.01em] text-ink">{f.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{f.body}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-faint">
          <span className="inline-flex items-center gap-2"><StatusBadge status="mvp" /> scoped for the first public release</span>
          <span className="inline-flex items-center gap-2"><StatusBadge status="planned" /> on the roadmap, not yet scheduled</span>
        </p>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: Status }) {
  return status === "mvp" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef1e8] px-2.5 py-1 font-semibold text-[10.5px] uppercase tracking-wider text-[#4f5a3c]">
      <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden /> MVP
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-line-strong px-2.5 py-1 font-semibold text-[10.5px] uppercase tracking-wider text-ink-faint">
      <span className="h-1.5 w-1.5 rounded-full border border-ink-faint" aria-hidden /> Planned
    </span>
  );
}
