"use client";

import "./home.css";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { UseCases } from "@/components/UseCases";
import { BenefitGrid } from "@/components/BenefitGrid";
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
      {/* 4.3 Core Pillars (Attribute / Optimize / Ease / Forecast) */}
      <BenefitGrid />
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
          <motion.div variants={itemVariants} className="hero-header-hyros">
            <div className="meet-text">Now accepting 5 hotels into our Founding Cohort</div>
            <h1 className="hyros-style-title" aria-label="Nocturn AI: Stop Losing Hotel Bookings to Silence">
              NOCTURN AI
              <span className="sr-only"> — Stop Losing Hotel Bookings to Silence, Malaysia</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-subtitle-hyros">
            <p className="hero-subtitle-main">Your Reservations Team Goes Home at 6PM. Your Guests Don&apos;t Stop Inquiring.</p>
            <p className="hero-subtitle-sub">Malaysian hotels lose direct bookings every night to unanswered WhatsApp messages, unfollowed emails, and after-hours silence. Nocturn AI captures every inquiry, responds instantly, follows up automatically, and shows you exactly what you&apos;re converting — 24/7.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-ctas">
            <a href="/apply" className="btn btn-solid-white btn-lg">Apply for Founding Cohort →</a>
            <a href="#demo" className="btn btn-outline-white btn-lg">Watch 2-Min Demo</a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: 32, display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', opacity: 0.7 }}>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>✓ Built for Malaysian hospitality</span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>✓ WhatsApp + Email + Web</span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>✓ No system replacement required</span>
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
          <span className="eyebrow" style={{ color: '#EF4444' }}>THE PROBLEM</span>
          <h2 style={{ marginBottom: 24 }}>The Inquiry Graveyard: Where Direct Bookings Go to Die</h2>
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
            ❌ <strong>The WhatsApp message at 9:47 PM</strong> — a family asking about rooms for the weekend. Unanswered until morning. They booked on Agoda instead. You paid 18% commission on a guest who tried to book direct.<br /><br />
            ❌ <strong>The corporate email requesting rates for 10 rooms</strong> — buried under 40 other emails on a Wednesday. No follow-up sent. The RM 15,000 group booking goes silent.<br /><br />
            ❌ <strong>The phone call during peak check-in</strong> — &ldquo;Can you call back?&rdquo; They never do. You&apos;ll never know what you lost.<br /><br />
            This isn&apos;t a technology problem. It&apos;s <strong>revenue falling on the floor every day</strong> — and nobody is picking it up.
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
      <div className="container">
        <span className="eyebrow">SEE IT IN ACTION</span>
        <h2>The Midnight Test</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto 48px', textAlign: 'center' }}>
          It&apos;s 11:47 PM. Your front desk closed 90 minutes ago. A family wants to book for the weekend. Here&apos;s what happens with the Nocturn Revenue Engine.
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
          <span className="eyebrow" style={{ color: 'var(--color-green)' }}>FOUNDING COHORT</span>
          <h2 style={{ marginBottom: 16 }}>Be One of the First 5 Hotels to Shape What Comes Next</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto' }}>
            We&apos;re selecting 5 properties for our Founding Cohort. You get the product for free for 30 days, direct access to our founding team, and the ability to shape Nocturn AI around YOUR operations. In return, we get your honest feedback and real-world data.
          </p>
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
          <div style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', color: 'var(--color-green)', marginBottom: 20 }}>THE 30-DAY GUARANTEE</div>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-700)', lineHeight: 1.8, marginBottom: 16 }}>
            Run Nocturn AI for 30 days. If your team doesn&apos;t agree that it has measurably improved your inquiry response time and follow-up consistency, you pay nothing. Not &ldquo;money back.&rdquo; You never pay in the first place.
          </p>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem' }}>No contracts. No credit card upfront. No setup fees. The product proves itself or you walk away.</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/apply" className="btn btn-solid-green btn-lg" style={{ fontSize: '1.1rem', padding: '20px 48px' }}>
            Apply for Founding Cohort — 5 Spots Only →
          </a>
          <p style={{ marginTop: 16, color: 'var(--color-gray-400)', fontSize: '0.9rem' }}>Application takes 2 minutes. We&apos;ll respond within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}

// ─── 4.9 ROI AUDIT CALCULATOR ─────────────────────────────────────────────────
function AuditSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleAudit = () => {
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="section section-gray" id="audit">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">YOUR NUMBERS</span>
          <h2 style={{ marginBottom: 16 }}>How Much Revenue Is Your Hotel Leaving on the Table?</h2>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
            Enter your property details below for an estimate. The 30-day pilot will give you your real numbers.
          </p>
        </div>

        <div className="apply-form-card" style={{ maxWidth: 600, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key="success" style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 20 }}>📧</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 12, color: 'var(--color-navy)', fontWeight: 700 }}>Audit Request Received!</h3>
                <p style={{ color: 'var(--color-gray-500)' }}>We are preparing your custom ROI report. Check your inbox in 2 minutes.</p>
              </motion.div>
            ) : (
              <motion.div exit={{ opacity: 0, y: -10 }} key="form" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, fontSize: '0.9rem' }}>Daily Inquiries Your Hotel Receives</label>
                    <input type="number" className="input-field" placeholder="e.g. 30" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, fontSize: '0.9rem' }}>Avg. Daily Rate / ADR (RM)</label>
                    <input type="number" className="input-field" placeholder="e.g. 230" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, fontSize: '0.9rem' }}>% of Inquiries After Office Hours</label>
                  <input type="number" className="input-field" placeholder="e.g. 30" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, fontSize: '0.9rem' }}>Business Email</label>
                  <input type="email" className="input-field" placeholder="manager@yourhotel.com" />
                </div>
                <button onClick={handleAudit} className="btn btn-solid-green btn-lg" style={{ width: '100%', marginTop: 12, justifyContent: 'center' }} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Calculating...' : 'See Your Real Numbers — Apply for Pilot →'}
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>
                  * Estimation based on industry conversion benchmarks (15% conversion, 18% OTA avg). Your actual results will depend on property type, location, and season.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
        <span className="eyebrow">FOUNDING COHORT 2026</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: 900, margin: '0 auto 32px' }}>
          Every Night Your Hotel Isn&apos;t Capturing Inquiries, You&apos;re Paying for It in OTA Commissions
        </h2>
        <p style={{ color: 'var(--color-gray-400)', fontSize: '1.25rem', marginBottom: 48, maxWidth: 650, margin: '0 auto 48px' }}>
          The bookings are already trying to come to you. Through WhatsApp messages at 9PM. Through emails on Wednesday afternoon that get buried. Through phone calls during check-in rush that go to voicemail.
          <br /><br />
          The question isn&apos;t whether you can afford to try Nocturn AI. It&apos;s how much you&apos;re paying every month because you haven&apos;t.
        </p>
        <div className="hero-ctas" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="/apply" className="btn btn-solid-white btn-lg">Apply for Founding Cohort →</a>
          <a href="https://wa.me/601163263808" className="btn btn-outline-white btn-lg">Chat with Founder</a>
          <a href="mailto:a.basyir@sheerssoft.com?subject=Nocturn AI Strategy Inquiry" className="btn btn-outline-white btn-lg" style={{ opacity: 0.8 }}>Email Strategy Desk</a>
        </div>
        <p style={{ marginTop: 32, color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          30-day free pilot · No setup fee · Live in 48 hours · 5 spots remaining
        </p>
      </div>
    </section>
  );
}
