import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { BrandIcon } from "./BrandIcons";
import { Button } from "./Button";
import { BlossomMark } from "./Logo";
import { CONTACT_EMAIL, IS_GITHUB_PLACEHOLDER, LINKS } from "../../config";

/**
 * Honest dialogs for actions that don't exist yet (sign-up, log in) and the privacy note.
 * Uses the native <dialog> element: focus trapping, Esc to close and inert background for free.
 */
type Kind = "early-access" | "login" | "privacy";

const Ctx = createContext<(k: Kind) => void>(() => {});
export const useInfoDialog = () => useContext(Ctx);

const content: Record<Kind, { title: string; body: ReactNode }> = {
  "early-access": {
    title: "Sakura is still blooming",
    body: (
      <>
        <p>
          Sakura is in early development, so profile creation isn't open yet. We'd rather tell you that than show you a
          sign-up form that doesn't go anywhere.
        </p>
        <p className="mt-3">Follow the repository to see progress, try early builds, or help shape what ships first.</p>
      </>
    ),
  },
  login: {
    title: "Accounts aren't live yet",
    body: (
      <p>
        There's nothing to log in to just yet — accounts arrive with the first public release. Watch the repository to
        know when it's ready.
      </p>
    ),
  },
  privacy: {
    title: "Privacy",
    body: (
      <>
        <p>
          This landing page doesn't use cookies, analytics or trackers, and it doesn't collect any personal data. It's a
          static site.
        </p>
        <p className="mt-3">
          Fonts are loaded from Google Fonts, which receives standard request data (such as your IP address) when
          serving them. A full privacy policy will be published alongside the product.
        </p>
      </>
    ),
  },
};

export function InfoDialogProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [kind, setKind] = useState<Kind>("early-access");

  const open = useCallback((k: Kind) => {
    setKind(k);
    ref.current?.showModal();
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    // click on backdrop closes
    const onClick = (e: MouseEvent) => {
      if (e.target === d) d.close();
    };
    d.addEventListener("click", onClick);
    return () => d.removeEventListener("click", onClick);
  }, []);

  const c = content[kind];

  return (
    <Ctx.Provider value={open}>
      {children}
      <dialog
        ref={ref}
        aria-labelledby="info-dialog-title"
        className="m-auto w-[min(92vw,460px)] rounded-[28px] bg-ivory p-0 text-ink shadow-lift backdrop:bg-ink/40 backdrop:backdrop-blur-sm open:animate-[none]"
      >
        <div className="relative overflow-hidden p-7 sm:p-8">
          <BlossomMark center={false} size={120} className="pointer-events-none absolute -right-8 -top-8 text-blossom/50" />
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-soft hover:bg-ink/5 hover:text-ink"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
          <h2 id="info-dialog-title" className="relative pr-10 text-[27px] font-bold leading-tight tracking-[-0.03em]">
            {c.title}
          </h2>
          <div className="relative mt-3 text-[15px] leading-relaxed text-ink-soft">{c.body}</div>

          <div className="relative mt-7 flex flex-wrap gap-3">
            {kind === "privacy" ? (
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="sm">
                Questions? Email us
              </Button>
            ) : (
              <Button href={LINKS.repo} target="_blank" rel="noopener noreferrer" size="sm">
                <BrandIcon name="github" width={15} height={15} /> Follow on GitHub
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={() => ref.current?.close()}>
              Close
            </Button>
          </div>
          {kind !== "privacy" && IS_GITHUB_PLACEHOLDER && (
            <p className="relative mt-4 font-medium text-[11px] text-ink-faint">
              Note: the GitHub link is a placeholder until the public repository exists.
            </p>
          )}
        </div>
      </dialog>
    </Ctx.Provider>
  );
}
