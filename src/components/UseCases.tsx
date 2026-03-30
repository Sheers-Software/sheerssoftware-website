"use client";

import { motion } from "framer-motion";
import "../app/home.css";

const useCases = [
  {
    role: "🛎️ The Reservation Manager",
    title: "End the Inquiry Overload",
    desc: "You handle 30+ daily touchpoints across WhatsApp, email, and phone. On busy days it hits 200–300. Your 'primary operational weakness' is follow-up — and you know it. You need a system that catches what falls through the cracks, especially after 6PM.",
    track: ["95% Automation Rate", "No inquiry left on 'Read' after 6PM", "After-hours Response Coverage"],
  },
  {
    role: "📈 The Revenue Manager",
    title: "Recover OTA Commission",
    desc: "You're watching 15–25% of every booking go to OTA commissions. You know guests are trying to book direct — through WhatsApp, through email — but they're not getting responses fast enough. You want data on inquiry-to-conversion that you've never been able to track before.",
    track: ["15% Direct Capture Recovery", "Scientific proof of OTA commission saved", "Inquiry-to-Conversion Data"],
  },
  {
    role: "👔 The General Manager",
    title: "Board-Level Morning Report",
    desc: "Your ownership wants higher RevPAR with a flat budget. Your staff turnover means institutional knowledge walks out the door every 90 days. You need proof that direct bookings are being captured — a morning report you can show the board, not a gut feeling.",
    track: ["Board-ready RevPAR Proof", "100% Data Sovereignty", "Daily Revenue Breakdown"],
  }
];

export function UseCases() {
  return (
    <section className="section section-dark snap-section" id="solutions">
      <div className="noise-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="eyebrow" style={{ color: 'var(--color-green)', letterSpacing: '0.1em', fontWeight: 600 }}>WHO THIS IS FOR</span>
          <h2 className="serif" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'white', marginTop: 16 }}>Built for Hotels That Run on WhatsApp, Not Enterprise Software</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '24px auto 0' }}>
            If your reservation team juggles WhatsApp, phone calls, emails, and walk-ins — and drops inquiries when the office closes — this is for you.
          </p>
        </div>

        <div className="hyros-grid">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="hyros-card"
            >
              <h3 className="serif card-title" style={{ fontSize: '2rem', marginBottom: 8, color: 'var(--color-navy)' }}>{uc.role}</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', marginBottom: 24, lineHeight: 1.6 }}>{uc.desc}</p>

              <div className="hyros-card-track">
                <p style={{ fontSize: '0.9rem', color: 'var(--color-green)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>WHAT YOU GET:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {uc.track.map((item, j) => (
                    <li key={j} style={{ fontSize: '1rem', color: 'var(--color-gray-600)', display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ color: 'var(--color-green)', fontWeight: 800 }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 40 }}>
                <a href="/apply" className="btn btn-solid-green" style={{ display: 'inline-block' }}>Apply for Pilot →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
