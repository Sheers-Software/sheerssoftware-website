# SheersDigital Site

> **Stop Losing Revenue While You Sleep.**
> Capture every WhatsApp, email, and web inquiry 24/7 with an AI concierge trained for Malaysian hospitality.

Nocturn AI is an automated lead capture and engagement system designed specifically for independent 3-4 star hotels. It ensures no guest inquiry goes unanswered, even when your front desk is closed.

## Core Features

- **24/7 AI Concierge**: Instantly responds to guest inquiries via WhatsApp, Web Chat, and Email.
- **Omnichannel Capture**: Consolidates leads from multiple channels into a single dashboard.
- **Revenue Recovery**: Tracks and proves revenue recovered from after-hours inquiries.
- **Seamless Handoff**: Intelligently transfers complex queries to human staff with full context.
- **PDPA Compliant**: Secure, encrypted, and built with privacy in mind.
- **Founding Cohort Program**: A limited-availability pilot program for 5 Malaysian hotels.

## Project Structure

This monorepo contains two applications:

| App | Directory | Stack | Deployed URL |
|-----|-----------|-------|-------------|
| **Product App** (Nocturn AI) | `/src` | Next.js 16 App Router, TypeScript, React 19 | [ai.sheerssoft.com](https://ai.sheerssoft.com) |
| **Marketing Website** (SheersSoft) | `/business-website` | Next.js 16 App Router, TypeScript, React 19, Tailwind CSS v4, Framer Motion | [sheerssoft.com](https://sheerssoft.com) |

```
├── src/                    # Next.js product app (App Router)
│   ├── app/                # Pages and layouts
│   └── components/         # Reusable UI components
├── business-website/       # Next.js marketing site (App Router)
│   ├── src/
│   │   ├── app/            # Route pages (page.jsx per route)
│   │   └── components/     # Layout, UI, Funnel components
│   └── public/             # Static assets
└── docs/                   # Project documentation
```

## Marketing Website Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, Use Cases (ICP tabs), Lost Revenue Audit calculator, HubSpot funnel |
| `/about` | Company info, mission & vision |
| `/solutions` | Service offerings |
| `/blog` | Article index with tiles |
| `/blog/why-ai-is-the-future` | Feasibility study article |
| `/blog/maximizing-adr` | ADR upselling article |
| `/contact` | Contact form (EmailJS) |
| `/pricing` | Pricing tiers |
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy policy (PDPA) |
| `/terms` | Terms of service |

## Sprint Status

### Sprint 1 — Foundation ✅
- Home page redesign with Hotel ICP copy
- Interactive Lost Revenue Audit calculator
- HubSpot lead form integration
- Footer & Navbar updates

### Sprint 2 — UX Refinements & Content ✅
- Navbar hover dropdown (Nocturn AI / Hotel Genius)
- Blog architecture overhaul (index page + individual articles)
- Privacy Policy & Terms of Service pages
- Styled 404 error page
- Design system alignment audit & fixes
- Cloud Run IAM fix for `ai.sheerssoft.com`

### Sprint 3 — SEO & GEO Optimization ✅
- Replaced non-crawlable SPA routing with Next.js App Router for the main landing architecture.
- Migrated domain definitions in `sitemap.ts` and `robots.ts` to `sheerssoft.com`.
- Implemented comprehensive JSON-LD structured data (`Organization`, `LocalBusiness`, `SoftwareApplication`, and `FAQPage`).
- Injected specific Open Graph and Twitter cards targeted at Facebook and WhatsApp sharing across funnel pages.

### Sprint 4 — Marketing & Tracking Connectors ✅
- Implemented comprehensive marketing telemetry on **both** domains (`ai.sheerssoft.com` and `sheerssoft.com`).
- Added robust Open Graph tags (including `og:image`) specifically customized for **LinkedIn** sharing.
- Injected **JSON-LD Schema** (GEO optimization) for proper generative engine indexing.
- **Connectors Installed**:
  - `Meta Pixel`: Active (ID: `1456605209169220` and `1224025939902106` via CAPI)
  - `LinkedIn Insight Tag`: Installed (⚠️ Placeholder `YOUR_PARTNER_ID` must be updated)
  - `Google Analytics 4`: Installed (⚠️ Placeholder `G-XXXXXXXXXX` must be updated)
  - `HubSpot Tracking`: Active (Script `js-na2.hs-scripts.com/243983306.js`)

### Sprint 5 — Mobile-First Redesign ✅
- App architecture flipped from desktop-first max-width overrides to native mobile-first progressive rendering.
- Extracted inline JSX styles into responsive structural CSS grids under `home.css`.
- Addressed overlap and scroll bugs in the Sticky Navbar and Announcement Bar for phone screens.
- Validated responsiveness across small viewports (375x812) using programmatic mobile testing.

### Sprint 6 — Hyros Performance Redesign ✅
- Pivoted aesthetic from soft B2B glassmorphism to a high-voltage Cyber Terminal aesthetic inspired by Hyros.
- Grounded the application in True Black brutalism with stark cyber grid backgrounds.
- Scaled up the typography weights and tracking to create aggressive, massive hero hooks.
- Upgraded primary CTA buttons to sharp 4px borders with blazing Neon Green solid fills and glowing box shadows.

### Sprint 7 — CI/CD Stabilization and GCP Troubleshooting (v0.4.0)
- Refactored `deploy-gcp.yml` to solve Bash syntax errors with multiline JSON secrets (switched to `env` block injection).
- Resolved `business-website` build failures by fixing Turbopack workspace root inference and syncing `package-lock.json`.
- Identified and diagnosed GCP-side IAM permission issues for the Cloud Build service account in Secret Manager.
- Implemented verbose debug mode in `cloudbuild.yaml` to accelerate deployment troubleshooting.

### Sprint 8 — ICP Use Cases & Styling Fix (business-website v0.1.1)
- Fixed broken styling on the "Choose your use case" section (`UseCases` component on sheerssoft.com home page).
- Root cause: component used Tailwind CSS utility classes, but the project has no `@import "tailwindcss"` directive — all layout/spacing/color classes silently produced no output.
- Rewrote component using the project's hand-written CSS system (CSS variables, custom class names).
- Added all use-case styles to `Home.css` (`use-case-tab`, `use-case-panel`, `use-case-metrics`, etc.) aligned with the existing design system.
- Removed broken absolute-position layout (content panel now flows naturally).
- Mobile-responsive: single-column metrics grid on ≤768px viewports.

## Deployment

Both apps deploy to **Google Cloud Run** via CI/CD:

| Service | Region | Project |
|---------|--------|---------|
| `sheersdigital-site` | `asia-southeast1` | `sheers-software` |
| `sheersdigital-product` | `asia-southeast1` | `sheers-software` |

## Local Development

```bash
# Marketing website
cd business-website
npm install
npm run dev
```
