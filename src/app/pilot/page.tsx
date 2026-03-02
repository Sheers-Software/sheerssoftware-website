import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Founding Cohort Pilot — 30 Days Free | Nocturn AI",
    description: "Join 5 Malaysian hotels shaping the future of inquiry capture. 30-day free pilot. No contracts. Direct founder access. Apply now.",
    openGraph: {
        title: "Founding Cohort Pilot — 30 Days Free | Nocturn AI",
        description: "Join 5 Malaysian hotels shaping the future of inquiry capture. 30-day free pilot. No contracts. Direct founder access. Apply now.",
        url: "https://sheerssoft.com/pilot",
    },
    twitter: {
        card: "summary_large_image",
        title: "Founding Cohort Pilot — 30 Days Free | Nocturn AI",
        description: "Join 5 Malaysian hotels shaping the future of inquiry capture. 30-day free pilot. No contracts.",
    }
};

export default function PilotPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark" style={{ padding: "140px 0 80px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="badge badge-green-solid" style={{ marginBottom: 16 }}>LIMITED AVAILABILITY</span>
                    <h1 style={{ color: "white", marginTop: 12, maxWidth: 800, margin: "12px auto 0" }}>
                        The Founding Cohort: Build With Us,<br />Not Just Buy From Us
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 640, margin: "20px auto 0" }}>
                        We're selecting 5 Malaysian hotel properties to be our founding partners. You get Nocturn AI free for 30 days with direct founder access.
                    </p>
                </div>
            </section>

            {/* Value Stack */}
            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <span className="eyebrow">WHAT YOU GET</span>
                    <h2 style={{ marginTop: 12, marginBottom: 40 }}>Everything Included in the Founding Cohort</h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        <ValueItem
                            title="Full Nocturn AI Platform"
                            desc="WhatsApp AI responder + Email auto-capture + Website chat widget + Unified inbox + Conversion dashboard + GM morning report. The complete system, not a limited trial."
                        />
                        <ValueItem
                            title="Custom AI Knowledge Base"
                            desc="We build a knowledge base trained specifically on YOUR property — your rates, room types, facilities, and tone. This isn't a generic chatbot. It's YOUR digital reservation agent."
                        />
                        <ValueItem
                            title="48-Hour Setup — We Do the Work"
                            desc="Your team spends 30 minutes sharing property info. We handle every technical aspect. No IT team needed. No downtime."
                        />
                        <ValueItem
                            title="Automated Follow-Up Engine"
                            desc="We configure follow-up sequences for your key segments. Leads that go silent get automatic, branded follow-ups at intervals proven to re-engage."
                        />
                        <ValueItem
                            title="Guest Insight Report (Day 30)"
                            desc="After 30 days, we deliver a deep-dive report: most common questions, info gaps, peak inquiry hours, and conversion keywords. Data your Revenue Manager needs."
                        />
                        <ValueItem
                            title="Direct Founder Access"
                            desc="A WhatsApp group with Basyir, our founder. Report issues, request features, and get responses in hours. Exclusive to the Founding Cohort."
                        />
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ background: "rgba(34, 197, 94, 0.05)", padding: 40, borderRadius: 16, border: "2px solid var(--color-green)", textAlign: "center", boxShadow: "var(--shadow-elevated)" }}>
                        <h3 style={{ fontSize: 24, marginBottom: 16 }}>THE 30-DAY GUARANTEE</h3>
                        <p style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6 }}>
                            Run Nocturn AI for 30 full days. Monitor the reports.<br />
                            <strong>If we don't measurably improve your inquiry capture, you pay nothing.</strong>
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: 400, textAlign: "left", display: "flex", flexDirection: "column", gap: 12 }}>
                            <li style={{ display: "flex", gap: 12 }}><span>✅</span> No contracts signed during pilot</li>
                            <li style={{ display: "flex", gap: 12 }}><span>✅</span> No credit card required</li>
                            <li style={{ display: "flex", gap: 12 }}><span>✅</span> No setup fees</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* After Pilot */}
            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{ marginBottom: 24 }}>If the Numbers Speak for Themselves</h2>
                    <p className="text-gray-600 mb-4">
                        After 30 days, if Nocturn AI has proven its value, we'll discuss a simple monthly plan tailored to your property.
                    </p>
                    <ul className="text-gray-600" style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                        <li>Month-to-month billing. No annual lock-ins.</li>
                        <li>Pricing based on property size, fitting your budget.</li>
                        <li><strong>Founding Cohort members receive permanent preferential pricing.</strong></li>
                    </ul>
                </div>
            </section>

            {/* Qualification */}
            <section className="section section-gray" style={{ background: "var(--color-gray-50)" }}>
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{ marginBottom: 24 }}>The Founding Cohort Is Right for You If:</h2>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                        <li style={{ display: "flex", gap: 12 }}><span>✅</span> You're a Malaysian hotel with 50-300 rooms</li>
                        <li style={{ display: "flex", gap: 12 }}><span>✅</span> Your team handles inquiries via WhatsApp, email, and phone</li>
                        <li style={{ display: "flex", gap: 12 }}><span>✅</span> You know you're losing inquiries after office hours</li>
                        <li style={{ display: "flex", gap: 12 }}><span>✅</span> You want more direct bookings and less OTA dependency</li>
                        <li style={{ display: "flex", gap: 12 }}><span>✅</span> Your GM can commit to a 15-minute call this week</li>
                    </ul>

                    <p style={{ marginTop: 32, fontStyle: "italic", color: "var(--color-gray-500)" }}>
                        Not for: Properties under 30 rooms, or hotels already using advanced AI tools.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark" style={{ padding: "80px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>5 Spots. Your Property Could Be One.</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, marginBottom: 32 }}>
                        Application takes 2 minutes. We respond within 24 hours.
                    </p>
                    <a href="/apply" className="btn btn-primary btn-lg btn-glow">Apply for Founding Cohort →</a>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--fs-small)", marginTop: 16 }}>
                        No credit card · No contracts · No setup fees
                    </p>
                </div>
            </section>
        </>
    );
}

function ValueItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flexShrink: 0, width: 24, height: 24, background: "var(--color-green)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14, fontWeight: 700 }}>✓</div>
            <div>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6 }}>{desc}</p>
            </div>
        </div>
    );
}
