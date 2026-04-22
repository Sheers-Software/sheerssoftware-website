## HubSpot Integration Guide — Nocturn AI Marketing Site

_Last updated: February 2026_  

This document explains how to integrate the Nocturn AI marketing site with **HubSpot** so that all high‑intent engagement (demo requests, ROI calculator usage, key page views) is **captured immediately in the CRM**.

It assumes the current Next.js App Router implementation and the structure described in `website_design_brief.md` and the latest `website_implementation_audit.md`.

---

## 1. Objectives

- **Single source of truth**: Every demo request and key interaction creates/updates a **HubSpot contact** (and optionally a deal).  
- **Attribution intact**: Preserve **UTM** and source data from first touch through to demo booking.  
- **Minimal friction**: Keep the current `/apply` UX (split layout, custom form) while using HubSpot behind the scenes.  
- **Extendable events**: Prepare a simple way to log **ROI calculator interactions** and other high‑intent signals later.  

---

## 2. Current State (Summary)

- HubSpot tracking script is already injected in `RootLayout`, so **page views and sessions** appear in HubSpot.  
- `ApplyForm` (on `/apply`) is a client component that:
  - Collects name, email, property name, room‑count band, phone/WhatsApp.  
  - Captures `utm_source`, `utm_medium`, `utm_campaign` via hidden fields.  
  - Currently **simulates** a delay and redirects to `/apply/thank-you` without calling HubSpot.  

This guide focuses on replacing the simulated behaviour with a **real HubSpot integration**.

---

## 3. Data Model & Field Mapping

Recommended HubSpot contact properties (create custom ones where needed):

- **Standard properties**
  - `email` — Work email.  
  - `firstname` / `lastname` _or_ `fullname` — From “Full Name”.  
  - `phone` — Phone / WhatsApp.  

- **Custom contact properties**
  - `hotel_property_name` (text) — From “Property Name”.  
  - `hotel_room_band` (enumeration) — `<50`, `50-100`, `100-200`, `200-300`, `300+`.  
  - `lead_source` (enumeration) — e.g. `Website`, `Paid Search`, `Referral`, etc.  
  - `utm_source`, `utm_medium`, `utm_campaign` (text).  
  - `latest_roi_estimate` (number, optional, for future ROI logging).  

- **Deal properties (optional, for pipeline)**
  - `dealname` — e.g. `Nocturn Demo – [Property Name]`.  
  - `amount` — Can be set later by sales.  
  - `pipeline` / `dealstage` — e.g. `New Demo Request`.  

---

## 4. HubSpot API Setup

You have two main options:

1. **Forms API (Recommended)** — Simple, reliable, works with tracking cookie + attribution.  
2. **Contacts + Deals API** — More flexible but requires more work and careful GDPR/PDPA handling.

For this site, start with **Forms API**.

### 4.1. Create a HubSpot Form

In HubSpot:

1. Go to **Marketing → Lead Capture → Forms**.  
2. Create a new **Embedded form** (or a “Regular form” if you only use the API).  
3. Add fields that match your mapping:
   - Email (required)  
   - First Name, Last Name (or a single Name field)  
   - Property Name  
   - Number of Rooms (dropdown)  
   - Phone Number  
   - Hidden fields: `utm_source`, `utm_medium`, `utm_campaign`  
4. Save and publish the form.  
5. Note down:
   - **Portal ID** (also called “Account ID”).  
   - **Form GUID**.  

You will need these in the Next.js API route.

### 4.2. Configure Secrets

Add the following to your deployment environment (e.g. Vercel project settings) — **never commit these**:

- `HUBSPOT_PORTAL_ID`  
- `HUBSPOT_FORM_ID` (the GUID of the form)  
- `HUBSPOT_PRIVATE_APP_TOKEN` (if you use the v3 APIs; for pure Forms v2 you can skip this and use the public Forms endpoint).  

---

## 5. Backend: `/api/submit-apply` Route

Create a **server route** that receives the booking data, normalizes it, and posts to HubSpot’s Forms API.

### 5.1. Route outline (App Router)

Create `src/app/api/submit-apply/route.ts` with logic like:

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      property,
      rooms,
      phone,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    if (!email || !name || !property) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Split full name into first/last in a simple way
    const [firstName, ...rest] = String(name).trim().split(" ");
    const lastName = rest.join(" ");

    const portalId = process.env.HUBSPOT_PORTAL_ID!;
    const formId = process.env.HUBSPOT_FORM_ID!;

    const payload = {
      fields: [
        { name: "email", value: email },
        { name: "firstname", value: firstName },
        { name: "lastname", value: lastName },
        { name: "hotel_property_name", value: property },
        { name: "hotel_room_band", value: rooms || "" },
        { name: "phone", value: phone || "" },
        { name: "utm_source", value: utm_source || "" },
        { name: "utm_medium", value: utm_medium || "" },
        { name: "utm_campaign", value: utm_campaign || "" },
      ],
      context: {
        pageUri: req.headers.get("referer") || "https://nocturn.ai/apply",
        pageName: "Apply for Founding Cohort",
      },
    };

    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("HubSpot form error:", res.status, text);
      return NextResponse.json({ error: "HubSpot submission failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit-apply error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
```

Adapt field names if your HubSpot form uses different `name` attributes.

---

## 6. Frontend: Wire `ApplyForm` to the API

Update `ApplyForm` to call the new API instead of `setTimeout` + redirect.

### 6.1. Submission flow

Desired behaviour:

1. User submits `/apply` form.  
2. `ApplyForm` sends a `POST` to `/api/submit-apply` with JSON body.  
3. On success, router navigates to `/apply/thank-you`.  
4. On failure, show an inline error and allow retry; optionally log to an error tracker.  

### 6.2. Example client-side call

Refactor the submit handler:

```ts
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsLoading(true);

  const formData = new FormData(e.currentTarget);
  const payload = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("/api/submit-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // Optionally surface a better error message
      console.error("submit-apply failed", await res.text());
      alert("There was an issue booking your demo. Please try again.");
      setIsLoading(false);
      return;
    }

    router.push("/apply/thank-you");
  } catch (err) {
    console.error("submit-apply error", err);
    alert("There was an issue booking your demo. Please try again.");
    setIsLoading(false);
  }
}
```

Keep the rest of the form fields as they are (including hidden UTM fields).

---

## 7. Optional: Meetings & Deals

Once form capture is working, you can:

- **Attach a meeting link** in your HubSpot follow‑up email or use **HubSpot Meetings** so that:
  - Contact submits the form → HubSpot sends a “book a slot” email.  
  - Sales calendar stays controlled in HubSpot.  

- Or, if you want **instant scheduling on-page**:
  - Replace (or supplement) the right-hand column on `/apply` with a **HubSpot Meetings embed**.  
  - Continue to use the form to collect context and create a contact; the meeting widget associates with that contact automatically in HubSpot.

If you later introduce a dedicated sales pipeline:

- Use a simple **workflow in HubSpot**:
  - Trigger: new form submission on the Nocturn demo form.  
  - Actions: create deal in “Nocturn – New Demo” pipeline, set stage to “Booked Demo”, assign owner based on rules (e.g. geography, room band), and send internal notification.  

---

## 8. Optional: Behavioural Events (ROI Calculator, High-Intent Browsing)

After the basic lead capture is stable, you can send **behavioural signals** into HubSpot:

### 8.1. ROI calculator event

When the user interacts with the ROI calculator (moves a slider or edits ADR), you can:

- Either fire a **HubSpot custom behavioural event** (“ROI calculated”) with payload:  
  - `daily_inquiries`  
  - `adr`  
  - `after_hours_share`  
  - `estimated_monthly_recovery`  

- Or, if you want to avoid Events API complexity, store `latest_roi_estimate` as a **contact property** only **after** the user submits the demo form (i.e. include it in the `/api/submit-apply` payload when available).

### 8.2. Page engagement

Use HubSpot’s **lists & filters** to define:

- Contacts who viewed `/pricing` or `/case-studies` ≥ 2 times.  
- Contacts whose **first page** was the ROI calculator section (from `pageUri`).  

These can drive:

- Sales prioritization lists.  
- Nurture workflows (e.g. send ROI-focused sequences to those who hit `/pricing` multiple times but haven’t booked a demo).

---

## 9. Testing Checklist

Before going live, validate:

1. **Form submission**
   - Submit `/apply` form in **incognito** with UTM parameters.  
   - Confirm:
     - Contact appears in HubSpot.  
     - All mapped properties are populated correctly (name, property, room band, UTMs).  

2. **Thank-you flow**
   - After submit, you’re redirected to `/apply/thank-you`.  
   - Browser back button doesn’t resubmit (API uses POST; refreshing should not create duplicates in HubSpot).  

3. **Tracking**
   - Visit a few pages; confirm in HubSpot that page views are logged for your contact.  

4. **Error handling**
   - Temporarily break the form (e.g. wrong `HUBSPOT_FORM_ID`) and verify that:
     - The user sees a friendly error.  
     - Errors are logged in the server logs.  

5. **Mobile**
   - Submit from a recent iPhone and Android device to confirm:
     - The form is usable with on‑screen keyboard.  
     - No overlap with the sticky bottom CTA.  

Once all of the above pass, the site will be **fully wired to HubSpot**, ensuring that every serious expression of interest is captured, attributed, and ready for your sales & marketing workflows.

