# Nocturn AI — Complete Sales Funnel & Flywheel System
## From Zero Revenue to First RM 1M ARR
### CMO-Level · Hyper-Specific · Built on Live Site Inspection · March 2026

---

> **STRATEGIC CONTEXT:** Nocturn AI is a pre-revenue B2B SaaS selling a 30-day free pilot to independent 3-4 star Malaysian hotels. The founding cohort model (5 spots, founder-direct access) is the correct GTM for this stage. The product page at ai.sheerssoft.com is structurally strong but has five conversion-blocking gaps. The funnels in this document are built around a single truth: **hotel GMs and Revenue Managers do not buy software — they buy proof that the problem costs them money and the solution is risk-free.** Every funnel is designed to make that proof unavoidable.

---

## PART 0 — LANDING PAGE SURGERY: WHAT MUST CHANGE BEFORE ANY FUNNEL RUNS

Before spending a single ringgit on ads or a single hour on outreach, fix these six issues. Running traffic to a leaking page is burning fuel.

---

### 0.1 The Missing Price Anchor — Revenue Blocking

**Current state:** The page has no price anywhere. Not even a range.

**Why this kills B2B conversion:** Hotel GMs are procurement decision-makers. Before they apply, they run an internal calculation: *"Is this worth my time to evaluate?"* Without a price, that calculation is impossible. They don't apply. They leave.

**The psychology:** Hiding pricing does not create mystique in B2B. It creates friction. The prospect's brain fills the blank with a number higher than reality — and self-disqualifies.

**The fix — add this section AFTER the ROI calculator:**

```
SECTION HEADLINE: After the 30-Day Pilot — Here's What Continuing Looks Like

COPY:
If the pilot delivers — and we believe it will — continuing is simple.
No contract negotiations. No IT project. Just a monthly subscription
that pays for itself on the first captured booking.

[TABLE]
Property Size       | Monthly Plan    | Annual (save 2 months)
< 50 rooms          | RM 599/month    | RM 5,990/year
50–150 rooms        | RM 899/month    | RM 8,990/year
150+ rooms          | RM 1,199/month  | RM 11,990/year

All plans include: All channels (WhatsApp + Email + Web) · Unlimited
inquiries · GM Morning Report · Automated follow-up engine · PDPA
compliance · Cancel anytime.

Founding Cohort members lock in 30% below these rates. Forever.
That's RM 419/month for a <50-room property — permanently.
```

**CTA below pricing:** `[Secure Your Founding Rate — Apply Now →]`

This does three things simultaneously: removes the price objection, creates urgency to apply NOW (before rates go up), and makes the "free pilot" feel even more valuable (you're getting a RM 599–1,199 product for free for 30 days).

---

### 0.2 The Headline Stat Counters Are Broken

**Current state:** Three stat counters animate from 0 to their value. Based on the source code rendering, they appear to be showing "0%" and "0" until JavaScript loads — which on slow connections (and for crawlers) means the critical social proof stats never display.

**More critically:** The stats say:
- "0% of Malaysian hotel bookings come from manual channels"
- "0 daily inquiry touchpoints per property"
- "0% of inquiries captured after 6PM"

These read as zeros — which communicates the exact opposite of your intent. A GM scanning quickly sees three zeros and thinks "this product has zero data to back it up."

**The fix:** Make these static HTML, not JS-animated counters. Display the actual numbers:
- `70%` of Malaysian hotel bookings come from manual channels
- `30–200` daily inquiry touchpoints per property  
- `0%` of inquiries captured after 6PM ← this one SHOULD be zero — it's the problem

The third stat is actually powerful as zero. The first two need real numbers.

---

### 0.3 The /apply Page — The Most Important Page You Have and I Cannot Read

Every CTA on the page drives to `/apply`. The entire funnel converges at one URL. If that page is slow, confusing, has more than 4 fields, or doesn't confirm the next step clearly — your conversion rate collapses here.

**The /apply page must do exactly this:**

```
PAGE TITLE: Apply for the Nocturn AI Founding Cohort

ABOVE FOLD — NO SCROLL REQUIRED:

  HEADLINE: "5 Hotels. 30 Days Free. We Handle Everything."

  SUBHEAD: "Tell us about your property. Basyir will personally 
  WhatsApp you within 2 hours."

  FORM — EXACTLY 4 FIELDS:
  1. Hotel name + city (text field)
  2. Number of rooms (dropdown: <30 | 30-50 | 50-150 | 150+)
  3. Current after-hours process (dropdown: 
     "WhatsApp/calls only, often missed" | 
     "Someone on call but inconsistent" | 
     "We have a system but it's not working" | 
     "We miss most after-hours inquiries")
  4. Your WhatsApp number (tel field, with +60 pre-filled)

  [Submit Application →]

  BELOW BUTTON (small text):
  "No sales team will call you. Basyir — the founder — will WhatsApp 
  you personally within 2 hours to confirm your spot and answer 
  any questions."

BELOW FORM (trust reinforcement, no scroll required to see button):
  Photo of Basyir + "Direct line to the founder."
  Three one-line trust signals:
  ✓ 30 days free — no credit card
  ✓ Live in 48 hours — we handle setup
  ✓ Cancel anytime — no contract
```

**What happens after they submit:** Immediate redirect to a Thank You page that says:
```
Your application is in. 

Here's exactly what happens next:

→ Within 2 hours: Basyir will WhatsApp you personally to confirm
  your spot and ask two quick questions about your property.

→ Within 24 hours: We schedule your 30-minute onboarding call.

→ Day 2: Nocturn AI is live at your property.

While you wait — here's the Midnight Test running live:
[Link anchored to the Midnight Test section of the homepage]
```

---

### 0.4 Missing: LinkedIn Insight Tag

No LinkedIn pixel = no retargeting to hotel GMs. Install immediately. This is a 10-minute task that unlocks Funnel 2B (LinkedIn Retargeting).

Code goes in `<head>` of ai.sheerssoft.com:
```html
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
```

---

### 0.5 Missing: Two CTAs, Not One

Every section of the page drives to `/apply` — the commitment CTA. But 80% of B2B page visitors are in research mode, not buying mode. You need a **secondary CTA for the not-yet-ready majority.**

**Add a secondary CTA in two places:**
1. Below the ROI Calculator: `[Not ready to apply? Get the Free Inquiry Audit →]`  
   → Links to a Typeform or separate landing page collecting email + WhatsApp for the lead magnet
2. In the footer: `[Download: How Much Is Your Hotel Losing After 6PM?]`

This captures the 80% who leave without applying. They go into a nurture sequence instead of disappearing.

---

### 0.6 Missing: Social Proof That the PRODUCT Works

The operator quotes validate the **problem** — they are excellent and should stay. But there is no validation that the **product** works. At zero-customer stage, you bridge this with:

1. **The founder's own credibility** — The "Why I Built This" section is good but undersells the research depth. Add: *"9 operators. 4 countries. 18 months of primary research. This product was designed around their exact words — not a market analysis."*

2. **A demo video** — A 2-minute screen recording of the dashboard (even a prototype) showing real-time inquiry capture, the morning report format, and the conversation log. Text testimonials are less than 20% as persuasive as a working product demo for B2B SaaS. This single asset will increase conversion rate on the page by an estimated 25-35%.

3. **A "Built by a Malaysian, for Malaysia" signal** — Add somewhere visible: *"Built in Malaysia. Running on WhatsApp Business API. Compliant with PDPA 2010. Hosted on Google Cloud Singapore."* This addresses the unspoken objection: *"Is this a random foreign SaaS that doesn't understand how Malaysian hotels actually work?"*

---

## PART 1 — ICP DECISION MAKER MAP

Before building funnels, map who makes the decision and who blocks it.

### The Three Buyers and Their Primary Motivations

```
TIER 1 — PRIMARY CONTACT (initiate the process):
┌─────────────────────────────────────────────────────────┐
│ RESERVATION MANAGER                                     │
│ Pain: 30-200 daily touchpoints, no follow-up system     │
│ Fear: Being seen as the bottleneck                      │
│ Win: "Nocturn AI makes me look like I have a team of 5" │
│ Objection: "What if it says something wrong?"           │
│ Channel: LinkedIn DM, WhatsApp cold outreach            │
│ Decision power: Can champion, cannot sign alone         │
└─────────────────────────────────────────────────────────┘

TIER 2 — ECONOMIC BUYER (signs the check):
┌─────────────────────────────────────────────────────────┐
│ GENERAL MANAGER                                         │
│ Pain: Owner pressure on RevPAR, OTA dependency          │
│ Fear: Implementing something that doesn't work          │
│ Win: "Morning report I can show the owner every day"    │
│ Objection: "We tried a chatbot before, nobody used it"  │
│ Channel: LinkedIn content, warm referral, cold email    │
│ Decision power: Signs the contract, needs board buy-in  │
└─────────────────────────────────────────────────────────┘

TIER 3 — INFLUENCER / CHAMPION:
┌─────────────────────────────────────────────────────────┐
│ REVENUE MANAGER                                         │
│ Pain: Can't measure direct inquiry channel performance  │
│ Fear: OTA commission percentage keeps climbing          │
│ Win: "Dashboard that shows direct vs OTA capture rate"  │
│ Objection: "How does this integrate with my rate data?" │
│ Channel: LinkedIn content, hospitality associations     │
│ Decision power: Recommends to GM, frames the ROI case   │
└─────────────────────────────────────────────────────────┘
```

### The Decision Journey

```
AWARENESS       → CONSIDERATION    → DECISION      → ONBOARDING
Discovery of    → Evaluate if      → Apply +        → Setup +
the problem     → product fits     → negotiate      → First week
(2-4 weeks)       (1-2 weeks)       (1-3 days)       (48 hours)

Primary movers at each stage:
  Awareness:    Revenue Manager discovers via LinkedIn content
  Consideration: Revenue Manager + Reservation Manager evaluate
  Decision:     GM signs off (often same day for "free pilot")
  Onboarding:   Reservation Manager runs day-to-day
```

### Target Hotel Profile (Qualifying Criteria)

**Include:**
- 30–200 rooms
- Independent or boutique (not full franchise like Marriott, Hilton — they have enterprise tools)
- Malaysian properties (primary: KL, Selangor, Penang, JB, Sabah/Sarawak resorts)
- Currently using WhatsApp Business as primary inquiry channel
- Reservation desk staffed < 24 hours

**Exclude (for now):**
- Full-service 5-star properties with existing enterprise CRM
- Properties under 20 rooms (ADR too low for ROI calculation to work)
- OYO-managed properties (they have their own system)
- Properties with 24-hour coverage already in place

---

## PART 2 — THE FOUR FUNNELS

---

# FUNNEL 1: LINKEDIN ORGANIC CONTENT → DM → WHATSAPP CALL → PILOT SIGNED

**Stage:** Founding Cohort acquisition (now → first 5 hotels)  
**Budget:** RM 0 (pure organic)  
**Time to first lead:** 1-2 weeks  
**Estimated conversion to pilot:** 15-25% of qualified DMs  
**Owner:** Basyir (fully personal — this funnel dies the moment it stops being founder-led)

---

## FUNNEL 1 — FULL MAP

```
[LinkedIn Content Post Published]
         ↓
[Prospect comments OR post gets shared in hospitality circles]
         ↓
[Prospect views Basyir's profile]
  → Headline reads: "Founder @ Nocturn AI · Helping Malaysian Hotels..."
  → Featured: Midnight Test demo link + Apply link
  → About: Opens with "Hospitality doesn't fail because teams don't care..."
         ↓
[Prospect follows Basyir OR Basyir sends connection request]
         ↓
[CONNECTION ACCEPTED]
         ↓
[WITHIN 24 HOURS: Basyir sends Connection DM — Template 1A]
         ↓
[PROSPECT REPLIES]
         ↓
[CONVERSATION DM — Template 1B — The Discovery Question]
         ↓
[PROSPECT ENGAGES]
         ↓
[PIVOT TO WHATSAPP — Template 1C]
         ↓
[WHATSAPP CALL BOOKED — 20 minutes]
         ↓
[DISCOVERY CALL — Script in Section 3.1]
         ↓
[FOLLOW-UP WHATSAPP — Template 1D — Same day]
         ↓
[APPLY LINK SENT]
         ↓
[APPLICATION SUBMITTED]
         ↓
[ONBOARDING TRIGGERED — Section 5]
```

---

## FUNNEL 1 — MESSAGE TEMPLATES (EXACT COPY)

### Template 1A — Post-Connection DM (Within 24 hours of connection)

**Trigger:** They accepted your connection request, OR they commented on one of your posts and you connected with them.

**Message:**
```
Hi [Name],

Thanks for connecting. I saw you're at [Property Name] — [City]. 
Reservation/Revenue work there?

I've been documenting operator interviews for a project I'm building 
around after-hours inquiry capture for Malaysian hotels. Already spoken 
to 9 operators across KL, Penang, and the Gulf.

Quick question — genuinely curious: when your reservations desk closes, 
what happens to WhatsApp messages that come in overnight?

Not pitching anything — just trying to understand if what 9 operators 
told me is consistent across different property types.

— Basyir
```

**Why this works:**
- Opens with their property (personalisation signals you're not mass-messaging)
- References the operator research (credibility without a sales claim)
- Asks ONE question they can answer in 10 seconds
- Explicitly says "not pitching" — removes the defence mechanism
- No link, no product name, no CTA. Pure curiosity.

**Expected reply rate:** 25-40% of messages sent

---

### Template 1A-ALT — For Cold Connections You Initiated

**Trigger:** You found their profile and sent a connection request. They accepted.

**Message:**
```
Hi [Name],

Good to connect. I noticed you're a [GM/Revenue Manager/Reservation 
Manager] at [Property Name] — that's exactly the type of property I've 
been speaking to for research I'm doing on Malaysian hotel direct 
bookings.

Nothing to sell. Just documenting a pattern I'm seeing across every 
conversation: the 6PM-to-9AM window where inquiries arrive but nobody 
captures them.

Does that sound familiar at [Property Name]?

— Basyir
```

---

### Template 1B — The Discovery Reply (After they confirm the problem)

**Trigger:** They reply with ANY version of "yes, that's a problem" — even something like "yeah we just miss them" or "we have someone checking but not always."

**Message:**
```
That's exactly what I keep hearing. Literally every operator.

Quick follow-up if you don't mind: rough guess — on a typical night, 
how many WhatsApp messages do you think arrive between 6PM and 9AM? 
And what happens to them?

I ask because I've been building something specifically for that window. 
Nothing enterprise. No PMS integration required. Just a layer that 
catches what your current setup misses.

Happy to share what it actually looks like if the numbers make sense 
for your property.
```

**Why this works:**
- Validates their experience (they feel understood, not sold to)
- Asks a quantifying question — gets them calculating their own loss
- Soft introduction of the product ("been building something")
- Offers to share — not "let me pitch you" but "if the numbers make sense"

---

### Template 1C — The WhatsApp Pivot (After 2-3 DM exchanges)

**Trigger:** Prospect has confirmed the problem, shown interest, asked a question about the product.

**Message:**
```
This is easier to show than describe. 

Can I send you a 2-minute demo over WhatsApp? I can show you exactly 
what the response looks like from a guest's side at 11PM — and what 
your team sees in the dashboard the next morning.

What's your number? I'll send it right now.
```

**Why WhatsApp, not a Zoom link:**
- Lower friction than a calendar booking
- Faster than a scheduled call
- WhatsApp is where hotel operators live
- A "2-minute demo" has a defined end — not an open-ended call they might regret accepting
- Gets their WhatsApp number (moves them into your CRM/contact list)

---

### Template 1D — Post-WhatsApp Demo Follow-up (Same day, within 2 hours)

**Trigger:** You've sent the demo on WhatsApp and had a conversation.

**Message:**
```
Thanks for taking 20 minutes, [Name].

Based on what you told me — [X rooms], inquiries coming in until 
about [time they mentioned], [specific pain they described] — your 
property qualifies for the founding cohort.

Here's what that means practically:

→ We set up everything in 48 hours (your team: 45 minutes total)
→ 30 days, completely free — no card, no contract
→ I'm your direct contact the entire time. My WhatsApp, my problem.
→ After 30 days, you'll have real data on what you captured. 
  If it doesn't prove value, you walk away. No conversation needed.

The founding cohort is 5 hotels. I have [X] spots left. 

If you want one, I just need you to fill out the 2-minute application 
at ai.sheerssoft.com/apply — mostly so I have your property details 
before the onboarding call.

Worth trying?
```

**Why "Worth trying?" works as a closing question:**
- Extremely low commitment ask ("worth TRYING")
- Anchors the next action as low-friction (2-minute form)
- The scarcity ("X spots left") is real and credible because it's a genuine founding cohort
- Personalised to what they told you in the conversation

---

### Template 1E — The Follow-Up (If no response after 48 hours)

```
Hi [Name] — just checking this didn't get buried.

[Specific stat from your conversation, e.g.: "You mentioned you 
get around 15-20 WhatsApp messages an evening. At your ADR, that's 
roughly RM 4,500-6,000 in revenue at risk per month if even half 
of them aren't converting."]

The founding cohort offer costs nothing to try. Still worth 30 days?
```

**Rule:** Send this once. One follow-up only. If no response after the second message, move on. Do not send a third message — it damages your brand and violates basic B2B sales ethics.

---

### Template 1F — The Objection Handlers

**Objection: "We already have someone managing WhatsApp."**
```
That's good — it means you understand the channel's value. 

The question is: what happens when that person is on leave? Or during 
check-in rush when 3 things are happening at once? Or at 11PM?

Nocturn AI doesn't replace that person. It covers the gaps they 
physically can't. The morning report shows them what was captured 
overnight — so they start the day with a prioritised list instead 
of 30 unread messages.

Worth seeing how it would work alongside your current setup?
```

**Objection: "We tried a chatbot before and it didn't work."**
```
I hear this a lot. The standard chatbot failure mode is: it only 
works on your website (which gets maybe 10% of your inquiries), 
gives generic responses, and your team stops trusting it after one 
wrong answer.

Nocturn AI is different in three specific ways:
1. It captures WhatsApp, email, AND web — the 90% your website 
   chatbot never sees
2. It's trained on YOUR property's rates and FAQs — not generic 
   hotel answers
3. When it's unsure, it says so and hands off to your team 
   with context

The 30-day pilot exists exactly for this objection. Run it for 
30 days. If it doesn't perform better than your previous chatbot, 
you've lost nothing. If it does, you have data to prove it.
```

**Objection: "What does it cost after 30 days?"**
```
Straightforward answer:

< 50 rooms: RM 419/month (founding cohort rate — 30% off forever)
50-150 rooms: RM 629/month
150+: RM 839/month

No contract. Cancel anytime.

A single captured direct booking per month — one family that 
would have gone to Agoda — pays for the annual plan at RM 280 ADR.

That's the math. Does it work for you?
```

**Objection: "I need to check with my GM first."**
```
Makes sense — and I'd rather have your GM informed than surprised.

Can I send you a one-page summary that explains exactly what the 
founding cohort involves? It's designed to answer the questions a 
GM will ask before approving.

Takes 2 minutes to read. If your GM has questions after, I'm happy 
to jump on a quick call with both of you.
```
*(Then send the 1-page PDF — see Section 6.1)*

---

## FUNNEL 1 — WEEKLY EXECUTION RHYTHM

**Monday:**
- Publish LinkedIn post (Operator Interview episode, per content calendar)
- Send 5 cold connection requests to hotel GMs/Revenue Managers at qualifying Malaysian properties
- Reply to all post comments within 2 hours of publication

**Tuesday:**
- Follow up on Monday's connection requests (anyone who accepted gets Template 1A within 24h)
- Reply to any DM responses

**Wednesday:**
- Publish LinkedIn post (Problem Scenario or Counter-Narrative)
- Advance all active DM conversations to next stage

**Thursday:**
- Follow up on Wednesday's connections
- Send Template 1E to anyone who didn't respond to Template 1D (48h rule)
- Search LinkedIn for new targets: filter by "Revenue Manager + Malaysia + Hotels"

**Friday:**
- Send 5 more cold connection requests
- Review week: how many connections → DMs → WhatsApp → calls → applications?
- Adjust messaging based on which templates are generating replies

**Weekly target (founding cohort stage):**
- 10 new connection requests sent
- 3 connections converted to DM conversation
- 1 DM conversation converted to WhatsApp call
- 0.3 WhatsApp calls converted to application

At this pace: **1 founding cohort hotel every 3-4 weeks organically.**

---

# FUNNEL 2A: LINKEDIN SPONSORED CONTENT → LANDING PAGE → APPLY → CLOSE

**Stage:** Scale after first 2 pilot hotels confirmed (you have early proof)  
**Budget:** RM 50/day (RM 1,500/month)  
**Time to first lead:** Day 1 of ad launch  
**Estimated CPL (cost per lead/application):** RM 80-150  
**Estimated cost per pilot signed:** RM 400-800  
**Owner:** Basyir sets up; can run autonomously

---

## FUNNEL 2A — FULL MAP

```
[LinkedIn Sponsored Content Ad — shown to ICP audience]
         ↓
[Click → ai.sheerssoft.com/apply (dedicated ad landing page)]
         ↓  
[Application submitted — 4 fields]
         ↓
[HubSpot CRM auto-creates contact + sends internal alert to Basyir]
         ↓
[WITHIN 2 HOURS: Basyir sends personal WhatsApp — Template 2A-1]
         ↓
[WhatsApp conversation — qualify property]
         ↓
[Qualified: send pilot confirmation + onboarding call booking]
[Not qualified: add to nurture list — Template 2A-N]
         ↓
[ONBOARDING CALL — 30 minutes — Script Section 5.1]
         ↓
[PILOT LIVE — 48 hours later]
```

---

## FUNNEL 2A — AD SPECIFICATIONS

### Campaign Structure

```
CAMPAIGN: Nocturn AI — Founding Cohort
OBJECTIVE: Lead Generation (not Traffic — optimize for form fills)
BID STRATEGY: Maximum Delivery (for first 2 weeks while learning)
DAILY BUDGET: RM 50/day

AD SETS:
  Ad Set 1 — Primary ICP (RM 30/day)
  Ad Set 2 — Retargeting (RM 20/day) [requires Insight Tag installed]
```

### Ad Set 1 — Primary ICP Targeting

```
AUDIENCE:
  Location: Malaysia (All) — OR refine to KL, Selangor, Penang, 
            Johor Bahru, Sabah, Sarawak
  
  Job Titles (LinkedIn exact match):
    - General Manager
    - Hotel General Manager  
    - Revenue Manager
    - Director of Revenue
    - Reservation Manager
    - Director of Rooms
    - Front Office Manager
    - Hotel Manager
    - Director of Sales (Hotels)
    
  Industries:
    - Hospitality
    - Hotels and Motels
    - Leisure, Travel & Tourism
    
  Company Size: 11–500 employees
  
  EXCLUDE: Marriott, Hilton, IHG, Hyatt, Accor — these are 
  full-franchise properties unlikely to pilot a new tool
  
  Estimated audience size: 8,000–15,000 people
  
  NOTE: Start broad within this. LinkedIn's algorithm needs 
  50+ conversions before it can optimise. Narrow later.
```

### Ad Set 2 — Website Retargeting

```
AUDIENCE: Anyone who visited ai.sheerssoft.com in the last 30 days
  (Requires LinkedIn Insight Tag on site)
  
BUDGET: RM 20/day
  
WHY THIS MATTERS: These are hotel professionals who already know 
about Nocturn AI. Cost per application from retargeting is typically 
3-5x lower than cold traffic. Install the pixel today.
```

---

### Ad Creative Specifications — 3 Variations to Test

**Ad Variant 1 — The Scenario (Emotional)**

```
FORMAT: Single Image (1200×627px)

IMAGE: Split screen. Left: A WhatsApp notification at 11:42PM — 
"Hi, do you have rooms available this weekend?" unread, greyed out.
Right: Same notification, green checkmark, response visible below.
Dark background. Clean, minimal.

HEADLINE (150 chars max):
"Your Hotel's WhatsApp at 11PM: 47 Unread Messages. 0 Responses."

INTRO TEXT (600 chars):
Every night, Malaysian hotels lose direct bookings to unanswered 
WhatsApp messages, buried emails, and after-hours silence.

The guest who messages at 11PM doesn't wait until morning.
They book on Agoda. You pay 18% commission.

Nocturn AI captures every inquiry — even at 3AM.

We're accepting 5 Malaysian hotels into our Founding Cohort.
30 days free. Live in 48 hours. No contract.

[See if your hotel qualifies →]

CTA BUTTON: "Apply Now"
DESTINATION: ai.sheerssoft.com/apply?utm_source=linkedin&utm_medium=paid&utm_campaign=founding-cohort&utm_content=scenario-v1
```

**Ad Variant 2 — The ROI (Rational)**

```
FORMAT: Single Image (1200×627px)

IMAGE: Clean calculator/dashboard aesthetic. Shows:
"Daily inquiries: 30 | After-hours: 40% | ADR: RM 250"
"Monthly revenue at risk: RM 8,100"
Dark/teal background matching Nocturn AI brand.

HEADLINE:
"Calculate How Much Your Hotel Loses After 6PM"

INTRO TEXT:
Hotels like yours typically have RM 3,000–8,000/month in direct 
booking revenue at risk from inquiries that go unanswered after hours.

→ WhatsApp messages that arrive at 10PM and get seen at 8AM
→ Emails buried under 40 others with no follow-up
→ Guests who tried to book direct. Ended up on Agoda.

Use our free calculator to see your number:
ai.sheerssoft.com [link to ROI calculator section]

Or apply directly for our 30-day free pilot:
5 hotels. 48-hour setup. No contract.

CTA BUTTON: "Calculate My Loss"
DESTINATION: ai.sheerssoft.com/?utm_source=linkedin&utm_medium=paid&utm_campaign=roi-calc#calculator
```

**Ad Variant 3 — The Social Proof (Credibility)**

```
FORMAT: Single Image or Document Ad (carousel)

IMAGE: Quote card, dark background:
"90% of our bookings come from WhatsApp, email, and phone.
Once office hours end, reservations are closed. 
Inquiries are effectively dropped."
— Reservation Manager, City Hotel KL

HEADLINE:
"Every Malaysian Hotel Operator We Interviewed Said the Same Thing"

INTRO TEXT:
9 operators. Revenue Managers, GMs, Reservation Managers. 
Malaysia, Singapore, and the Gulf.

One pattern in every conversation: the 6PM–9AM window where 
direct bookings disappear — because nobody's there to capture them.

We built Nocturn AI to close that window.

30-day free pilot for 5 independent Malaysian hotels.
You'll have the morning report. You'll see the data. 
You'll know exactly what you were missing.

[Apply for Founding Cohort →]

CTA BUTTON: "Apply Now"
DESTINATION: ai.sheerssoft.com/apply?utm_source=linkedin&utm_medium=paid&utm_campaign=social-proof-v1
```

**Testing Protocol:**
- Run all 3 variants for 7 days with equal budget split (RM 10/day each)
- After 7 days, identify winner by CTR + application rate
- Put 80% of budget behind winner, keep 20% testing new creative
- Refresh creative every 4 weeks (LinkedIn creative fatigue happens fast)

---

### Post-Application Handling (Funnel 2A)

**Template 2A-1 — Immediate WhatsApp (Within 2 hours of application)**

```
Hi [Name] 👋

I'm Basyir, founder of Nocturn AI. Just received your application for 
the founding cohort — [Hotel Name] looks like a strong fit.

Quick confirmation before I hold your spot: your property is 
[X] rooms in [City], and your team currently handles after-hours 
inquiries via [WhatsApp/email/both]?

Just want to make sure I've got the right picture before the 
onboarding call.

— Basyir
```

**Why this message:** Confirms the application (reduces anxiety), personalises immediately, asks one confirming question (creates dialogue), identifies you as the founder (highest possible credibility signal for a small company).

**Template 2A-2 — Qualification Confirmed → Book Onboarding Call**

```
Perfect. [Hotel Name] definitely qualifies.

Here's what happens next:

1. I'll send you a calendar link for a 30-minute onboarding call — 
   your team needs about 30 minutes total for the whole setup.
   
2. We'll collect your property info (rates, room types, FAQs). 
   Takes about 15 minutes on our end.
   
3. 48 hours after that call, Nocturn AI is live on your WhatsApp, 
   email, and website.

Here's the booking link: [Calendly/Cal.com link]

Pick any slot that works this week. If nothing fits, just tell me 
and we'll sort it out directly.
```

**Template 2A-N — Not Yet Qualified → Nurture Entry**

*Use when: property is too large, full franchise, or clearly not ready for various reasons.*

```
Thanks [Name] — I appreciate the application.

[Hotel Name] is actually on the larger side / structured differently 
than our founding cohort target — we're specifically focused on 
independent 3-4 star properties in this first cohort so we can 
give each hotel direct founder attention.

That said, the waitlist for the next cohort is open and I'd like 
to keep you in the loop.

I'm also putting together a short guide this month on how hotels 
like yours can improve after-hours inquiry capture even without 
a dedicated tool. Worth sending when it's ready?
```

This keeps the relationship alive, adds them to your email list, and converts them to a future paying customer when you open the next cohort or launch the full product.

---

# FUNNEL 2B: LINKEDIN RETARGETING → DIRECT BOOKING CALL

**This is the highest ROI funnel you can run and it costs almost nothing.**

**Trigger:** Anyone who visited ai.sheerssoft.com and did NOT apply.  
**Budget:** RM 20/day  
**Why it works:** These people already know about Nocturn AI. They read the page. They're considering it. They just need one more push — and that push can be far more direct than a cold ad.

---

## FUNNEL 2B — AD CREATIVE

**Ad Variant 2B-1 — The Direct Re-Engagement**

```
FORMAT: Single Image

HEADLINE: "Still Thinking About Nocturn AI?"

INTRO TEXT:
You've seen what it does. You've run the numbers.

The founding cohort closes when the 5th hotel signs. 
After that, this pricing is gone — permanently.

If you're on the fence, I'll answer every question 
directly on a 15-minute call. No commitment required.

[Book a 15-minute call with Basyir →]

CTA: "Book a Call"
DESTINATION: calendly.com/basyir-sheers/15min-nocturn
```

**Ad Variant 2B-2 — The New Evidence**

```
FORMAT: Document Ad (shows like a mini-article)

HEADLINE: "One Thing Every Malaysian Hotel GM Told Me About the 
6PM Problem (That I Didn't Expect)"

INTRO TEXT: Publish a short insight from one of your operator 
interviews as the ad copy itself. End with:

"If this pattern exists at your property — and after 9 operator 
interviews, I believe it does — the founding cohort pilot is 
the fastest way to find out for certain.

30 days. Free. Live in 48 hours.
[Apply now →]"
```

---

# FUNNEL 3: META ADS (FACEBOOK/INSTAGRAM) → WHATSAPP → CLOSE

**Stage:** Parallel to LinkedIn funnels, different ICP reach  
**Budget:** RM 30-50/day  
**Target:** GMs and owners of smaller independent hotels who are NOT active on LinkedIn  
**Key difference from LinkedIn:** Meta reaches hotel OWNERS and operators who are less digitally active professionally. LinkedIn reaches employed managers. Facebook reaches business owners. Both need to be in your funnel.

---

## FUNNEL 3 — WHY META AND WHAT MAKES IT DIFFERENT

LinkedIn reaches the employed professional (Revenue Manager, GM at chain property).
Facebook/Instagram reaches:
- Independent hotel owners (often the GM themselves)
- Boutique resort owners in Sabah/Sarawak
- Hotel operators who participate in hospitality Facebook groups (Hotel & Resort Malaysia, etc.)
- Older demographic GMs (40-55) who are on Facebook but not LinkedIn

**The channel difference also affects messaging:** LinkedIn tolerates longer, more analytical copy. Meta needs shorter, more visceral hooks. Same product, different entry point.

---

## FUNNEL 3 — CAMPAIGN STRUCTURE

```
PLATFORM: Facebook + Instagram (Meta Ads Manager)
OBJECTIVE: Messages (Click-to-WhatsApp) — NOT traffic, NOT leads
           Click-to-WhatsApp ads let the prospect message you directly 
           from the ad. No landing page friction. Conversation starts 
           immediately.
DAILY BUDGET: RM 30/day split:
  Ad Set 1 — Cold ICP: RM 20/day
  Ad Set 2 — Retargeting: RM 10/day
```

### Ad Set 1 — Cold ICP Targeting

```
LOCATION: Malaysia
  Focus: KL, Selangor, Penang, Johor Bahru initially
  
JOB TITLE (Facebook Employer + Job Title fields):
  - Hotel Manager
  - General Manager (Hotel)
  - Revenue Manager
  - Front Office Manager
  - Hospitality Manager
  
INTERESTS:
  - Hotel management
  - Hospitality industry
  - Revenue management
  - Hotel & Resort Malaysia (Facebook group members)
  - Tourism Malaysia
  
BEHAVIORS:
  - Small business owners
  - Business decision makers
  
AGE: 28–55
GENDER: All

ESTIMATED AUDIENCE: 15,000–40,000 (broader than LinkedIn, less precise)

PLACEMENT: Facebook Feed + Instagram Feed (exclude Stories and 
Reels — these formats perform poorly for B2B messages)
```

### Ad Set 2 — Retargeting

```
AUDIENCE: Custom Audience from website visitors (ai.sheerssoft.com)
          Requires Facebook Pixel on the site — install alongside 
          LinkedIn Insight Tag.
LOOKBACK: 30 days
```

---

## FUNNEL 3 — AD CREATIVE SPECIFICATIONS

**Meta Ad Variant 3-1 — The Midnight Scenario (Click-to-WhatsApp)**

```
FORMAT: Video (15-30 seconds) — STRONGLY preferred over static on Meta

VIDEO CONCEPT:
  0-3s: Black screen. WhatsApp notification sound. Text appears:
        "Your hotel. 11:52PM."
  3-8s: Phone screen showing a WhatsApp message:
        "Hi, do you have rooms available this weekend?"
        Seen. No reply. Typing indicator appears, disappears.
  8-12s: Cut to Booking.com screen. Guest books at competitor.
         Text: "They just paid 18% commission — to someone else."
  12-20s: Cut to Nocturn AI dashboard. Same message arrives. 
           Auto-response in 11 seconds. Lead captured.
  20-30s: Text: "Nocturn AI captures every after-hours inquiry."
          "30-day free pilot. 5 Malaysian hotels."
          "Message us to learn more ↓"

HEADLINE: "Your Hotel is Losing Direct Bookings While You Sleep"

PRIMARY TEXT:
Every night, Malaysian hotels miss bookings they never knew they had.

A guest WhatsApps at 11PM. Nobody answers. They book on Agoda.
You pay RM 50 commission. They tried to come directly.

Nocturn AI responds in under 30 seconds. Even at 3AM.

30 days free. 5 hotels. Live in 48 hours.

Tap "Send Message" to find out if your hotel qualifies 👇

CTA: "Send Message" (Click-to-WhatsApp)
```

**Static version (if video not available immediately):**

```
FORMAT: Single Image (1080×1080 for feed)

IMAGE: Split composition.
  LEFT HALF (dark): Phone showing unread WhatsApp messages.
  Timestamp "11:52PM". Red notification badge with "47".
  Text overlay: "Without Nocturn AI"
  
  RIGHT HALF (teal/brand): Same phone. Green checkmarks. 
  "Responded in 12s". Lead capture notification.
  Text overlay: "With Nocturn AI"

HEADLINE: "47 Unread Messages. 0 Responses. Every Night."

PRIMARY TEXT:
If your hotel's WhatsApp goes quiet at 6PM — 
your direct bookings do too.

Nocturn AI captures every WhatsApp, email, and web inquiry 
while your team sleeps. Responds instantly. Follows up automatically.

We're opening a 30-day free pilot to 5 Malaysian hotels.
No contract. Live in 48 hours.

Message us below to see if your property qualifies 👇

CTA: "Send Message"
```

**Meta Ad Variant 3-2 — The ROI Provocation (Click-to-WhatsApp)**

```
FORMAT: Single Image

IMAGE: Clean stat card on dark background:
  "Malaysian hotels: 
  70% of bookings via WhatsApp, phone, email
  0% of those inquiries captured after 6PM
  RM 3,000–8,000 at risk. Per month."

HEADLINE: "How Much Is Your Hotel Losing After 6PM?"

PRIMARY TEXT:
A family wants to book your hotel tonight. 
They WhatsApp at 9PM. Nobody responds.

By morning, they've booked your competitor on Agoda.
You paid 18% commission on a guest who tried to book direct.

This happens every single night at most Malaysian hotels.

We built Nocturn AI to stop it.

30-day free pilot · 5 hotels · No contract

Message us to calculate your property's monthly revenue at risk 👇

CTA: "Send Message"
```

---

## FUNNEL 3 — WHATSAPP CONVERSATION SCRIPTS (Post-Ad Click)

The prospect taps "Send Message" from the Meta ad and lands in your WhatsApp Business. They may send "Hi" or "I want to know more" or nothing at all. Handle each:

**Meta WA Auto-Reply (Immediate — set in WhatsApp Business API)**

```
Hi 👋 Thanks for reaching out about Nocturn AI!

I'm Basyir, the founder. I'll personally reply within 15 minutes.

While you wait — quick question:

What type of hotel do you manage and roughly how many rooms?

This helps me confirm if the founding cohort is a good fit for 
your property before we go further.
```

**Follow-up from Basyir (within 15 minutes, personalised)**

```
Hi [Name]! Basyir here.

[If they answered]: [Property Name] sounds like exactly the type 
of property we built this for.

[If they haven't answered]: Welcome! Tell me a bit about your 
property — name, city, room count — and I'll confirm if you 
qualify for the 30-day free pilot.

The short version of what Nocturn AI does: it captures every 
WhatsApp, email, and web inquiry that comes in after your 
reservations team goes home. Responds in under 30 seconds. 
Logs everything. Gives your GM a morning report.

Two questions to check fit:
1. How does your team currently handle WhatsApp after 6PM?
2. Roughly how many rooms do you have?

That's all I need to confirm a spot 🙂
```

**Qualification flow:**
Same as Funnel 1 from this point — qualify → send demo → book onboarding call → pilot live.

---

# FUNNEL 4: WARM NETWORK → REFERRAL → ACCELERATED CLOSE

**This is the fastest funnel and the most overlooked. Costs nothing.**

**Premise:** You have 9 operators who sat with you for deep-dive sessions. You have LinkedIn connections in hospitality. You have people who know you. These relationships are pre-sold on your credibility. They just haven't been activated.

---

## FUNNEL 4 — MAP

```
[Identify every warm hospitality contact in LinkedIn + WhatsApp]
         ↓
[Personal message — Template 4A — "I'd value your perspective"]
         ↓
[Brief conversation about the product — they become an advisor]
         ↓
[Ask for ONE specific referral — Template 4B]
         ↓
[They make the introduction via WhatsApp]
         ↓  
[You receive an intro with social proof from a trusted peer]
         ↓
[Accelerated close — skip Template 1A/1B entirely, go to 1D]
```

---

## FUNNEL 4 — MESSAGE TEMPLATES

**Template 4A — Reactivating Your Operator Interview Participants**

*(For Mr. B, Mr. F, Ms. S, Mr. Z, Mr. A, Mr. C — anyone who gave you an interview)*

```
Hi [Name],

Quick update — and a genuine ask.

I've been building on everything you shared in our sessions. 
Nocturn AI is now live and we're opening the founding cohort 
to 5 Malaysian hotels for a 30-day free pilot.

Your insights shaped how we built the after-hours capture and 
the GM morning report specifically. I genuinely want to thank 
you for that.

Here's the ask: is there one GM or Revenue Manager in your 
network who is dealing with this exact problem — the 6PM 
inquiry drop-off — who you think would benefit from trying 
this for 30 days?

I'm not asking them to buy anything. Just to run a free pilot 
and tell me what works and what doesn't.

If there's one person who comes to mind, an intro over WhatsApp 
is all I need.
```

**Why this works:**
- Closes the loop on the relationship (they contributed, this is the outcome)
- Frames the ask as very low stakes ("just a free pilot, just one person")
- Leverages their credibility — an intro from them carries 10× the weight of a cold message

**Template 4B — Referral from Happy Pilot Hotel (Post-Onboarding)**

*(Use after first pilot hotel is live for 2+ weeks and showing results)*

```
Hi [Name],

Two weeks in and I wanted to share something with you: [Hotel Name] 
captured [X] after-hours inquiries in the first 10 days. [Y] of 
those became confirmed bookings.

We're still at 4 founding cohort spots available.

Any chance you know another GM or Revenue Manager in [City/Region] 
who's dealing with the same after-hours problem? I'd love to 
give them the same pilot — and happy to extend your pilot by 
2 weeks as a thank-you for any intro that leads to a sign-up.
```

---

## PART 3 — LEADS HANDLING SOP

**Every lead, regardless of funnel source, enters the same handling protocol.**

---

### Lead Tiers and Response Time SLAs

```
TIER 1 — HOT (Applied via /apply or clicked WhatsApp from ad)
  Response time: Within 2 hours, ALWAYS
  Channel: WhatsApp (not email, not LinkedIn DM)
  Owner: Basyir personally (no delegation during founding cohort)
  
TIER 2 — WARM (Engaged with DM conversation, requested more info)
  Response time: Within 4 hours on weekdays, 8 hours weekends
  Channel: Wherever conversation started
  
TIER 3 — COLD (LinkedIn connection, email subscriber, calculator user)
  Response time: Within 24 hours
  Channel: Wherever they entered
  Sequence: Enter automated email nurture (see Section 4)
```

---

### CRM Setup (HubSpot Free — Already Integrated)

**Property record fields to create:**
```
Contact Properties:
  - First name / Last name
  - Job title (GM / Revenue Manager / Reservation Manager)
  - Hotel name
  - Hotel city
  - Number of rooms (dropdown)
  - Current WhatsApp handling (dropdown)
  - Lead source (LinkedIn Organic / LinkedIn Ad / Meta Ad / Warm Referral)
  - Application status (Applied / Qualified / Onboarding Booked / Pilot Live / Paid / Not Qualified)
  - Pilot start date
  - Day 30 review date (auto-calculate: pilot start + 30 days)
  - ADR estimate
  - Estimated monthly revenue at risk (auto-calculate from ROI formula)
```

**Pipeline stages:**
```
1. New Lead
2. DM Conversation Active
3. WhatsApp Qualified
4. Onboarding Call Booked
5. Pilot Live
6. Day 15 Check-in Done
7. Day 28 ROI Review Sent
8. Conversion Discussion Active
9. Paid — Active Customer
10. Churned
11. Not Qualified — Nurture
```

**Automations to set up:**
- When stage changes to "Pilot Live" → Create task: "Day 7 check-in WhatsApp"
- When stage changes to "Pilot Live" → Create task: "Day 15 check-in WhatsApp"  
- When stage changes to "Pilot Live" → Create task: "Day 28 ROI review send"
- When "Day 30 review date" arrives → Alert Basyir

---

## PART 4 — EMAIL NURTURE SEQUENCE (TIER 3 LEADS)

*For leads who are not yet ready to apply — they downloaded the lead magnet, used the calculator, or entered via blog/content.*

---

### Email 1 — Immediate (After lead magnet download or calculator use)

**Subject:** Your hotel's inquiry audit (and what to do next)

**Body:**
```
Hi [Name],

You just calculated that [Hotel Name] has approximately 
RM [X] in monthly revenue at risk from after-hours inquiries.

That number isn't a projection. It's based on what hotels like 
yours are actually experiencing — data from direct operator 
interviews across Malaysia.

Here's the uncomfortable question: how many of those inquiries 
did your team actually capture last month?

If you don't know the answer — that's the problem.

Nocturn AI makes that number visible from Day 1.

I'm opening 5 spots for the founding cohort. 30 days free.
If you'd like to know if [Hotel Name] qualifies:
→ ai.sheerssoft.com/apply

Or reply to this email. I read every one personally.

— Basyir
Founder, Nocturn AI
```

### Email 2 — Day 3 (The Operator Story)

**Subject:** What a KL Reservation Manager told me about the 9PM WhatsApp problem

**Body:**
Repurpose your best operator interview post as an email narrative. End with:

```
The founding cohort pilot is free because I want your hotel's 
data — not your money. After 30 days, you'll know exactly what 
you were missing. So will I.

5 spots. [X] remain.
→ ai.sheerssoft.com/apply
```

### Email 3 — Day 7 (The Midnight Test)

**Subject:** What happens at your hotel when this arrives at 11:47PM

**Body:**
Walk them through the Midnight Test scenario in email form. Make it specific to their property size (use merge tags if possible). End with CTA.

### Email 4 — Day 14 (The Comparison)

**Subject:** The difference between Nocturn AI and the chatbot you tried before

**Body:**
Address the "we tried a chatbot" objection head-on. Use the objection handler from Template 1F, expanded into a full email.

### Email 5 — Day 21 (The Scarcity)

**Subject:** Founding cohort update — [X] spots remaining

**Body:**
Transparent update on cohort status. If spots are filling, say so honestly. If still 5 spots, say that too. Restate the offer. Final CTA.

---

## PART 5 — ONBOARDING SEQUENCE

*Triggered when application is submitted and hotel is confirmed as qualified.*

---

### The Onboarding Call — 30-Minute Script

**Goal:** Collect all property information needed to build the AI knowledge base. Secondary goal: build personal relationship with the team lead (usually Reservation Manager) who will use Nocturn AI daily.

```
ONBOARDING CALL STRUCTURE (30 minutes):

[0:00 — 3:00] OPEN — Personal connection
  "Tell me about [Hotel Name] — give me the GM's version and 
  the reservations-desk version. What's the day-to-day like?"
  
  LISTEN FOR: Pain points they mention in the first 3 minutes.
  These become the baseline you'll reference at the Day 30 review.
  
[3:00 — 15:00] PROPERTY KNOWLEDGE COLLECTION
  Collect via screen share or shared doc:
  ✓ Room types and current rates (rack + seasonal)
  ✓ Standard package offerings (breakfast, family, corporate)
  ✓ Facilities (pool, parking, F&B, meeting rooms)
  ✓ Check-in/out times
  ✓ Key FAQs (top 10 questions guests ask on WhatsApp)
  ✓ Tone preference: formal / warm-casual / Bahasa Malaysia / bilingual
  ✓ Human handoff trigger: what questions go to human immediately?

[15:00 — 22:00] TECHNICAL SETUP GUIDE
  Walk through:
  1. WhatsApp Business API connection (or forward number)
  2. Email forwarding setup (5 minutes)
  3. Website script tag installation (share 1 line of code)
  
  If IT involvement needed: schedule follow-up call with IT contact.
  Target: all 3 channels live within 48 hours.

[22:00 — 28:00] EXPECTATION SETTING
  "Here's what the first 7 days will look like..."
  
  Day 1-3: AI handles simple inquiries. Staff monitors. This is 
           normal — the AI is calibrating.
  Day 3-7: Response quality improves. GM morning report starts.
  Day 7:   First check-in call with Basyir. Review any issues.
  Day 15:  Mid-pilot review. Share inquiry capture numbers.
  Day 28:  I send you a pre-Day-30 ROI analysis.
  Day 30:  Decision call. Data on the table. Basyir presents options.
  
  "One thing I need from you: if the AI says something wrong or 
  misses a context — screenshot it and WhatsApp me immediately. 
  That's not a failure. That's how we train it faster."

[28:00 — 30:00] CLOSE
  Confirm next contact date (Day 7 check-in).
  Share Basyir's direct WhatsApp number.
  "Any last questions before we go live?"
```

---

### Day 7 Check-in WhatsApp

```
Hi [Name], Basyir here.

One week in! Quick check — how's the morning report landing with 
your team? Any inquiries the AI handled that felt off?

Also: I pulled your first-week numbers — 
[X] inquiries captured after hours
[Y] leads queued for your morning team
[Z] follow-ups sent automatically

Happy with how it's running? Or any adjustments needed?
```

### Day 15 Mid-Pilot WhatsApp

```
Hi [Name] — halfway through the pilot.

Here's your two-week summary:
→ [X] total after-hours inquiries captured
→ [Y] leads converted by your team from morning report
→ [Z] OTA bookings that may have been direct (based on inquiry timing)

Estimated revenue recovered: RM [calculated amount]

The pattern I'm seeing: [specific insight about their property's 
inquiry behaviour — times of day, most common questions, etc.]

Any feedback from your team on how the AI is handling interactions?
```

### Day 28 Pre-Decision Analysis

```
Hi [Name],

Day 30 is in 2 days. Before our review call, I want to send you 
the full pilot analysis — so you have time to review it with your 
GM before we speak.

[Attached: Pilot Report — property-specific PDF]

The headline number: Nocturn AI captured [X] after-hours inquiries 
over 30 days that your team was able to convert to [Y] bookings, 
representing approximately RM [Z] in direct booking revenue.

Compared to the [estimated revenue at risk] we calculated in your 
ROI audit before the pilot, that's [percentage recovered].

I'll walk through the full report on our call. But if you have 
questions before then, WhatsApp me directly.

Talk [day], [time],
Basyir
```

---

## PART 6 — CONVERSION TO PAID

*The most important conversation in the entire funnel.*

---

### The Day 30 Call — Conversion Script

**Do NOT approach this as a sales call. Approach it as a data review.**

```
CALL STRUCTURE (20 minutes):

[0:00 — 2:00] RECAP
  "Let's look at what the 30 days actually showed us. I'll walk 
  through the numbers, you tell me if anything surprises you."

[2:00 — 12:00] DATA REVIEW
  Present the Pilot Report. Key sections:
  1. Inquiry volume (total, by channel, by time of day)
  2. Response rate before vs. with Nocturn AI
  3. Leads captured and converted
  4. Revenue recovery estimate
  5. OTA commission avoided estimate
  6. The one thing the AI learned about your guests (unique insight)
  
  KEY QUESTION at the end: "Does this data match what your team 
  experienced on the ground?"
  
  LISTEN. If they say yes → you're closing. If they say "well, 
  actually..." → fix the gap before continuing.

[12:00 — 17:00] THE OFFER
  "Based on 30 days, here's what continuing looks like for [Hotel Name]:"
  
  [Property size] → RM [founding cohort rate] per month
  → That's RM [annual amount] per year
  → Your pilot recovered an estimated RM [amount]
  → At your ADR of RM [X], that's [Y] direct bookings you wouldn't 
    have captured otherwise
  → The plan pays for itself after [Z] captured direct bookings per month
  
  "Here's what's different for founding cohort members: you're locked 
  in at 30% below the standard rate. Permanently. When we launch to the 
  wider market, this pricing closes."
  
  [Pause. Let them respond. Do not fill the silence.]

[17:00 — 20:00] HANDLE OBJECTIONS + CLOSE
  See objection templates in Section 1F.
  
  CLOSE LINE (after objections handled):
  "Shall we get you set up on the monthly plan? 
  You can cancel anytime — but the founding rate is only available 
  if you continue from the pilot without a break."
```

---

### The Closing Offer Document (1-Page PDF)

Send this 24 hours BEFORE the Day 30 call so they arrive prepared:

```
NOCTURN AI — [HOTEL NAME] PILOT RESULTS
30-Day Founding Cohort Summary

YOUR RESULTS AT A GLANCE:
  Inquiries captured:        [X]
  Leads converted:           [Y] 
  Revenue recovered (est.):  RM [Z]
  OTA commission avoided:    RM [A]
  
  VS. BEFORE PILOT:
  After-hours response rate: 0% → 100%
  Leads in morning report:   0 → [Y/day average]

CONTINUING WITH NOCTURN AI:
  Your Property (Founding Rate): RM [X]/month
  Standard rate (post-cohort):   RM [standard rate]
  You save:                      RM [difference]/month, forever
  
  Annual investment:    RM [X × 12]
  Estimated ROI (30 days extrapolated): RM [Z × 12]
  
  Payback period: Approximately [X] direct bookings per month
  (You averaged [Y] in the first 30 days)

WHAT'S INCLUDED:
  ✓ All channels (WhatsApp + Email + Web)
  ✓ Unlimited inquiries
  ✓ Daily GM morning report
  ✓ Automated follow-up (24h, 72h, 7-day)
  ✓ Conversion dashboard
  ✓ Ongoing AI training and updates
  ✓ Direct founder access (Basyir's WhatsApp)
  ✓ Cancel anytime — no contract

TO CONTINUE:
  Reply to this message with "YES" and I'll set up your subscription.
  Or we can handle it on our call [date/time].
  
  Founding rate expires 7 days after pilot end.
  
  — Basyir
  Founder, Nocturn AI / Sheers Software Sdn Bhd
  +60 [number]
```

---

## PART 7 — THE POST-PILOT FLYWHEEL

*This is how you get from 3 paying hotels to 30 paying hotels without increasing ad spend.*

---

### The Referral Trigger (Week 5 — 1 week after converting to paid)

```
Hi [Name],

One week as a paying customer 🙂 I just want to say — I built 
this for hotels exactly like yours, and watching it work in a 
real property is genuinely satisfying.

Here's a small ask: do you know one other GM or Revenue Manager 
— at a comparable independent property — who is dealing with the 
same after-hours problem?

I'm not asking you to sell anything. Just an intro over WhatsApp 
if someone comes to mind. I'll give them the same founding pilot, 
and I'll extend your next month at no charge for any intro that 
leads to a sign-up.

No pressure. If nobody comes to mind immediately, just ignore this.
```

### The Case Study Asset (Day 45)

Request a one-paragraph written statement from the GM:

```
Hi [GM Name],

I'd like to feature [Hotel Name] as one of our founding hotels on 
the Nocturn AI website — not with full data, but with a brief quote 
from you about what the pilot showed your property.

Something as simple as: "In 30 days, Nocturn AI changed how our 
team handles [specific thing]. The [specific outcome] was what 
convinced us to continue."

Would you be comfortable with that? I'll send you the exact wording 
for approval before publishing anything.
```

This single quote — real, attributed, from a named property type and city — increases the conversion rate of the /apply page by an estimated 30-40%. It's the most valuable marketing asset you can acquire.

### The Association Play (Month 3)

Once you have 3 paying hotels and at least 1 case study:

1. **Apply for MAH (Malaysian Association of Hotels) partnership** — they have 600+ member properties
2. **Offer to speak at MAHBUB / MAH events** — "How Malaysian Hotels Are Losing RM 8,000/Month After 6PM (And What To Do About It)" is a conference talk
3. **Publish in Malaysian hotel trade press** — H&T Malaysia, TTG Asia — with the data from your pilots

One MAH newsletter mention to 600 hotel operators is worth RM 50,000 in LinkedIn ads in terms of qualified reach.

---

## PART 8 — THE FULL FUNNEL METRICS DASHBOARD

*Track these weekly. Every number tells you where the funnel is leaking.*

### Weekly KPIs

```
AWARENESS:
  LinkedIn post impressions           Target: 500+ per post
  LinkedIn follower growth/week       Target: 20+
  ai.sheerssoft.com sessions/week     Target: 100+
  /apply page views/week              Target: 20+

ACQUISITION:
  New LinkedIn connections/week       Target: 10
  DM conversations started/week      Target: 3+
  WhatsApp conversations started/week Target: 2+
  Applications submitted/week        Target: 1+
  
CONVERSION:
  Application → Onboarding call rate  Target: 70%+
  Onboarding call → Pilot live rate   Target: 90%+
  Pilot live → Day 30 call rate       Target: 95%+
  Day 30 call → Paid conversion rate  Target: 60%+

RETENTION:
  Pilot hotels (active)               Track: [X]
  Paying hotels (MRR)                 Track: RM [X]/month
  Churn rate                          Target: 0% (at this stage)
  NPS (ask at Day 30)                 Target: 8+/10

REFERRAL:
  Referrals requested                 Track: [X]
  Intros received                     Track: [X]
  Intros converted to pilots          Track: [X]
```

### The Revenue Model to RM 1M ARR

```
PHASE 1 — FOUNDING COHORT (Months 1-3)
  Target: 5 hotels at RM 599-899/month
  Revenue: RM 3,000-4,500 MRR
  Focus: Product refinement, first case studies

PHASE 2 — EARLY GROWTH (Months 4-6)  
  Add: 10 more hotels via LinkedIn ads + referrals
  Revenue: RM 9,000-13,500 MRR (15 hotels)
  Focus: MAH partnership application, case study publishing

PHASE 3 — SCALING (Months 7-12)
  Add: 30 more hotels via association deals + PR + paid
  Revenue: RM 27,000-40,500 MRR (45 hotels)
  Focus: Hire first salesperson, systemise onboarding

PHASE 4 — RM 1M ARR
  Target: 95-120 hotels at RM 899 average
  MRR: RM 85,000-108,000
  ARR: RM 1,020,000-1,296,000
  Timeline: 18-24 months from founding cohort close
  
KEY LEVER: MAH has 600+ member hotels. Converting 20% of those 
to trials and 30% of trials to paid = 36 paying hotels from one 
distribution deal. That's the step-change moment.
```

---

## PART 9 — THE COMPLETE TECH STACK

*Everything needed to run all four funnels simultaneously.*

```
CRM: HubSpot Free → upgrade to Starter (RM ~200/month) at 50+ leads
  └─ Contact management, pipeline, email sequences, deal tracking

SCHEDULING: Cal.com (free) or Calendly (free tier)
  └─ Onboarding calls, 15-min qualification calls, Day 30 reviews

EMAIL: Google Workspace (already likely active)
  └─ Send all email nurture from hello@sheerssoft.com

WHATSAPP BUSINESS: WhatsApp Business API (Twilio or 360dialog)
  └─ Required for Nocturn AI itself + for managing your own sales WA
  └─ Cost: ~RM 50-150/month depending on message volume

LANDING PAGE: ai.sheerssoft.com/apply (already exists — needs the 
  rebuild described in Part 0.3)

LINKEDIN ADS: LinkedIn Campaign Manager
  └─ Minimum RM 50/day recommended

META ADS: Facebook Ads Manager  
  └─ RM 30/day. Same account manages Facebook + Instagram.

ANALYTICS:
  └─ Google Analytics 4 (install on ai.sheerssoft.com immediately)
  └─ LinkedIn Insight Tag (install immediately)
  └─ Meta Pixel (install alongside LinkedIn tag)

CONTENT: Notion or Google Docs
  └─ All 10+ operator interview post drafts
  └─ Post calendar
  └─ Message templates

DOCUMENT CREATION:
  └─ Canva (proposal PDFs, Day 30 report template, ad creatives)
  └─ Typeform or Tally (lead magnet form — "Hotel Inquiry Audit")

TOTAL MONTHLY TECH COST AT LAUNCH: RM 0–300
(Most tools are free tier at founding stage)
```

---

*Nocturn AI Sales Funnel & Flywheel System · Version 1.0*
*Sheers Software Sdn Bhd · Ahmad Basyir Azahari · March 2026*
*Built on: live ai.sheerssoft.com inspection · GitHub source analysis · 9 operator interview posts · LinkedIn profile review*
