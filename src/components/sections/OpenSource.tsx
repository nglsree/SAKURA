import { BookOpen, Code, GitPullRequest, Languages, Palette, Accessibility } from "lucide-react";
import { IS_GITHUB_PLACEHOLDER, LINKS } from "../../config";
import { BrandIcon } from "../ui/BrandIcons";
import { Button } from "../ui/Button";
import { BlossomMark } from "../ui/Logo";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const themeSnippet = `{
  "name": "Sakura",
  "wallpaper": "petals",
  "font": {
    "display": "Instrument Serif",
    "body": "DM Sans"
  },
  "colors": {
    "background": "#fbf6f0",
    "text": "#2a2220",
    "accent": "#c24e6a"
  },
  "buttons": { "radius": 18, "style": "soft" },
  "icons": "ringed"
}`;

const ways = [
  { icon: Palette, title: "Design themes", body: "Create wallpapers, palettes and full themes for the community." },
  { icon: Code, title: "Write code", body: "Editor, renderer, performance — pick an issue and dive in." },
  { icon: Accessibility, title: "Improve accessibility", body: "Contrast, keyboard flows, screen readers. It matters." },
  { icon: Languages, title: "Translate", body: "Help Sakura speak your language." },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function OpenSource() {
  return (
    <section id="community" className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32">
      <BlossomMark center={false} size={520} className="pointer-events-none absolute -right-40 -top-40 text-white/[0.03]" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <SectionHeader
              tone="light"
              index="06"
              eyebrow="Open source"
              jp="共創"
              title={
                <>
                  Built with creativity. <em className="text-blossom">Open to everyone.</em>
                </>
              }
              lead="We believe the internet should give creators more freedom, not more subscriptions. Sakura is being built with an open-source mindset, where developers and designers can contribute, improve and shape the platform."
            />
            <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={LINKS.repo} {...ext} variant="light" size="lg">
                <BrandIcon name="github" width={17} height={17} /> GitHub
              </Button>
              <Button href={LINKS.source} {...ext} variant="outline-light" size="lg">
                <BookOpen size={17} aria-hidden /> View source code
              </Button>
              <Button href={LINKS.contribute} {...ext} variant="outline-light" size="lg">
                <GitPullRequest size={17} aria-hidden /> Contribute to Sakura
              </Button>
            </Reveal>
            {IS_GITHUB_PLACEHOLDER && (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-dashed border-white/20 px-3 py-1.5 font-medium text-[11px] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-blossom" aria-hidden />
                Placeholder links — the public repository isn't live yet
              </p>
            )}

            <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {ways.map((w) => (
                <li key={w.title} className="bg-ink p-5">
                  <w.icon size={18} className="text-blossom" aria-hidden />
                  <p className="mt-3 text-[15px] font-medium">{w.title}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/55">{w.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.15} className="lg:pt-16">
            <figure className="overflow-hidden rounded-[22px] border border-white/10 bg-[#171413] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[12px] text-white/45">themes/sakura.json</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.75] text-white/80 sm:text-[13px]">
                <code>
                  {themeSnippet.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      <span className="mr-5 inline-block w-4 select-none text-right text-white/20">{i + 1}</span>
                      {highlight(line)}
                    </span>
                  ))}
                </code>
              </pre>
              <figcaption className="border-t border-white/10 px-5 py-4 text-[13px] leading-relaxed text-white/55">
                Themes are plain, readable data — so anyone can design one, share it, and send it in as a contribution.
                <span className="block pt-1 font-medium text-[11px] text-white/35">Illustrative format · subject to change</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Tiny JSON highlighter — enough for a decorative snippet, no dependency. */
function highlight(line: string) {
  const parts = line.split(/("(?:[^"\\]|\\.)*")(\s*:)?/g);
  return parts.map((p, i) => {
    if (!p) return null;
    if (p.startsWith('"')) {
      const isKey = parts[i + 1]?.trim() === ":";
      return (
        <span key={i} className={isKey ? "text-[#f4c7d1]" : "text-[#c9d7a5]"}>
          {p}
        </span>
      );
    }
    if (/\d/.test(p) && !p.includes('"')) return <span key={i} className="text-[#f2c57c]">{p}</span>;
    return <span key={i}>{p}</span>;
  });
}
