# Sheers Software — Marketing Website

The public-facing marketing site for **Sheers Software Sdn Bhd** (`sheerssoft.com`). Built with React + Vite.

## Stack

- **React 19** + **React Router v7** (client-side SPA)
- **Vite 7** — dev server, HMR, build
- **Lucide React** — icons
- Plain CSS with design tokens (no CSS framework)

## Dev

```bash
# from this directory
npm install
npm run dev        # starts at http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # preview production build
```

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer — shared across all pages
    ui/           # GlassCard, NeonButton, reusable UI
    effects/      # AnimatedBackground
    funnel/       # LostRevenueAudit lead-gen component
  pages/          # Home, About, Solutions, Blog, Contact, legal pages
  index.css       # Global design tokens (CSS variables, utility classes)
public/
  portfolio/      # Static standalone HTML demo sites (no build step)
    index.html              # Portfolio showcase — linked from Solutions dropdown
    aroha-restaurant.html   # Thai-fusion fine dining
    skyline-properties.html # Luxury real estate, KL
    mosaic-hotel.html       # Boutique hotel, Johor Bahru
    leafy-co.html           # Bubble tea franchise
    onyx-lounge.html        # Cocktail lounge
    eden-coliving.html      # Co-living brand
    gloss-studio.html       # Auto detailing
```

## Portfolio

Seven standalone single-file HTML demos live in `public/portfolio/`. They are served as static assets — no React, no build step. Each uses inline CSS + JS, Google Fonts CDN, and Unsplash for imagery.

Access at `/portfolio/` in dev or production. The Solutions dropdown in the navbar links directly to this page.

The custom Vite middleware in `vite.config.js` ensures `public/portfolio/` resolves to `index.html` during development (Vite does not auto-serve subdirectory index files by default).

## Design System

Defined in `src/index.css`:

| Token | Value |
|---|---|
| `--bg-primary` | `#0A0A0A` |
| `--neon-cyan` | `#00FFFF` |
| `--neon-magenta` | `#FF00FF` |
| `--text-primary` | `#EAEAEA` |
| `--text-secondary` | `#B0B0B0` |

The navbar and footer use a green accent (`#22c55e`) consistent with the portfolio page design language.

## Deployment

Deployed to **Netlify** via `netlify.toml` at the repo root. Build command: `npm run build` from `business-website/`. Publish directory: `business-website/dist`.
