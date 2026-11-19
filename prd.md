# Product Requirements Document (PRD): Apex Stablecoin Payment Gateway

## 1. Document Control & Overview
- **Product Name:** Apex
- **Document Version:** 1.0 (MVP & Phase 2 Roadmap)
- **Status:** Draft / Ready for Engineering Review
- **Target Market:** Emerging Markets (with primary initial focus on Nigerian & African businesses, e-commerce merchants, and freelancers)
- **Core Value Proposition:** A non-custodial / hybrid stablecoin payment gateway enabling businesses to accept USDT and USDC payments seamlessly via checkout links, APIs, and plugins—eliminating chargebacks, minimizing cross-border settlement friction, and offering optional instant fiat off-ramping.

---

## 2. Problem Statement & Objectives
### 2.1 Problem Statement
Merchants and digital businesses in emerging markets face severe friction with traditional payment rails:
- High transaction fees (1.5% – 3.9%+) and rolling reserves.
- Delayed cross-border settlements (T+3 to T+7 business days).
- High rates of payment failures, card declines, and fraudulent chargebacks.
- Foreign exchange (FX) volatility and difficulty receiving USD-denominated payments.

### 2.2 Product Objectives
1. Enable merchants to accept major stablecoins (**USDT** and **USDC**) across low-fee blockchain networks (**Polygon**, **TRON**, **Base**, **BSC**, and **Solana**) in under 60 seconds.
2. Provide a frictionless, Paystack/Stripe-grade hosted checkout UI and developer-friendly REST API / webhooks.
3. Achieve >99.9% payment detection reliability via real-time on-chain indexers and multi-RPC failover.
4. Offer automated or manual settlement options (direct non-custodial wallet forwarding or automated fiat off-ramp to local bank accounts).

---

## 3. Target Audience & User Personas
1. **E-Commerce & SaaS Merchants:** Online stores, digital product creators, and SaaS platforms looking to accept global payments without FX bottlenecks.
2. **Freelancers & Agencies:** Remote workers and service providers billing international clients who want instant USD-pegged payouts without excessive wire fees.
3. **End Customers (Payers):** Crypto-native or stablecoin-holding buyers paying via MetaMask, Trust Wallet, Phantom, TronLink, or centralized exchange (CEX) withdrawals (e.g., Bybit, Binance, Bitget).

---

## 4. Must-Haves (MVP Scope - P0)
These features are strictly required for the initial launch of Apex:

### 4.1 Merchant Onboarding & Dashboard
- **Account Creation & Auth:** Email/password registration, 2FA (TOTP), and role-based access (Owner, Developer).
- **KYB/KYC Tiering:** Basic tier for crypto-to-crypto settlements; verified KYB/KYC tier for fiat off-ramping and higher volume limits.
- **Merchant Dashboard:** Real-time overview of total volume (USD equivalent), transaction count, settlement status, and recent payment activity.
- **Payout Wallet Configuration:** Ability to whitelist and configure destination self-custody wallet addresses per supported network.

### 4.2 Core Payment Processing Engine
- **Supported Assets & Networks:**
  - **USDT:** Polygon, TRON (TRC-20), BNB Smart Chain (BEP-20), Solana.
  - **USDC:** Polygon, Base, Solana, Ethereum (optional/high-value).
- **Dynamic Deposit Address / Payment Session Generation:** Generate unique, time-bound payment sessions (e.g., 15–30 minute expiration window) with exact amount locking and network selection.
- **QR Code & Wallet Connect Checkout:** Clean hosted checkout modal displaying network badge, exact amount, copyable address, QR code, countdown timer, and browser wallet connection (WalletConnect / RainbowKit / Solana Wallet Adapter).
- **Underpayment / Overpayment Handling:** Automated detection of partial payments (prompting payer to send remaining balance) and overpayment flagging for manual or automated refund.

### 4.3 Developer Tools & Integrations
- **REST API & API Keys:** Testnet (Sandbox) and Mainnet (Live) API keys (`pk_test_...`, `sk_live_...`) for programmatic invoice/session creation.
- **Webhooks:** Signed HMAC-SHA256 webhook events (`payment.created`, `payment.pending`, `payment.confirmed`, `payment.expired`, `payment.failed`) with automatic exponential backoff retries.
- **No-Code Payment Links:** Shareable, customizable payment links for freelancers and social commerce vendors without coding knowledge.

### 4.4 Settlement & Accounting
- **Direct Crypto Settlement:** Automated forwarding (sweep) or direct non-custodial routing of confirmed stablecoins to the merchant's designated wallet, net of Apex's platform fee (e.g., 0.5% – 1.0%).
- **Transaction Ledger & CSV Export:** Filterable transaction history with on-chain transaction hashes (`txHash`), block explorer links, timestamps, and downloadable CSV receipts.

---

## 5. Nice-to-Haves (Post-MVP / Phase 2 & 3 - P1/P2)
Features that enhance competitiveness, retention, and enterprise adoption after core stability is proven:

### 5.1 Fiat Off-Ramp & Treasury (P1)
- **Instant Local Fiat Settlement:** Integration with licensed local liquidity partners / OTC desks to auto-convert incoming USDT/USDC into local currency (e.g., NGN) and settle directly into the merchant's bank account.
- **Multi-Currency Pricing Display:** Display local currency prices (e.g., NGN, GHS, KES, EUR) at checkout while dynamically quoting and settling the exact USD stablecoin equivalent via real-time FX feeds.

### 5.2 Ecosystem Plugins & Recurring Billing (P1)
- **E-Commerce Plugins:** Official one-click plugins for Shopify, WooCommerce, and Magento.
- **Subscriptions & Recurring Invoices:** Smart-contract allowance-based recurring pulls (ERC-20 `approve` / `permit2`) or automated email/WhatsApp invoice reminders for SaaS billing.
- **Gasless / Meta-Transactions:** Account Abstraction (ERC-4337) or relayer support so payers only need stablecoins without holding native gas tokens (ETH, POL, TRX, SOL).

### 5.3 Advanced Merchant Features (P2)
- **Split Payments / Marketplace Routing:** Automatically split incoming payments between a platform and sub-merchants/vendors in a single settlement flow.
- **POS / In-Person QR Mode:** Lightweight mobile web view for physical retail stores to generate instant QR codes at the counter.
- **Cross-Chain Swap-at-Checkout:** Allow customers to pay with any token (e.g., ETH, SOL, BTC) while auto-swapping via DEX aggregators (1inch, Jupiter) so the merchant strictly receives USDT/USDC.

---

## 6. Functional Requirements

| ID | Category | Requirement Description | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **FR-01** | **Checkout** | **Session Creation:** System shall generate a unique checkout session via API or Dashboard specifying `amount_usd`, `currency`, `order_id`, and `redirect_url`. | API returns HTTP `201` with `session_id`, `checkout_url`, and `expires_at` within `< 300ms`. |
| **FR-02** | **Checkout** | **Network & Token Selection:** Payer must explicitly select both the stablecoin (USDT/USDC) and blockchain network before the deposit address is revealed. | UI displays clear warning against cross-chain mismatches (e.g., sending TRC-20 to an ERC-20 address). |
| **FR-03** | **Blockchain** | **On-Chain Listener:** System must monitor mempool and confirmed blocks across all supported chains in real time. | Incoming transfer is detected in UI (`Confirming...`) within 5 seconds of broadcast. |
| **FR-04** | **Blockchain** | **Confirmation Thresholds:** Payment is marked `confirmed` only after reaching network-specific finality thresholds (e.g., Polygon: 64 blocks, TRON: 19 blocks, Base: 12 blocks, Solana: `finalized`). | No premature webhooks or settlements triggered prior to block finality. |
| **FR-05** | **Billing** | **Fee Deduction:** System shall accurately calculate and deduct Apex's platform fee (e.g., 0.8%) before net settlement. | Ledger shows gross amount, fee amount, network gas cost (if applicable), and net payout to 6 decimal places. |
| **FR-06** | **Webhooks** | **Event Delivery:** System must dispatch signed JSON payloads to the merchant's configured webhook URL upon state transitions. | Payload includes `X-Apex-Signature` header; failed deliveries retry up to 5 times over 24 hours. |
| **FR-07** | **Edge Cases** | **Late / Expired Payments:** If funds arrive after the 30-minute session timer expires, system must still index the transaction and place it in `late_payment` review/claim state. | Funds are never lost; merchant can manually accept or trigger a refund to sender address. |
| **FR-08** | **Sandbox** | **Testnet Environment:** Merchants can simulate full checkout flows using testnet tokens (Polygon Amoy, TRON Shasta, Solana Devnet) with zero real value. | Testnet transactions are strictly isolated from Live database tables and balances. |

---

## 7. Non-Functional Requirements (NFRs)

### 7.1 Security & Compliance
- **NFR-SEC-01 (Key Management):** Private keys for sweep/treasury wallets must never be stored in plaintext or environment variables; must use Hardware Security Modules (HSM), AWS KMS, or MPC (Multi-Party Computation) vaults.
- **NFR-SEC-02 (API & Webhook Security):** All external traffic enforced over TLS 1.3. Secret API keys hashed at rest using SHA-256/Argon2; webhook payloads signed with HMAC-SHA256 to prevent spoofing.
- **NFR-SEC-03 (AML/KYT Screening):** Integration with Know-Your-Transaction (KYT) providers (e.g., Chainalysis, Elliptic, or MistTrack) to screen incoming addresses against OFAC sanctions and illicit fund flows.
- **NFR-SEC-04 (Rate Limiting & DDoS):** Enforce strict rate limiting (e.g., 100 req/min per IP on checkout endpoints) and WAF protection via Cloudflare.

### 7.2 Performance & Latency
- **NFR-PERF-01 (Checkout Load Time):** Hosted checkout page must achieve First Contentful Paint (FCP) in **< 1.2 seconds** even on 3G/4G mobile networks.
- **NFR-PERF-02 (API Response Time):** 95th percentile (p95) latency for session creation and status polling APIs must be **< 250ms**.
- **NFR-PERF-03 (Detection Speed):** Real-time WebSocket updates to the checkout UI within **< 3 seconds** of on-chain transaction detection.

### 7.3 Reliability, Availability & Fault Tolerance
- **NFR-REL-01 (Uptime SLA):** Core payment ingestion and checkout services must maintain **99.95% uptime**.
- **NFR-REL-02 (RPC Redundancy):** Blockchain indexers must implement automatic failover across at least two independent RPC providers (e.g., Alchemy, QuickNode, Helius, TronGrid) per chain to prevent downtime during node outages.
- **NFR-REL-03 (Idempotency):** All payment processing, webhook dispatching, and ledger credit operations must be strictly idempotent to guarantee zero double-crediting or double-payouts.

### 7.4 Scalability & Maintainability
- **NFR-SCAL-01 (Horizontal Scaling):** Stateless API services and queue-based blockchain workers (e.g., Redis/BullMQ or Kafka) capable of scaling horizontally to handle **500+ concurrent checkouts per second**.
- **NFR-SCAL-02 (Modular Chain Adapters):** Blockchain integrations must follow a unified adapter interface (`IChainAdapter`) so new chains (e.g., Arbitrum, Stellar, TON) can be added without modifying core billing logic.
- **NFR-SCAL-03 (Auditability):** Immutable, append-only double-entry financial ledger logging every balance change, fee deduction, and sweep event for full financial reconciliation.

---

## 8. Key Success Metrics (KPIs)
- **Checkout Conversion Rate:** > 75% of initiated checkout sessions result in confirmed on-chain payment.
- **Settlement Accuracy:** 100% reconciliation match between on-chain balances and internal ledger entries.
- **Mean Time to Settlement:** < 2 minutes from customer broadcast to merchant wallet confirmation on L2/high-throughput chains.
- **Webhook Delivery Success:** > 99.5% successful first-attempt delivery to merchant endpoints.
