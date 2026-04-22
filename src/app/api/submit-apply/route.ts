import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

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

    // 1. Send Email Notification via Resend
    try {
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const { data, error } = await resend.emails.send({
                from: 'Nocturn AI <onboarding@resend.dev>', // Note: Update to a verified domain email in Resend dashboard
                to: ['a.basyir@sheerssoft.com'],
                subject: `New Founding Cohort Application: ${property}`,
                html: `
                  <h1>New Application Received</h1>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Property:</strong> ${property}</p>
                  <p><strong>Rooms:</strong> ${rooms}</p>
                  <p><strong>Current Handling:</strong> ${currentHandling}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>WhatsApp:</strong> ${phone}</p>
                  <br/>
                  <p><small>UTMs: ${utm_source || 'none'} | ${utm_medium || 'none'} | ${utm_campaign || 'none'}</small></p>
                `,
            });
            if (error) {
                console.error("Resend delivery failed:", error);
            } else {
                console.log("Resend email sent successfully:", data?.id);
            }
        } else {
            console.warn("RESEND_API_KEY missing, skipping email notification.");
        }
    } catch (notificationErr) {
        console.error("Critical Resend error:", notificationErr);
    }

    // 2. Send Data to Make.com Webhook (Founding Cohort Automation)
    if (process.env.WHATSAPP_WEBHOOK_URL) {
        try {
            const webhookRes = await fetch(process.env.WHATSAPP_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source: "Website-Apply-Form",
                    timestamp: new Date().toISOString(),
                    data: body
                }),
            });
            if (!webhookRes.ok) {
                console.error("Webhook failed status:", webhookRes.status);
            } else {
                console.log("Lead data forwarded to Make.com successfully.");
            }
        } catch (webhookError) {
            console.error('Webhook fetch error:', webhookError);
        }
    } else {
        console.warn("WHATSAPP_WEBHOOK_URL missing, skipping external lead forwarding.");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit-apply critical backend error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
