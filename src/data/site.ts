export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#developers" },
  { label: "FAQ", href: "#faq" },
] as const satisfies readonly NavLink[];

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: readonly FooterLink[];
}

export const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Checkout", href: "#demo" },
      { label: "Payment Links", href: "#features" },
      { label: "API & Webhooks", href: "#developers" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Supported Chains",
    links: [
      { label: "Polygon", href: "#trust" },
      { label: "TRON", href: "#trust" },
      { label: "Base", href: "#trust" },
      { label: "BNB Chain", href: "#trust" },
      { label: "Solana", href: "#trust" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#developers" },
      { label: "Sandbox Status", href: "#demo" },
      { label: "API Reference", href: "#developers" },
      { label: "Security", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Apex", href: "#top" },
      { label: "Terms of Service", href: "#top" },
      { label: "Privacy Policy", href: "#top" },
      { label: "Contact Support", href: "#faq" },
    ],
  },
] as const satisfies readonly FooterGroup[];

export interface Wallet {
  name: string;
  note: string;
}

export const WALLETS = [
  { name: "MetaMask", note: "Browser · Mobile" },
  { name: "Trust Wallet", note: "Mobile · Extension" },
  { name: "Phantom", note: "Browser · Mobile" },
] as const satisfies readonly Wallet[];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS = [
  {
    question: "Which stablecoins and networks are supported?",
    answer:
      "Apex supports USDT and USDC across Polygon, TRON (TRC-20), Base, BNB Smart Chain (BEP-20), and Solana.",
  },
  {
    question: "Do you hold my funds?",
    answer:
      "No. Apex routes confirmed payments directly to your self-custody wallet address with full on-chain transparency.",
  },
  {
    question: "Can I test the checkout before going live?",
    answer:
      "Yes. Every account includes free testnet API keys and sandbox simulation tools.",
  },
  {
    question:
      "What happens if a customer sends an underpayment or late payment?",
    answer:
      "Our indexer still tracks the funds and flags the session so you can request the balance or issue a refund safely.",
  },
] as const satisfies readonly Faq[];

export interface PainPoint {
  value: string;
  label: string;
  detail: string;
}

export const PAIN_POINTS = [
  {
    value: "1.5–3.9%",
    label: "Card and FX fees",
    detail: "Processing markups stack on every cross-border sale.",
  },
  {
    value: "T+5",
    label: "Settlement windows",
    detail: "Bank rails hold your revenue for days, not seconds.",
  },
  {
    value: "Reserves",
    label: "Rolling reserves",
    detail: "Capital locked against future volume you already earned.",
  },
  {
    value: "Chargebacks",
    label: "Fraud disputes",
    detail: "Revenue clawed back long after the customer received the goods.",
  },
] as const satisfies readonly PainPoint[];
