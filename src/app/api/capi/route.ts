import { NextRequest, NextResponse } from "next/server";

const PIXEL_NOCTURN = process.env.NEXT_PUBLIC_META_PIXEL_ID_NOCTURN || "1224025939902106";
const PIXEL_SHEERS = process.env.NEXT_PUBLIC_META_PIXEL_ID_SHEERS || "1456605209169220";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { eventName, eventId, eventSourceUrl, pixelId, customData } = body;

        // Validate request
        if (!eventName || !pixelId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Determine Token based on Pixel ID
        let accessToken = "";
        if (pixelId === PIXEL_NOCTURN) {
            accessToken = process.env.META_CAPI_TOKEN_NOCTURN || "";
        } else if (pixelId === PIXEL_SHEERS) {
            accessToken = process.env.META_CAPI_TOKEN_SHEERS || "";
        } else {
            return NextResponse.json({ error: "Invalid Pixel ID" }, { status: 400 });
        }

        if (!accessToken) {
            console.warn(`CAPI token missing for Pixel ID: ${pixelId}`);
            // Return 200 in dev so it doesn't break frontends if tokens aren't set yet
            return NextResponse.json({
                success: false,
                message: "CAPI Token missing. Simulated success."
            });
        }

        // Capture User Data for better matching
        const ipAddress = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
        const userAgent = req.headers.get("user-agent") || "";
        const fbp = req.cookies.get("_fbp")?.value || "";
        const fbc = req.cookies.get("_fbc")?.value || "";

        const user_data: any = {
            client_ip_address: ipAddress.split(",")[0].trim(),
            client_user_agent: userAgent,
        };
        if (fbp) user_data.fbp = fbp;
        if (fbc) user_data.fbc = fbc;

        // Construct Meta payload
        const payload = {
            data: [
                {
                    event_name: eventName,
                    event_time: Math.floor(Date.now() / 1000),
                    action_source: "website",
                    event_id: eventId,
                    event_source_url: eventSourceUrl,
                    user_data: user_data,
                    custom_data: customData || {},
                },
            ],
        };

        // Send to Meta
        const metaRes = await fetch(
            `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }
        );

        const metaData = await metaRes.json();

        // Configured to allow Vite app to call this (CORS handled by Next.js if same origin, else define headers)
        const response = NextResponse.json({ success: true, metaResponse: metaData });
        response.headers.set("Access-Control-Allow-Origin", "https://sheerssoft.com");
        response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type");

        return response;

    } catch (error) {
        console.error("Meta CAPI Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Handle CORS preflight for the Vite app
export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set("Access-Control-Allow-Origin", "https://sheerssoft.com");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}
