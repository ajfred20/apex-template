import { cn } from "@/lib/cn";

interface ApexMarkProps {
  className?: string;
  cutout?: string;
}

export function ApexMark({ className, cutout = "var(--color-sand)" }: ApexMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
    >
      <path d="M12 1.6 22.6 21.2H1.4L12 1.6Z" fill="currentColor" />
      <path d="M12 9.6 17.4 21.2H6.6L12 9.6Z" fill={cutout} />
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}

export function Wordmark({
  className,
  markClassName,
  textClassName,
}: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <ApexMark className={cn("size-[18px] text-apex", markClassName)} />
      <span
        className={cn(
          "text-[17px] font-medium leading-none tracking-[-0.045em]",
          textClassName,
        )}
      >
        Apex
      </span>
    </span>
  );
}
