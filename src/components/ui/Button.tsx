import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-ivory hover:bg-[#2e2826] shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_8px_20px_-10px_rgb(31_27_26/0.6)]",
  secondary: "bg-white/70 text-ink ring-1 ring-line-strong hover:bg-white hover:ring-ink/30",
  ghost: "text-ink-soft hover:text-ink hover:bg-ink/5",
  light: "bg-ivory text-ink hover:bg-white",
  "outline-light": "text-ivory ring-1 ring-white/25 hover:bg-white/10 hover:ring-white/40",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13.5px]",
  md: "h-11 px-5 text-[14.5px]",
  lg: "h-[52px] px-7 text-[15.5px]",
};

interface Common {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;
  const cls = `group/btn inline-flex select-none items-center justify-center gap-2 rounded-full font-medium tracking-[-0.005em] transition-all duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

  if (rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
