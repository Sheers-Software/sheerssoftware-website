import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Application Received — Nocturn AI",
};

export default function ThankYouPage() {
    return (
        <section className="section section-white" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="container" style={{ textAlign: "center", maxWidth: 600 }}>
                <div style={{ fontSize: 64, marginBottom: 24 }}>✅</div>
                <h1 style={{ marginBottom: 24 }}>Application Received.</h1>
                <p style={{ fontSize: "var(--fs-large)", color: "var(--color-gray-600)", marginBottom: 40 }}>
                    Thank you for applying to the Nocturn AI Founding Cohort.
                </p>

                <div style={{ background: "var(--color-gray-50)", padding: 32, borderRadius: 16, textAlign: "left" }}>
                    <h3 style={{ fontSize: 18, marginBottom: 16 }}>Here's what happens next:</h3>
                    <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                        <div style={{ fontWeight: 700, color: "var(--color-green)" }}>1</div>
                        <div>
                            <strong>Within 24 hours:</strong> You'll receive a WhatsApp message from Basyir, our founder, to schedule a brief discovery call.
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                        <div style={{ fontWeight: 700, color: "var(--color-green)" }}>2</div>
                        <div>
                            <strong>During the call:</strong> We'll learn about your problems. No sales pitch — just questions.
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                        <div style={{ fontWeight: 700, color: "var(--color-green)" }}>3</div>
                        <div>
                            <strong>Within 48 hours:</strong> If you're a fit, we begin setup. You'll be live before the end of the week.
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 40 }}>
                    <a href="/" className="btn btn-outline">Return to Homepage</a>
                </div>
            </div>
        </section>
    );
}
