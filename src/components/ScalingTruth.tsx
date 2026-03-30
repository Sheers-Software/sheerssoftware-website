"use client";

import { motion } from "framer-motion";

export function ScalingTruth() {
  return (
    <section className="section section-dark snap-section" style={{ padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="noise-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="serif" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'white', lineHeight: 1, marginBottom: 40 }}>
            Start with truth.<br />
            <span style={{ opacity: 0.6 }}>Everything else scales from there.</span>
          </h2>

          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)', marginBottom: 64 }}>
            Stop guessing. See your real direct capture revenue today.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
            <a href="#audit" className="btn btn-solid-green btn-lg" style={{ padding: '24px 48px', fontSize: '1.1rem' }}>Calculate My Revenue Leak →</a>
            <a href="/apply" className="btn btn-outline-white btn-lg" style={{ padding: '24px 48px', fontSize: '1.1rem' }}>Apply for Founding Cohort</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
