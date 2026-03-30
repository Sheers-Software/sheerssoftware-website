"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const truthTabs = [
  {
    id: "capture",
    label: "Capture",
    title: "Catch Every Inquiry Before It Goes Silent",
    desc: "Nocturn AI connects your WhatsApp Business, reservation email, and website into one unified inbox. Whether it's a 2:14 AM WhatsApp message or a corporate group email, we log the guest's name, intent, and contact details — so nothing falls through the cracks.",
    benefit: "Every guest inquiry captured and logged — name, intent, and contact details — before it disappears."
  },
  {
    id: "optimize",
    label: "Optimize",
    title: "Everything Else Scales From There",
    desc: "Once captured, the AI responds in seconds — in English or Bahasa Malaysia. If they don't book, the system sends branded follow-ups at 24 hours, 72 hours, and 7 days. When a complex request arrives, it hands off to your staff with full context.",
    benefit: "On average, properties see a 15–20% increase in direct booking volume with Nocturn response automation."
  },
  {
    id: "ease",
    label: "Ease Of Use",
    title: "Set Up in 48 Hours with Zero IT Burden",
    desc: "We don't replace your PMS or Opera. We layer over it. Setup takes 45 minutes of your team's time. One line of code on your site, one connection to your WhatsApp. No system replacement required.",
    benefit: "Live in 48 hours with ZERO changes to your existing staff workflow."
  },
  {
    id: "forecast",
    label: "Forecast",
    title: "Finally Know Your Real Direct Potential",
    desc: "Every morning, your GM receives a report showing exactly how many inquiries were handled and the estimated revenue captured. No more guessing conversion 'roughly via occupancy.' See your real direct capture ROI daily.",
    benefit: "Data-driven revenue projections based on actual guest intent — not gut feeling."
  }
];

export function TruthTracking() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const header = (
    <div style={{ textAlign: 'center', marginBottom: 64 }}>
      <span className="eyebrow" style={{ color: 'var(--color-green)', fontWeight: 600 }}>THE SYSTEM</span>
      <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', marginBottom: 16 }}>Your reservations process misses bookings. <span style={{ color: 'var(--color-green)' }}>We don&apos;t.</span></h2>
      <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '0 auto' }}>
        Capture every guest inquiry from WhatsApp, email, and web — before it goes cold.
      </p>
    </div>
  );

  const tabContent = (tab: typeof truthTabs[0]) => (
    <>
      <h3 className="serif">{tab.title}</h3>
      <p>{tab.desc}</p>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, paddingTop: 32, marginTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ color: 'var(--color-green)', fontWeight: 800, fontSize: '1.25rem', flexShrink: 0, lineHeight: 1.6 }}>*</div>
        <p style={{ fontSize: '1rem', color: 'white', fontWeight: 500, lineHeight: 1.6 }}>{tab.benefit}</p>
      </div>
    </>
  );

  return (
    <section className="section section-dark snap-section" id="truth">
      <div className="noise-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {header}

        {/* Desktop: side-tab layout */}
        <div className="truth-container truth-desktop-only">
          <div className="truth-tabs">
            {truthTabs.map((tab, i) => (
              <button
                key={tab.id}
                className={`truth-tab-btn ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="truth-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabContent(truthTabs[activeTab])}
                <div style={{ marginTop: 40 }}>
                  <a href="/apply" className="uc-pill-btn" style={{ borderColor: 'var(--color-green)', color: 'var(--color-green)' }}>Apply for Pilot</a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: accordion layout */}
        <div className="truth-mobile-only">
          {truthTabs.map((tab, i) => (
            <div key={tab.id} className="truth-accordion-item">
              <button
                className={`truth-accordion-btn ${openAccordion === i ? 'active' : ''}`}
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
              >
                <span>{tab.label}</span>
                <span className="truth-accordion-icon">{openAccordion === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openAccordion === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="truth-accordion-content">
                      {tabContent(tab)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div style={{ marginTop: 32 }}>
            <a href="/apply" className="btn btn-solid-green" style={{ display: 'block', textAlign: 'center' }}>Apply for Pilot →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
