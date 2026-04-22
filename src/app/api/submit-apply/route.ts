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
      currentHandling,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    if (!email || !name || !property || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Split full name into first/last in a simple way
    const [firstName, ...rest] = String(name).trim().split(" ");
    const lastName = rest.join(" ");

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;

    // Optional: if HubSpot environment variables are not set (e.g. local dev, pre-setup), we still return success to allow the frontend to proceed
    if (!portalId || !formId) {
      console.warn("HubSpot credentials not found in env, skipping CRM submission");
      console.log("Mock submission payload:", body);
      return NextResponse.json({ ok: true });
    }

    const payload = {
      fields: [
        { name: "email", value: email },
        { name: "firstname", value: firstName },
        { name: "lastname", value: lastName },
        { name: "hotel_property_name", value: property },
        { name: "hotel_room_band", value: rooms || "" },
        { name: "phone", value: phone || "" },
        { name: "current_handling", value: currentHandling || "" },
        { name: "utm_source", value: utm_source || "" },
        { name: "utm_medium", value: utm_medium || "" },
        { name: "utm_campaign", value: utm_campaign || "" },
      ],
      context: {
        pageUri: req.headers.get("referer") || "https://sheerssoft.com/apply",
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
