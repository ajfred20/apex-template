# ⚡ Apex — Stablecoin Payment Gateway Template

Landing page template (`/`) for **Apex**, a non-custodial stablecoin payment gateway supporting **USDT** and **USDC** across **Polygon**, **TRON**, **Base**, **BNB Chain**, and **Solana**. Built by **Fred Aj (`@ajfred20`)** to look sharp, move fast, and give you a clean foundation to ship something serious.

> ⭐ **Don't forget to star the repo!** If you dig the layout, the Apex Orange vibe, or the `<GradientASCII />` hero shader, tap **Star** at the top of [`ajfred20/apex-template`](https://github.com/ajfred20/apex-template) so you can find it easily and support the project.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router) + TypeScript
* **Styling:** TailwindCSS
* **Typography:** Geist Sans & Geist Mono (`tabular-nums` for amounts, fees, timers, and hashes)
* **Icons:** `@hugeicons/react` & `@hugeicons/core-free-icons`
* **Hero Shader:** React Bits `<GradientASCII />` (WebGL2 ASCII gradient background)

## 📁 Repository Structure

This repo already includes your project notes, agent instructions, and UI configuration right at the root:

* `src/` — Next.js App Router pages, components, and styling
* `AGENTS.md` — Coding & AI agent guidelines for the project
* `components.json` — Component/CLI configuration (including `@react-bits/GradientASCII-JS-CSS`)
* `design.md` — Visual tokens, typography, spacing, and layout rules
* `prd.md` — Product scope and stablecoin payment details
* `text-copy-v2.md` — Exact 9-section landing page copy and order
* `LICENSE` — MIT License

## 🎨 Brand & Design System

| Swatch | Token / Role | Hex Value | How It's Used |
| :--- | :--- | :--- | :--- |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#FF5A1F" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Apex Orange** | `#FF5A1F` | Primary brand accent, highlights & active states |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#E64810" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Ember Hover** | `#E64810` | Hover & pressed states for orange accents |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#1F1209" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Deep Ember** | `#1F1209` | Dark hero/ember backdrop & deep contrast ink |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#F6F2EE" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Warm Sand** | `#F6F2EE` | Soft section surfaces & footer canvas |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#FFF1EB" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Apricot Tint** | `#FFF1EB` | Subtle pill badges & soft highlight fills |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#120E0B" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Void Ink** | `#120E0B` | Primary dark headings & high-contrast text |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#45423F" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Slate Charcoal** | `#45423F` | Secondary body copy & supporting text |
| <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#E6E1DC" stroke="#120E0B" stroke-opacity="0.15"/></svg> | **Hairline Border** | `#E6E1DC` | Card outlines, dividers & crisp UI framing |

### 👀 Ways to See & Inspect the Colors Yourself

1. **Right in the table above:** GitHub renders the inline `<svg>` swatches directly beside each hex code so you can spot the warm ember-to-orange ramp at a glance.
2. **In VS Code / Cursor:** Install a color preview extension (like *Color Highlight* or *Tailwind CSS IntelliSense*) to see inline color boxes next to `#FF5A1F`, `#1F1209`, and `#F6F2EE` in your CSS and TSX files.
3. **Browser DevTools:** Open your running app (`http://localhost:3000`), inspect any element, and click the color swatch next to `background-color` or `color` in the **Styles** panel to test tweaks live.
4. **In `<GradientASCII />`:** The hero shader blends `#1F1209` → `#FF5A1F` → `#E64810` → `#FFE4D6` in WebGL2 so you can see the palette come alive as ASCII glyphs and warm light waves.


## 🧩 Landing Page Sections

1. **Header** 🧭 — Apex brand mark, navigation links (`Features`, `Pricing`, `Docs`, `FAQ`), and primary `Get Started` action.
2. **Hero** ✨ — Headline, subcopy, primary/secondary actions, `<GradientASCII />` backdrop tuned to Apex's palette, and an interactive **Checkout Preview** (`USDT`/`USDC` + 5 chains).
3. **Trust** 🤝 — Supported networks (`Polygon`, `TRON`, `Base`, `BNB Chain`, `Solana`) and wallets (`MetaMask`, `Trust Wallet`, `Phantom`).
4. **Problem** 🚧 — Cross-border payment friction (FX fees, rolling reserves, slow settlements, chargebacks).
5. **Solution (4-Card Bento)** 🧱 — Multi-chain checkout, instant finality & zero chargebacks, developer APIs/webhooks, and no-code payment links.
6. **Pricing** 💸 — Flat `0.8%` per-transaction pricing with an interactive payout calculator.
7. **FAQ** ❓ — Accordion covering supported chains/tokens, non-custodial flow, sandbox testing, and payment edge cases.
8. **CTA** 🚀 — Closing callout panel with primary account creation button.
9. **Footer** 🗺️ — Multi-column directory (`Product`, `Supported Chains`, `Developers`, `Company`).

## 🍴 How to Fork, Copy & Build Great Things With It

### Step 1: Star & Fork the Repository on GitHub

1. Go to [`ajfred20/apex-template`](https://github.com/ajfred20/apex-template) and click **⭐ Star** in the top-right corner to bookmark and support the repo.
2. Click **Fork** right beside it and choose your personal or organization account.
3. Now you have your own copy on GitHub where you can push changes, experiment freely, and open pull requests later.

### Step 2: Clone (Copy) It to Your Machine

Copy your forked repo URL (or clone `@ajfred20`'s repo directly) and open it locally:

```bash
# Fork first
git clone https://github.com/ajfred20/apex-template.git

# Enter the project folder
cd apex-template

# Install dependencies
npm install
```

*(Want a brand-new repo with no git history tied to the fork? Delete `.git` and run `git init` to start fresh.)*

### Step 3: Install Packages & Add `<GradientASCII />`

```bash
# 1. Install project dependencies
npm install

# 2. Add React Bits GradientASCII (if not already present)
npx shadcn@latest add @react-bits/GradientASCII-JS-CSS

# 3. Start the local dev server
npm run dev
```

### Step 4: Make It Yours & Ship Great Stuff 🔥

* **Rebrand in one spot:** Swap `#FF5A1F` / `#1F1209` / `#F6F2EE` for your own brand colors or keep Apex Orange and tune the hero's `<GradientASCII />` props (`shape`, `density`, `cellSize`, `flow`, `speed`).
* **Customize the checkout demo:** Update supported chains, tokens, or fees in the Hero checkout preview and Pricing calculator to match your exact product flow.
* **Expand beyond `/`:** Once your landing page is dialed in, wire up `/dashboard`, auth, real RPC/webhook handlers, or your own API routes without cluttering the marketing page first.
* **Push your work:**

```bash
git add .
git commit -m "feat: customize Apex landing page and hero shader"
git push origin main
```

## 🎛️ `<GradientASCII />` Hero Configuration

Pass Apex's brand colors and `"Geist Mono"` into `<GradientASCII />` behind your hero content:

```tsx
<GradientASCII
  colors={['#1F1209', '#FF5A1F', '#E64810', '#FFE4D6']}
  shape="horizon"
  characters=" =+xX0S8#@"
  cellSize={18}
  density={0.8}
  fontFamily='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
  lightMode={false}
/>
```

## 📦 Project Scope

This template focuses on the **landing page (`/`)** and interactive checkout preview UI. Dashboard routes, authentication, and live payment/webhook backend handlers are intentionally kept separate so you can ship the storefront cleanly first and connect backend services when ready.

## 📄 License

This project is licensed under the **MIT License** — see [`LICENSE`](./LICENSE) for details.