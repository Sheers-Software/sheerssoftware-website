"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🎯",
    eyebrow: "CAPTURE",
    title: "Catch Every Inquiry Before It Goes Silent",
    desc: "Nocturn AI connects your WhatsApp Business, reservation email, and website into one unified inbox. Whether it's a 2:14 AM WhatsApp message or a corporate group email, we log the guest's name, intent, and contact details — so nothing falls through the cracks.",
    includes: ["Instant WhatsApp Responses", "Email Auto-Capture", "Website Chat Widget"]
  },
  {
    icon: "⚙️",
    eyebrow: "OPTIMIZE",
    title: "Everything Else Scales From There",
    desc: "Once captured, the AI responds in seconds — in English or Bahasa Malaysia. If they don't book, the system sends branded follow-ups at 24 hours, 72 hours, and 7 days. When a complex request arrives, it hands off to your staff with full context.",
    includes: ["24/7 AI Interaction", "Automated Follow-Up Engine", "Smart Human Handoff"]
  },
  {
    icon: "⚡",
    eyebrow: "EASE OF USE",
    title: "Zero Integration Tax. Zero Downtime.",
    desc: "We don't replace your PMS or Opera. We layer over it. Setup takes 45 minutes of your team's time. One line of code on your site, one connection to your WhatsApp. You're live and recovering revenue within 48 hours.",
    includes: ["No IT Project Required", "No System Replacement", "48-Hour Implementation"]
  },
  {
    icon: "📊",
    eyebrow: "FORECAST",
    title: "Finally Know Your Real Direct Potential",
    desc: "Every morning, your GM receives a report showing exactly how many inquiries were handled and the estimated revenue captured. No more guessing conversion 'roughly via occupancy.' See your real direct capture ROI daily.",
    includes: ["Conversion Dashboard", "GM Morning Report", "Revenue Leak Analysis"]
  }
];

export function BenefitGrid() {
  return (
    <section className="section section-white snap-section" id="benefits">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="eyebrow" style={{ color: 'var(--color-green)', fontWeight: 600 }}>THE SYSTEM</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: 24 }}>Stop Guessing. Start Scaling with Truth.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto' }}>
            Nocturn AI isn&apos;t just a chatbot. It&apos;s a revenue recovery layer that sits over your existing hotel operations to capture, automate, and prove the value of every single guest inquiry.
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
            >
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
