import type { ComponentProps, ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Blockchain01Icon,
  CodeIcon,
  Copy01Icon,
  FlashIcon,
  Link01Icon,
} from "@hugeicons/core-free-icons";
import { Kicker } from "@/components/ui/Kicker";
import { CHAINS } from "@/data/chains";
import { cn } from "@/lib/cn";

interface FeatureCardProps {
  id?: string;
  index: string;
  category: string;
  icon: ComponentProps<typeof HugeiconsIcon>["icon"];
  title: string;
  body: string;
  className?: string;
  children: ReactNode;
}

function FeatureCard({
  id,
  index,
  category,
  icon,
  title,
  body,
  className,
  children,
}: FeatureCardProps) {
  return (
    <article
      id={id}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-card border border-line bg-apricot/45 p-6 transition-colors duration-300 hover:bg-apricot sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 size-60 rounded-full bg-apex/[0.07] blur-3xl"
      />
      <div className="flex items-start justify-between gap-4">
        <p className="flex items-center gap-2 text-[9.5px] leading-none text-slate/75">
          <span className="num">{index}</span>
          <span aria-hidden="true" className="h-px w-4 bg-line-strong" />
          {category}
        </p>
        <HugeiconsIcon
          icon={icon}
          size={20}
          strokeWidth={1.5}
          className="shrink-0 text-ink/55 transition-colors duration-300 group-hover:text-ink/80"
        />
      </div>

      <h3 className="mt-12 max-w-[20ch] text-[clamp(1.3rem,1.15rem+0.5vw,1.45rem)] leading-[1.12] tracking-[-0.035em]">
        {title}
      </h3>
      <p className="mt-3 max-w-[44ch] text-[13px] leading-[1.6] text-slate">
        {body}
      </p>

      <div className="mt-auto pt-8">{children}</div>
    </article>
  );
}

function ChainVisual() {
  return (
    <div className="rounded-2xl border border-line bg-[#fffdfb]/75 p-3">
      <div className="flex flex-wrap gap-1.5">
        {CHAINS.map((chain, index) => (
          <span
            key={chain.id}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[9.5px] leading-none",
              index === 0
                ? "border-ink bg-ink text-sand"
                : "border-line bg-white text-slate",
            )}
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full"
              style={{ backgroundColor: chain.dot }}
            />
            {chain.shortName}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-2.5 text-[9px] leading-none text-slate">
        <span>Auto-detected on selection</span>
        <span className="num text-ink">USDT · USDC</span>
      </div>
    </div>
  );
}

function SettlementVisual() {
  return (
    <div className="rounded-2xl border border-line bg-[#fffdfb]/80 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[9.5px] leading-none text-slate">
          <span className="size-1.5 rounded-full bg-success" />
          Payment confirmed
        </span>
        <span className="num text-[9px] leading-none text-slate">3.2s</span>
      </div>
      <p className="num mt-3 text-[26px] leading-none tracking-[-0.035em]">
        $248.00
      </p>
      <dl className="mt-3 space-y-1.5 border-t border-line pt-3 text-[9.5px] leading-none">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-slate">Apex fee</dt>
          <dd className="num">$1.98</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-slate">Net to wallet</dt>
          <dd className="num">$246.02</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-slate">Chargebacks</dt>
          <dd className="num text-success">0</dd>
        </div>
      </dl>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="rounded-2xl bg-ink p-4 font-mono text-[10.5px] leading-[1.7] text-sand/75">
      <div className="flex items-center justify-between gap-3 pb-2 text-[8.5px] leading-none text-sand/40">
        <span>POST /v1/payments</span>
        <span className="num text-success">201</span>
      </div>
      <pre className="overflow-x-auto whitespace-pre">
        <code>
          <span className="text-sand/35">{"{"}</span>
          {"\n  "}
          <span className="text-[#ffb98f]">&quot;amount_usd&quot;</span>
          {": "}
          <span className="num text-sand">248.00</span>
          {","}
          {"\n  "}
          <span className="text-[#ffb98f]">&quot;chain&quot;</span>
          {": "}
          <span className="text-sand">&quot;polygon&quot;</span>
          {"\n"}
          <span className="text-sand/35">{"}"}</span>
        </code>
      </pre>
      <div className="mt-2 flex items-center justify-between gap-3 border-t border-sand/10 pt-2 text-[8.5px] leading-none text-sand/45">
        <span>webhook signed</span>
        <span className="text-success">200 OK</span>
      </div>
    </div>
  );
}

function PaymentLinkVisual() {
  return (
    <div className="rounded-2xl border border-line bg-[#fffdfb]/80 p-3">
      <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2.5">
        <HugeiconsIcon
          icon={Link01Icon}
          size={14}
          strokeWidth={1.7}
          className="shrink-0 text-slate"
        />
        <span className="num flex-1 truncate text-[10.5px] leading-none text-ink">
          apex.pay/l/studio-4821
        </span>
        <span
          aria-hidden="true"
          className="rounded-md bg-apricot p-1 text-slate"
        >
          <HugeiconsIcon icon={Copy01Icon} size={11} strokeWidth={1.8} />
        </span>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {["Single-use", "Reusable", "No code"].map((tag, index) => (
          <span
            key={tag}
            className={cn(
              "rounded-full border px-2 py-1 text-[8.5px] leading-none",
              index === 0
                ? "border-ink bg-ink text-sand"
                : "border-line bg-white text-slate",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Solution() {
  return (
    <section id="features" className="scroll-mt-24 py-section">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Kicker index="04">The platform</Kicker>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(2.1rem,1.6rem+1.9vw,3.2rem)] leading-[1.03] tracking-[-0.045em]">
              Everything You Need to Accept Stablecoins Effortlessly.
            </h2>
          </div>
          <p className="max-w-[300px] text-[11.5px] leading-[1.6] text-slate lg:text-right">
            One integration for checkout, payment links, and settlement.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <FeatureCard
            index="01"
            category="Multi-Chain Checkout"
            icon={Blockchain01Icon}
            title="Pay on Any Major Network."
            body="Accept USDT and USDC on Polygon, TRON, Base, BSC, and Solana with automatic network detection and real-time QR codes."
            className="lg:col-span-7 lg:min-h-[356px]"
          >
            <ChainVisual />
          </FeatureCard>

          <FeatureCard
            index="02"
            category="Instant Finality"
            icon={FlashIcon}
            title="Confirmed in Seconds, Yours Forever."
            body="On-chain settlement eliminates card fraud and chargeback disputes. Once confirmed, funds go straight to your wallet."
            className="lg:col-span-5 lg:min-h-[356px]"
          >
            <SettlementVisual />
          </FeatureCard>

          <FeatureCard
            id="developers"
            index="03"
            category="Developer-First"
            icon={CodeIcon}
            title="Integrate in Minutes, Not Weeks."
            body="Clean REST APIs, isolated testnet sandboxes, and HMAC-signed webhooks keep your backend synced automatically."
            className="scroll-mt-28 lg:col-span-5 lg:min-h-[330px]"
          >
            <CodeVisual />
          </FeatureCard>

          <FeatureCard
            index="04"
            category="No-Code Payment Links"
            icon={Link01Icon}
            title="Share a Link and Get Paid Anywhere."
            body="Create reusable or single-use payment links from your dashboard—ideal for freelancers, agencies, and social sellers."
            className="lg:col-span-7 lg:min-h-[330px]"
          >
            <PaymentLinkVisual />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
