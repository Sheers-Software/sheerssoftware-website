# Project Memory — SheersDigital-site

## Repository Structure
- **Root (`/src`)** — Next.js 16 App Router product app (Nocturn AI). Deploys to `ai.sheerssoft.com`
- **`/business-website`** — Vite + React SPA marketing site. Deploys to `sheerssoft.com`
- Both are fully independent apps with separate `package.json`, `node_modules`, Docker images

## Key Files
- `business-website/src/components/layout/Navbar.jsx` — Main nav. Solutions has a dropdown
- `business-website/src/App.jsx` — All client-side routes
- `src/app/layout.tsx` — Next.js root layout with Footer and MobileCTA inline
- `src/app/globals.css` — Full design system CSS tokens (navy/green palette)
- `src/app/api/send-email/route.ts` — Resend email handler for /apply form

## Portfolio Feature (built 2026-02-27)
- **Purpose:** Proof-of-capability portfolio to close Decorzo Space client (interior design, RM 4,590+ proposal)
- **Location:** `business-website/public/portfolio/` (served as static files by Vite/nginx)
- **Access:** Solutions dropdown in Navbar → "Portfolio" → `/portfolio/`

### Portfolio Files
| File | Brand | Industry | Size |
|------|-------|----------|------|
| `index.html` | Sheers Software Portfolio | Showcase | 39K |
| `aroha-restaurant.html` | Aroha | Fine Dining, KL | 68K |
| `skyline-properties.html` | Skyline Properties | Luxury Real Estate, KL | 86K |
| `mosaic-hotel.html` | The Mosaic | Boutique Hotel, JB | 90K |
| `leafy-co.html` | Leafy Co. | Bubble Tea F&B Chain | 84K |
| `onyx-lounge.html` | Onyx Lounge | Nightlife/Events, PJ | 72K |
| `eden-coliving.html` | Eden | Co-Living, KLCC/Bangsar | 85K |
| `gloss-studio.html` | Gloss Studio | Auto Detailing, PJ | 72K |

Each is a standalone HTML file (no build step), with inline CSS+JS, Google Fonts CDN only.

## Design System (Next.js app)
- Colours: `--color-navy: #0F172A`, `--color-green: #22C55E`
- Fonts: Inter (body), Outfit (display)
- CSS variables in `globals.css`, `layout.css` per-section, `home.css` for homepage

## Environment Variables (Next.js)
- `RESEND_API_KEY` — Required for /apply form email delivery
- `WHATSAPP_WEBHOOK_URL` — Optional webhook for WhatsApp notifications on new applications

## Client Context
- Decorzo Space — interior design/renovation/construction company, 8yr old website needing redesign
- Contact: Puan Mazirah → boss (decision maker)
- Proposal sent: `docs/Decorzo_Space_Proposal_270225.docx` — packages from RM 4,590
- Lead came from Ansara Biz WhatsApp group
