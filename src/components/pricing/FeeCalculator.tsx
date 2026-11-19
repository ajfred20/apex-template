"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { formatUsd } from "@/lib/format";

const FEE_RATE = 0.008;
const MAX_AMOUNT = 1_000_000;

const PRESETS = [
  { value: 100, label: "$100" },
  { value: 1_000, label: "$1,000" },
  { value: 10_000, label: "$10,000" },
] as const;

function sanitizeAmount(value: string): string {
  const cleaned = value.replace(/[^\d.]/g, "");

  if (!cleaned) {
    return "";
  }

  const [whole = "", ...rest] = cleaned.split(".");
  const decimals = rest.join("").slice(0, 2);
  const trimmedWhole = whole.slice(0, 7);

  return rest.length > 0 ? `${trimmedWhole}.${decimals}` : trimmedWhole;
}

export function FeeCalculator() {
  const [amountText, setAmountText] = useState("1000");

  const parsed = Number.parseFloat(amountText);
  const amount = Number.isFinite(parsed)
    ? Math.min(Math.max(parsed, 0), MAX_AMOUNT)
    : 0;
  const fee = Math.round(amount * FEE_RATE * 100) / 100;
  const net = Math.round((amount - fee) * 100) / 100;
  const keepPercent = amount > 0 ? ((net / amount) * 100).toFixed(1) : "100.0";

  return (
    <div className="rounded-panel border border-line bg-apricot p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[12px] font-medium leading-none tracking-[-0.015em]">
          Estimate your payout
        </h3>
        <span className="num rounded-full border border-line px-2 py-1 text-[9px] leading-none text-slate">
          Flat 0.8%
        </span>
      </div>

      <div className="mt-6">
        <label
          htmlFor="payment-amount"
          className="text-[10px] leading-none text-slate"
        >
          Payment amount
        </label>
        <div className="mt-2 flex items-center gap-2 rounded-2xl border border-line bg-[#fffdfb]/75 px-4 py-3.5 transition-shadow focus-within:ring-2 focus-within:ring-apex/35">
          <span className="num text-[24px] leading-none text-slate/70">$</span>
          <input
            id="payment-amount"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            value={amountText}
            onChange={(event) => setAmountText(sanitizeAmount(event.target.value))}
            placeholder="0.00"
            aria-describedby="amount-hint"
            className="num w-full min-w-0 bg-transparent text-[32px] leading-none tracking-[-0.035em] outline-none placeholder:text-slate/35 focus-visible:outline-none"
          />
          <span className="text-[9.5px] leading-none text-slate">USD</span>
        </div>
        <p id="amount-hint" className="mt-2 text-[9.5px] leading-[1.5] text-slate/75">
          Enter any amount up to $1,000,000.
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {PRESETS.map((preset) => {
          const active = amount === preset.value;
          return (
            <button
              key={preset.value}
              type="button"
              onClick={() => setAmountText(String(preset.value))}
              aria-pressed={active}
              className={cn(
                "num rounded-full border px-3 py-1.5 text-[10.5px] leading-none transition-colors duration-200",
                active
                  ? "border-ink bg-ink text-sand"
                  : "border-line bg-transparent text-slate hover:border-line-strong hover:text-ink",
              )}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-sand/80 p-4 sm:p-5">
        <dl className="space-y-2.5 text-[11.5px] leading-none">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-slate">Gross amount</dt>
            <dd className="num text-ink">{formatUsd(amount)}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-slate">Apex fee (0.8%)</dt>
            <dd className="num text-ink">−{formatUsd(fee)}</dd>
          </div>
        </dl>

        <div className="my-4 border-t border-line" />

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[9.5px] leading-none text-slate">Net payout</p>
            <output
              htmlFor="payment-amount"
              aria-live="polite"
              className="num mt-2 block text-[clamp(1.75rem,1.3rem+1.5vw,2.35rem)] leading-none tracking-[-0.045em]"
            >
              {formatUsd(net)}
            </output>
          </div>
          <span className="num rounded-full bg-success-soft px-2.5 py-1.5 text-[9.5px] leading-none text-success">
            You keep {keepPercent}%
          </span>
        </div>
      </div>

      <p className="mt-4 text-[9.5px] leading-[1.5] text-slate/75">
        Fees are deducted from the confirmed amount before settlement. Network
        fees are paid by the customer.
      </p>
    </div>
  );
}
