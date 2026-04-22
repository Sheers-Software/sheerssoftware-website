# PORTFOLIO AGENT — Niche Demo Website Generator
**For: Sheers Software Sdn Bhd**  
**Purpose:** Build 7 complete, production-grade demo websites using repurposed visual assets from a single interior design client. Each site must look entirely unique — different niche, different brand identity, different design language.

---

## AGENT CONTEXT

You are a senior full-stack web developer and UI/UX designer. Your task is to build **7 standalone HTML demo websites**, each targeting a different industry vertical. All visual assets are sourced from a shared CDN and repurposed with new branding.

**Core principle:** The same photograph of a beautifully designed interior can be a restaurant, a hotel, a residence, a co-living space, or a retail brand — depending entirely on the surrounding copy, typography, colour, and layout. Your job is to design the context, not find new images.

**Tech stack per site:** Single-file HTML (HTML + CSS + JS inline). No frameworks. No external dependencies except Google Fonts and optionally GSAP from CDN. Must render perfectly in a modern browser with no build step.

---

## SHARED ASSET LIBRARY

All images are sourced from this CDN. Use `?auto=format&w=1200&fit=crop` query params for optimal delivery.

### Asset Group A — Restaurant & Commercial Interiors
```
https://www.datocms-assets.com/23708/1625211761-reizz-residence.jpg
https://www.datocms-assets.com/23708/1625212088-southkey.jpg
https://www.datocms-assets.com/23708/1625211948-shahzan-hotel.jpg
https://www.datocms-assets.com/23708/1632965570-perfect-host.png
https://www.datocms-assets.com/23708/1632965414-perfect-host.png
```

### Asset Group B — Partner / Brand Logos (use as texture/background elements, not logos)
```
https://www.datocms-assets.com/23708/1623091953-cropped-trinidad-hospitality-360-logo-300x100.png
https://www.datocms-assets.com/23708/1623091974-dine360-logo.png
https://www.datocms-assets.com/23708/1623224872-stay-suites.png
https://www.datocms-assets.com/23708/1623224913-woodrose.png
https://www.datocms-assets.com/23708/1632965414-perfect-host.png
```

### Asset Group C — Project Photography (primary hero assets)
Use these as full-bleed backgrounds, hero images, gallery sections:
```
https://www.datocms-assets.com/23708/1625211761-reizz-residence.jpg?auto=format&w=1600
https://www.datocms-assets.com/23708/1625212088-southkey.jpg?auto=format&w=1600
https://www.datocms-assets.com/23708/1625211948-shahzan-hotel.jpg?auto=format&w=1600
```

**Supplementary Unsplash assets** — use these free, license-clear images to fill galleries where needed:
- Interiors: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200`
- Restaurant: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200`
- Hotel lobby: `https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200`
- Residential: `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200`
- Bar/Lounge: `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200`
- Auto detail: `https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200`
- Co-living: `https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200`
- F&B retail: `https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200`

---

## SITE SPECIFICATIONS

---

### SITE 1 — `aroha-restaurant.html`
**Brand:** Aroha — Thai-Fusion Fine Dining  
**Niche:** Upscale restaurant, Kuala Lumpur  
**Target audience:** Affluent diners, corporate events, date nights  

**Design direction:** Editorial luxury. Think *Noma* meets Southeast Asia. Deep forest green + warm gold + cream. Heavy serif display type. Full-bleed food/interior photography. Slow, cinematic scroll animations. Horizontal rule dividers. No rounded corners — everything sharp and intentional.

**Font pairing:** `Playfair Display` (headings) + `Cormorant Garamond` (body)

**Colour palette:**
```css
--bg: #0d1a0f;
--surface: #142016;
--gold: #c9a96e;
--cream: #f5f0e8;
--text: #d4cfc6;
```

**Pages / Sections to build:**
1. **Hero** — Full-viewport darkened interior photo. Restaurant name in massive serif. Tagline: *"Where Thai heritage meets modern artistry."* Two CTAs: `Reserve a Table` + `View Menu`
2. **Our Story** — Two-column: left is large italic quote from chef, right is portrait photo + 3-paragraph brand story. Include: *Est. 2019 · Kuala Lumpur · Award-Winning Kitchen*
3. **The Menu** — Tabbed interface: Lunch / Dinner / Tasting Menu / Drinks. Each tab shows 6 dishes with name, description, price (RM 38 – RM 220 range). Elegant table layout with thin gold rule separators.
4. **Gallery** — Masonry grid of 8 photos (mix Decorzo CDN + Unsplash). Photos of dining room, plating, cocktails, private dining room.
5. **Private Dining & Events** — Feature section: capacity (up to 80 pax), AV facilities, customised menus. CTA to enquiry form.
6. **Reservations** — Styled HTML form: date picker, time (dropdowns), number of guests, name, phone, special requests. Submit button. Note: *"For groups of 10+, please call directly."*
7. **Footer** — Address (Bangsar, KL), hours, phone, social links (Instagram, Facebook). Google Maps embed placeholder.

**Special interaction:** On scroll past hero, restaurant name shrinks into sticky top bar with nav links.

---

### SITE 2 — `skyline-properties.html`
**Brand:** Skyline Properties — Luxury Real Estate  
**Niche:** High-end residential property developer / agent, KL  
**Target audience:** Property investors, HNWI, expatriates  

**Design direction:** Cool, ultra-minimal luxury. Think Bloomberg + architectural digest. Off-white background, charcoal type, single accent in electric blue. Monospaced secondary font for data/numbers. Grid-based, mathematical spacing. Property cards with crisp borders and hover zoom.

**Font pairing:** `Libre Baskerville` (headings) + `DM Mono` (numbers/labels) + `DM Sans` (body)

**Colour palette:**
```css
--bg: #f8f7f5;
--dark: #1a1a2e;
--blue: #0066ff;
--warm: #8c7355;
--border: #e0ddd8;
```

**Pages / Sections to build:**
1. **Hero** — Split layout: left 60% is full-height interior photo (Reizz Residences CDN image), right 40% is white with large headline: *"Exceptional Properties for Exceptional People."* Animated counter: *247 Properties Sold · RM 380M+ Transacted*
2. **Featured Listings** — Card grid (3 columns). Each card: photo, property name, location, bedrooms, sqft, price. 6 listings total (KLCC, Bangsar, Mont Kiara, Ampang, Desa Park City, Damansara Heights). Prices RM 850K–RM 4.2M.
3. **Property Search** — Filter bar: Location dropdown, Property Type, Min/Max price slider, Bedrooms. Results update (can be faked with JS filter on static cards).
4. **Why Skyline** — 4-column icon stats: *15 Years Experience / 247 Units Sold / 98% Client Retention / 5-Star Service*
5. **Services** — Tabs: Buy / Sell / Invest / Rent. Each tab has 3-4 service bullets + CTA.
6. **Testimonials** — 3 client quotes with photo avatars (use placeholder initials), name, property purchased.
7. **Contact / Book Valuation** — Split: contact info left, form right (property address, type of enquiry, contact details).
8. **Footer** — Multiple columns: company info, quick links, contact, certifications (LPPEH registered etc.)

**Special interaction:** Property cards flip on hover to reveal key specs on back face (CSS 3D transform).

---

### SITE 3 — `mosaic-hotel.html`
**Brand:** The Mosaic — Boutique Hotel & Residences  
**Niche:** Luxury boutique hotel, Johor Bahru  
**Target audience:** Business travellers, weekend getaways, staycations  

**Design direction:** Warm, layered maximalism. Terracotta + deep navy + brass. Art deco geometric borders. Overlapping image layouts. Rich textures. Heavy use of decorative dividers. Think *The Ned* or *Soho House* brand aesthetic.

**Font pairing:** `Bodoni Moda` (headings) + `Jost` (body)

**Colour palette:**
```css
--terracotta: #c4623a;
--navy: #1b2a4a;
--brass: #b8962e;
--ivory: #faf6f0;
--dark: #0e1520;
```

**Pages / Sections to build:**
1. **Hero** — Full-screen video-style loop (simulate with CSS Ken Burns on hotel image). Animated overlay text: *"A stay unlike any other."* Check-in / Check-out date pickers + "Check Availability" button.
2. **Room Categories** — Horizontal scroll cards: Deluxe Room (RM 380/night), Premier Suite (RM 680/night), Penthouse (RM 1,400/night). Each card: photo, room size, amenities icons (WiFi, TV, bathtub, minibar), "Book Now" button.
3. **Dining** — Two restaurants featured: *The Brass Spoon* (all-day dining) + *Rooftop Bar* (sunset cocktails). Each with photo, hours, cuisine type, "Reserve" button.
4. **Experiences & Facilities** — Icon grid: Pool, Spa, Gym, Business Centre, Valet Parking, Concierge. Short description each.
5. **Location** — *"The Heart of Johor Bahru."* Key distances: 5min to CIQ, 15min to Legoland, 20min to Senai Airport. Map embed placeholder.
6. **Gallery** — Lightbox-enabled photo grid.
7. **Special Offers** — 3 promo cards: Early Bird (20% off), Weekend Package (includes breakfast), Corporate Rate (call for pricing).
8. **Newsletter / Footer** — Email subscribe form + full footer.

**Special interaction:** "Check Availability" button triggers a slide-down modal booking panel.

---

### SITE 4 — `leafy-co.html`
**Brand:** Leafy Co. — Modern Bubble Tea & Café Brand  
**Niche:** F&B retail chain / franchise  
**Target audience:** Gen Z, millennials, franchise investors  

**Design direction:** Playful, energetic maximalism. Think Glossier meets bubble tea. Pastel gradients, rounded corners everywhere, bold sans-serif, micro-animations on every element. Confetti-like scattered circles in backgrounds. Fun, unapologetically Gen Z.

**Font pairing:** `Nunito` (all — different weights for hierarchy)

**Colour palette:**
```css
--mint: #a8e6cf;
--coral: #ff8b94;
--lavender: #c3b1e1;
--yellow: #ffd93d;
--dark: #2d2d2d;
--white: #ffffff;
```

**Pages / Sections to build:**
1. **Hero** — Animated gradient background cycling through pastels. Huge bold headline: *"Sip. Smile. Repeat."* Bubble animation effect (floating circles CSS). CTA: `Find Nearest Store` + `Franchise With Us`
2. **Menu** — Tab filter: Signature Series / Classic / Seasonal / Snacks. Pastel cards with product name, description, calories, price (RM 12–RM 22). Cart button with "+1" animation.
3. **Our Story** — Timeline from 2018 (1 outlet) to 2025 (47 outlets, 3 countries). Fun illustrated milestones.
4. **Store Locator** — Search bar + 6 location cards (Klang Valley, Penang, JB, Kota Kinabalu, Singapore, Jakarta).
5. **Franchise Opportunity** — Stats: *47 Stores · 3 Countries · RM 120K Starting Investment · 24-Month ROI.* Apply form: name, city, investment readiness, WhatsApp number.
6. **Sustainability** — *"100% biodegradable cups by 2026."* 3 eco-commitment cards.
7. **Social Wall** — Mock Instagram grid (6 squares) with hover overlay.
8. **Footer** — Colourful, with newsletter subscribe.

**Special interaction:** Floating bubble/circle background animation (pure CSS keyframes).

---

### SITE 5 — `onyx-lounge.html`
**Brand:** Onyx — Cocktail Lounge & Private Events  
**Niche:** Premium nightlife venue / event space  
**Target audience:** Corporate event planners, premium nightlife crowd, KL  

**Design direction:** Dark brutalist luxury. Pure black background, single neon accent (electric violet), harsh grid lines, mixed serif and grotesque type. Industrial + premium paradox. Heavy use of large numbers and editorial spacing. No softness.

**Font pairing:** `Bebas Neue` (display headings) + `Neue Haas Grotesk / Haas` via `IBM Plex Sans` (body)

**Colour palette:**
```css
--black: #050505;
--surface: #0f0f0f;
--violet: #7c3aed;
--violet-bright: #a855f7;
--silver: #9ca3af;
--white: #f9fafb;
```

**Pages / Sections to build:**
1. **Hero** — Full black. Single line in massive BEBAS NEUE: `ONYX`. Subtitle: *"Petaling Jaya's most exclusive private lounge."* Tagline fades in 1.5s later. Looping background: bar/lounge photo with heavy dark overlay + purple gradient leak from bottom.
2. **The Experience** — 3 columns: The Bar (200+ spirits), The Sound (live DJ every Fri–Sat), The Smoke (dedicated cigar lounge).
3. **Private Events** — Full-width dark section. *"Own the night."* Capacity: 20–120 pax. Features: Dedicated host, bespoke cocktail menu, AV + DJ booth, valet. Enquiry button.
4. **Upcoming Events** — 4 event cards (weekly: Jazz Thursday, Ladies Night Friday, Resident DJ Saturday, Brunch Sunday). Date, time, dress code, RSVP button.
5. **The Menu** — Cocktails / Spirits / Bottles. Dark cards, gold typography, prices RM 38–RM 380.
6. **Membership** — 3 tiers: Silver (RM 2,400/yr), Gold (RM 5,500/yr), Black (invite only). Benefits matrix table.
7. **Gallery** — Dark grid, photos with violet hover overlay.
8. **Reservations / Footer** — Form on dark background. Footer with operating hours (Tue–Sun, 6PM–3AM) and contact.

**Special interaction:** Cursor custom-styled to a small glowing violet dot with trailing shadow effect.

---

### SITE 6 — `eden-coliving.html`
**Brand:** Eden — Co-Living & Serviced Residences  
**Niche:** Premium co-living, KLCC / Bangsar  
**Target audience:** Young professionals, digital nomads, expats  

**Design direction:** Soft organic luxury. Biophilic design language. Warm greens + sand + cream. Lots of white space. Flowing sections with natural curves (border-radius: 40px+). Photography of light-filled interiors. Calm, aspirational, lifestyle-forward.

**Font pairing:** `Fraunces` (headings, italic for mood) + `Plus Jakarta Sans` (body)

**Colour palette:**
```css
--sage: #7c9a7e;
--forest: #2d4a3e;
--sand: #e8dcc8;
--cream: #faf8f5;
--dark: #1a1a18;
```

**Pages / Sections to build:**
1. **Hero** — Split layout: 55% stunning apartment interior photo (Intan Kenny CDN), 45% cream background with headline: *"Live beautifully. Live freely."* Animated pill badges floating in: *Fully Furnished · Bills Included · Community Events · Flexible Lease*
2. **Unit Types** — Carousel: Studio (RM 2,200/mo), 1BR (RM 3,100/mo), 2BR (RM 4,800/mo), Penthouse (RM 8,500/mo). Each: photo, sqft, floor plan icon, amenities list.
3. **Locations** — Map-style section with 4 location pins: KLCC, Bangsar, Mont Kiara, Desa Park City. Click to expand property details.
4. **Community** — *"More than a home."* 3 feature cards: Monthly events, Members-only app, Concierge service. Plus mock member testimonials.
5. **Amenities** — Horizontal scroll icon list: Rooftop Pool, Co-working Lounge, Gym, Café on-site, Package Room, Bike Storage, Pet Friendly.
6. **How It Works** — 4-step visual: Browse → Book a tour → Sign your lease → Move in. Illustrated numbered steps.
7. **FAQ** — Accordion: 8 common questions (minimum stay, deposits, furnished?, guests policy etc.)
8. **Apply / Footer** — Short application form. Footer with socials.

**Special interaction:** Floating badge pills in hero use staggered CSS animation to drift gently upward on loop.

---

### SITE 7 — `gloss-studio.html`
**Brand:** Gloss — Premium Auto Detailing Studio  
**Niche:** High-end automotive detailing, Petaling Jaya  
**Target audience:** Car enthusiasts, luxury vehicle owners  

**Design direction:** Technical precision meets dark automotive luxury. Carbon fibre texture background, red accent, monospaced data typography. Feels like a McLaren configurator crossed with a Japanese workshop. No organic shapes — everything geometric and measured.

**Font pairing:** `Rajdhani` (headings) + `Space Mono` (data/numbers) + `Inter` (body)

**Colour palette:**
```css
--carbon: #0a0a0a;
--surface: #111111;
--red: #dc2626;
--chrome: #8b9196;
--white: #f1f5f9;
--data: #22d3ee;
```

**Pages / Sections to build:**
1. **Hero** — Dark full-screen. Car detail close-up background (Unsplash auto). Geometric HUD-style overlay elements (thin lines, corner brackets). Headline: `GLOSS DETAILING STUDIO` in technical caps. Subtext: *"Precision detailing for vehicles that demand perfection."* CTA: `Book a Detail` + `View Packages`
2. **Services** — 4-column technical cards: Exterior Detail (from RM 280), Interior Deep Clean (from RM 320), Paint Correction (from RM 980), Ceramic Coating (from RM 1,800). Each with time estimate, what's included checklist, "Configure" button.
3. **Package Configurator** — Interactive: select car size (Sedan / SUV / MPV / Supercar) → select service tier → price updates dynamically. Feels premium and bespoke.
4. **Process** — 6-step visual timeline: Assessment → Wash → Clay Bar → Polish → Protect → Inspect. Each step: icon, name, description, estimated time.
5. **Our Work** — Before/After slider on 3 featured vehicles. Label: make/model/service performed.
6. **Certifications** — *GTECHNIQ Certified · 3M Authorised · Gyeon Trusted Detailer.* Logo row.
7. **Book Online** — Form: vehicle make/model, service required, preferred date, contact. Plus note: *"Complimentary valet available for PJ & KL."*
8. **Footer** — Workshop hours (Mon–Sat 9AM–7PM), address (Petaling Jaya), WhatsApp direct.

**Special interaction:** Package configurator updates price with CSS counter animation when car size or tier changes.

---

## EXECUTION RULES

### Every site must have:
- [ ] `<meta name="viewport">` and proper mobile breakpoints
- [ ] Smooth scroll behaviour
- [ ] At minimum 1 scroll-triggered animation (IntersectionObserver or CSS scroll-timeline)
- [ ] Hover states on all interactive elements
- [ ] A working navigation with mobile hamburger menu
- [ ] Proper semantic HTML (header, main, section, footer, nav)
- [ ] Favicon emoji (use relevant emoji as SVG favicon inline)
- [ ] Open Graph meta tags (title, description, image)
- [ ] Page title matching the brand

### Image handling:
- Always add `loading="lazy"` to below-fold images
- Use `object-fit: cover` on all image containers
- Apply appropriate dark/light overlays for text readability
- Add `alt` text describing what the image depicts (not the brand name)

### Forms:
- All forms are static HTML (no backend required for demo purposes)
- Add `novalidate` and handle with JS validation inline
- On submit, replace form with: *"Thank you! We'll be in touch within 24 hours."*

### Performance target:
- Total HTML file under 150KB (excluding images which are CDN-hosted)
- No blocking scripts in `<head>` — all JS deferred or at bottom of body

### Quality bar:
Each site, when screenshotted at 1440px wide, should look indistinguishable from a real production website. A non-technical client looking at these should not be able to tell they are demos.

---

## OUTPUT FORMAT

Generate one HTML file per site. File names as specified above. Each file is fully self-contained and opens directly in a browser with no server required.

After all 7 sites are generated, output a JSON manifest:

```json
{
  "portfolio": [
    {
      "id": "aroha-restaurant",
      "file": "aroha-restaurant.html",
      "brand": "Aroha",
      "tagline": "Thai-Fusion Fine Dining",
      "niche": "Restaurant & F&B",
      "primaryColor": "#0d1a0f",
      "accentColor": "#c9a96e",
      "thumbnail": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
    }
  ]
}
```

This manifest is consumed by the portfolio showcase page (`portfolio.html`) to render the project grid dynamically.
