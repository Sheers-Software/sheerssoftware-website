import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works — Live in 48 Hours | Nocturn AI",
    description: "3 simple steps: share your property info, connect your channels, watch revenue recover. Setup takes 48 hours. ROI visible in 7 days.",
    openGraph: {
        title: "How It Works — Live in 48 Hours | Nocturn AI",
        description: "3 simple steps: share your property info, connect your channels, watch revenue recover. Setup takes 48 hours.",
        url: "https://sheerssoft.com/how-it-works",
    },
    twitter: {
        card: "summary_large_image",
        title: "How It Works — Live in 48 Hours | Nocturn AI",
        description: "3 simple steps: share your property info, connect your channels, watch revenue recover. Setup takes 48 hours.",
    }
};

export default function HowItWorksPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark" style={{ padding: "140px 0 80px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">HOW IT WORKS</span>
                    <h1 style={{ color: "white", marginTop: 12, maxWidth: 800, margin: "12px auto 0" }}>
                        From First Call to Live in 48 Hours.<br />
                        From Live to Proving ROI in 7 Days.
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 640, margin: "20px auto 0" }}>
                        No complex integrations. No IT team required. No system replacement. Your team spends a total of 45 minutes. We handle everything else.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ position: "relative", paddingLeft: 48 }}>
                        {/* Vertical line */}
                        <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 2, background: "var(--color-gray-200)" }} aria-hidden="true"></div>

                        <TimelineStep day="Day 0" title="Discovery Call" time="15 minutes" color="#22C55E">
                            We hop on a quick call to understand your property — room types, rates, common guest questions, and your team's current workflow. You share your rate card and FAQ sheet. That's all we need from you.
                        </TimelineStep>

                        <TimelineStep day="Day 1" title="We Build Your Knowledge Base" time="We handle this" color="#3B82F6">
                            Our team ingests your property information and builds a custom AI knowledge base — rates, room types, facilities, policies, FAQs. Tested and verified before going live. The AI will never share information you haven't approved.
                        </TimelineStep>

                        <TimelineStep day="Day 1-2" title="Connect Your Channels" time="30 minutes from you" color="#8B5CF6">
                            Link your WhatsApp Business number. Drop one script tag on your website. Forward your reservation email. Three connections. No Opera integration. No PMS changes. No server installations.
                        </TimelineStep>

                        <TimelineStep day="Day 2" title="You're Live" time="Zero effort from you" color="#22C55E">
                            Nocturn AI starts handling real inquiries. Every inquiry is captured with guest name, contact, channel, intent, timestamp, and full conversation thread. Your staff can take over any conversation at any time.
                        </TimelineStep>

                        <TimelineStep day="Day 3" title="First Morning Report" time="2 minutes to read" color="#F59E0B">
                            Your GM receives the first daily email report: inquiries received last night, leads captured, average response time, channels breakdown. Proof of value, delivered daily.
                        </TimelineStep>

                        <TimelineStep day="Day 7" title="First Weekly Review" time="15-minute call with us" color="#3B82F6">
                            We hop on a quick call to review the first week: what's working well, what needs tuning, and any new guest questions to add to the knowledge base.
                        </TimelineStep>

                        <TimelineStep day="Day 30" title="Full ROI Review" time="Your decision" color="#22C55E" isLast>
                            After 30 days, you have hard data: total inquiries captured, after-hours recovery rate, leads generated, and estimated revenue impact. If the numbers speak for themselves, we discuss continuing. If they don't, you walk away — no contracts, no obligations.
                        </TimelineStep>
                    </div>
                </div>
            </section>

            {/* What Your Team Experiences */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", marginBottom: 48 }}>What Your Team Actually Does (And What They Don&apos;t)</h2>
                    <div className="grid-2-cols stack-on-mobile" style={{ gap: 40 }}>
                        <div className="card" style={{ height: "100%" }}>
                            <h3 style={{ color: "var(--color-green)", fontSize: 20, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--color-gray-100)" }}>YOUR TEAM DOES:</h3>
                            <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <CheckItem text="Share property info (30 min, one time)" />
                                <CheckItem text="Review the morning report (2 min/day)" />
                                <CheckItem text="Take over complex conversations when AI hands off" />
                                <CheckItem text="Give feedback during weekly reviews" />
                                <CheckItem text="Close the bookings that Nocturn captures" />
                            </ul>
                        </div>
                        <div className="card" style={{ height: "100%", background: "var(--color-gray-50)" }}>
                            <h3 style={{ color: "var(--color-red)", fontSize: 20, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--color-gray-200)" }}>YOUR TEAM DOESN&apos;T:</h3>
                            <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <CrossItem text="Install any software" />
                                <CrossItem text="Learn a new system" />
                                <CrossItem text="Change their existing workflow" />
                                <CrossItem text="Integrate with Opera or PMS" />
                                <CrossItem text="Manage any technical setup" />
                                <CrossItem text="Stay late answering after-hours inquiries" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video placeholder */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: "center" }}>
                    <h2>See Nocturn AI in Action</h2>
                    <p style={{ color: "var(--color-gray-600)", marginTop: 12, marginBottom: 32 }}>
                        Watch a 2-minute walkthrough of how Nocturn AI handles real hotel inquiries.
                    </p>
                    <div style={{
                        maxWidth: 700,
                        margin: "0 auto",
                        aspectRatio: "16/9",
                        background: "var(--color-navy)",
                        borderRadius: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 48,
                        boxShadow: "var(--shadow-elevated)",
                    }}>
                        ▶
                    </div>
                    <p style={{ color: "var(--color-gray-400)", fontSize: "var(--fs-small)", marginTop: 12 }}>
                        We&apos;ll walk you through a live demo during your application call.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark" style={{ padding: "80px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>Ready? Let&apos;s Get You Live in 48 Hours</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, marginBottom: 32 }}>
                        Your team spends 30 minutes. We handle the rest.
                    </p>
                    <a href="/apply" className="btn btn-primary btn-lg btn-glow">Apply for Founding Cohort →</a>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--fs-small)", marginTop: 16 }}>
                        Free 30-day pilot · No credit card · Live in 48 hours
                    </p>
                </div>
            </section>
        </>
    );
}

function TimelineStep({ day, title, time, color, children, isLast = false }: {
    day: string; title: string; time: string; color: string; children: React.ReactNode; isLast?: boolean;
}) {
    return (
        <div style={{ marginBottom: isLast ? 0 : 40, position: "relative" }}>
            {/* Dot */}
            <div style={{
                position: "absolute",
                left: -40,
                top: 4,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: color,
                border: "3px solid white",
                boxShadow: `0 0 0 3px ${color}33`,
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span className="badge badge-green-solid" style={{ fontSize: 12, padding: "4px 12px", background: color }}>
                    {day}
                </span>
                <span style={{ fontSize: "var(--fs-small)", color: "var(--color-gray-400)" }}>{time}</span>
            </div>
            <h3 style={{ marginBottom: 8 }}>{title}</h3>
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.7, fontSize: "var(--fs-small)" }}>
                {children}
            </p>
        </div>
    );
}

function CheckItem({ text }: { text: string }) {
    return (
        <li style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--color-gray-700)" }}>
            <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
            <span>{text}</span>
        </li>
    );
}

function CrossItem({ text }: { text: string }) {
    return (
        <li style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--color-gray-500)" }}>
            <span style={{ color: "var(--color-red)", fontWeight: 700 }}>✗</span>
            <span>{text}</span>
        </li>
    );
}
