# HOMEPAGE REVIEW

## SECTION 1: HERO ✅ PASS

**What's correct:**
- Badge changed from "Trusted by" to "Now accepting 5 hotels into our Founding Cohort" ✅
- H1 matches the content document exactly ✅
- Sub-headline matches ✅
- CTA links to `/apply` with correct text ✅
- Proof bar updated to honest claims ✅
- Dashboard mockup stat changed from "95% Recovery" to "3 Channels Live" ✅
- WhatsApp bubble mockup retained ✅

**No issues found.**

---

## SECTION 2: PAIN ✅ PASS (with enhancement noted)

**What's correct:**
- Eyebrow: "THE PROBLEM" ✅
- H2: "The Inquiry Graveyard: Where Direct Bookings Go to Die" ✅
- Stat cards updated to 90%, 30+, 0% with honest sources ✅
- Pain scenarios presented as cards (WhatsApp, Email, Phone) ✅

**Enhancement — the designer improved the layout:** The designer converted the three ❌ pain scenarios from paragraph text into visual pain cards with icons, titles, descriptions, and result tags. This is actually BETTER than what I specified — more scannable, more visual, more impactful on mobile. **Keep this improvement.**

**One issue with the 0% stat card animation:** The counter animation script uses `data-target="0"` — the animation function checks `if (!target) return;` which means a target of 0 evaluates as falsy and the animation won't run. This is a minor technical bug.

> **FIX NEEDED:** Either change the animation condition to `if (target === undefined || target === null) return;` instead of `if (!target) return;`, or hardcode the 0% stat without the animation. Alternatively, display it as static text since animating to zero has no visual effect anyway.

---

## SECTION 3: WHO THIS IS FOR ✅ PASS

**What's correct:**
- Updated heading: "Built for Hotels That Run on WhatsApp, Not Enterprise Software" ✅
- Updated sub-headline ✅
- Three persona cards with correct content ✅
- Removed "Not for budget hotels. Not for 5-star luxury resorts." ✅
- Order: Reservation Manager → Revenue Manager → GM ✅

**No issues found.**

---

## SECTION 4: THE SOLUTION ⚠️ NEEDS MINOR FIXES

**What's correct:**
- Eyebrow: "THE SOLUTION" ✅
- H2: "One Inbox. Every Channel. Every Inquiry Captured — Even at 3AM." ✅
- Sub-headline paragraph added ✅
- 6 feature blocks in 2-column grid ✅
- Dashboard mockup visual retained ✅

**Issues:**

1. **Feature titles are abbreviated from the content document.** The document specified fuller titles:
   - "Respond in Seconds" → should be "Respond in Seconds, Not Hours"
   - "Email Auto-Capture" → should be "Turn Your Inbox Into a Lead Machine"
   - "Automated Follow-Up" → should be "The Follow-Up Your Team Forgets. Automated."
   - "Conversion Dashboard" → should be "Finally Know Your Real Numbers"

   > **JUDGMENT:** The shortened versions are acceptable for the 2-column grid layout where space is constrained. The descriptions carry the detail. **Accept as-is.** The designer made a reasonable layout decision.

2. **Feature descriptions are also shortened** but retain the core message. **Accept as-is.**

---

## SECTION 5: MIDNIGHT TEST ✅ PASS

**What's correct:**
- Eyebrow changed to "SEE IT IN ACTION" ✅
- H2: "The Midnight Test" ✅
- Updated sub-headline ✅
- WhatsApp mockup conversation retained and clean ✅
- **System capture tag ADDED** at the bottom of the conversation ✅ — This was a KEY new element and it's implemented correctly with the green left border accent
- Commission math paragraph added below ✅

**This section is excellent. No changes needed.**

---

## SECTION 6: PROBLEM TESTIMONY ✅ PASS

**What's correct:**
- Eyebrow: "WHAT OPERATORS TOLD US" ✅
- H2 matches content document ✅
- Sub-headline present ✅
- 4 testimony cards with correct quotes ✅
- Card styling matches spec: white background, green left border, italic quote, divider, attribution ✅
- Closing disclaimer line present: "These aren't testimonials for our product..." ✅
- **All fabricated social proof REMOVED** ✅

**This is the single most important change on the entire site and it's executed correctly.**

---

## SECTION 7: HOW IT WORKS (CONDENSED) ⚠️ NEEDS FIXES

**What's correct:**
- 3-step layout with connector lines ✅
- Links to how-it-works detail page implied ✅

**Issues:**

1. **The content has been rewritten and does NOT match the content document.** The document specified:
   - Step 1: "We Learn Your Property" / "Share your rates, room types..." / "Your time: 30 minutes"
   - Step 2: "Connect Your Channels" / "Link your WhatsApp Business..." / "Your time: 15 minutes"
   - Step 3: "Watch Revenue Recover" / "Your GM gets a morning report..." / "Your time: 2 minutes every morning"

   The designer changed these to:
   - Step 1: "Deep-Dive Knowledge Transfer (Day 1)" / "60 minutes"
   - Step 2: "Integration & Training (Day 2)"
   - Step 3: "Go Live & Revenue Recovery (Day 3)"

   > **PROBLEM:** The designer's version commits to specific timelines (Day 1, Day 2, Day 3) and implies a 60-minute commitment, which is HIGHER than what we promised in the hero ("Your team spends 30 minutes total") and on the /apply page. This creates an inconsistency. The document deliberately said "30 minutes" because that was the threshold validated in interviews — Bob and Floyd both emphasized that hotels resist time-intensive implementations.

   > **FIX NEEDED:** Revert to the content document's version of the 3 steps with the "Your time:" indicators. The designer's creative additions (naming the steps differently) are fine stylistically but the TIME COMMITMENTS must match the rest of the site.

2. **Missing: "Your time:" indicator on each step.** The content document specifically called for a distinctly styled "Your time:" line on each card in green. This is absent.

   > **FIX NEEDED:** Add `Your time: 30 minutes`, `Your time: 15 minutes`, and `Your time: 2 minutes every morning` to each respective step card.

3. **Missing: Link to full How It Works page.** The document specified a "See the Full Setup Timeline →" link below the steps.

   > **FIX NEEDED:** Add `<a href="/how-it-works" className="btn btn-outline">See the Full Setup Timeline →</a>` below the steps grid.

---

## SECTION 8: FOUNDING COHORT OFFER ⚠️ NEEDS SIGNIFICANT FIXES

**What the designer built:** A visually striking dark section with a glass-morphism card, "3/5 SPOTS CLAIMED" counter, and 4 value items.

**What the content document specified:** 8 value stack items + a guarantee box + CTA.

**Issues:**

1. **Only 4 value items instead of 8.** The document specified:
   - ✅ Full Nocturn AI Setup
   - ✅ AI Knowledge Base
   - ✅ 48-Hour Installation
   - ✅ Automated Follow-Up Engine
   - ✅ Conversion Tracking Dashboard
   - ✅ GM Morning Report
   - ✅ Guest Insight Report at Day 30
   - ✅ Direct WhatsApp Line to Founder

   The designer condensed to 4 items:
   - 30 Days Free Pilot
   - White-Glove Onboarding
   - Direct Founder Access
   - Locked-in Legacy Pricing

   > **PROBLEM:** The designer's version is more concise but loses critical specificity. Items like "GM Morning Report," "Guest Insight Report at Day 30," and "Conversion Tracking Dashboard" are concrete deliverables that make the offer tangible. "White-Glove Onboarding" is vague vendor-speak — exactly what the content document warned against. "Locked-in Legacy Pricing" was NOT in the content document and makes a pricing commitment we haven't validated.

   > **FIX NEEDED:** Replace the 4 items with the 8 items from the content document. If the visual space is constrained in the dark section, either expand the card or split into two columns of 4.

2. **"3/5 SPOTS CLAIMED" is fabricated.** We have zero clients. Showing 3 spots claimed is a lie.

   > **FIX NEEDED:** Change to "5 spots available" or "0/5 spots claimed" or simply "5 Spots" with the CTA. If we genuinely want to show progress, use "5 spots remaining" and update ONLY when real applications are accepted. The number "3" is fabricated and directly violates the honesty principle that is the foundation of the entire rebuild.

   > **THIS IS A PHASE 0-LEVEL ISSUE.** This is the same category of problem as the fabricated case study — claiming adoption that doesn't exist. It must be fixed immediately.

3. **THE GUARANTEE BOX IS MISSING from this section.** The content document specified the guarantee box as a core component of the offer section — it's the risk-reversal mechanism that overcomes the final objection. It appears later on the /pilot page but should ALSO appear on the homepage within or immediately after the offer section.

   > **FIX NEEDED:** Add the guarantee box (green border, light background, shield emoji) either within the Founding Cohort section or immediately after it, before the Founder's Note.

---

## SECTION 9: FOUNDER'S NOTE ⚠️ NEEDS FIXES

**What the designer built:** A clean card with Basyir's note in quotation marks and avatar.

**Issues:**

1. **The copy has been rewritten and does NOT match the content document.** The document provided a specific founder's note that references the interview process, the months of research, and the specific pattern discovered. The designer's version is shorter and makes a specific performance claim:

   > "If we don't recover 10x our cost in the first 30 days, you shouldn't hire us."

   > **PROBLEM:** This is a specific, measurable promise ("10x our cost") that we cannot verify or guarantee at this stage. It's also aggressive and inconsistent with the tone of the rest of the site, which is confident but humble. The content document's version was deliberately measured — it talked about the research process, the pattern discovered, and positioned the founding stage as an advantage.

   > **FIX NEEDED:** Replace the founder's note copy with the exact text from the Content Document Section 4, Section 10. The "10x" claim must be removed.

2. **Missing: LinkedIn and email contact links.** The document specified these should appear below the founder's signature.

3. **The attribution says "Founder, Nocturn AI" but the document specified "Founder, Sheers Software Sdn Bhd."** The company is the legal entity; Nocturn AI is the product. For trust-building purposes (Floyd mentioned SSM checks, company background), the company name should be used.

---

## SECTION 10: ROI CALCULATOR ✅ PASS (with minor fix)

**What's correct:**
- Calculator retained and functional ✅
- CTA updated to "Apply for Cohort to Verify This Number →" linking to /apply ✅

**Minor issue:**

1. **ROI disclaimer text not updated to match content document.** The document specified adding: "The 30-day pilot will give you your real numbers — not estimates." The current disclaimer is the old version.

   > **FIX NEEDED:** Update the disclaimer text.

2. **Missing: ADR context note.** The document specified adding below the ADR input: "(The average ADR for Malaysian 3-4 star hotels is approximately RM 200-280)"

---

## SECTION 11: FAQ ⚠️ NEEDS FIXES

**Issues:**

1. **Only 5 FAQ items instead of 9.** The content document specified 9 specific FAQ items that were crafted to address objections surfaced in the ICP interviews. The designer has only 5, and they've been rewritten with different content:

   Current FAQs:
   - "Will I need to change my PMS or Booking Engine?" (similar to doc's Q1)
   - "Does it sound like a robot?" (similar to doc's Q4)
   - "What if I don't get results?" (different — mentions "10x" claim again)
   - "My staff is not technical" (not in document)
   - "Is there a long-term contract?" (similar to doc's Q8)

   Missing from content document:
   - "We already use WhatsApp for everything. How is this different?" — **CRITICAL.** This is the #1 objection from Zul's interview data
   - "What happens after 6PM when our reservations team goes home?" — **CRITICAL.** This directly addresses the core pain
   - "What about data privacy and PDPA?" — **CRITICAL.** Floyd explicitly flagged this
   - "What if the AI gives wrong rate information?" — Important safety concern
   - "We tried a chatbot before and nobody used it." — Key objection handler

   > **FIX NEEDED:** Replace the FAQ section with all 9 FAQ items from the Content Document Section 4, Section 11. These were specifically crafted for GEO optimization (Bernard's recommendation) and objection handling based on real interview data.

2. **The "10x" claim appears again** in the "What if I don't get results?" FAQ: "If we don't prove we recovered at least 10x our cost in revenue, you walk away."

   > **FIX NEEDED:** Remove this specific claim. Replace with the content document's version which says: "If the numbers don't speak for themselves, you walk away. No charges, no obligations, no awkward conversations."

---

## SECTION 12: FINAL CTA ⚠️ NEEDS FIXES

**Issues:**

1. **The headline was NOT changed.** It still reads: "Your Competitors Are Already Capturing the Bookings You're Missing" — this was explicitly flagged for removal in the content document. The replacement headline is: "Every Night Your Hotel Isn't Capturing Inquiries, You're Paying for It in OTA Commissions"

   > **FIX NEEDED:** Replace headline.

2. **The "78% of hotel chains" stat was NOT removed.** This unverified statistic was explicitly called out for removal.

   > **FIX NEEDED:** Replace body copy with the content document's version.

3. **"XX spots remaining"** appears in the below-CTA text. This is a placeholder that wasn't filled in.

   > **FIX NEEDED:** Change to "5 spots remaining" (or actual current number) and remove "XX."

---

# /HOW-IT-WORKS PAGE REVIEW

## ⚠️ PARTIALLY UPDATED

**What's correct:**
- Page hero with correct headline and sub-headline ✅
- Timeline component with 6 steps (Day 0 through Day 30) ✅
- CTA links to /apply ✅
- Meta tags present ✅

**Issues:**

1. **Missing: "What Your Team Does / Doesn't Do" section.** This two-column comparison was specified in the content document as a NEW section that doesn't currently exist. It directly addresses the implementation fear that Bob, Floyd, and Bernard all surfaced.

   > **FIX NEEDED:** Add the two-column section between the Timeline and the Video Placeholder sections.

2. **"Demo video coming soon" text still present.** The content document specified replacing this with: "We'll walk you through a live demo personalized for your property during your application call."

   > **FIX NEEDED:** Update text.

3. **The hero title still says "From Signup to Live in 48 Hours"** — the content document specified: "From First Call to Live in 48 Hours. From Live to Proving ROI in 7 Days."

   > **FIX NEEDED:** Update to match content document.

---

# /PILOT PAGE REVIEW

## ✅ MOSTLY PASS

**What's correct:**
- Hero with "Build With Us, Not Just Buy From Us" ✅
- 6 value stack items ✅
- Guarantee section ✅
- "After the Pilot" section with pricing philosophy ✅
- Qualification checklist ✅
- CTA links to /apply ✅

**Issues:**

1. **Guarantee box border is navy instead of green.** The content document specified green border (`2px solid var(--color-green)`) with light green background tint. The current implementation uses navy border with white background.

   > **FIX NEEDED:** Change border to green, add light green background tint. This is a visual distinction issue — the guarantee must feel different from other content boxes.

2. **Value stack is missing 2 items.** The document specified 8 items. The page has 6. Missing:
   - "GM Morning Report" — daily email to GM showing inquiries handled and revenue
   - "Automated Follow-Up Engine" — wait, this is present. Let me recount...
   
   Actually, looking again: Full Platform, Custom KB, 48-Hour Setup, Follow-Up Engine, Guest Insight Report, Direct Founder Access = 6 items. The document specified 8 by also including:
   - Conversion Tracking Dashboard
   - GM Morning Report

   > **FIX NEEDED:** Add the two missing items.

---

# /ABOUT PAGE REVIEW

## ✅ MOSTLY PASS

**What's correct:**
- Hero: "We Asked Hotels What They Actually Needed. Then We Built It." ✅
- Origin story with anonymized interview references ✅
- Founder section with bio ✅
- Company credentials ✅
- CTA links to /apply ✅
- "We are a founding-stage company. We don't pretend otherwise." ✅

**Issues:**

1. **Missing: Advisory / Industry Input section.** The content document specified a "Shaped by Industry Leaders" section that signals industry professionals contributed to product development without naming anyone without permission.

   > **FIX NEEDED:** Add this section between the Company section and the CTA.

2. **Missing: "Why Nocturn?" name explanation section.** The document specified keeping this from the original site.

   > **FIX NEEDED:** Add the name origin section.

3. **Origin story is missing 2 of the 6 interview references.** The document included references to an independent consultant (Floyd) and a Revenue Manager in the Middle East (Amsyar). Currently only 4 are listed.

   > **FIX NEEDED:** Add the missing two bullet points.

---

# /APPLY PAGE REVIEW

## ✅ MOSTLY PASS

**What's correct:**
- Two-column layout (value left, form right) ✅
- Value checklist with green checkmarks ✅
- Trust indicators (SSM, PDPA, Malaysian-Built) ✅
- Custom form (NOT HubSpot embed) ✅
- Form fields largely match the specification ✅
- Submit handler with error handling ✅
- Redirects to /thank-you on success ✅
- Resend email integration for notifications ✅

**Issues:**

1. **Missing form field: Star Rating.** The content document specified a "Property Star Rating" dropdown (2-star/Budget, 3-star, 4-star, 5-star, Boutique/Unrated). This is absent.

   > **FIX NEEDED:** Add star rating dropdown after room count.

2. **Missing form field: Daily Inquiries.** The document specified "Estimated daily inquiries across all channels" dropdown.

   > **FIX NEEDED:** Add daily inquiries dropdown.

3. **Missing inquiry channel: "OTA messaging."** The document specified including "OTA messaging (Booking.com, Agoda extranet)" in the checkbox list. Currently only 5 options.

   > **FIX NEEDED:** Add "OTA messaging" checkbox.

4. **Left column uses `className="hide-mobile"`** which hides the entire value proposition on mobile. The content document specified that on mobile, the value content should appear ABOVE the form, not be hidden.

   > **FIX NEEDED:** On mobile, show a condensed version of the value column above the form. At minimum, show the H1, sub-headline, and 4 check items. They should stack above the form, not disappear.

5. **The email notification goes to `a.basyir@sheerssoft.com` via Resend API** — this is functional but the content document also specified a WhatsApp notification via Make/Zapier webhook for faster response. The email-only notification means Basyir might not see the application for hours.

   > **RECOMMENDATION:** Add a secondary webhook call to Make.com/Zapier that sends a WhatsApp message to Basyir's phone with the application details. This enables the "respond within 1 hour" competitive advantage. Not critical for launch but should be added soon.

---

# /BLOG PAGE REVIEW

## ✅ ACCEPTABLE FOR LAUNCH

The designer created a clean holding page with "Articles Coming Soon" messaging. This is acceptable for launch as long as Tier 1 articles are being written and will be published within 2-3 weeks.

**Issue:**

1. **The `/blog/[slug]` page still references "Book a Demo" and links to `/book-demo`.** 

   > **FIX NEEDED:** Change the CTA text to "Apply for Founding Cohort →" and the link to `/apply`. Also update the description from "Subscribe to our updates by booking a demo" to "Apply for our Founding Cohort and we'll notify you when new content is published."

---

# /THANK-YOU PAGE REVIEW

## ✅ PASS

**What's correct:**
- ✅ icon instead of 🎉 ✅
- "Application Received" headline ✅
- 3-step next-steps timeline ✅
- Clean, specific, reduces anxiety ✅
- Link back to homepage ✅

**Minor suggestions:**
- Consider adding blog article links (as specified in content document) once articles are published
- Consider adding direct WhatsApp contact info: "Questions? WhatsApp us at [number]"

---

# /PRIVACY AND /TERMS PAGES REVIEW

## ⚠️ PLACEHOLDER — NEEDS COMPLETION

Both pages exist with correct meta tags and basic structure, but contain "[Full Policy to be populated]" placeholder text.

> **FIX NEEDED (before sharing with any ICP):** These must be populated with substantive content. Floyd explicitly mentioned PDPA data protection concerns, and Bob mentioned insurance/contingency expectations. A sophisticated ICP clicking "Privacy Policy" and finding a placeholder will question the company's professionalism and data handling capabilities.

> **PRIORITY:** Write and publish real Privacy Policy and Terms of Service content before sharing the site URL with any potential Founding Cohort hotel. Use a Malaysian law-compliant template and customize it for Nocturn AI's specific data handling.

---

# GLOBAL ELEMENTS REVIEW

## Navigation ⚠️ NEED TO VERIFY
Cannot see the navigation/header/footer code in the provided content. Need to verify:
- [ ] Navigation updated to: How It Works | Pilot Program | About | Blog | [Apply for Pilot →]
- [ ] Footer updated with correct links and company info
- [ ] Announcement bar implemented on all pages
- [ ] WhatsApp floating button implemented on all pages
- [ ] All old redirects working (/features → /, /pricing → /pilot, /case-studies → /, /book-demo → /apply)

> **REQUEST:** Please confirm these global elements are implemented and provide the layout/header/footer code for review if any issues.

---

# CRITICAL FIXES SUMMARY (Priority Order)

## 🔴 P0 — FIX IMMEDIATELY (Honesty/Credibility Issues)

| # | Issue | Location | Fix |
|---|---|---|---|
| 1 | **"3/5 SPOTS CLAIMED" is fabricated** | Homepage, Founding Cohort section | Change to "5 spots available" or "5 spots remaining" |
| 2 | **"10x our cost" claim in Founder's Note** | Homepage, Founder's Note | Replace with content document's founder note copy |
| 3 | **"10x" claim repeated in FAQ** | Homepage, FAQ section | Replace FAQ with content document's 9 FAQs |
| 4 | **"78% of hotel chains" unverified stat still present** | Homepage, Final CTA | Replace with content document's Final CTA copy |
| 5 | **Final CTA headline not changed** | Homepage, Final CTA | Replace with "Every Night Your Hotel Isn't Capturing Inquiries..." |
| 6 | **"XX spots remaining" placeholder** | Homepage, Final CTA | Replace with actual number |

## 🟡 P1 — FIX THIS WEEK (Content Accuracy)

| # | Issue | Location | Fix |
|---|---|---|---|
| 7 | FAQ only has 5 items instead of 9 | Homepage, FAQ | Add all 9 items from content document |
| 8 | Founding Cohort section only has 4 value items instead of 8 | Homepage, Founding Cohort | Add all 8 items from content document |
| 9 | Guarantee box missing from homepage | Homepage | Add guarantee box in/after Founding Cohort section |
| 10 | Founder's Note copy doesn't match content document | Homepage | Replace with specified copy |
| 11 | How It Works steps don't match (time commitments inconsistent) | Homepage | Revert to content document's 3 steps with "Your time:" |
| 12 | /apply left column hidden on mobile | /apply | Show condensed value content above form on mobile |
| 13 | Blog slug page still references /book-demo | /blog/[slug] | Update to /apply |
| 14 | Privacy/Terms pages are placeholder | /privacy, /terms | Populate with real content |

## 🟢 P2 — FIX WITHIN 2 WEEKS (Completeness)

| # | Issue | Location | Fix |
|---|---|---|---|
| 15 | Missing "What Your Team Does/Doesn't Do" section | /how-it-works | Add two-column comparison |
| 16 | How-it-works hero title not updated | /how-it-works | Update to content document version |
| 17 | "Demo video coming soon" text | /how-it-works | Update text |
| 18 | Missing Advisory section on About page | /about | Add "Shaped by Industry Leaders" section |
| 19 | Missing "Why Nocturn?" section on About page | /about | Add name explanation section |
| 20 | Missing 2 interview references in About origin story | /about | Add Floyd + Amsyar references |
| 21 | Pilot page guarantee box uses navy border | /pilot | Change to green border + light green bg |
| 22 | Pilot page missing 2 value stack items | /pilot | Add Dashboard + Morning Report items |
| 23 | /apply missing Star Rating + Daily Inquiries fields | /apply | Add fields |
| 24 | /apply missing OTA messaging checkbox | /apply | Add checkbox |
| 25 | ROI calculator disclaimer not updated | Homepage | Update text |
| 26 | 0% stat animation bug | Homepage | Fix falsy check |
| 27 | Add WhatsApp notification webhook | /apply form handler | Add Make/Zapier integration |

---

# OVERALL ASSESSMENT

## Score: 7.5/10

**The designer did solid work.** The structural transformation is largely correct — fabricated case studies removed, page architecture updated, new pages created, form backend implemented, styling consistent. The visual quality is maintained.

**Where it falls short:** Content fidelity. Several sections have been rewritten by the designer rather than using the exact copy from the content document. In most cases the designer's instinct was to make things punchier or more aggressive, but this introduced:

1. **Fabricated scarcity** (3/5 spots claimed)
2. **Unverifiable performance claims** (10x cost recovery)
3. **Vendor-speak** ("White-Glove Onboarding")
4. **Missing critical content** (4 FAQs instead of 9, 4 value items instead of 8)

These aren't design failures — they're content discipline failures. The designer tried to improve the copy, which is a natural instinct, but the content document was crafted with extreme precision based on real interview data. Every word choice, every claim, every FAQ was there for a reason.

**The fix is straightforward:** Go through the P0 and P1 items above, replacing the designer's creative additions with the exact content from the content document. The design/layout can stay as-is in most cases — it's the WORDS that need correcting.

**Once the P0 items are fixed, the site is ready to share with Zul (Vivatel) as the first Founding Cohort prospect.** The P1 items should be fixed within the same week. P2 items can be addressed over the following two weeks without blocking outreach.