import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

const BASE =
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.98]";

const SIZES: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-[13px]",
  md: "h-11 px-5 text-[13.5px]",
  lg: "h-12 px-6 text-[14px]",
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-apex text-ink hover:bg-apex-deep",
  secondary:
    "border border-line-strong bg-transparent text-ink hover:border-ink/40 hover:bg-apricot",
  dark: "bg-ink text-sand hover:bg-ember",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "right",
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(BASE, SIZES[size], VARIANTS[variant], className)}
    >
      {iconPosition === "left" ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
      {iconPosition === "right" && icon ? (
        <span
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
    </a>
  );
}
