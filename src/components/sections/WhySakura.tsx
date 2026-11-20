import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { BlossomBranch } from "../ui/BlossomBranch";

const principles = [
  {
    instead: "Restrictions",
    choose: "Freedom",
    body: "Your page should bend to your taste, not the other way round. Fewer locked switches, more room to play.",
  },
  {
    instead: "Templates",
    choose: "Customization",
    body: "Themes are a starting point. Every font, color, shape and wallpaper is meant to be changed.",
  },
  {
    instead: "Subscriptions for the basics",
    choose: "Affordable by design",
    body: "A free foundation that's genuinely useful. Any future paid plan is optional support, never a ransom on essentials.",
  },
  {
    instead: "A closed roadmap",
    choose: "Open-source development",
    body: "The code is built in the open, so designers and developers can see it, question it and improve it.",
  },
  {
    instead: "Lock-in",
    choose: "Ownership & portability",
    body: "Your page and your links belong to you. Export and self-hosting are core goals of the project.",
  },
];

export function WhySakura() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <BlossomBranch className="pointer-events-none absolute -bottom-6 -left-28 hidden w-[400px] -scale-x-100 opacity-35 lg:block" />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            index="04"
            eyebrow="Why Sakura"
            jp="理念"
            title={
              <>
                A creative community, <em className="text-rose">not another subscription.</em>
              </>
            }
            lead={
              <>
                Sakura — cherry blossom — is a small reminder that beautiful things don't need to be complicated, and
                that every season, everyone gets to bloom. Our mission is simple: give everyone a personal page that
                feels like them, without expensive monthly fees.
              </>
            }
          />
          <Reveal delay={0.1}>
            <figure className="mt-8 border-l-2 border-blossom pl-4">
              <blockquote className="font-display text-[22px] font-medium leading-snug tracking-[-0.025em] text-ink">
                “Your space. Your style. Your links.”
              </blockquote>
              <p lang="ja" className="mt-2 text-[13px] text-ink-faint">
                あなたの場所。あなたのスタイル。あなたのリンク。
              </p>
            </figure>
          </Reveal>
        </div>

        <div>
          <ul className="divide-y divide-line border-y border-line">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.choose} delay={i * 0.06} className="group grid gap-3 py-7 sm:grid-cols-[180px_1fr] sm:gap-8">
                <div>
                  <p className="font-semibold text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                    Instead of <span className="line-through decoration-rose/60">{p.instead.toLowerCase()}</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.025em] text-ink transition-colors group-hover:text-rose">
                    {p.choose}
                  </h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-relaxed text-ink-faint">
            This describes the values Sakura is built on — it isn't a feature-by-feature comparison with any specific
            service. Plenty of great tools exist; we're making the one we wanted.
          </p>
        </div>
      </div>
    </section>
  );
}
