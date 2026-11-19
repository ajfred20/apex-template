import { Kicker } from "@/components/ui/Kicker";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-section">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker index="06">FAQ</Kicker>
            <h2 className="mt-6 max-w-[14ch] text-[clamp(2.1rem,1.6rem+1.9vw,3.2rem)] leading-[1.03] tracking-[-0.045em]">
              Frequently Asked Questions.
            </h2>
            <p className="mt-6 max-w-[300px] text-[12.5px] leading-[1.65] text-slate">
              Answers on supported networks, custody, sandbox testing, and
              payment edge cases.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
