"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { FAQS } from "@/data/site";
import { cn } from "@/lib/cn";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {FAQS.map((faq, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={faq.question} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-start gap-4 py-5 text-left sm:py-6"
              >
                <span className="num mt-1 shrink-0 text-[9px] leading-none text-slate/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] leading-[1.35] tracking-[-0.02em] transition-colors group-hover:text-ink/70 sm:text-[16px]">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                    open
                      ? "border-ink bg-ink text-sand"
                      : "border-line text-ink group-hover:border-line-strong",
                  )}
                >
                  <HugeiconsIcon
                    icon={open ? MinusSignIcon : PlusSignIcon}
                    size={14}
                    strokeWidth={1.7}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              aria-hidden={!open}
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-6 pl-8 pr-10 text-[13px] leading-[1.65] text-slate">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
