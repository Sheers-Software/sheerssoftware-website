# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo for **Nocturn AI** — an AI-powered hotel lead capture product by Sheers Software Sdn Bhd, targeting independent Malaysian hotels.

It contains a unified application:

| App | Directory | Stack | Live URL |
|-----|-----------|-------|----------|
| Unified App (Nocturn AI) | `/` (root) | Next.js 16 App Router, TypeScript, React 19 | [ai.sheerssoft.com](https://ai.sheerssoft.com) (Redirects from sheerssoft.com) |

These are now consolidated into a single codebase.

---

## Development Commands

### Unified App (Next.js) — run from repo root
```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

There are no tests in this codebase.

---

## Architecture (`/src`)

Uses Next.js 16+ App Router with `output: "standalone"` for Docker deployment.

### Pages (`/src/app`)
- `/` — Home page (hero, how-it-works, pricing preview, testimonials)
- `/apply` — Founding Cohort application form (client component, posts to `/api/send-email`)
- `/pilot` — Pilot program details
- `/how-it-works` — Product walkthrough
- `/about` — Company/founder info
- `/blog` — Blog index
- `/blog/[slug]` — Dynamic blog slug (currently shows "coming soon" placeholder)
- `/thank-you` — Post-application confirmation
- `/privacy`, `/terms` — Legal pages

### API Routes (`/src/app/api`)
- `POST /api/send-email` — Handles Founding Cohort applications; sends email via **Resend** SDK; optionally triggers a WhatsApp webhook via `WHATSAPP_WEBHOOK_URL` env var
- `POST /api/capi` — Facebook Conversions API

### Components (`/src/components`)
Key components: `Header.tsx`, `Navbar.tsx` / `NavbarClient.tsx`, `HubSpotLeadForm.tsx`, `HubSpotModal.tsx`, `HubSpotMeeting.tsx`, `MetaPixel.tsx`, `WhatsAppFloatingButton.tsx`, `PricingCard.tsx`.

### Redirects (in `next.config.ts`)
- `/features` → `/`
- `/pricing` → `/pilot`
- `/case-studies` → `/`
- `/book-demo` → `/apply`

### Design System
CSS-variable-based design system defined in `/src/app/globals.css`. Primary palette:
- `--color-navy: #0F172A` (dark backgrounds, body text)
- `--color-green: #22C55E` (brand accent, CTAs)
- Fonts: Inter (body), Outfit (display headings)
- Utility classes: `.btn`, `.btn-primary`, `.container`, `.section`, `.section-dark`, `.badge`, `.badge-green`

Additional CSS files: `layout.css` (header/footer/layout), `home.css` (page-specific).

---

## Marketing Website Architecture (`/business-website/src`)

Next.js 16 App Router application (migrated from Vite/React Router). TypeScript with Tailwind CSS v4.

### Pages (`/business-website/src/app`)
- `/` — Home page
- `/about` — About page
- `/blog` — Blog index; articles at `/blog/maximizing-adr`, `/blog/why-ai-is-the-future`
- `/career` — Careers
- `/contact` — Contact form (EmailJS)
- `/faq` — FAQ
- `/pricing` — Pricing
- `/privacy`, `/terms` — Legal pages
- `/solutions` — Solutions
- `/support` — Support
- `/services/web-design` — Web design service page

### Component Structure
- `components/layout/` — Navbar, Footer, PageLayout, ScrollToTop
- `components/funnel/` — Lead capture (HubSpotLeadForm, HubSpotMeeting, LostRevenueAudit)
- `components/ui/` — Reusable UI primitives (NeonButton, NotificationModal)
- `components/effects/` — Animation/visual effects (AnimatedBackground)

### Key integrations
- **HubSpot** forms for lead capture (script in `layout.tsx`)
- **EmailJS** for contact form
- **Meta Pixel** via `MetaPixel.tsx` component
- **LinkedIn Insight Tag** via `LinkedInInsightTag.tsx` component
- **Google Analytics (GA4)** — placeholder ID (`G-XXXXXXXXXX`) in `layout.tsx`

---

## Environment Variables (Product App)

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Required. Resend email delivery for application submissions |
| `WHATSAPP_WEBHOOK_URL` | Optional. Webhook URL (Make/Zapier) for WhatsApp notifications on new applications |

---

## Deployment

Both apps deploy to **Google Cloud Run** (`asia-southeast1`, project `sheers-software`) via Google Cloud Build (`cloudbuild.yaml`). CI/CD triggers automatically on push.

- Product app: built from root `Dockerfile` using Next.js standalone output
- Marketing site: built from `business-website/Dockerfile` (Next.js standalone output)
