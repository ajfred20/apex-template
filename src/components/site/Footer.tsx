import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { Wordmark } from "@/components/ui/Wordmark";
import { FOOTER_GROUPS } from "@/data/site";
import { cn } from "@/lib/cn";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-sand">
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-4 py-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Wordmark />
            <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
            <p className="text-[10.5px] leading-none text-slate">
              Stablecoin payments, without borders.
            </p>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[10.5px] leading-none text-slate transition-colors hover:text-ink"
          >
            Back to top
            <HugeiconsIcon
              icon={ArrowUp01Icon}
              size={12}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line py-12 sm:grid-cols-4 sm:gap-0">
          {FOOTER_GROUPS.map((group, index) => (
            <div
              key={group.title}
              className={cn(
                "sm:border-l sm:border-line sm:px-5",
                index === 0 && "sm:border-l-0 sm:pl-0",
              )}
            >
              <p className="flex items-center gap-2 text-[10px] leading-none text-slate/70">
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="h-2.5 w-px bg-line" />
                {group.title}
              </p>
              <ul className="mt-5 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12.5px] leading-[1.5] text-slate transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-12 pb-3">
          <p
            aria-hidden="true"
            className="select-none text-center text-[clamp(5rem,26vw,12rem)] leading-[1] tracking-[-0.06em] text-ink/[0.07]"
          >
            Apex
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-[10px] leading-none text-slate/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Apex. All rights reserved.</p>
          <p>Hero Background gotten from React Bits 🧡</p>
          <p>Non-custodial settlement · USDT + USDC</p>
        </div>
      </div>
    </footer>
  );
}
