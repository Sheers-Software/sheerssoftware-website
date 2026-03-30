"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "📲",
    eyebrow: "OMNI-CHANNEL SALES AGENT",
    title: "One Revenue Engine Across WhatsApp, Web & Email",
    desc: "Nocturn AI handles every incoming inquiry — whether it arrives at 2 AM on WhatsApp, via your website chat, or through a corporate email — under one revenue-tracking roof. Every channel is captured, qualified, and followed up on automatically.",
    includes: ["WhatsApp Business Integration", "Email Inquiry Capture", "Website Chat Widget", "Unified Lead Dashboard"]
  },
  {
    icon: "📋",
    eyebrow: "DAILY GM REPORT",
    title: "Your 9 AM Revenue Briefing. Every Morning.",
    desc: "Each morning at 9:00 AM, your General Manager receives an automated email summarising the night's activity: revenue recovered, OTA commissions saved, guest inquiries handled, and key guest sentiment signals. No more guessing — just hard numbers.",
    includes: ["Revenue Recovered (RM)", "OTA Fees Saved", "Inquiries Handled by Channel", "Guest Sentiment Summary"]
  },
  {
    icon: "🇲🇾",
    eyebrow: "LOCAL HOSPITALITY LOGIC",
    title: "Pre-Trained on Malaysian Hotel Operations",
    desc: "Nocturn AI is not a generic chatbot deployed with default settings. It's trained on Malaysian hospitality — SST rates, Tourism Tax, local check-in norms, public holiday surcharges, and responds fluently in BM, English, and common local dialects.",
    includes: ["SST & Tourism Tax Aware", "BM + English + Local Dialects", "Malaysian Public Holiday Logic", "PDPA 2024/2025 Compliant"]
  },
  {
    icon: "🤝",
    eyebrow: "HUMAN-IN-THE-LOOP",
    title: "Escalate VIP Inquiries Without Losing Context",
    desc: "When a complex booking request or VIP guest needs a human touch, Nocturn AI hands off seamlessly with the full conversation history — so your staff never has to ask a guest to repeat themselves. No lead is ever lost. No context is ever dropped.",
    includes: ["Instant Staff Escalation", "Full Conversation Handoff", "Priority Lead Flagging", "VIP Guest Routing"]
  }
];

export function BenefitGrid() {
  return (
    <section className="section section-white snap-section" id="benefits">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="eyebrow" style={{ color: 'var(--color-green)', fontWeight: 600 }}>HOW IT WORKS</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: 24 }}>Revenue Recovery That Runs Itself.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto' }}>
            Nocturn AI is not a chatbot. It&apos;s a revenue recovery layer — an always-on sales partner that sits over your existing hotel operations to capture, convert, and prove the value of every guest inquiry.
          </p>
        </div>

        <div className="hyros-grid hyros-grid--2col">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="hyros-card"
              style={i === 1 ? { border: '2px solid var(--color-green)', position: 'relative' } : {}}
            >
              {i === 1 && (
                <div style={{ position: 'absolute', top: -12, left: 24, background: 'var(--color-green)', color: 'white', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 12px', borderRadius: 20 }}>
                  GM FAVOURITE
                </div>
              )}
              <div className="hyros-card-icon">
                {p.icon}
              </div>
              <div className="hyros-card-eyebrow">{p.eyebrow}</div>
              <h3 className="hyros-card-title">{p.title}</h3>
              <p className="hyros-card-desc">{p.desc}</p>
              <div className="hyros-card-track">
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-gray-400)', marginBottom: 12 }}>INCLUDES</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.includes.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--color-green)', fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
