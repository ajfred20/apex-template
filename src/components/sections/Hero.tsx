import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  PlayIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import GradientASCII from "@/components/GradientASCII"; // update path if needed
import { CheckoutPreview } from "@/components/checkout/CheckoutPreview";
import { ButtonLink } from "@/components/ui/ButtonLink";

const PROOF_POINTS = [
  "0.8% flat fee",
  "No chargebacks",
  "Instant settlement",
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1F1209] pb-10 pt-12 text-white sm:pt-16 lg:pb-16 lg:pt-24">
      {/* Full-hero GradientASCII background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <GradientASCII
          colors={["#1F1209", "#FF5A1F", "#E64810", "#FFE4D6"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={0.85}
          gradientOpacity={0.9}
          glow={0.25}
          mouseInteraction={true}
          clickEffect="wave"
          lightMode={false}
          fontFamily='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' dpr={undefined} style={undefined}        />
        <div className="absolute inset-0 bg-[#1F1209]/45" />
      </div>

      <div className="shell relative z-10 text-center">
        <p className="rise inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-[#1F1209]/70 px-3 py-1.5 text-[10.5px] leading-none text-white/90 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-[#FF5A1F]" aria-hidden="true" />
          Non-custodial stablecoin settlement
          <span className="h-3 w-px bg-white/15 max-[359px]:hidden" aria-hidden="true" />
          <span className="num">USDT · USDC</span>
        </p>

        <h1 className="rise rise-delay mx-auto mt-6 max-w-[880px] text-[clamp(2.55rem,1.8rem+2.85vw,4.05rem)] leading-[1.02] tracking-[-0.045em] text-white max-[359px]:text-[2rem]">
          Accept Stablecoin Payments Without Borders or Delays
          <span className="text-[#FF5A1F]">.</span>
        </h1>

        <p className="rise rise-delay mx-auto mt-6 max-w-[560px] text-[15.5px] leading-[1.6] text-white/80 sm:text-[17px]">
          Receive USDT and USDC across fast, low-fee blockchains in
          seconds—with zero chargebacks and instant wallet or bank settlement.
        </p>

        <div className="rise rise-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink
            href="#pricing"
            size="lg"
            className="w-full sm:w-auto"
            icon={
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                strokeWidth={1.7}
              />
            }
          >
            Start Accepting Crypto
          </ButtonLink>
          <ButtonLink
            href="#demo"
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-white"
            iconPosition="left"
            icon={
              <HugeiconsIcon icon={PlayIcon} size={15} strokeWidth={1.8} />
            }
          >
            View Live Demo
          </ButtonLink>
        </div>

        <p className="rise rise-delay-2 mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10.5px] leading-none text-white/75">
          {PROOF_POINTS.map((point, index) => (
            <span key={point} className="inline-flex items-center gap-4">
              {point}
              {index < PROOF_POINTS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-white/30"
                />
              ) : null}
            </span>
          ))}
        </p>
      </div>

      <div
        id="demo"
        className="relative z-10 mx-auto mt-12 max-w-[1192px] scroll-mt-28 px-4 sm:mt-16 sm:px-6"
      >
        <div className="relative flex justify-center py-8 sm:py-11 lg:py-14">
          <CheckoutPreview />

          <div
            aria-hidden="true"
            className="drift-a absolute left-0 top-14 hidden w-[188px] rounded-2xl border border-line bg-[#fffdfb]/[0.92] p-4 text-ink shadow-[0_24px_50px_-30px_rgba(31,18,9,0.45)] backdrop-blur-sm lg:block"
          >
            <p className="text-[9px] leading-none text-slate">Settlement</p>
            <p className="num mt-2 text-[23px] text-ink leading-none tracking-[-0.03em]">
              $246.02
            </p>
            <p className="mt-1 text-[9px] leading-none text-slate">
              net to wallet
            </p>
            <div className="mt-3 flex items-center gap-1.5 border-t border-line pt-2.5 text-[9px] leading-none text-success">
              <HugeiconsIcon
                icon={Tick02Icon}
                size={11}
                strokeWidth={2}
              />
              Confirmed in 3.2s
            </div>
          </div>

          <div
            aria-hidden="true"
            className="drift-b absolute right-0 top-24 hidden w-[200px] rounded-2xl border border-line bg-[#fffdfb]/[0.92] p-4 text-ink shadow-[0_24px_50px_-30px_rgba(31,18,9,0.45)] backdrop-blur-sm lg:block"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[9.5px] leading-none text-ink">
                payment.confirmed
              </span>
              <span className="num rounded bg-success-soft px-1.5 py-0.5 text-[8.5px] leading-none text-success">
                200
              </span>
            </div>
            <p className="mt-2.5 font-mono text-[9px] leading-[1.6] text-slate">
              HMAC-SHA256 verified
              <br />
              delivered in 12 ms
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-2 pb-2 text-[10px] leading-none text-white/75">
          <span className="num">01 — Checkout preview</span>
          <span>Sandbox · no real funds</span>
        </div>
      </div>
    </section>
  );
}