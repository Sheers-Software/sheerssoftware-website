"use client";

import "./home.css";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { UseCases } from "@/components/UseCases";
import { BenefitGrid } from "@/components/BenefitGrid";
import { GMReportMockup } from "@/components/GMReportMockup";
import { FounderSection } from "@/components/FounderSection";
import { TruthTracking } from "@/components/TruthTracking";
import { ScalingTruth } from "@/components/ScalingTruth";

export default function HomePage() {
  return (
    <div className="nocturn-v2">
      {/* 4.1 Hero */}
      <Hero />
      {/* 4.2 Inquiry Graveyard — pain stats */}
      <InquiryGraveyard />
      {/* 4.3 Core Pillars (Omni-Channel / GM Report / Local Logic / Human Loop) */}
      <BenefitGrid />
      {/* 4.3a Daily GM Report Mockup */}
      <GMReportMockup />
      {/* 4.4 Audience Selection */}
      <UseCases />
      {/* 4.5 Proof of Mechanism — The Midnight Test */}
      <MidnightTest />
      {/* 4.6 Before & After comparison */}
      <ComparisonSection />
      {/* 4.7 Founding Cohort Offer */}
      <FoundingCohortOffer />
      {/* 4.8 Knowledge Base — TruthTracking pillars + Founder Note */}
      <TruthTracking />
      <FounderSection />
      {/* 4.9 ROI Audit Calculator */}
      <AuditSection />
      {/* 4.10 FAQ */}
      <FAQSection />
      {/* 4.11 Final CTA */}
      <ScalingTruth />
      <FinalCTASection />
    </div>
  );
}

// ─── 4.1 HERO ─────────────────────────────────────────────────────────────────
function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 100 } }
  };

  return (
    <section className="hero">
      <div className="noise-overlay" />
      <div className="hero-background-wrapper">
        <motion.div className="hero-blob blob-1" animate={{ x: [-20, 20, -20], y: [-30, 30, -30], scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="hero-blob blob-2" animate={{ x: [30, -30, 30], y: [20, -20, 20], scale: [1, 1.2, 1] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.div className="hero-blob blob-3" animate={{ x: [-15, 15, -15], y: [15, -15, 15], scale: [1, 0.9, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }} />
      </div>

      <div className="container hero-inner">
        <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="hero-subtitle-hyros">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>For Independent Malaysian Hotels (40–150 Rooms)</span>
            <h1 className="hero-subtitle-main" style={{ marginTop: 16 }}>Stop Bleeding 18% to Agoda.<br />Get Same-Day FPX Cash.</h1>
            <p className="hero-subtitle-sub">Your front desk closes at 6 PM. At 11:47 PM, a family WhatsApps you asking for weekend availability. While your staff is asleep, they book your hotel on Booking.com instead. You just paid an 18% tax on a guest who wanted to book directly with you.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-ctas">
            <a href="https://wa.me/601163263808" className="btn btn-solid-white btn-lg">Chat with the Founder on WhatsApp Now</a>
            <a href="/apply" className="btn btn-outline-white btn-lg">Start 48-Hour Implementation</a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: 24, textAlign: 'center', opacity: 0.8 }}>
            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>Currently accepting only 10 properties for our Founding Cohort to guarantee our 48-Hour Go-Live promise.</span>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: 32, display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', opacity: 0.7 }}>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>✓ RM199/mo + 3% on confirmed bookings only</span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>✓ WhatsApp + Email + Web</span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>✓ Live in 48 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4.2 INQUIRY GRAVEYARD ────────────────────────────────────────────────────
function InquiryGraveyard() {
  const stats = [
    {
      num: "90%",
      label: "of Malaysian hotel bookings come from manual channels",
      sub: "WhatsApp, phone calls, emails, walk-ins — not your website.",
      source: "Based on industry operator interviews, 2025",
      color: "#EF4444"
    },
    {
      num: "30+",
      label: "daily inquiry touchpoints per property",
      sub: "And your reservation desk has 3 people to handle them all.",
      source: "Malaysian hotel operator data, 2025",
      color: "#EF4444"
    },
    {
      num: "0%",
      label: "of inquiries captured after 6PM",
      sub: "When your reservations team goes home, every inquiry is dropped.",
      source: "Independent hotel operator interviews, 2025",
      color: "#EF4444"
    }
  ];

  return (
    <section className="section section-white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow" style={{ color: '#EF4444' }}>THE 3 AM GAP</span>
          <h2 style={{ marginBottom: 24 }}>When Your Staff Is Asleep, Agoda Is Wide Awake</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto' }}>
            Guests don&apos;t book on business hours. They browse at midnight, decide at 2 AM. When they can&apos;t get an instant answer from your hotel, they go to Agoda — and you pay 18% for a guest who was already trying to find you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 64 }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ borderLeft: `4px solid ${s.color}`, padding: '32px', background: '#f8f9fa', borderRadius: '16px' }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 700, color: s.color, fontFamily: 'var(--font-serif)', marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 8, color: 'var(--color-navy)' }}>{s.label}</div>
              <div style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginBottom: 8 }}>{s.sub}</div>
              <div style={{ color: 'var(--color-gray-400)', fontSize: '0.75rem', fontStyle: 'italic' }}>{s.source}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: '#fff8f8', border: '1px solid #fde0e0', borderRadius: 24, padding: '40px 48px', maxWidth: 800, margin: '0 auto' }}
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-700)', lineHeight: 1.8, marginBottom: 0 }}>
            ❌ <strong>The WhatsApp message at 9:47 PM</strong> — a family asking about rooms for the weekend. Staff is asleep. They go to Agoda for an instant answer. You pay 18% commission on a guest who tried to book direct with you.<br /><br />
            ❌ <strong>The corporate email requesting rates for 10 rooms</strong> — buried under 40 other emails on a Wednesday. No follow-up sent. The RM 15,000 group booking goes silent.<br /><br />
            ❌ <strong>The 3 AM inquiry during VMY2026 peak</strong> — a tourist group wanting to book 5 rooms for Hari Raya week. Nocturn AI responds in 2 minutes in BM and English. Without it, they&apos;re on Booking.com by morning.<br /><br />
            This is <strong>a digital tax you&apos;re paying on your own guests</strong> — guests who were already trying to book direct.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4.5 MIDNIGHT TEST ────────────────────────────────────────────────────────
function MidnightTest() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      label: "Immediate Response",
      icon: "⚡",
      title: "Responds in 30 Seconds",
      content: "It's 11:47 PM. Your front desk closed 90 minutes ago. A family wants to book for the weekend. Nocturn AI responds instantly on WhatsApp with accurate rate and availability info — then captures their details for your morning team.",
      mockup: (
        <div className="phone-frame-container">
          <div className="mockup-whatsapp hifi">
            <div className="wa-header">
              <div className="wa-avatar">G</div>
              <div className="wa-contact-info">
                <div className="wa-name">Guest (Direct)</div>
                <div className="wa-status">Online</div>
              </div>
            </div>
            <div className="wa-messages">
              <div className="wa-bubble guest">Hi, do you have rooms for this Friday? And is the family pool open?</div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="wa-bubble ai">
                Hello! 😊 Yes, we have a Deluxe Room available this Friday for RM 280/night including breakfast for 2. Our family pool is open 7am–9pm daily! 🏊‍♂️ Would you like me to hold the room for you?
              </motion.div>
              <div className="wa-bubble guest">Great, I&apos;d like to book. My name is Ahmad.</div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="wa-bubble ai">
                Wonderful, Ahmad! Could you share your email so I can send the details? 📧 Our reservations team will confirm everything first thing tomorrow morning.
              </motion.div>
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 8, padding: '8px 12px', fontSize: '0.7rem', color: 'var(--color-green)', marginTop: 8 }}>
                ✓ Lead captured · Name: Ahmad · Intent: Room booking · Channel: WhatsApp · 11:48 PM
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      label: "Lead Capture",
      icon: "🎯",
      title: "Never Miss a Lead",
      content: "That lead was captured, logged, and prioritized for your morning team. Without Nocturn AI, Ahmad would have booked on Agoda at midnight. You would have paid 18% commission — RM 50 — on a guest who tried to book direct.",
      mockup: (
        <div className="mockup-leads hifi">
          <div className="proof-header">Live Lead Pipeline</div>
          <div className="lead-row hotspot">
            <div className="lead-info">
              <strong>Ahmad (Weekend Booking)</strong>
              <span>Deluxe Room · RM 280 · WhatsApp</span>
            </div>
            <span className="status">Hot Lead</span>
          </div>
          <div className="lead-row hotspot">
            <div className="lead-info">
              <strong>Family Reunion Group</strong>
              <span>10 Rooms · RM 4,500 · Email</span>
            </div>
            <span className="status">Hot Lead</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section section-gray" id="demo">
      <div className="container" id="how-it-works">
        <span className="eyebrow">THE HYBRID CO-PILOT</span>
        <h2>Full Conversions. 100% Total Control. Zero IT Teams Required.</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto 48px', textAlign: 'center' }}>
          Waiting weeks for Meta API approvals and dealing with complex PMS integrations kills deals. So we bypassed it. Welcome to the Hybrid Co-Pilot—designed so you go live in 48 hours without changing the phone number you already use.
        </p>

        <div className="switcher-container">
          <div className="switcher-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`switcher-tab ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {activeTab === i && <motion.div layoutId="activeTabIndicator" className="uc-active-indicator" />}
                <span style={{ marginRight: 12 }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="switcher-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="switcher-inner"
              >
                <div className="switcher-text">
                  <h3 style={{ fontSize: '2.5rem', marginBottom: 16, fontFamily: 'var(--font-serif)' }}>{tabs[activeTab].title}</h3>
                  <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', lineHeight: 1.6, marginBottom: 40, maxWidth: 450 }}>{tabs[activeTab].content}</p>
                </div>
                <div className="mockup-area-hifi">
                  {tabs[activeTab].mockup}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4.6 BEFORE & AFTER COMPARISON ───────────────────────────────────────────
function ComparisonSection() {
  const rows = [
    { dim: "Response Time", before: "8–24 hours (unanswered after 6PM)", after: "<30 Seconds (24/7/365)" },
    { dim: "Follow-up Logic", before: "Forgotten or 'when we have time'", after: "Automated (Day 1, 3, and 7)" },
    { dim: "Inquiry Window", before: "9 AM – 6 PM (Limited)", after: "12 AM – 11:59 PM (Infinite)" },
    { dim: "Guest Sentiment", before: "Frustrated / Bounces to OTA", after: "Delighted / Closes Direct" },
    { dim: "Revenue Leak", before: "15–20% Invisible OTA Bleed", after: "15% Predicted Recovery" },
    { dim: "GM Reporting", before: "Gut feeling / Occupancy only", after: "Daily Morning ROI Proof" }
  ];

  return (
    <section className="section section-white">
      <div className="container">
        <span className="eyebrow">HOSPITALITY ROI</span>
        <h2 style={{ marginBottom: 64 }}>The Inquiry Graveyard vs. The Nocturn Revenue Engine</h2>

        <div className="comparison-container-hifi">
          <div className="comp-card-hifi comp-before">
            <div className="comp-label">Standard Hotel Operation (Manual)</div>
            <div className="comp-visual">
              <div className="wa-bubble guest">Hi, is there group discount?</div>
              <div className="wa-bubble guest" style={{ opacity: 0.6, marginTop: 4 }}>Hello?</div>
              <div className="wa-bubble guest" style={{ opacity: 0.3, marginTop: 4 }}>Still waiting...</div>
              <div className="read-receipt">Read 2:14 AM</div>
            </div>
            <div className="comp-points">
              {rows.map((r, i) => (
                <div key={i} className="comp-point">❌ {r.before}</div>
              ))}
            </div>
          </div>

          <motion.div className="comp-card-hifi comp-after rainbow-card" whileHover={{ scale: 1.02 }}>
            <div className="comp-label">Nocturn AI-First Operation</div>
            <div className="comp-visual">
              <div className="wa-bubble guest">Hi, is there group discount?</div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="wa-bubble ai">
                Absolutely! For 5+ rooms, we offer 15% off. Ready to book?
              </motion.div>
            </div>
            <div className="comp-points">
              {rows.map((r, i) => (
                <div key={i} className="comp-point">✅ {r.after}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 4.7 FOUNDING COHORT OFFER ────────────────────────────────────────────────
function FoundingCohortOffer() {
  const valueStack = [
    { title: "Full Nocturn AI Setup — WhatsApp + Email + Website", desc: "We configure everything for your property. Your team spends 30 minutes total." },
    { title: "AI Knowledge Base — Trained on YOUR Property", desc: "Not generic. Your rates, your room types, your facilities, your FAQs, your tone." },
    { title: "48-Hour Installation", desc: "We do the work. No IT project. No system replacement." },
    { title: "Automated Follow-Up Engine", desc: "24hr, 72hr, and 7-day follow-ups configured for your guest segments." },
    { title: "Inquiry & Conversion Dashboard", desc: "See every inquiry, every channel, every response time, every conversion." },
    { title: "GM Morning Report", desc: "Daily email to your GM: inquiries handled, leads captured, estimated revenue." },
    { title: "Guest Insight Report at Day 30", desc: "Keyword analysis: What are guests asking about most? What objections come up before booking?" },
    { title: "Direct WhatsApp Line to Our Founder", desc: "Report bugs, request features, get answers in hours. This level of access ends after the founding cohort is full." }
  ];

  return (
    <section className="section section-gray" id="offer">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow" style={{ color: 'var(--color-green)' }}>ZERO-RISK REVENUE PARTNER</span>
          <h2 style={{ marginBottom: 16 }}>We Only Win When You Win</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto' }}>
            This is not a subscription for software you may or may not use. Our model is simple: RM199/mo platform + RM999 one-time setup + 3% only on confirmed, facilitated bookings. You save 12–15% per direct booking versus OTA rates. We share the upside — and none of the downside.
          </p>
        </div>

        {/* Pricing breakdown */}
        <div style={{ maxWidth: 700, margin: '0 auto 48px', background: '#fff', borderRadius: 24, border: '1px solid #e9ecef', overflow: 'hidden' }}>
          <div style={{ background: 'var(--color-navy)', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>Nocturn AI Revenue Partner Plan</span>
            <span style={{ background: 'var(--color-green)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>Only Plan</span>
          </div>
          {[
            { label: 'Platform Fee', value: 'RM 199 / month', note: 'Access to all channels + dashboard' },
            { label: 'Setup + AI Training', value: 'RM 999 (one-time)', note: '48-hour implementation, we handle everything' },
            { label: 'Performance Fee', value: '3% of facilitated revenue', note: 'Only on confirmed bookings we helped close' },
            { label: 'OTA Savings Per Booking', value: '~12%–15%', note: 'Your net gain vs. current OTA commissions' },
            { label: '30-Day Guarantee', value: 'Revenue Recovery Guarantee', note: 'Measurable results or you don\'t continue' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px 32px', borderBottom: i < 4 ? '1px solid #f1f3f5' : 'none', gap: 16 }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.95rem' }}>{row.label}</div>
                <div style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem', marginTop: 2 }}>{row.note}</div>
              </div>
              <div style={{ fontWeight: 700, color: 'var(--color-green)', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{row.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, maxWidth: 900, margin: '0 auto 48px' }}>
          {valueStack.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ display: 'flex', gap: 16, padding: '20px 24px', background: '#fff', borderRadius: 16, border: '1px solid #e9ecef' }}
            >
              <span style={{ color: 'var(--color-green)', fontWeight: 700, fontSize: '1.2rem', flexShrink: 0 }}>✅</span>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: 4, fontSize: '0.95rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee box */}
        <div style={{ maxWidth: 700, margin: '0 auto 48px', border: '2px solid var(--color-green)', borderRadius: 24, padding: '40px 48px', background: 'rgba(16,185,129,0.03)' }}>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', color: 'var(--color-green)', marginBottom: 20 }}>THE 30-DAY REVENUE RECOVERY GUARANTEE</div>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-700)', lineHeight: 1.8, marginBottom: 16 }}>
            Run Nocturn AI for 30 days. If we don&apos;t demonstrably recover direct booking revenue that exceeds our platform fee, we&apos;ll waive the next month entirely. We stake our performance fee on your results — because that&apos;s what a revenue partner does.
          </p>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem' }}>30-day review with hard data: inquiries captured, direct bookings closed, OTA commissions saved. Your GM sees the numbers every morning.</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/apply" className="btn btn-solid-green btn-lg" style={{ fontSize: '1.1rem', padding: '20px 48px' }}>
            Start 48-Hour Implementation — RM999 →
          </a>
          <p style={{ marginTop: 16, color: 'var(--color-gray-400)', fontSize: '0.9rem' }}>RM199/mo after setup · 3% only on bookings we facilitate · No lock-in contracts</p>
        </div>
      </div>
    </section>
  );
}

// ─── 4.9 REVENUE CALCULATOR ───────────────────────────────────────────────────
function AuditSection() {
  const [monthlyVolume, setMonthlyVolume] = useState<string>('50000');

  const volume = parseFloat(monthlyVolume) || 0;
  const otaCost = volume * 0.18;
  const nocturnCost = volume * 0.03 + 199;
  const monthlySavings = Math.max(otaCost - nocturnCost, 0);
  const annualSavings = monthlySavings * 12;

  const fmt = (n: number) =>
    n >= 1000 ? `RM ${Math.round(n).toLocaleString('en-MY')}` : `RM ${Math.round(n)}`;

  return (
    <section className="section section-gray" id="calculator">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">REVENUE CALCULATOR</span>
          <h2 style={{ marginBottom: 16 }}>How Much Are You Paying Agoda for Your Own Guests?</h2>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
            Drag the slider to your monthly booking volume. See exactly what OTAs cost you vs. what Nocturn AI costs.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Slider */}
          <div style={{ background: '#fff', borderRadius: 24, padding: '40px 48px', marginBottom: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', marginBottom: 8 }}>
              Monthly Booking Revenue (RM)
            </label>
            <input
              type="range"
              min="10000"
              max="500000"
              step="5000"
              value={monthlyVolume}
              onChange={e => setMonthlyVolume(e.target.value)}
              style={{ width: '100%', accentColor: 'var(--color-green)', marginBottom: 8, height: 6 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-gray-400)' }}>
              <span>RM 10,000</span>
              <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.1rem' }}>
                {fmt(volume)} / month
              </span>
              <span>RM 500,000</span>
            </div>
          </div>

          {/* Comparison cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div style={{ background: '#fff8f8', border: '1px solid #fde0e0', borderRadius: 16, padding: '28px 32px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#EF4444', marginBottom: 12 }}>CURRENT — OTA MODEL</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#EF4444', fontFamily: 'var(--font-serif)', marginBottom: 4 }}>{fmt(otaCost)}</div>
              <div style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>paid to OTAs monthly (18% avg)</div>
              <div style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>= {fmt(otaCost * 12)} / year in OTA commissions</div>
            </div>
            <div style={{ background: 'rgba(16,185,129,0.04)', border: '2px solid var(--color-green)', borderRadius: 16, padding: '28px 32px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-green)', marginBottom: 12 }}>WITH NOCTURN AI</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-green)', fontFamily: 'var(--font-serif)', marginBottom: 4 }}>{fmt(nocturnCost)}</div>
              <div style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>total cost (3% + RM199/mo)</div>
              <div style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>= {fmt(nocturnCost * 12)} / year total</div>
            </div>
          </div>

          {/* Savings result */}
          <motion.div
            key={Math.round(monthlySavings)}
            initial={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            style={{ background: 'var(--color-navy)', borderRadius: 20, padding: '32px 40px', textAlign: 'center' }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>ESTIMATED MONTHLY NET PROFIT INCREASE</div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--color-green)', fontFamily: 'var(--font-serif)' }}>
              {fmt(monthlySavings)}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: 8 }}>
              {fmt(annualSavings)} recovered annually by switching from OTA-first to direct-first
            </div>
            <a href="/apply" className="btn btn-solid-white btn-lg" style={{ marginTop: 24, display: 'inline-flex' }}>
              Capture This Revenue — Start Now →
            </a>
          </motion.div>

          <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-gray-400)', marginTop: 16 }}>
            * Based on 18% average OTA commission (Agoda/Booking.com) vs. 3% Nocturn facilitation fee + RM199/mo platform. Assumes all facilitated bookings are previously OTA-routed. Actual results vary by property.
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4.10 FAQ ─────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does this replace our PMS or Opera?",
      a: "No. Nocturn AI sits alongside your existing systems. We capture and manage what happens BEFORE the booking enters your PMS — the inquiry, the conversation, the follow-up. Think of us as the net that catches everything your PMS never sees. No Opera integration needed. No system replacement."
    },
    {
      q: "We already use WhatsApp for everything. How is this different?",
      a: "Right now, your WhatsApp conversations live on one person's phone. If they're sick, on leave, or quit — those conversations are gone. Nocturn AI centralizes every WhatsApp conversation into a team inbox where anyone can see the history and pick up where someone left off. Plus instant AI responses when nobody is available, and automatic follow-ups on leads that go silent."
    },
    {
      q: "What happens after 6PM when our reservations team goes home?",
      a: "That's exactly the problem we solve. Between 6PM and 9AM, Nocturn AI responds to every WhatsApp, email, and web inquiry. It captures guest intent, qualifies the lead, and queues it — prioritized by value — for your morning team. You stop losing the 9:47 PM WhatsApp messages that currently go unanswered until the next day (if at all)."
    },
    {
      q: "Will it sound robotic? My guests expect a personal touch.",
      a: "Our AI is trained specifically on YOUR property's information and tone. It responds in the guest's language (English and Bahasa Malaysia), keeps messages warm and concise — like your best reservation agent on a good day. When a guest needs a human, it transfers instantly with the full conversation context. No repeat questions for the guest."
    },
    {
      q: "What if the AI gives wrong rate information?",
      a: "The AI only quotes information from your verified knowledge base — rates, room types, policies that you provide and approve. If it's unsure about anything, it says: \"Let me connect you with our reservations team who can confirm the details for your specific dates.\" Safety over speed, always."
    },
    {
      q: "How long does setup take? Do I need my IT team?",
      a: "48 hours from your first call to live. We handle the technical setup. Your team spends about 30 minutes sharing property information. One line of code on your website. Link your WhatsApp Business number. That's it. No IT project. No server installation. No downtime."
    },
    {
      q: "Is our guest data safe? What about PDPA?",
      a: "All data is encrypted at rest and in transit. Each property's data is fully isolated — no cross-property access. We comply with Malaysia's Personal Data Protection Act (PDPA) requirements. Your guest data is YOUR data — we never share, sell, or use it beyond serving your property. Full data export available anytime you ask."
    },
    {
      q: "What happens after the 30-day free pilot?",
      a: "After 30 days, you'll have hard data: inquiries captured, leads recovered, response times, estimated revenue impact. If the numbers speak for themselves, we discuss a simple monthly plan — no lock-in contracts. If they don't, you walk away. No charges, no obligations, no awkward conversations."
    },
    {
      q: "We tried a chatbot before and nobody used it.",
      a: "Most hotel chatbots only work on your website — which handles less than 10% of your total inquiries. Nocturn AI captures the 90% that comes through WhatsApp, phone, and email — the channels your guests are already using. We're not adding another tool your team has to check. We're capturing the conversations that are already happening on channels they already use."
    }
  ];

  return (
    <section className="section section-white">
      <div className="container container-narrow">
        <h2 className="comp-title" style={{ textAlign: 'center', marginBottom: 64 }}>Questions Hotels Ask Us</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" style={{ borderBottom: '1px solid var(--color-gray-100)' }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
              >
                <span style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-navy)' }}>{faq.q}</span>
                <span style={{ fontSize: '1.5rem', color: 'var(--color-green)', flexShrink: 0, transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.8, paddingBottom: 28, fontSize: '1rem' }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4.11 FINAL CTA ───────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="section section-dark" style={{ textAlign: 'center', position: 'relative' }}>
      <div className="noise-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <span className="eyebrow">REVENUE PARTNER — VMY2026</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: 900, margin: '0 auto 32px' }}>
          Stop Donating 18% to OTAs.<br />Your Guests Are Already Trying to Book Direct.
        </h2>
        <p style={{ color: 'var(--color-gray-400)', fontSize: '1.25rem', marginBottom: 48, maxWidth: 650, margin: '0 auto 48px' }}>
          Malaysia&apos;s Visit Malaysia Year 2026 will bring the highest inbound tourism volume in a decade. Every hotel that isn&apos;t capturing direct bookings will pay OTA commissions on every one of those guests.
          <br /><br />
          RM199/mo platform. RM999 one-time setup. 3% only when we deliver a confirmed booking. You keep the other 15%.
        </p>
        <div className="hero-ctas" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/601163263808" className="btn btn-solid-white btn-lg">Chat with Founder on WhatsApp</a>
          <a href="/apply" className="btn btn-outline-white btn-lg">Start 48-Hour Implementation →</a>
          <a href="mailto:a.basyir@sheerssoft.com?subject=Nocturn AI Revenue Partner Inquiry" className="btn btn-outline-white btn-lg" style={{ opacity: 0.8 }}>Email Strategy Desk</a>
        </div>
        <p style={{ marginTop: 32, color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          RM999 one-time setup · RM199/mo platform · 3% on confirmed bookings only · 30-Day Revenue Recovery Guarantee
        </p>
      </div>
    </section>
  );
}
