import { Kicker } from "@/components/ui/Kicker";
import { FeeCalculator } from "@/components/pricing/FeeCalculator";

const INCLUDED = ["No setup fees", "No monthly minimums", "Free sandbox"] as const;

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker index="05">Pricing</Kicker>

            <h2 className="mt-6 max-w-[19ch] text-[clamp(2rem,1.55rem+1.65vw,2.75rem)] leading-[1.03] tracking-[-0.045em]">
              Simple, Transparent{" "}
              <span className="whitespace-nowrap">Pay-As-You-Go</span> Pricing.
            </h2>

            <p className="mt-6 max-w-[430px] text-[14.5px] leading-[1.7] text-slate">
              No setup fees, no monthly minimums, and no hidden FX markups. Pay
              a flat{" "}
              <strong className="font-medium text-ink">
                0.8% per confirmed transaction
              </strong>{" "}
              with free testnet sandbox access forever.
            </p>

            <div className="mt-10 flex flex-wrap items-end gap-x-4 gap-y-2 border-t border-line pt-6">
              <span className="num text-[clamp(3.8rem,3rem+3vw,5.4rem)] leading-[0.8] tracking-[-0.055em]">
                0.8<span className="text-[0.55em]">%</span>
              </span>
              <span className="pb-1 text-[11px] leading-none text-slate">
                per confirmed transaction
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10.5px] leading-none text-slate">
              {INCLUDED.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-apex"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <FeeCalculator />
        </div>
      </div>
    </section>
  );
}
