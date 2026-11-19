import { Kicker } from "@/components/ui/Kicker";
import { PAIN_POINTS } from "@/data/site";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-ember py-band text-sand">
      <div className="shell">
        <Kicker index="03" tone="light">
          The problem
        </Kicker>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
          <h2 className="text-[clamp(2rem,1.55rem+1.65vw,2.9rem)] leading-[1.03] tracking-[-0.045em]">
            Cross-Border Payments Shouldn’t Cost You Time or Revenue.
          </h2>
          <p className="text-[14.5px] leading-[1.7] text-sand/65">
            Traditional payment gateways trap businesses with high FX fees,
            rolling reserves, slow T+5 bank settlements, and costly fraudulent
            chargebacks. Getting paid globally shouldn’t be harder than running
            your business.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line-light sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={point.label}
              className="bg-ember px-5 py-7 lg:px-6 lg:py-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="num text-[9px] leading-none text-sand/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="h-px w-6 bg-apex" />
              </div>
              <p className="num mt-10 text-[clamp(1.7rem,1.25rem+1.4vw,2.5rem)] leading-none tracking-[-0.04em]">
                {point.value}
              </p>
              <p className="mt-3 text-[10px] leading-none text-sand/65">
                {point.label}
              </p>
              <p className="mt-4 max-w-[26ch] text-[11.5px] leading-[1.55] text-sand/50">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
