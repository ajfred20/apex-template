import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaBanner() {
  return (
    <section id="cta" className="scroll-mt-24 pb-section pt-2">
      <div className="mx-auto max-w-[1192px] px-4 sm:px-6">
        <div className="grain relative isolate overflow-hidden rounded-[44px] px-4 py-12 sm:px-10 sm:py-20 lg:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(125deg,#ff6a24_0%,#ff8f3f_40%,#ffb85c_72%,#ffd08a_100%)]" />
            <div className="absolute -left-24 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-[#ff4d0a]/75 blur-[80px]" />
            <div className="absolute -right-20 top-[-10%] size-[440px] rounded-full bg-[#ffe0b8]/60 blur-[90px]" />
            <div className="absolute bottom-[-32%] left-1/3 h-[440px] w-[760px] rounded-full bg-[#b83a06]/45 blur-[110px]" />
            <div className="absolute left-1/2 top-1/2 h-[92%] w-[99%] -translate-x-1/2 -translate-y-1/2 rounded-[62px] border border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-[68%] w-[84%] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-[54px] border border-white/30" />
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[91%] -translate-x-1/2 -translate-y-1/2 rotate-[3deg] rounded-[54px] border border-white/20" />
          </div>

          <div className="relative mx-auto max-w-[980px] overflow-hidden rounded-stage border border-white/45 bg-apricot px-6 py-14 text-center shadow-[0_50px_120px_-50px_rgba(31,18,9,0.65)] sm:px-14 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_0%,rgba(255,255,255,0.9),transparent_72%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 size-72 rounded-full bg-apex/10 blur-3xl"
            />
            <h2 className="relative mx-auto text-[clamp(1.75rem,1.25rem+1.55vw,2.5rem)] leading-[1.06] tracking-[-0.045em]">
              Ready to Unlock{" "}
              <span className="block sm:inline">Borderless USD</span>{" "}
              <span className="block sm:inline">Payments?</span>
              <span className="mt-4 block text-[clamp(1rem,0.9rem+0.5vw,1.25rem)] leading-[1.5] tracking-[-0.015em] text-slate">
                Create your free merchant account in under two minutes.
              </span>
            </h2>

            <div className="relative mt-8">
              <ButtonLink
                href="#pricing"
                size="lg"
                icon={
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={16}
                    strokeWidth={1.7}
                  />
                }
              >
                Create Free Account
              </ButtonLink>
            </div>

            <p className="relative mt-4 text-[9.5px] leading-none text-slate/70">
              Free sandbox access included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
