# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo for **Nocturn AI** — an AI-powered hotel lead capture product by Sheers Software Sdn Bhd, targeting independent Malaysian hotels.

It contains two separate applications:

| App | Directory | Stack | Live URL |
|-----|-----------|-------|----------|
| Product App (Nocturn AI) | `/` (root) | Next.js 16 App Router, TypeScript, React 19 | [ai.sheerssoft.com](https://ai.sheerssoft.com) |
| Marketing Website (SheersSoft) | `/business-website` | Vite, React 19, React Router v7, Framer Motion | [sheerssoft.com](https://sheerssoft.com) |

These are **completely independent apps** with separate `package.json`, `node_modules`, build pipelines, and Docker images. Changes to one do not affect the other.

---

## Development Commands

### Product App (Next.js) — run from repo root
```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

### Marketing Website (Vite) — run from /business-website
```bash
cd business-website
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
npm run preview  # preview production build
```

There are no tests in this codebase.

---

## Product App Architecture (`/src`)

Uses Next.js 15+ App Router with `output: "standalone"` for Docker deployment.

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

Single-page application with client-side routing via React Router.

### Routing (`App.jsx`)
All routes are defined in `App.jsx`. Pages live in `/business-website/src/pages/`.

Blog articles are individual `.jsx` files in `/business-website/src/pages/blog/`.

### Component Structure
- `components/layout/` — Navbar, Footer, shared layout
- `components/funnel/` — Lead capture and conversion components
- `components/ui/` — Reusable UI primitives
- `components/effects/` — Animation/visual effects

### Key integrations
- **HubSpot** forms for lead capture (tracked via HubSpot script in Next.js layout)
- **EmailJS** for contact form in the marketing site
- **Meta Pixel** / Facebook CAPI for ad attribution
- **Google Analytics (GA4)** — placeholder ID (`G-XXXXXXXXXX`) in root layout

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
- Marketing site: built from `business-website/Dockerfile` (Vite build served via nginx)
