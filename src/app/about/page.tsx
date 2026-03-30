"use client";

import { motion } from "framer-motion";
import "@/app/home.css";

export default function AboutPage() {
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
            OUR MISSION
          </motion.span>
          <motion.h1 
            className="hyros-style-title"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: 24 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The Arbiters of Hospitality.<br />
            The Future of Direct Bookings.
          </motion.h1>
          <motion.p 
            style={{ color: 'var(--color-gray-400)', fontSize: '1.25rem', maxWidth: 700, margin: '0 auto' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nocturn AI was born in the trenches of Malaysian hospitality. We saw the exhaustion of reservation teams and the leakage of revenue to OTAs. We built the solution.
          </motion.p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', textAlign: 'center', marginBottom: 40 }}>Born from Necessity</h2>
          <div style={{ fontSize: '1.25rem', color: 'var(--color-gray-600)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 24 }}>
              As former hotel operators and digital strategists in Malaysia, we witnessed a recurring problem: <strong>The 2AM Silence.</strong> Guests from around the world would inquire about rooms, and Malaysian hotels would respond 8 hours later. By then, the guest had already booked on Agoda.
            </p>
            <p style={{ marginBottom: 24 }}>
              We realized that the secret to maximizing direct revenue wasn&apos;t better SEO or prettier photos—it was <strong>Presence.</strong>
            </p>
            <p>
              Nocturn AI is the result of 2 years of R&amp;D, training AI specifically on the nuances of hospitality: room types, cross-selling, policy handling, and empathetic guest interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section section-gray">
        <div className="container">
          <div className="grid-3-cols" style={{ gap: 40 }}>
            <div className="rainbow-card">
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🇲🇾</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 16, color: 'white' }}>Malaysian First</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Tailored specifically for the Malaysian hospitality market, understanding local cultural nuances and booking habits.</p>
            </div>
            <div className="rainbow-card">
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⚡</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 16, color: 'white' }}>Speed as a Service</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>We believe that a response in 30 seconds is worth 10x more than a perfect response in 4 hours.</p>
            </div>
            <div className="rainbow-card">
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>💎</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 16, color: 'white' }}>Hospitality First</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>We are not a &quot;chatbot&quot; company. We are a hospitality revenue company that uses AI as its primary tool.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Join the Cohort. Recover Your Revenue.</h2>
          <p style={{ color: 'var(--color-gray-400)', fontSize: '1.25rem', marginBottom: 40 }}>We are currently accepting a limited number of Malaysian heritage properties into our founding cohort.</p>
          <a href="/apply" className="btn btn-solid-white btn-lg">Apply Now →</a>
        </div>
      </section>
    </main>
  );
}
