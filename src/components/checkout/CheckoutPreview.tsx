"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  Copy01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { ApexMark } from "@/components/ui/Wordmark";
import { CHAINS, type ChainId } from "@/data/chains";
import { cn } from "@/lib/cn";
import { formatCountdown } from "@/lib/format";

const SESSION_SECONDS = 15 * 60;
const AMOUNT = 248;

type Token = "USDT" | "USDC";

const TOKENS: readonly Token[] = ["USDT", "USDC"];

export function CheckoutPreview() {
  const [token, setToken] = useState<Token>("USDT");
  const [chainId, setChainId] = useState<ChainId>("polygon");
  const [copied, setCopied] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(SESSION_SECONDS);
  const copyTimeout = useRef<number | null>(null);

  const chain = CHAINS.find((item) => item.id === chainId) ?? CHAINS[0];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeout.current !== null) {
        window.clearTimeout(copyTimeout.current);
      }
    };
  }, []);

  const qrValue = `apex-sandbox://checkout/cs_demo_8421?token=${token}&chain=${chainId}&amount=${AMOUNT.toFixed(
    2,
  )}`;

  function selectToken(next: Token) {
    setToken(next);
    setSecondsLeft(SESSION_SECONDS);
    setCopied(false);
  }

  function selectChain(next: ChainId) {
    setChainId(next);
    setSecondsLeft(SESSION_SECONDS);
    setCopied(false);
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(chain.address);
      setCopied(true);

      if (copyTimeout.current !== null) {
        window.clearTimeout(copyTimeout.current);
      }

      copyTimeout.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="w-full max-w-[424px]">
      <div className="relative overflow-hidden rounded-[26px] text-ink border border-line bg-[#fffdfb] shadow-[0_44px_90px_-46px_rgba(31,18,9,0.5)]">
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2">
            <ApexMark
              cutout="#fffdfb"
              className="size-[13px] text-apex"
            />
            <span className="text-[11.5px] font-medium tracking-[-0.02em]">
              Apex Checkout
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-apricot px-2.5 py-1 text-[9px] font-medium leading-none text-slate">
            <span className="size-1.5 rounded-full bg-apex" />
            Sandbox
          </span>
        </div>

        <div className="px-5 pb-4 pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] leading-none text-slate">
                Apex Studio · Order #4821
              </p>
              <p className="num mt-2 text-[38px] leading-none tracking-[-0.045em]">
                $248.00
              </p>
            </div>
            <p className="num pt-1 text-[10px] leading-none text-slate">USD</p>
          </div>

          <div
            role="group"
            aria-label="Stablecoin"
            className="mt-4 flex rounded-full bg-sand p-1"
          >
            {TOKENS.map((item) => {
              const active = item === token;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => selectToken(item)}
                  aria-pressed={active}
                  className={cn(
                    "num flex h-8 flex-1 items-center justify-center rounded-full text-[11.5px] font-medium leading-none transition-colors duration-200",
                    active
                      ? "bg-ink text-sand"
                      : "text-slate hover:text-ink",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] leading-none text-slate">Network</p>
              <p className="num text-[10px] leading-none text-slate">
                {chain.standard}
              </p>
            </div>
            <div
              role="group"
              aria-label="Blockchain network"
              className="mt-2 grid grid-cols-5 gap-1.5"
            >
              {CHAINS.map((item) => {
                const active = item.id === chainId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectChain(item.id)}
                    aria-pressed={active}
                    className={cn(
                      "flex h-11 flex-col items-center justify-center gap-1.5 rounded-xl border text-[8.5px] font-medium leading-none transition-colors duration-200",
                      active
                        ? "border-ink bg-ink text-sand"
                        : "border-line bg-white/70 text-slate hover:border-line-strong hover:text-ink",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: item.dot }}
                    />
                    {item.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-line bg-sand/55 p-3">
            <div className="size-[88px] shrink-0 rounded-lg bg-white p-1.5">
              <QRCode
                value={qrValue}
                size={76}
                bgColor="#ffffff"
                fgColor="#120E0B"
                level="M"
                title="Demo checkout QR code"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9.5px] leading-none text-slate">
                Send exactly
              </p>
              <p className="num mt-1.5 text-[15px] leading-none tracking-[-0.02em]">
                248.00 {token}
              </p>
              <div className="mt-2.5 flex items-center gap-1.5">
                <span className="num truncate text-[10px] leading-none text-slate">
                  {chain.address}
                </span>
                <button
                  type="button"
                  onClick={copyAddress}
                  className={cn(
                    "inline-flex size-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-200",
                    copied
                      ? "border-success/30 bg-success-soft text-success"
                      : "border-line bg-white text-slate hover:text-ink",
                  )}
                >
                  <HugeiconsIcon
                    icon={copied ? Tick02Icon : Copy01Icon}
                    size={12}
                    strokeWidth={1.8}
                  />
                  <span className="sr-only">Copy demo deposit address</span>
                </button>
                <span className="sr-only" role="status" aria-live="polite">
                  {copied ? "Demo address copied" : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 text-[9.5px] text-slate">
            <span className="inline-flex items-center gap-1.5">
              <HugeiconsIcon
                icon={Clock01Icon}
                size={11}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              Expires in
              <span className="num text-ink">
                {formatCountdown(secondsLeft)}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-success" />
              Awaiting payment
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-line bg-sand/45 px-5 py-2.5 text-[9px] text-slate">
          <span>
            Est. network fee{" "}
            <span className="num text-ink">{chain.networkFee}</span>
          </span>
          <span className="num">
            {chain.eta} · {chain.finality}
          </span>
        </div>
      </div>

      <p className="mt-3 text-center text-[9.5px] leading-relaxed text-slate/85">
        Demo QR and address · no real funds move
      </p>
    </div>
  );
}
