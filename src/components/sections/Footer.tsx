import { CONTACT_EMAIL, LINKS } from "../../config";
import { useInfoDialog } from "../ui/InfoDialog";
import { Logo } from "../ui/Logo";

export function Footer() {
  const openDialog = useInfoDialog();
  const link = "rounded text-ink-soft transition-colors hover:text-ink";
  return (
    <footer className="mx-auto max-w-[1240px] px-5 pb-10 pt-8 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Logo kanji />
          <span className="text-[13px] text-ink-faint">© 2026</span>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            <li>
              <a href="#about" className={link}>About</a>
            </li>
            <li>
              <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
            </li>
            <li>
              <button type="button" onClick={() => openDialog("privacy")} className={link}>Privacy</button>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className={link}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mt-6 text-[12px] leading-relaxed text-ink-faint">
        Sakura is an independent, open-source project in early development. Profiles, names and links shown on this page
        are fictional examples.
      </p>
    </footer>
  );
}
