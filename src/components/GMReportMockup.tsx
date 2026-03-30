"use client";

import { motion } from "framer-motion";

export function GMReportMockup() {
  const today = new Date().toLocaleDateString("en-MY", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="section section-gray" id="gm-report">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="eyebrow" style={{ color: "var(--color-green)" }}>DAILY GM REPORT</span>
          <h2 style={{ marginBottom: 16 }}>Your 9 AM Revenue Briefing. Every Single Morning.</h2>
          <p style={{ fontSize: "1.2rem", color: "var(--color-gray-500)", maxWidth: 700, margin: "0 auto" }}>
            No more guessing what happened overnight. Nocturn AI delivers a clear, actionable report to your inbox every morning at 9 AM — revenue recovered, OTA fees saved, guest sentiment.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 680,
            margin: "0 auto",
            background: "white",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
            border: "1px solid #e9ecef",
          }}
        >
          {/* Email header */}
          <div style={{ background: "#f8f9fa", padding: "16px 24px", borderBottom: "1px solid #e9ecef", fontSize: "0.85rem", color: "var(--color-gray-500)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <div>
                <div><strong>From:</strong> Nocturn AI &lt;reports@nocturnai.com&gt;</div>
                <div><strong>To:</strong> GM, Grand Seasons Hotel KL</div>
                <div><strong>Subject:</strong> Your Daily Revenue Report — {today}</div>
              </div>
              <div style={{ background: "var(--color-green)", color: "white", padding: "4px 12px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 700 }}>
                9:00 AM
              </div>
            </div>
          </div>

          {/* Email body */}
          <div style={{ padding: "32px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--color-navy)", marginBottom: 8 }}>
              Good morning. Here&apos;s what Nocturn AI did for you last night.
            </div>
            <div style={{ color: "var(--color-gray-400)", fontSize: "0.85rem", marginBottom: 32 }}>
              Activity window: Yesterday 6:00 PM → Today 9:00 AM
            </div>

            {/* Metrics row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Revenue Recovered", value: "RM 4,280", sub: "3 direct bookings closed", color: "var(--color-green)" },
                { label: "OTA Fees Saved", value: "RM 770", sub: "vs. 18% commission route", color: "#3B82F6" },
                { label: "Inquiries Handled", value: "14", sub: "0 missed, 0 dropped", color: "var(--color-navy)" },
                { label: "Guest Sentiment", value: "94%", sub: "positive interactions", color: "#8B5CF6" },
              ].map((m, i) => (
                <div key={i} style={{ background: "#f8f9fa", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: m.color, fontFamily: "var(--font-display)" }}>{m.value}</div>
                  <div style={{ fontWeight: 600, fontSize: "0.75rem", color: "var(--color-navy)", marginTop: 4 }}>{m.label}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--color-gray-400)", marginTop: 2 }}>{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Top leads */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", color: "var(--color-gray-400)", marginBottom: 12 }}>
                TOP LEADS QUEUED FOR YOUR TEAM
              </div>
              {[
                { name: "Ahmad Razif", channel: "WhatsApp", intent: "2 Deluxe Rooms, Fri–Sun", value: "RM 1,120", status: "Hot" },
                { name: "Siti Corp (10 pax)", channel: "Email", intent: "Conference + Accommodation", value: "RM 8,500", status: "High Value" },
                { name: "Lee Family", channel: "Web Chat", intent: "Superior Family Room, school hols", value: "RM 640", status: "Warm" },
              ].map((lead, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "1px solid #f1f3f5" : "none", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--color-navy)" }}>{lead.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-gray-400)" }}>{lead.channel} · {lead.intent}</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "var(--color-navy)" }}>{lead.value}</span>
                    <span style={{ background: lead.status === "High Value" ? "rgba(59,130,246,0.1)" : lead.status === "Hot" ? "rgba(239,68,68,0.1)" : "rgba(16,185,129,0.1)", color: lead.status === "High Value" ? "#3B82F6" : lead.status === "Hot" ? "#EF4444" : "var(--color-green)", padding: "2px 10px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 700 }}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Guest sentiment */}
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 12, padding: "16px 20px", fontSize: "0.85rem", color: "var(--color-gray-600)" }}>
              <strong style={{ color: "var(--color-navy)" }}>Guest Sentiment Summary:</strong> Top inquiry themes overnight — pool access hours, weekend family packages, group rates for Hari Raya. 2 guests specifically mentioned preferring direct booking over OTA. 1 guest asked about Tourism Tax inclusion.
            </div>

            <div style={{ marginTop: 24, textAlign: "center", fontSize: "0.75rem", color: "var(--color-gray-400)" }}>
              Powered by Nocturn AI · Sheers Software Sdn Bhd · PDPA 2024/2025 Compliant
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
