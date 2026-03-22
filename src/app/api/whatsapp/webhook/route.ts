import { NextResponse } from 'next/server';

/**
 * WhatsApp Webhook Handler
 * Handles GET (verification) and POST (incoming messages)
 */

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    // Verification token from environment variable
    const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

    if (mode === 'subscribe' && token === verifyToken) {
        console.log('WhatsApp Webhook Verified');
        return new Response(challenge, { status: 200 });
    } else {
        console.error('WhatsApp Webhook Verification Failed');
        return new Response('Forbidden', { status: 403 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Log incoming messages for debugging
        console.log('Incoming WhatsApp Message:', JSON.stringify(body, null, 2));

        // TO DO: Implement message processing logic (e.g., reply to user, save to DB)
        
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing WhatsApp Webhook:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
