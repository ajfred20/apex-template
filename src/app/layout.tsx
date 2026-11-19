import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Apex — Stablecoin payments without borders or delays",
  description:
    "Accept USDT and USDC on Polygon, TRON, Base, BNB Chain, and Solana. Instant finality, zero chargebacks, and a flat 0.8% fee.",
  applicationName: "Apex",
  keywords: [
    "stablecoin payments",
    "USDT",
    "USDC",
    "crypto payment gateway",
    "Polygon",
    "TRON",
    "Base",
    "BNB Chain",
    "Solana",
  ],
  openGraph: {
    title: "Apex — Stablecoin payments without borders or delays",
    description:
      "Accept USDT and USDC on five major networks. Settlement in seconds, zero chargebacks, 0.8% flat.",
    type: "website",
    siteName: "Apex",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f2ee",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-dvh bg-sand font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
