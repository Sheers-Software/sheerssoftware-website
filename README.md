# Nocturn AI — Product App

> **Stop Losing Revenue While You Sleep.**
> Capture every WhatsApp, email, and web inquiry 24/7 with an AI concierge trained for Malaysian hospitality.

**Version:** `0.8.2` | **Branch:** `main`

---

## What This Is

Nocturn AI is an automated inquiry capture and engagement layer for independent Malaysian hotels. It responds to guest inquiries instantly across WhatsApp, email, and web — 24/7 — and surfaces a GM morning report showing every lead captured and estimated revenue recovered.

**Company:** Sheers Software Sdn Bhd (SSM: 202501033756)
**Live URL:** [ai.sheerssoft.com](https://ai.sheerssoft.com)

---

## Project Structure

├── src/                          # Next.js 16 product app (App Router)
│   ├── app/                      # Pages, layouts, global CSS
│   │   ├── page.tsx              # Homepage (full funnel)
│   │   ├── apply/                # Founding Cohort application form
│   │   ├── how-it-works/         # Mechanism + timeline
│   │   ├── pilot/                # Pilot program details
│   │   ├── about/                # Founder story
│   │   ├── blog/                 # Blog hub + articles
│   │   └── api/                  # send-email, capi routes
│   └── components/               # Reusable UI components
│       ├── Navbar.tsx / Header.tsx
│       ├── BenefitGrid.tsx       # "The System" 2x2 pillar cards
│       ├── UseCases.tsx          # "Who This Is For" ICP cards
│       ├── TruthTracking.tsx     # Tab (desktop) / accordion (mobile) feature section
│       └── ...
├── docs/                         # Strategy docs, content specs
├── public/                       # Static assets
├── Dockerfile                    # Production container (standalone output)
└── cloudbuild.yaml               # GCP Cloud Build CI/CD (Unified)


---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Full conversion funnel — hero, pain, system, ICP, demo, comparison, offer, ROI, FAQ, CTA |
| `/apply` | Founding Cohort application form (posts to `/api/send-email`) |
| `/how-it-works` | 4-step implementation timeline |
| `/pilot` | Pilot program details and pricing tiers |
| `/about` | Founder story and company values |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual articles (coming soon placeholder) |
| `/thank-you` | Post-application confirmation |
| `/privacy` | Privacy policy (PDPA compliant) |
| `/terms` | Terms of service |

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

### Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | Email delivery for application submissions (via GCP Secret Manager) |
| `MAKE_WEBHOOK_URL` | Yes | Primary lead sink (via GCP Secret Manager) |
| `WHATSAPP_VERIFY_TOKEN` | Yes | WhatsApp API verification (via GCP Secret Manager) |
| `META_CAPI_TOKEN_NOCTURN` | Optional | Meta Conversion API token (Nocturn) |
| `META_CAPI_TOKEN_SHEERS` | Optional | Meta Conversion API token (Sheers) |

---

## Design System

Defined in `src/app/globals.css` and `src/app/home.css`.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | `#0F172A` | Dark backgrounds, body text |
| `--color-green` | `#22C55E` | Brand accent, CTAs |
| `--font-primary` | Inter | Body copy |
| `--font-serif` | Instrument Serif | Display headings |
| `--button-radius` | `100px` | Pill-shaped buttons |

Button classes: `.btn-solid-green`, `.btn-solid-white`, `.btn-outline-white`, `.btn-outline-navy`, `.btn-primary`, `.btn-outline`

---

## Deployment

Deploys to **Google Cloud Run** (`asia-southeast1`, project `sheers-software`) via Cloud Build on push.

```
Container : Dockerfile (Next.js standalone output)
Service   : sheersdigital-site
Region    : asia-southeast1
```

---

## Sprint History

### Sprint 1 — Foundation ✅
- Homepage redesign with hotel ICP copy
- Interactive Lost Revenue Audit calculator
- HubSpot lead form integration
- Footer & Navbar

### Sprint 2 — UX Refinements ✅
- Navbar hover dropdown
- Blog architecture (index + articles)
- Privacy Policy & Terms pages
- Design system audit

### Sprint 3 — SEO & GEO ✅
- Next.js App Router migration for crawlability
- JSON-LD structured data (`Organization`, `SoftwareApplication`, `FAQPage`)
- Open Graph / Twitter cards

### Sprint 4 — Marketing Connectors ✅
- Meta Pixel + Conversions API (`/api/capi`)
- LinkedIn Insight Tag
- Google Analytics 4 (via GTM: `GTM-TSGRML9H`)
- HubSpot tracking script

### Sprint 5 — Mobile-First Redesign ✅
- Flipped to mobile-first CSS architecture
- Sticky navbar + announcement bar scroll fixes
- Responsive grid overhaul in `home.css`

### Sprint 6 — Hyros Performance Redesign ✅
- True Black aesthetic with Neon Green accents
- Aggressive typography scale (Instrument Serif display)
- Animated blob hero background
- Neon CTA buttons with glow box-shadows

### Sprint 7 — CI/CD Stabilisation (v0.4.0) ✅
- Fixed GCP Cloud Build multiline JSON secret injection
- Synced `package-lock.json` for `business-website` build
- Verbose debug mode in `cloudbuild.yaml`

### Sprint 8 — ICP Redesign & Hyros Funnel (v0.4.x) ✅
- Rebuilt homepage sections: `BenefitGrid`, `UseCases`, `TruthTracking`, `ScalingTruth`, `FounderSection`
- Hyros-style tab UI for "The System" and "Who This Is For"
- Founding Cohort offer section with value stack + guarantee
- Hide-on-scroll / reveal navbar behaviour
- Hormozi Gem 3 lead magnet calculator

### Sprint 9 — UI Polish & Copy Audit (v0.5.0) ✅
- **Copy:** Removed Hyros ad-attribution language ("ATTRIBUTE", "tracking misses bookings") — replaced with hotel-native language ("CAPTURE", "reservations process misses bookings")
- **Hero:** Reduced `padding-top` 240px → 140px; restyled announcement chip from 1.5rem heading to 0.9rem uppercase eyebrow
- **CSS variables:** Defined 12 missing `:root` tokens (`--button-radius`, `--fs-*`, `--transition-*`, `--shadow-neon`) that were causing square buttons, wrong font sizes, and missing transitions sitewide
- **Button classes:** Added missing `.btn-solid-green`, `.btn-outline`, `.btn-outline-navy`, `.card` definitions
- **UseCases cards:** Fixed white-text-on-white-card contrast bug; removed duplicate emoji + SVG icon (emoji only); "TRACKING GOAL:" → "WHAT YOU GET:"
- **About page:** Fixed `**bold**` markdown rendering literally in JSX; fixed `rainbow-card` dark-on-dark heading text
- **Navbar logo:** Fixed SVG `<circle>` missing `fill="none"` — rendered as solid black disc on non-home pages; restored `isHome` conditional colouring; added `.btn-outline-navy`
- **BenefitGrid:** Fixed orphaned 4th card in 3-col grid → `hyros-grid--2col` (2×2 layout)
- **TruthTracking desktop:** Added missing base styles for `.truth-tabs`, `.truth-tab-btn`, `.truth-content` (previously only existed inside a mobile media query)
- **TruthTracking mobile:** Replaced broken horizontal-scroll tab row (clipped by `overflow-x: hidden` parent) with a native accordion — all 4 subsections (Capture, Optimize, Ease Of Use, Forecast) now accessible on mobile
- **Founder photo:** Replaced placeholder `AB` circle with `/Basyir.png`
- **Footer SSM:** Corrected to `202501033756`

### Sprint 10 — Codebase Consolidation (v0.6.0) ✅
- **Architecture:** Simplified codebase by removing redundant `business-website`, `business-website-next`, and `business-website-vite` directories.
- **Unification:** Unified the project into a single Next.js app in the root that handles both product and corporate site redirects via middleware.
- **CI/CD:** Streamlined `cloudbuild.yaml` to deploy a single unified image to both `sheersdigital-product` and `sheersdigital-site` services.
- **Redesign:** Finalised Hyros-style high-performance redesign with mobile-first CSS overhaul and neon accents.

### Sprint 11 — Strategy Realignment & Internal Infrastructure (v0.7.0) ✅
- **Copy Alignment:** Restructured hero metrics and CTAs to prioritize Same-Day FPX cash and 3% Performance capture limits. 
- **Backend Infrastructure:** Built robust Next.js server route `/api/submit-apply` to securely transmit applications.
- **Acquisition Flow Integrity:** Deprecated unscalable SaaS HubSpot embeds, driving users explicitly through a locally styled `/apply` gating page for quality control.

### Sprint 12 — HubSpot Detachment & WhatsApp-First Funnel (v0.8.0) ✅
- **HubSpot Removal:** Completely removed all HubSpot tracking scripts and CRM integration logic.
- **WhatsApp Priority:** Re-aligned landing page CTAs to prioritize direct WhatsApp engagement.
- **Enriched Acquisition Form:** Updated the `/apply` form to capture specific hotel metrics (Star Rating, ADR, Monthly Inquiry Volume).
- **Make.com Integration:** Configured the backend to forward all application data to a centralized Make.com webhook.

### Sprint 13 — Enterprise Security & Notification Recovery (v0.8.2) ✅
- **Secret Centralization:** Migrated all production credentials (`RESEND_API_KEY`, `WHATSAPP_VERIFY_TOKEN`, `MAKE_WEBHOOK_URL`) to **GCP Secret Manager**.
- **Deployment Resilience:** Implemented a two-step "cleanup-then-deploy" process in `cloudbuild.yaml` to handle environment variable type migrations (Literal → Secret).
- **Notification Bugfix:** Fixed a critical frontend payload error where new qualification fields were not being transmitted, restoring lead data integrity.
- **Stability Audit:** Confirmed no port 8080 redirects and validated site performance on `sheerssoft.com`.

