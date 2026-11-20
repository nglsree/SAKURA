import { motion } from "framer-motion";
import { creators } from "../../profile/profiles";
import { ProfileCard } from "../../profile/ProfileCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function CreatorShowcase() {
  return (
    <section id="explore" className="relative border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            index="05"
            eyebrow="Explore"
            jp="作品"
            title={
              <>
                Five creators. <em className="text-rose">Five different worlds.</em>
              </>
            }
            lead="One platform, no house style. Every page below is built from the same Sakura building blocks."
          />
          <p className="font-semibold text-[11px] uppercase tracking-[0.14em] text-ink-faint lg:pb-2">
            Fictional creators · example links
          </p>
        </div>
      </div>

      <div className="no-scrollbar mt-14 overflow-x-auto pb-6 [scroll-padding-inline:20px] [scroll-snap-type:x_mandatory] xl:overflow-visible">
        <ul className="mx-auto flex w-max gap-5 px-5 sm:px-8 xl:grid xl:w-auto xl:max-w-[1240px] xl:grid-cols-5">
          {creators.map((c, i) => (
            <Reveal as="li" key={c.profile.handle} delay={i * 0.08} className="w-[236px] shrink-0 [scroll-snap-align:start] xl:w-auto">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="overflow-hidden rounded-[26px] shadow-soft ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-lift"
              >
                <div className="aspect-[9/15.5]" aria-hidden>
                  <ProfileCard profile={c.profile} theme={c.theme} compact />
                </div>
              </motion.div>
              <div className="mt-4 flex items-baseline justify-between gap-2 px-1">
                <div>
                  <p className="text-[14.5px] font-medium text-ink">{c.profile.name}</p>
                  <p className="text-[13px] text-ink-soft">{c.discipline}</p>
                </div>
                <span className="font-semibold text-[10.5px] uppercase tracking-wider text-ink-faint">{c.theme.name}</span>
              </div>
              <p className="sr-only">
                Example profile of {c.profile.name}, a fictional {c.discipline.toLowerCase()}, using the {c.theme.name} style.
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
