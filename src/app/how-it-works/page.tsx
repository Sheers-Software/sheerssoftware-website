"use client";

import { motion } from "framer-motion";
import "@/app/home.css";

const timeline = [
  { 
    day: "Day 0", 
    title: "Discovery Call", 
    time: "15 minutes", 
    color: "var(--color-green)",
    desc: "We hop on a quick call to understand your property — room types, rates, and common guest questions. You share your rate card and FAQ sheet. That's all we need from you."
  },
  { 
    day: "Day 1", 
    title: "AI Knowledge Build", 
    time: "Nocturn Team", 
    color: "#3B82F6",
    desc: "Our team ingests your property data into a custom AI brain. We train it on your specific tone of voice and facilities. Tested and verified before going live."
  },
  { 
    day: "Day 2", 
    title: "Connect & Go Live", 
    time: "30 minutes from you", 
    color: "#8B5CF6",
    desc: "Link your WhatsApp Business and drop our script on your site. No Opera/PMS integration required. You're live and recovering revenue immediately."
  },
  { 
    day: "Day 7", 
    title: "First ROI Proof", 
    time: "Automated Report", 
    color: "#F59E0B",
    desc: "Receive your first weekly performance report. See exactly how many inquiries were handled and how many leads were captured while your team slept."
  }
];

export default function HowItWorksPage() {
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
            HOW IT WORKS
          </motion.span>
          <motion.h1 
            className="hyros-style-title"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: 24 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Live in 48 Hours.<br />
            ROI in 7 Days.
          </motion.h1>
          <motion.p 
            style={{ color: 'var(--color-gray-400)', fontSize: '1.25rem', maxWidth: 700, margin: '0 auto' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No complex integrations. No IT team required. No system replacement. We handle the heavy lifting while you focus on hospitality.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="timeline-wrapper" style={{ position: 'relative', paddingLeft: 60 }}>
            <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, width: 2, background: 'var(--color-gray-100)' }} />
            
            {timeline.map((step, i) => (
              <motion.div 
                key={i} 
                id={i === 0 ? "direct" : i === 1 ? "group" : i === 2 ? "ota" : undefined}
                className="timeline-item" 
                style={{ marginBottom: 80, position: 'relative' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ 
                  position: 'absolute', 
                  left: -48, 
                  top: 0, 
                  width: 24, 
                  height: 24, 
                  borderRadius: '50%', 
                  background: step.color, 
                  border: '4px solid white',
                  boxShadow: '0 0 0 4px var(--color-gray-50)'
                }} />
                
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: step.color, textTransform: 'uppercase' }}>{step.day}</span>
                  <span style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem' }}>{step.time}</span>
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: 16, fontFamily: 'var(--font-serif)' }}>{step.title}</h3>
                <p style={{ fontSize: '1.15rem', color: 'var(--color-gray-600)', lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-gray" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 24 }}>Ready to automate your direct bookings?</h2>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '1.25rem', marginBottom: 40 }}>The average property recovers its setup cost within the first 14 days.</p>
          <a href="/apply" className="btn btn-solid-green btn-lg">Apply for Your Pilot →</a>
        </div>
      </section>
    </main>
  );
}
