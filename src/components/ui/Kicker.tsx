import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface KickerProps {
  index: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

export function Kicker({
  index,
  children,
  tone = "dark",
  className,
}: KickerProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] leading-none tracking-[0.01em]",
        tone === "light" ? "text-sand/55" : "text-slate",
        className,
      )}
    >
      <span className="num opacity-70">{index}</span>
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-7",
          tone === "light" ? "bg-sand/30" : "bg-ink/25",
        )}
      />
      <span>{children}</span>
    </p>
  );
}
