import { Kicker } from "@/components/ui/Kicker";
import { CHAINS } from "@/data/chains";
import { WALLETS } from "@/data/site";
import { cn } from "@/lib/cn";

function Index({ value }: { value: number }) {
  return (
    <span className="num text-[9px] leading-none text-slate/60">
      {String(value).padStart(2, "0")}
    </span>
  );
}

export function Trust() {
  return (
    <section id="trust" className="scroll-mt-24 py-section">
      <div className="shell">
        <Kicker index="02">Trusted rails</Kicker>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-end lg:gap-14">
          <h2 className="max-w-[22ch] text-[clamp(1.9rem,1.55rem+1.25vw,2.55rem)] leading-[1.06] tracking-[-0.04em]">
            Trusted by Modern Merchants &amp; Supported Across Leading Chains.
          </h2>
          <p className="text-[14.5px] leading-[1.65] text-slate">
            Built to work seamlessly with the networks and wallets your
            customers already use—Polygon, TRON, Base, BNB Chain, Solana,
            MetaMask, Trust Wallet, and Phantom.
          </p>
        </div>

        <div className="mt-12 border-t border-line">
          <div className="grid gap-5 py-6 lg:grid-cols-[132px_1fr] lg:items-stretch lg:gap-0 lg:py-0">
            <div className="text-[11px] leading-none text-slate lg:py-6">
              Networks
            </div>
            <div className="grid grid-cols-2 border-l border-t border-line md:grid-cols-5">
              {CHAINS.map((chain, index) => (
                <div
                  key={chain.id}
                  className={cn(
                    "border-b border-r border-line bg-sand px-4 py-5 lg:px-5 lg:py-6",
                    index === CHAINS.length - 1 &&
                      "col-span-2 md:col-span-1",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <Index value={index + 1} />
                    <span
                      aria-hidden="true"
                      className="size-2 rounded-full"
                      style={{ backgroundColor: chain.dot }}
                    />
                  </div>
                  <p className="mt-8 text-[14px] leading-none tracking-[-0.02em]">
                    {chain.name}
                  </p>
                  <p className="num mt-2 text-[10px] leading-none text-slate">
                    {chain.standard}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 border-t border-line py-6 lg:grid-cols-[132px_1fr] lg:items-stretch lg:gap-0 lg:py-0">
            <div className="text-[11px] leading-none text-slate lg:py-6">
              Wallets
            </div>
            <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-3">
              {WALLETS.map((wallet, index) => (
                <div
                  key={wallet.name}
                  className="border-b border-r border-line bg-sand px-4 py-5 lg:px-5 lg:py-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Index value={index + 1} />
                    <span className="text-[9px] leading-none text-slate/60">
                      Self-custody
                    </span>
                  </div>
                  <p className="mt-8 text-[14px] leading-none tracking-[-0.02em]">
                    {wallet.name}
                  </p>
                  <p className="mt-2 text-[10px] leading-none text-slate">
                    {wallet.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
