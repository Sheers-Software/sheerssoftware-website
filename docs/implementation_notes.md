# Website Realignment Implementation Notes
_Last updated: 2026-03-30_

## Summary of Changes

Based on `website_realignment_spec.md`, the following pivot was implemented:

- **From:** SaaS Subscription (RM299/mo tiered plans)
- **To:** Revenue Partner Model (RM199/mo + 3% commission + RM999 one-time setup)

---

## Pages & Components Updated

### `src/app/page.tsx`
- **Hero:** New headline "Stop Paying 18% to OTAs. Capture Direct Revenue for 3%." CTAs updated to "Calculate Your Revenue Recovery" (anchors to calculator) and "Start 48-Hour Implementation" (→ /apply).
- **InquiryGraveyard:** Stats updated with OTA commission angle; added "3 AM Gap" narrative box.
- **FoundingCohortOffer:** Now reflects RM199/mo + RM999 setup + 3% commission model. 30-Day Revenue Recovery Guarantee.
- **AuditSection → RevenueCalculator:** Replaced form-only audit with interactive live calculator (Monthly Booking Volume → OTA Cost vs Nocturn Cost → Net Savings).
- **FinalCTASection:** Updated to Revenue Partner framing.

### `src/components/BenefitGrid.tsx`
- Pillars realigned to benefits narrative:
  1. Omni-Channel Sales Agent (WhatsApp/Email/Web)
  2. Daily GM Report — 9 AM summary (highlighted as crucial)
  3. Local Hospitality Logic (BM, English, SST, Tourism Tax, VMY2026)
  4. Human-in-the-Loop handoff

### `src/app/pilot/page.tsx`
- Replaced 3-tier pricing grid with single "Revenue Partner Plan" table: RM199/mo platform + RM999 setup + 3% commission. Includes savings comparison to OTA rates.

### `src/app/layout.tsx` (Footer)
- Added PDPA 2024/2025 compliance badge (Mandatory DPO, Breach Notification, Automated Profiling Consent)
- Added LHDN E-Invoicing readiness notice (August 2026 mandate)
- Added Visit Malaysia Year 2026 (VMY2026) positioning badge

### `src/components/GMReportMockup.tsx` (New)
- HTML mockup of the automated 9 AM Daily GM Report email
- Shows: Revenue Recovered, OTA Fees Saved, Inquiries Handled, Guest Sentiment

---

## Pricing Model (Reference)

| Line Item | Value |
|---|---|
| Platform Fee | RM 199 / month |
| Setup + AI Training | RM 999 (one-time) |
| Performance Fee | 3% of facilitated revenue |
| OTA Commission Saved | ~12%–15% per booking |
| Setup Time | 48 hours |
| Guarantee | 30-Day Revenue Recovery Guarantee |

---

## Compliance Posture (Malaysia 2026)

- **PDPA 2024/2025:** Mandatory DPO, 72-hour breach notification, explicit consent for automated profiling
- **LHDN E-Invoicing:** Self-billing ready for August 2026 mandate
- **VMY2026:** Positioned as essential tool for Malaysia Year of Tourism 2026 surge
