import { ArrowRight } from "lucide-react";
import { BlossomBranch } from "../ui/BlossomBranch";
import { Button } from "../ui/Button";
import { useInfoDialog } from "../ui/InfoDialog";
import { Petals } from "../ui/Petals";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  const openDialog = useInfoDialog();
  return (
    <section className="relative px-5 pb-10 sm:px-8">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-line bg-blossom-soft px-6 py-24 text-center sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 80% at 50% 0%, #fdf1f3 0%, transparent 70%), radial-gradient(50% 60% at 100% 100%, #f6d2da 0%, transparent 70%)" }}
          aria-hidden
        />
        <Petals />
        <BlossomBranch className="pointer-events-none absolute -right-16 -top-6 w-[300px] opacity-70 sm:w-[420px]" />
        <BlossomBranch className="pointer-events-none absolute -bottom-10 -left-20 w-[260px] -scale-100 opacity-50 sm:w-[360px]" />
        <Reveal className="relative">
          <p lang="ja" className="mb-6 text-[13px] font-medium text-rose">
            あなたの物語に、あなたの場所を。
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-[38px] font-medium leading-[1.1] tracking-[-0.04em] text-ink sm:text-[60px]">
            Your story deserves <em className="text-rose">its own space.</em>
          </h2>
          <p className="mt-6 text-[18px] text-ink-soft">Start building something beautiful.</p>
          <Button size="lg" className="mt-10" onClick={() => openDialog("early-access")}>
            Create your Sakura <ArrowRight size={17} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
