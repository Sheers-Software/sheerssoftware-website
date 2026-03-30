"use client";

import { motion } from "framer-motion";
import "@/app/home.css";

export default function PilotPricingPage() {
  return (
    <main className="nocturn-v2">
      {/* Hero */}
      <section className="sub-page-hero">
        <div className="container">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            REVENUE PARTNER PRICING
          </motion.span>
          <motion.h1
            className="hyros-style-title"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: 24 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We Only Win<br />
            When You Win.
          </motion.h1>
          <motion.p
            style={{ color: 'var(--color-gray-400)', fontSize: '1.25rem', maxWidth: 700, margin: '0 auto' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No tiered SaaS plans. No feature paywalls. One straightforward model: a platform fee, a one-time setup, and a small performance share — only on bookings we help you close.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plan */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)' }}>The Revenue Partner Plan</h2>
            <p style={{ color: 'var(--color-gray-500)', fontSize: '1.2rem' }}>Everything you need to stop losing direct bookings to OTAs.</p>
          </div>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {/* Plan card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: 'white', border: '2px solid var(--color-green)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(34,197,94,0.1)' }}
            >
              <div style={{ background: 'var(--color-navy)', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 4 }}>NOCTURN AI</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '1.5rem' }}>Revenue Partner Plan</div>
                </div>
                <div style={{ background: 'var(--color-green)', color: 'white', padding: '6px 18px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 700 }}>
                  ONLY PLAN AVAILABLE
                </div>
              </div>

              {/* Line items */}
              {[
                {
                  label: 'Platform Fee',
                  value: 'RM 199',
                  unit: '/ month',
                  detail: 'Full access to all channels, dashboard, and GM Report',
                },
                {
                  label: 'Setup + AI Training',
                  value: 'RM 999',
                  unit: 'one-time',
                  detail: '48-hour implementation. We handle everything. Your team: 30 min.',
                },
                {
                  label: 'Performance Fee',
                  value: '3%',
                  unit: 'of facilitated revenue',
                  detail: 'Charged only on confirmed direct bookings Nocturn AI helped close',
                },
                {
                  label: 'OTA Commission Saved',
                  value: '~12%–15%',
                  unit: 'per booking',
                  detail: 'Average saving vs. Agoda/Booking.com at 15%–18% commission',
                },
                {
                  label: 'Setup Time',
                  value: '48 Hours',
                  unit: 'to go live',
                  detail: 'From signed agreement to your first live inquiry handled by AI',
                },
                {
                  label: 'Guarantee',
                  value: '30-Day',
                  unit: 'Revenue Recovery Guarantee',
                  detail: 'Measurable results within 30 days or we waive the following month',
                },
              ].map((row, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '20px 40px',
                    borderBottom: i < arr.length - 1 ? '1px solid #f1f3f5' : 'none',
                    gap: 24,
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1rem' }}>{row.label}</div>
                    <div style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', marginTop: 2 }}>{row.detail}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 800, color: 'var(--color-green)', fontSize: '1.25rem' }}>{row.value}</span>
                    <span style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', marginLeft: 4 }}>{row.unit}</span>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div style={{ padding: '32px 40px', background: 'rgba(16,185,129,0.03)', borderTop: '1px solid rgba(16,185,129,0.15)', textAlign: 'center' }}>
                <a href="/apply" className="btn btn-solid-green btn-lg" style={{ fontSize: '1.1rem', padding: '20px 48px' }}>
                  Start 48-Hour Implementation — RM999 →
                </a>
                <p style={{ marginTop: 16, color: 'var(--color-gray-400)', fontSize: '0.9rem' }}>
                  No lock-in contracts · PDPA 2024/2025 compliant · LHDN e-invoice ready
                </p>
              </div>
            </motion.div>

            {/* Comparison note */}
            <div style={{ marginTop: 48, background: '#f8f9fa', borderRadius: 20, padding: '32px 40px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: 20 }}>How This Compares to OTA Commissions</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { label: 'Agoda / Booking.com', cost: '15%–25%', note: 'Commission on every booking, forever', bad: true },
                  { label: 'Nocturn AI', cost: '3% + RM199', note: 'Only on bookings we help close + flat platform', bad: false },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: 12, padding: '20px 24px', border: item.bad ? '1px solid #fde0e0' : '2px solid var(--color-green)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: item.bad ? '#EF4444' : 'var(--color-green)', marginBottom: 8 }}>{item.label}</div>
                    <div style={{ fontWeight: 800, fontSize: '1.5rem', color: item.bad ? '#EF4444' : 'var(--color-navy)', marginBottom: 4 }}>{item.cost}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)' }}>{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ fontSize: '4rem', marginBottom: 24, opacity: 0.2 }}>&ldquo;</div>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: 32 }}>
            At 3% vs. 18%, the math is obvious. The only question is how long you&apos;ll keep paying the OTA tax on your own guests.
          </h2>
          <div style={{ fontWeight: 600, color: 'var(--color-green)' }}>NOCTURN AI — BUILT FOR MALAYSIAN HOSPITALITY</div>
        </div>
      </section>
    </main>
  );
}
