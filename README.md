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
| **Product App** (Nocturn AI) | `/src` | Next.js, React, TypeScript, Tailwind CSS | [ai.sheerssoft.com](https://ai.sheerssoft.com) |
| **Marketing Website** (SheersSoft) | `/business-website` | Vite, React, Framer Motion, Lucide | [sheerssoft.com](https://sheerssoft.com) |

```
├── src/                    # Next.js product app (App Router)
│   ├── app/                # Pages and layouts
│   └── components/         # Reusable UI components
├── business-website/       # Vite marketing site
│   ├── src/
│   │   ├── components/     # Layout, UI, Funnel components
│   │   ├── pages/          # Route pages
│   │   └── pages/blog/     # Blog article pages
│   └── public/             # Static assets
└── docs/                   # Project documentation
```

## Marketing Website Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Hero hook, Lost Revenue Audit calculator, HubSpot funnel |
| `/about` | `About.jsx` | Company info, mission & vision |
| `/solutions` | `Solutions.jsx` | Service offerings |
| `/blog` | `BlogIndex.jsx` | Article index with tiles |
| `/blog/why-ai-is-the-future` | `WhyAiArticle.jsx` | Feasibility study article |
| `/blog/maximizing-adr` | `MaximizingAdrArticle.jsx` | ADR upselling article |
| `/contact` | `Contact.jsx` | Contact form |
| `/pricing` | `Pricing.jsx` | Pricing tiers |
| `/faq` | `FAQ.jsx` | Frequently asked questions |
| `/privacy` | `PrivacyPolicy.jsx` | Privacy policy (PDPA) |
| `/terms` | `TermsOfService.jsx` | Terms of service |
| `*` | `NotFound.jsx` | Styled 404 error page |

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
