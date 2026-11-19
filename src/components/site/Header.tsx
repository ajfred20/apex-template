"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { NAV_LINKS } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-sand/[0.96]" />
        <div className="absolute inset-0 backdrop-blur-[12px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      </div>

      <div className="shell relative flex h-[72px] items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="Apex — back to top"
          className="rounded-md focus-visible:outline-offset-8"
        >
          <Wordmark />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] leading-none text-slate transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="#pricing"
            size="sm"
            icon={
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={15}
                strokeWidth={1.7}
              />
            }
          >
            Get Started
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-apricot md:hidden"
        >
          <HugeiconsIcon
            icon={open ? Cancel01Icon : Menu01Icon}
            size={22}
            strokeWidth={1.6}
          />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-sand/95 backdrop-blur-md md:hidden"
        >
          <div className="shell py-4">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-[15px] leading-none text-ink last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ButtonLink
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-4 w-full"
              icon={
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  strokeWidth={1.7}
                />
              }
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
