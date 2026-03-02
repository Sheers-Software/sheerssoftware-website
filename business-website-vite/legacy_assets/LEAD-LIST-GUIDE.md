# WasteWise Lead List Guide
## How to Use the Lead List Template & Manage F&B Prospects

**Created**: November 4, 2025  
**Purpose**: Instructions for collecting, organizing, and qualifying F&B leads in Malaysia  
**Template File**: `LEAD-LIST-TEMPLATE.csv`

---

## OVERVIEW

The Lead List Template is a comprehensive system for:
1. Capturing lead information from various sources
2. Segmenting leads into ICP tiers
3. Scoring and prioritizing outreach
4. Tracking sales pipeline progress
5. Managing follow-ups and conversions

---

## TEMPLATE STRUCTURE

### Column Definitions

#### IDENTIFICATION FIELDS

**Lead ID** (Required)
- Format: LEAD-XXX (sequential numbering)
- Example: LEAD-001, LEAD-002
- Unique identifier for each prospect

**Date Added** (Required)
- Format: YYYY-MM-DD
- Date lead was added to database
- Helps track lead age and response times

**Company Name** (Required)
- Full legal business name
- Example: "Restoran ABC Sdn Bhd"
- Check SSM registration if possible

**Business Type** (Required)
- Options: Restaurant, Café, Hotel F&B, Food Court, Catering, Ghost Kitchen, Chain, Franchise
- Helps with segmentation
- Can list multiple (e.g., "Restaurant Chain")

#### BUSINESS SIZE INDICATORS

**Number of Outlets** (Critical for ICP)
- Numeric value
- Count: 1, 2, 5, 10, 50, etc.
- Most important ICP segmentation factor
- If unknown, research or estimate based on social media/website

**Estimated Monthly Revenue (RM)** (Critical for ICP)
- Numeric value in Ringgit Malaysia
- Example: 50000, 200000, 1000000
- Sources: 
  - Job postings (sometimes mention revenue)
  - News articles
  - Business reports
  - LinkedIn company pages
  - Estimate based on: outlets × average revenue per outlet

**Estimation Guidelines:**
- Small single-location café: RM 50k-150k
- Mid-sized restaurant: RM 150k-500k
- Small chain (3-5 outlets): RM 500k-1M
- Large chain (10+ outlets): RM 1M-10M+

#### LOCATION DATA

**Address** (Required)
- Full street address
- Format: "No. 123, Jalan XYZ"

**City** (Required)
- Example: Kuala Lumpur, Penang, Johor Bahru

**State** (Required)
- Malaysian states: Selangor, Kuala Lumpur, Penang, Johor, etc.

**Postal Code**
- 5-digit Malaysian postal code
- Useful for territory assignment

**Website**
- Company website URL (if available)
- Include http:// or https://
- Valuable source for additional intelligence

#### CONTACT INFORMATION

**Primary Contact Name** (Required if available)
- Full name: [First Name] bin/binti/[Last Name]
- Example: "Ahmad bin Abdullah"
- Prefer decision makers: Owner, CEO, COO, Ops Manager

**Job Title** (Important)
- Actual title: Owner, CEO, Operations Manager, F&B Director
- Helps determine decision-making authority
- Influences outreach approach

**Phone Number** (Required)
- Malaysian format: +60XX-XXXXXXX
- Prefer mobile numbers
- Verify if active

**Email Address** (Required)
- Business email preferred
- Format: name@company.com
- Verify validity before mass outreach

**WhatsApp** (Highly Important for Malaysia)
- Usually same as phone number
- Indicate if WhatsApp is active
- Preferred communication channel in Malaysia

**Alternative Contact**
- Backup contact person
- Useful if primary is unavailable

**Alternative Phone/Email**
- Backup contact information
- Could be admin, manager, or co-owner

#### SOCIAL MEDIA

**Social Media (Facebook)**
- Facebook business page URL
- Format: facebook.com/pagename
- Check for: activity level, followers, response rate

**Social Media (Instagram)**
- Instagram handle
- Format: @username
- Indicates: brand strength, marketing savvy

#### TECHNICAL INFRASTRUCTURE

**Current POS System**
- Examples: Toast, Lightspeed, Square, Revel, None, Manual
- Indicates: tech adoption level, integration needs
- Research: visit restaurant, check for iPad/tablet POS

**Current Inventory System**
- Examples: MarketMan, BlueCart, Custom Excel, Manual, None
- Critical for understanding: current sophistication, pain points
- Gaps here = opportunity for WasteWise

**Biggest Pain Point**
- Free text field
- Options: 
  - "High food waste - don't track it"
  - "Can't control inventory across locations"
  - "Compliance headaches"
  - "No visibility into operations"
- Use exact quotes when available
- Helps customize pitch

#### ICP SEGMENTATION

**ICP Tier (1/2/3)** (Critical)
- **1**: Quick Win (1-3 outlets, RM 50-200k/mo)
- **2**: Growth System (3-10 outlets, RM 200k-1M/mo)
- **3**: Enterprise (10+ outlets, RM 1M+/mo)

**Auto-calculation logic:**
```
IF outlets = 1-3 AND revenue <= 200k THEN Tier = 1
IF outlets = 3-10 AND revenue = 200k-1M THEN Tier = 2
IF outlets >= 10 OR revenue >= 1M THEN Tier = 3
```

**Lead Score (0-100)** (Critical for Prioritization)
- Numeric score based on qualification criteria
- See scoring system in ICP-SEGMENTATION-FRAMEWORK.md
- Components:
  - Business Size (25 points)
  - Pain Point Match (25 points)
  - Decision-Making Access (25 points)
  - Best-Fit Indicators (25 points)

**Lead Quality (HOT/WARM/QUALIFIED/COLD)**
- **HOT** (90-100 points): Immediate outreach, direct owner contact
- **WARM** (75-89 points): Strong fit, standard sales process
- **QUALIFIED** (60-74 points): Good fit, nurture sequence
- **COLD** (<60 points): Low priority or long-term nurture

#### LEAD MANAGEMENT

**Source** (Required)
- Where did this lead come from?
- Examples:
  - "OpenRice Malaysia"
  - "Food & Drinks Malaysia 2025"
  - "Malaysia Halal Directory"
  - "Google Search - KL restaurants"
  - "LinkedIn"
  - "Referral - [Name]"
  - "Inbound website"
- Helps track: best sources, ROI of lead gen activities

**Notes** (Free Text)
- Any additional context
- Research findings
- Conversation notes
- Special considerations
- Competitor info

**Follow-up Date** (Important)
- Format: YYYY-MM-DD
- Next action date
- Use for: CRM reminders, task management

**Contact Status** (Required)
- **New**: Just added, not contacted
- **Contacted**: Initial outreach made
- **Qualified**: Confirmed as good fit
- **Proposal**: Proposal sent
- **Won**: Became customer
- **Lost**: Not interested or lost to competitor

**Owner (Sales Rep)**
- Name of salesperson assigned
- Example: "Basyir", "Sarah", "Ahmad"
- Prevents duplicate outreach

**Created By**
- Who added this lead
- Accountability and quality control

**Last Modified**
- Auto-timestamp of last edit
- Track data freshness

---

## HOW TO COLLECT LEADS

### Method 1: Manual Research from Directories

**From OpenRice Malaysia**
1. Go to OpenRice.com/malaysia
2. Search by city/area
3. For each restaurant:
   - Copy company name
   - Note: cuisine type, location
   - Check: "About" section for multiple locations
   - Find: website link
   - Extract: phone number from listing
   - Social media: usually linked on profile

**From Google Business Listings**
1. Google: "[City] restaurants" or "[Area] cafés"
2. Open each Google Business listing
3. Extract: Name, phone, website, address
4. Check: "Multiple locations" link (indicates chain)
5. Visit website for: contact info, about us, number of locations

**From Facebook**
1. Search: Facebook Pages for restaurants in target area
2. Check "About" section for: phone, email, address
3. Indicators of size: follower count, post frequency
4. Multiple locations: often listed in About

### Method 2: Web Scraping (See Scraping Guide)

**Tools Available:**
- Python + BeautifulSoup (for simple HTML)
- Python + Selenium (for JavaScript-heavy sites)
- Octoparse (no-code option)
- ParseHub (visual scraping)

**Target Fields:**
- Business name
- Address
- Phone number
- Email (if visible)
- Website URL
- Social media links

**Legal Compliance:**
- Check robots.txt
- Respect rate limits
- Follow PDPA (Personal Data Protection Act) Malaysia
- Use only publicly available data
- Don't scrape password-protected content

### Method 3: Purchase/Access Databases

**Malaysia Business Directory**
- Companies Commission of Malaysia (SSM) - official database
- Fee: RM 50-100 for bulk data access

**Industry Association Lists**
- Malaysian Association of Hotels (MAH)
- Restaurant Owners Association
- F&B trade show exhibitor lists

**Online Databases**
- Kompass Malaysia
- Malaysia Business Group member directory
- HDC Halal Directory (free PDF)

---

## LEAD ENRICHMENT PROCESS

After collecting basic information, enrich each lead:

### Step 1: Research Company Website
- Number of locations (look for "Locations" page)
- Menu/pricing (indicates price point and revenue estimate)
- About Us (company history, growth story)
- Careers page (hiring = growing = good prospect)
- Press/News (recent expansions, awards, funding)

### Step 2: Social Media Intelligence
**Facebook:**
- Follower count (gauge popularity)
- Post frequency (indicates marketing sophistication)
- Customer reviews and complaints
- Job postings (indicates growth)

**Instagram:**
- Follower count and engagement rate
- Food quality (indicates positioning)
- Multiple location tags

**LinkedIn:**
- Company page employee count
- Recent updates (expansion news)
- Employee connections (for warm intros)

### Step 3: News & Public Records
- Google News: "[Company Name] Malaysia"
- Recent: expansions, funding, awards, partnerships
- Negative news: health issues, closures (avoid)

### Step 4: Estimate Business Metrics
If not publicly available, estimate:

**Revenue Estimation:**
```
Average transaction × customers per day × 30 days × outlets
```

Example:
- Average bill: RM 25
- Customers: 100/day
- Days: 30
- Outlets: 3
= RM 25 × 100 × 30 × 3 = RM 225,000/month

**Outlet Count:**
- Check: "Locations" on website
- Count: Facebook/Instagram location tags
- Google: "[Company Name] branches Malaysia"

### Step 5: Identify Decision Maker
Priority order:
1. **Owner/Founder** (best for Tier 1)
2. **CEO** (Tier 2-3)
3. **COO/Operations Manager** (Tier 2-3)
4. **F&B Director** (Hotel chains)

Methods to find:
- LinkedIn: search "[Company Name] owner"
- Company website: "Our Team" or "About Us"
- Facebook: tagged in business posts
- News articles: quoted spokesperson

---

## LEAD SCORING FORMULA

### Detailed Scoring (Max 100 points)

#### Business Size Match (25 points)
- Revenue in ICP range: 15 points
- Outlet count in ICP range: 10 points

**Examples:**
- Tier 1 target (1-3 outlets, RM 50-200k): 
  - 2 outlets + RM 100k = 25 points
  - 4 outlets + RM 150k = 15 points (outlets over range)
  
- Tier 2 target (3-10 outlets, RM 200k-1M):
  - 5 outlets + RM 500k = 25 points
  - 2 outlets + RM 300k = 15 points (too few outlets)

#### Pain Point Match (25 points)
- Explicit pain point mentioned: 15 points
- Actively seeking solution: 10 points

**Indicators:**
- Job posting mentions "inventory management"
- Social media posts about waste issues
- News article about operational challenges
- Industry reputation for innovation

#### Decision-Making Access (25 points)
- Direct access to decision maker: 15 points
- Budget authority confirmed: 10 points

**Scoring:**
- Have owner's direct contact: 15 points
- Have manager contact (can intro to owner): 10 points
- Only general info@ email: 5 points
- No contact found yet: 0 points

**Budget Authority:**
- Owner/Founder: 10 points
- C-Suite with budget: 10 points
- Ops Manager (needs approval): 5 points
- Unknown: 0 points

#### Best-Fit Indicators (25 points)
Count how many apply (5 points each, max 25):
- ✅ Tech-savvy (has modern POS, active social media)
- ✅ Growth-minded (recent expansion, hiring, news)
- ✅ Urban location (KL, Penang, JB, Ipoh)
- ✅ Financial health (no negative news, growing)
- ✅ Owner-engaged (active on social, responds to customers)

### Calculation Example

**Example Lead: "Restoran Ombak Rindu"**
- 4 outlets (Tier 2 range) = 10 points
- RM 400k monthly revenue (in range) = 15 points
- Facebook post complaining about waste = 15 points
- Found owner's WhatsApp = 15 points
- Owner has authority = 10 points
- Has modern POS = 5 points
- Recent expansion (opened 4th location) = 5 points
- Located in KL = 5 points

**Total Score: 80 points = WARM LEAD**

---

## LEAD PRIORITIZATION WORKFLOW

### Daily Lead Processing

**Morning (9-10 AM):**
1. Review all NEW leads added previous day
2. Score each lead (use formula above)
3. Assign lead quality tier (HOT/WARM/QUALIFIED/COLD)
4. Assign to sales rep
5. Schedule follow-up dates

**HOT Leads (90-100 points):**
- Action: Call/WhatsApp same day
- Approach: Direct, personalized outreach
- Owner: Senior sales rep or founder
- Priority: Drop everything else

**WARM Leads (75-89 points):**
- Action: Outreach within 3 business days
- Approach: Research-based personalization
- Owner: Experienced sales rep
- Priority: High

**QUALIFIED Leads (60-74 points):**
- Action: Outreach within 1-2 weeks
- Approach: Standard email + follow-up
- Owner: Any sales rep
- Priority: Medium

**COLD Leads (<60 points):**
- Action: Add to nurture sequence
- Approach: Automated email campaigns
- Owner: Marketing automation
- Priority: Low

### Weekly Review
**Every Monday:**
- Review: All leads with Follow-up Date this week
- Update: Contact Status for all reached
- Report: Conversion rates by source, ICP tier
- Optimize: Focus on highest-converting sources

---

## OUTREACH PERSONALIZATION

### Tier 1 (Quick Win) Outreach Template

**Subject:** [Owner Name] - Quick question about waste at [Restaurant Name]

**Message:**
```
Hi [Owner Name],

I came across [Restaurant Name] on [Source] and was impressed by [specific compliment from research].

Quick question: Are you currently tracking food waste at your outlet(s)?

We help single and small-chain restaurants like yours reduce waste by 20-30% within 60 days, saving RM 15-25k monthly.

No long-term contracts. 30-day money-back guarantee if you don't see results.

Worth a 10-minute call?

Best,
[Your Name]
+60 11-6326 3808 (WhatsApp)
```

### Tier 2 (Growth) Outreach Template

**Subject:** [Company Name] - Scaling operations across [X] locations

**Message:**
```
Hi [Decision Maker Name],

I noticed [Company Name] recently expanded to [X] outlets [source of info]. Congrats!

As you scale, are you facing challenges with:
- Standardizing operations across locations?
- Tracking waste and inventory consistency?
- Getting visibility without micromanaging?

We work with multi-location chains like [similar chain example] to reduce waste by 35-45% and save RM 35-50k monthly across all locations.

Our Growth System includes dedicated success management and guarantees 3x ROI in 90 days.

Would love to share how we've helped similar chains scale profitably.

15-minute intro call this week?

Best,
[Your Name]
+60 11-6326 3808
```

### Tier 3 (Enterprise) Outreach Template

**Subject:** [Company Name] - Enterprise waste reduction for [X]+ locations

**Message:**
```
Dear [C-Level Name],

[Company Name]'s growth to [X] locations across Malaysia is impressive. Congratulations on your success.

At your scale, even small operational inefficiencies translate to significant costs. We specialize in helping enterprise F&B operations like yours achieve:

• 40-50% waste reduction across all locations
• RM 100-300k+ monthly savings
• 8% profit margin increase
• Full integration with existing enterprise systems

We've worked with [similar enterprise example] to deliver these results with our Enterprise platform.

Given your scale and sophistication, I'd welcome the opportunity to discuss how we can support [Company Name]'s continued growth.

Would you or your COO/Operations Director have 30 minutes for an exploratory conversation?

Best regards,
[Your Name]
[Title]
+60 11-6326 3808
a.basyir@sheerssoft.com
```

---

## LEAD SOURCE TRACKING

### Why Track Sources?

- **ROI**: Identify which sources convert best
- **Efficiency**: Focus time on high-yield sources
- **Budget**: Allocate resources to best channels
- **Strategy**: Double down on what works

### Source Performance Metrics

Track for each source:
1. **Lead Volume**: How many leads generated?
2. **Lead Quality**: Average lead score
3. **Conversion Rate**: % that become customers
4. **Cost**: Time/money invested
5. **ROI**: Revenue generated / Cost

### Example Source Analysis

| Source | Leads | Avg Score | Conversion % | Cost | ROI |
|--------|-------|-----------|--------------|------|-----|
| OpenRice | 150 | 65 | 12% | RM 5,000 | 8x |
| FDM Show | 45 | 82 | 31% | RM 12,000 | 15x |
| Google | 200 | 55 | 8% | RM 3,000 | 6x |
| Referrals | 20 | 90 | 45% | RM 0 | ∞ |

**Insight**: FDM Show and Referrals have highest quality despite lower volume.

**Action**: Prioritize attending industry events and building referral program.

---

## DATA HYGIENE & MAINTENANCE

### Weekly Tasks
- ✅ Remove duplicate entries
- ✅ Verify email addresses (use email validator tool)
- ✅ Update contact statuses
- ✅ Add notes from conversations
- ✅ Schedule follow-ups

### Monthly Tasks
- ✅ Archive LOST leads (move to separate sheet)
- ✅ Re-score leads (business conditions change)
- ✅ Update ICP tiers (companies grow)
- ✅ Clean invalid contacts
- ✅ Verify high-value leads still in business

### Data Quality Checks
- **Duplicate Detection**: Same phone/email = duplicate
- **Invalid Data**: Placeholder text, test entries
- **Stale Leads**: No activity >90 days → re-engage or archive
- **Missing Critical Fields**: Company name, contact method required

---

## GDPR/PDPA COMPLIANCE

### Malaysian PDPA Requirements

**Lawful Collection:**
- ✅ Only collect publicly available data
- ✅ Business contact info (not personal)
- ✅ Obtained through legitimate means
- ❌ Don't hack, steal, or misrepresent

**Purpose Limitation:**
- Use data only for: B2B sales outreach
- Don't: Sell lists, spam, harassment

**Data Security:**
- ✅ Store in secure CRM/spreadsheet
- ✅ Password-protected files
- ✅ Limited access (sales team only)
- ❌ Don't share publicly

**Respect Opt-Outs:**
- Maintain "Do Not Contact" list
- Honor unsubscribe requests immediately
- Remove data upon request

### Best Practices
1. **Email**: Include unsubscribe link
2. **WhatsApp**: Only message business numbers
3. **Calls**: Respect "not interested" immediately
4. **Storage**: Delete after 12 months if no engagement

---

## INTEGRATION WITH CRM

### Recommended CRMs for WasteWise

**Option 1: HubSpot (Free)**
- Import CSV directly
- Automated workflows
- Email tracking
- Free up to 1M contacts

**Option 2: Pipedrive**
- Visual pipeline
- Great for sales teams
- Mobile app
- ~RM 50/user/month

**Option 3: Google Sheets + Zapier**
- Low-cost option
- Good for <500 leads
- Automate with Zapier
- Free to start

### CSV Import Process
1. Open CRM
2. Navigate to: Import → Contacts/Companies
3. Upload: LEAD-LIST-TEMPLATE.csv
4. Map fields: Match column names
5. Set rules: Duplicates, overwrite settings
6. Import
7. Verify: Check sample records

---

## REPORTING & ANALYTICS

### Weekly Sales Report

**Metrics to Track:**
- New leads added (by source)
- Lead score distribution (HOT/WARM/QUALIFIED/COLD)
- ICP tier breakdown (Tier 1/2/3)
- Outreach activity (calls, emails, WhatsApp)
- Conversion rates (by tier, by source)
- Pipeline value

**Dashboard View:**
```
WEEK OF: [Date]

LEAD GENERATION:
- New Leads: 45
- HOT: 5 (11%)
- WARM: 12 (27%)
- QUALIFIED: 18 (40%)
- COLD: 10 (22%)

BY ICP TIER:
- Tier 1: 25 (56%)
- Tier 2: 15 (33%)
- Tier 3: 5 (11%)

BY SOURCE:
- OpenRice: 20
- FDM Show: 10
- Google: 8
- Referrals: 7

CONVERSION:
- Contacted: 38
- Qualified: 22
- Proposals: 8
- Won: 3
- Conversion Rate: 7.9%
```

---

## NEXT STEPS

1. **Download Template**: Use LEAD-LIST-TEMPLATE.csv
2. **Start Small**: Collect 50-100 leads initially
3. **Score & Prioritize**: Apply scoring system
4. **Begin Outreach**: Start with HOT leads
5. **Track Results**: Monitor conversion by source/tier
6. **Optimize**: Double down on what works

---

## RELATED DOCUMENTS

- **ICP-SEGMENTATION-FRAMEWORK.md**: Detailed ICP definitions
- **PRICING-DELIVERABLES-PAIRING.md**: What to offer each tier
- **WEB-SCRAPING-GUIDE.md**: Technical scraping instructions
- **LEAD-LIST-TEMPLATE.csv**: The actual template file

---

## DOCUMENT CONTROL

**Version**: 1.0  
**Created**: November 4, 2025  
**Owner**: Sales & Marketing  
**Last Updated**: November 4, 2025  
**Review Frequency**: Monthly

---

**Remember**: Quality over quantity. 50 well-researched, scored leads are better than 500 unqualified contacts. Focus on fit, not volume.


