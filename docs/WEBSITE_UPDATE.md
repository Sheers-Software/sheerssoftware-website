# WEBSITE_UPDATE.md — sheerssoft.com Copy & Positioning Overhaul
# For execution by Antigravity / Claude Code on a code-first repository

## AGENT INSTRUCTIONS

You are updating the copy and positioning of sheerssoft.com.
This is a code-first website (Next.js or equivalent). There is no CMS.
All text lives directly in component files, page files, or a constants/content file.

**Before touching anything:**
1. Run `find . -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" -o -name "*.html" \) | head -60` to map the file structure.
2. Identify whether copy lives in dedicated content/constants files (e.g. `constants.ts`, `content.ts`, `data.ts`, `copy.ts`) or inline in page/component files.
3. If a content constants file exists — edit ONLY that file for all copy changes.
4. If copy is inline — edit each page/component file directly using targeted str_replace operations.
5. After every file edit, confirm the change with `grep` before moving on.

**Rules:**
- Use `str_replace` for every edit. Never rewrite an entire file.
- One str_replace per logical change. Do not batch unrelated changes in one operation.
- After all edits, run a local build (`npm run build` or equivalent) to confirm no broken imports or syntax errors.
- Do not change any classNames, IDs, component structure, styling, routing, or logic — copy only, unless a DELETE instruction is explicit.
- After completing all sections, print a summary: files edited, changes applied, any strings not found.

---

## SECTION 1 — HTML `<head>` / Metadata
**Target:** `<Head>` component or metadata export in the root layout / each page file.
Likely files: `app/layout.tsx`, `pages/_app.tsx`, `pages/index.tsx`, `src/app/layout.tsx`

### 1.1 — Page title (homepage)
```
OLD: "SheersSoft | Business Software Solutions"
NEW: "Sheers Software | AI Automation for Malaysian SMEs"
```

### 1.2 — Meta description (homepage + global default)
```
OLD: "Empowering businesses with technology, strategy, and support. High-performance websites, PWAs, and autonomous AI for Malaysian businesses."
NEW: "Sheers Software builds AI automation systems for Malaysian SMEs — deployed in 3 weeks, priced for local businesses, and eligible for up to RM5,000 in government grants."
```

### 1.3 — OG title
```
OLD: "SheersSoft | Business Software Solutions"
NEW: "Sheers Software | AI Automation for Malaysian SMEs"
```

### 1.4 — OG description
```
OLD: "Empowering businesses with technology, strategy, and support. High-performance websites, PWAs, and autonomous AI for Malaysian businesses."
NEW: "Malaysian SMEs are losing thousands monthly to manual work. We build the AI systems that stop it — in 3 weeks, not 6 months."
```

### 1.5 — Twitter description
```
OLD: "Empowering businesses with technology, strategy, and support."
NEW: "AI automation for Malaysian SMEs. Deployed in 3 weeks. Eligible for RM5,000 government grant."
```

---

## SECTION 2 — Navigation
**Target:** Nav/header component. Likely: `components/Navbar.tsx`, `components/Header.tsx`, `components/Nav.tsx`

### 2.1 — Brand name in nav
```
OLD: "Sheers.Soft"
NEW: "Sheers Software"
```

---

## SECTION 3 — Homepage: Hero Section
**Target:** Homepage file or hero component.
Likely: `app/page.tsx`, `pages/index.tsx`, `components/Hero.tsx`, `sections/Hero.tsx`

### 3.1 — Eyebrow label above H1
```
OLD: "Professional Digital Solutions"
NEW: "AI Automation for Malaysian SMEs"
```

### 3.2 — H1 headline
```
OLD: "Transform Your Business with SheersSoft"
NEW: "Malaysian SMEs Are Losing RM2,000–8,000 a Month to Manual Work. We Build the AI Systems That Stop It."
```

### 3.3 — Hero subheadline / body text
```
OLD: "Stop losing time and money on manual processes."
NEW: "Sheers Software builds custom AI automation for Malaysian businesses — deployed in 3 weeks, priced for SMEs, and eligible for up to RM5,000 in government grants."
```

### 3.4 — Second line of hero body (if separate element)
```
OLD: "Let intelligent automation work for you."
NEW: "" [DELETE this line / element if it is a separate text node from 3.3]
```

### 3.5 — Primary CTA button text
```
OLD: "Start Transformation"
NEW: "See If You Qualify"
```

### 3.6 — Primary CTA button href
```
OLD: "/contact"          (or "https://sheerssoft.com/contact")
NEW: "https://cal.com/ahmadbasyir/discovery"
```

### 3.7 — Secondary CTA button text
```
OLD: "View Solutions"
NEW: "How It Works"
```

---

## SECTION 4 — Homepage: Problem Section
**Target:** Same page file as hero, or a separate section component.
Likely: `sections/Problems.tsx`, `components/ProblemSection.tsx`, inline in `page.tsx`

### 4.1 — Section H2
```
OLD: "Are You Struggling With These Problems?"
NEW: "The Real Cost of Running Your Business Manually in 2026"
```

### 4.2 — Card 1 title
```
OLD: "Wasting Time"
NEW: "Your Team Is Doing RM15/Hour Work"
```

### 4.3 — Card 1 body
```
OLD: "Your team spends hours on repetitive manual tasks instead of high-value work."
NEW: "WhatsApp bookings, manual invoices, Excel trackers. That's not what you hired them for — and every hour they spend on it costs more than the software that eliminates it."
```

### 4.4 — Card 2 title
```
OLD: "High Costs"
NEW: "Digital Agencies Want 6 Months and RM50,000"
```

### 4.5 — Card 2 body
```
OLD: "Operational expenses keep climbing every month while efficiency stagnates."
NEW: "By the time a traditional agency delivers, the market has moved. You don't need a 6-month project. You need a working system in 3 weeks."
```

### 4.6 — Card 3 title
```
OLD: "Slow Growth"
NEW: "97% of Malaysian SMEs Aren't Digitally Mature — Yet"
```

### 4.7 — Card 3 body
```
OLD: "Your business isn't scaling as fast as you'd like due to bottlenecks."
NEW: "The businesses automating their operations now are cutting costs, responding faster, and closing more. The first-mover window in your market is 12–18 months. It is open right now."
```

---

## SECTION 5 — Homepage: Urgency / Bridge Section
**Target:** Inline in page or `sections/Urgency.tsx`

### 5.1 — H2
```
OLD: "Every Day You Wait, You're Losing Money"
NEW: "The Window for First-Mover Advantage in Your Market Is 12–18 Months."
```

### 5.2 — Body paragraph (first sentence / line)
```
OLD: "While your competitors automate and scale, you're stuck with outdated processes. Your team is overworked, customers are waiting, and opportunities are slipping away."
NEW: "AI adoption in Malaysian SMEs is accelerating. The businesses automating their operations now are cutting costs, responding faster, and closing more — while their competitors still manage everything on WhatsApp and Excel."
```

### 5.3 — Body paragraph (second sentence / line)
```
OLD: "How much longer can you afford to wait?"
NEW: "We're not selling you a feature. We're selling you a head start."
```

---

## SECTION 6 — Homepage: Solutions / Features Section
**Target:** Inline in page or `sections/Solutions.tsx`, `sections/Features.tsx`

### 6.1 — Section H2
```
OLD: "Introducing SheersSoft Solutions"
NEW: "What We Build"
```

### 6.2 — Section subheadline
```
OLD: "The all-in-one platform that automates your business operations"
NEW: "Three specific offerings. Each built for Malaysian SMEs. Each deployable in under 3 weeks."
```

### 6.3 — Feature card 1 title
```
OLD: "AI-Powered Automation"
NEW: "AI Operations Sprint"
```

### 6.4 — Feature card 1 body
```
OLD: "Automate repetitive tasks and free up your team's time for what matters."
NEW: "We map your single biggest manual process, build the AI system to eliminate it, and deploy it live — in 21 days or less. Bookings, invoicing, customer follow-up, staff tracking. If it's manual, we can automate it. Most clients qualify for a RM5,000 government grant that offsets the cost."
```

### 6.5 — Feature card 2 title
```
OLD: "Secure & Reliable"
NEW: "AI WhatsApp Concierge (Nocturn AI)"
```

### 6.6 — Feature card 2 body
```
OLD: "Enterprise-grade security you can trust with your most sensitive data."
NEW: "Captures every customer inquiry, qualifies every lead, and responds 24/7 — even when you're closed. Built specifically for F&B chains, clinics, and property agencies. Never miss a booking again."
```

### 6.7 — Feature card 3 title
```
OLD: "Scalable Growth"
NEW: "MSME Digital Grant Navigation"
```

### 6.8 — Feature card 3 body
```
OLD: "Grows with your business from startup to enterprise without friction."
NEW: "Budget 2026 includes up to RM5,000 in matching grants for SME digitalisation via BSN and MDEC. Most SME owners have no idea this exists. We identify if you qualify, help you apply, and offset the cost of your system. You're effectively getting the build at half price."
```

---

## SECTION 7 — Homepage: Stats Section
**Target:** Inline in page or `sections/Stats.tsx`

### 7.1 — Stat 1 title (currently has 🚀 emoji)
```
OLD: "10x Faster Operations"
NEW: "21 Days"
```

### 7.2 — Stat 1 body
```
OLD: "Complete tasks in minutes that used to take hours. Our automation handles the heavy lifting."
NEW: "From discovery call to live deployed system. Not 6 months. Not a pilot. A working AI system in your business in 3 weeks."
```

### 7.3 — Stat 2 title (currently has 🌍 emoji)
```
OLD: "Scale Globally"
NEW: "RM5,000"
```

### 7.4 — Stat 2 body
```
OLD: "Expand to new markets without hiring more staff. Our platform scales with you."
NEW: "In government digitalisation grants available to qualifying Malaysian SMEs under Budget 2026. We handle the paperwork. You keep the savings."
```

### 7.5 — Stat 3 title (currently has 💎 emoji)
```
OLD: "Premium Support"
NEW: "ROI Brief First"
```

### 7.6 — Stat 3 body
```
OLD: "Get dedicated support from our expert team. We're here 24/7 to help you succeed."
NEW: "Before you pay a single ringgit, we give you a 1-page brief showing exactly what the system will save you — in RM, per month. If the numbers don't make sense, we say so."
```

### 7.7 — Remove all three emoji characters
```
DELETE the following characters wherever they appear in this section:
  🚀
  🌍
  💎
```
> If emoji are in a separate element (e.g. `<span>🚀</span>`), delete the entire element.
> If they are part of a string literal (e.g. `"🚀 10x Faster"`), remove just the emoji character and any trailing space.

---

## SECTION 8 — Homepage: Package / Offer Section
**Target:** Inline in page or `sections/Package.tsx`, `sections/Offer.tsx`

### 8.1 — Section H2
```
OLD: "Everything You Need to Succeed"
NEW: "How We Work"
```

### 8.2 — Package card title
```
OLD: "Complete Package"
NEW: "The AI Operations Sprint"
```

### 8.3 — Package card subtitle
```
OLD: "Full Platform Access"
NEW: "One fixed-scope project. One outcome. Zero ambiguity."
```

### 8.4 — Feature list items
Replace each list item string one by one in the order they appear:
```
OLD: "AI-Powered Automation Tools"
NEW: "30-min discovery call to identify your highest-value automation"

OLD: "Priority Customer Support"
NEW: "1-page ROI brief delivered before any commitment"

OLD: "Monthly Strategy Sessions"
NEW: "Custom AI system built and deployed on GCP in 21 days"

OLD: "Custom Integration Support"
NEW: "Integrates with WhatsApp, Google Sheets, and email you already use"

OLD: "Training & Onboarding"
NEW: "Staff training doc and walkthrough included"

OLD: "Regular Updates & Features"
NEW: "30 days of async WhatsApp support post-launch"

OLD: "99.9% Uptime Guarantee"
NEW: "MSME Digital Grant application assistance (up to RM5,000 back)"
```

---

## SECTION 9 — Homepage: CTA / Scarcity Section
**Target:** Inline in page or `sections/CTA.tsx`, `sections/FinalCTA.tsx`

### 9.1 — Section H2
```
OLD: "Limited Time Offer: Get Started Today"
NEW: "We Take On 3 New Clients Per Month."
```

### 9.2 — Scarcity badge / label
```
OLD: "⚡ Only 5 Spots Available This Month"
NEW: "Our process starts with a 20-minute discovery call — no commitment, no sales pitch."
```
> If the ⚡ is a separate element, delete it. Replace only the text node.

### 9.3 — Body text below headline
```
OLD: "Join the businesses already transforming their operations"
NEW: "We learn your operation, identify the highest-value automation opportunity, and show you the ROI — before you spend anything. If it's not a clear win for your business, we'll tell you."
```

### 9.4 — CTA button text
```
OLD: "Get Free Consultation"
NEW: "Book a Free Discovery Call"
```

### 9.5 — CTA button href
```
OLD: "/contact"          (or "https://sheerssoft.com/contact")
NEW: "https://cal.com/ahmadbasyir/discovery"
```

### 9.6 — Guarantee card title
```
OLD: "100% Satisfaction Guarantee"
NEW: "ROI Brief Guarantee"
```

### 9.7 — Guarantee card body
```
OLD: "We're so confident in our solutions that if you're not completely satisfied within the first 30 days, we'll refund every penny. **No questions asked.**"
NEW: "Every engagement starts with a free ROI brief. We show you exactly what the system will save you — in ringgit — before you commit. If the numbers don't make sense for your business, you walk away and owe us nothing."
```

---

## SECTION 10 — Solutions Page (`/solutions`)
**Target:** `app/solutions/page.tsx`, `pages/solutions.tsx`, or equivalent

### 10.1 — Page H1
```
OLD: "Our Solutions"
NEW: "What We Build for Malaysian SMEs"
```

### 10.2 — Page subheadline
```
OLD: "Empowering businesses with cutting-edge technology and engineering excellence."
NEW: "Three specific offerings. Each deployed in under 3 weeks. Each built for the operational reality of Malaysian businesses — not enterprise spec sheets."
```

### 10.3 — Service 1 title
```
OLD: "Mobile and Web Solutions"
NEW: "AI Operations Sprint"
```

### 10.4 — Service 1 body
```
OLD: "High-performance digital experiences built for scale and speed."
NEW: "We map your single biggest manual workflow — bookings, invoicing, customer follow-up, staff scheduling — and build a live AI system to eliminate it. Deployed on GCP. Integrated with WhatsApp, Google Sheets, and email. Live in 21 days."
```

### 10.5 — Service 1 feature list (replace each item)
```
OLD: "Progressive Web Apps (PWA)"
NEW: "30-min discovery call + free ROI brief"

OLD: "Native Mobile Apps (iOS & Android)"
NEW: "Custom AI system built and deployed"

OLD: "Responsive Web Design"
NEW: "WhatsApp / Google Sheets / email integration"

OLD: "Cross-Platform Development"
NEW: "30 days post-launch support"
```

### 10.6 — Service 2 title
```
OLD: "Software Engineering & Quality"
NEW: "AI WhatsApp Concierge — Nocturn AI"
```

### 10.7 — Service 2 body
```
OLD: "Robust, maintainable, and secure codebases driven by best practices."
NEW: "An always-on AI agent that handles customer inquiries, qualifies leads, and books appointments via WhatsApp — even outside business hours. Built for F&B chains, clinics, dental practices, and property agencies."
```

### 10.8 — Service 2 feature list (replace each item)
```
OLD: "Microservices Architecture"
NEW: "24/7 WhatsApp auto-response"

OLD: "Automated Testing (QA)"
NEW: "Lead qualification and intake"

OLD: "CI/CD Pipelines"
NEW: "Appointment booking automation"

OLD: "Legacy System Modernization"
NEW: "Missed inquiry recovery"
```

### 10.9 — Service 3 title
```
OLD: "Digital Transformation & AI"
NEW: "MSME Digital Grant Navigation"
```

### 10.10 — Service 3 body
```
OLD: "Future-proof your business with intelligent automation and data-driven insights."
NEW: "Budget 2026 allocates up to RM5,000 in matching grants for SME digitalisation through BSN and MDEC. Most SME owners don't know this exists. We identify your eligibility, prepare the application, and help you claim the grant — effectively halving the cost of your AI system."
```

### 10.11 — Service 3 feature list (replace each item)
```
OLD: "AI-Powered Automation"
NEW: "Eligibility assessment (free)"

OLD: "Data Analytics & Insights"
NEW: "Grant application preparation"

OLD: "Cloud Migration Strategy"
NEW: "Up to RM5,000 reimbursement"

OLD: "Process Digitization"
NEW: "BSN / MDEC compliant documentation"
```

### 10.12 — Page CTA H2
```
OLD: "Ready to Transform Your Business?"
NEW: "Not Sure Which Option Fits? Start With a Free Discovery Call."
```

### 10.13 — Page CTA body
```
OLD: "Let's build the future together with our expert engineering teams."
NEW: "We'll map your operation, identify the highest-ROI automation, and deliver a written brief before you commit to anything."
```

### 10.14 — Page CTA button text
```
OLD: "Start Your Project"
NEW: "Book Your Free Discovery Call"
```

### 10.15 — Page CTA button href
```
OLD: "/contact"
NEW: "https://cal.com/ahmadbasyir/discovery"
```

---

## SECTION 11 — About Page (`/about`)
**Target:** `app/about/page.tsx`, `pages/about.tsx`, or equivalent

### 11.1 — Page H1
```
OLD: "About Sheers Software"
NEW: "Built in Malaysia, for Malaysian Businesses"
```

### 11.2 — Who We Are body (first paragraph)
```
OLD: "Sheers Software Sdn. Bhd. is a leading software development company committed to delivering innovative and reliable digital solutions. Our team specializes in custom software, AI-powered applications, and user-friendly platforms designed to help businesses streamline operations, enhance customer experiences, and achieve sustainable growth."
NEW: "Sheers Software Sdn. Bhd. is a KL-based AI automation firm that builds operational systems for Malaysian SMEs. We specialise in one thing: identifying your single biggest manual workflow and replacing it with an AI system that runs automatically — deployed in 3 weeks."
```

### 11.3 — Who We Are body (second paragraph)
```
OLD: "With a focus on quality, security, and client success, we turn ideas into impactful technology solutions that drive real results."
NEW: "We're not a large agency with account managers and 6-month timelines. We're a focused team that moves fast, speaks finance — so you always know your ROI before we build anything — and works exclusively with Malaysian businesses ready to stop doing things manually."
```

### 11.4 — Mission section H2 or label
```
OLD: "Our Mission"
NEW: "Our Focus"
```

### 11.5 — Mission body
```
OLD: "To empower businesses with innovative, reliable, and scalable software solutions that streamline operations, enhance customer experiences, and drive sustainable growth."
NEW: "To give every Malaysian SME access to the same operational efficiency that enterprise companies have — without the enterprise price tag, the 6-month timeline, or the requirement to hire a tech team."
```

### 11.6 — Mission feature list (replace each item)
```
OLD: "Deliver high-quality custom software and AI-powered applications."
NEW: "Every project starts with a free ROI brief — no guesswork, no vague promises."

OLD: "Foster strong client partnerships built on trust and transparency."
NEW: "We build with tools that integrate with what you already use: WhatsApp, Google Sheets, email."

OLD: "Continuously innovate to stay ahead in the digital technology landscape."
NEW: "We help clients claim government digitalisation grants that offset project costs."
```

### 11.7 — Vision H2 or label
```
OLD: "Our Vision"
NEW: "Where We're Going"
```

### 11.8 — Vision body
```
OLD: "To be a global leader in software development, recognized for transforming ideas into impactful digital solutions that redefine business success."
NEW: "To be the most trusted AI automation firm for Malaysian SMEs — the company a clinic owner, a property agency director, or an F&B chain operator calls first when they want to stop doing things manually."
```

### 11.9 — Vision feature list (replace each item)
```
OLD: "Market expansion across Malaysia"
NEW: "Build 50 AI systems for Malaysian SMEs by end of 2027"

OLD: "Solution portfolio enhancement"
NEW: "Establish the AI Operations Sprint as the standard SME automation package in Malaysia"

OLD: "Strategic partnerships"
NEW: "Become a recognised MDEC digital solution provider"

OLD: "International market entry (Southeast Asia)"
NEW: "Expand to Singapore and Indonesia SME markets by 2028"
```

### 11.10 — Impact Goals (replace each item)
```
OLD: "Help businesses achieve measurable operational efficiency."
NEW: "Every client gets a written ROI brief before spending a single ringgit."

OLD: "Enhance end-user experiences through intuitive and accessible platforms."
NEW: "Every system integrates with tools SME teams already use — zero learning curve."

OLD: "Drive economic growth by enabling digital transformation across industries."
NEW: "Every eligible client gets guided through the government digitalisation grant process."
```

---

## SECTION 12 — Footer (All Pages)
**Target:** `components/Footer.tsx`, `components/Layout.tsx`, or shared layout file

### 12.1 — Brand name in footer
```
OLD: "Sheers.Soft"
NEW: "Sheers Software"
```

### 12.2 — Footer tagline
```
OLD: "Empowering businesses with technology, strategy, and support."
NEW: "AI automation for Malaysian SMEs. Built and deployed in 3 weeks."
```

### 12.3 — Remove secondary email
```
DELETE the element or string containing: "m.hafiz@sheerssoft.com"
```
> Keep only: a.basyir@sheerssoft.com

### 12.4 — Add Cal.com booking link
```
LOCATE: The contact section of the footer (near the email address)
ADD after the email link:
  Display text: "Book a Discovery Call"
  href: "https://cal.com/ahmadbasyir/discovery"
  Style: Match the existing email anchor element exactly (same className, same element type)
```

### 12.5 — Fix empty social links
```
LOCATE: The two anchor elements with href="#" in the social icons row

First empty anchor:
  OLD: href="#"
  NEW: href="https://www.instagram.com/abasyir_launch"
  ADD: aria-label="Instagram"
  UPDATE icon to Instagram SVG or swap icon component prop to "instagram"

Second empty anchor:
  DELETE this element entirely if no second active social platform exists.
```

---

## SECTION 13 — Global String Replacements (All Files)

Run these across the entire codebase after completing sections 1–12.
Use: `grep -r "SEARCH_STRING" . --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"` to find any remaining instances.

### 13.1
```
OLD (any remaining instance): "SheersSoft"
NEW: "Sheers Software"
```

### 13.2
```
OLD (any remaining instance): "Sheers.Soft"
NEW: "Sheers Software"
```

### 13.3
```
OLD (any remaining instance): "sheerssoft" in visible display text only
NEW: "Sheers Software"
NOTE: Do NOT change URLs, import paths, package names, or domain strings like "sheerssoft.com"
```

---

## SECTION 14 — Post-Edit Verification

After all edits are complete, run these checks in order:

```bash
# 1. Confirm no old strings remain in source files
grep -r "SheersSoft\|Sheers\.Soft\|Transform Your Business with\|Only 5 Spots\|Scale Globally\|Wasting Time\|High Costs\|Slow Growth\|m\.hafiz@" \
  . --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.html"

# Expected output: no results. If any found, fix before proceeding.

# 2. Confirm new key strings are present
grep -r "Malaysian SMEs Are Losing\|See If You Qualify\|MSME Digital Grant\|ROI Brief Guarantee\|21 Days\|cal\.com\/ahmadbasyir" \
  . --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.html"

# Expected output: at least one match per string.

# 3. Build check
npm run build

# Expected: clean build, zero errors.
```

### Final checklist before deploy:
```
[ ] H1 on homepage contains "Malaysian SMEs Are Losing"
[ ] Primary CTA links to https://cal.com/ahmadbasyir/discovery
[ ] "Only 5 Spots Available This Month" — gone
[ ] "100% Satisfaction Guarantee" — replaced with "ROI Brief Guarantee"
[ ] Emoji 🚀 🌍 💎 ⚡ — all removed
[ ] Solutions page service 1 = "AI Operations Sprint"
[ ] Solutions page service 3 = "MSME Digital Grant Navigation"
[ ] About page H1 = "Built in Malaysia, for Malaysian Businesses"
[ ] Footer has ONE email only: a.basyir@sheerssoft.com
[ ] Footer has "Book a Discovery Call" link to cal.com
[ ] Instagram social link points to https://www.instagram.com/abasyir_launch
[ ] No instance of "SheersSoft" or "Sheers.Soft" in visible text
[ ] npm run build passes with zero errors
```

---
## Deploy

Once build passes and checklist is complete:
```bash
git add -A
git commit -m "feat: reposition copy for Malaysian SME AI automation market"
git push
```
Then trigger GCP deployment per your existing deploy workflow.
