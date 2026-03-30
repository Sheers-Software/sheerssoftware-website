"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/components/PricingCard";
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
            THE PILOT PROGRAM
          </motion.span>
          <motion.h1 
            className="hyros-style-title"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: 24 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Stop Paying for Silence.<br />
            Start Paying for Results.
          </motion.h1>
          <motion.p 
            style={{ color: 'var(--color-gray-400)', fontSize: '1.25rem', maxWidth: 700, margin: '0 auto' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Simple, value-based pricing for Malaysian hotels. No hidden fees. No long-term contracts. 30-day risk-free pilot for early adopters.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section section-white">
        <div className="container">
          <div className="pricing-header" style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)' }}>Choose Your Tier</h2>
            <p style={{ color: 'var(--color-gray-500)', fontSize: '1.2rem' }}>All plans include 24/7 WhatsApp AI and Automated Morning Reports.</p>
          </div>

          <div className="pricing-grid">
            <PricingCard 
                tier="Starter" 
                price="1,500" 
                target="Boutique & Heritage Hotels" 
                features={["Up to 50 Rooms", "WhatsApp Business Integration", "Basic Lead Capture", "Daily Morning Report", "24/7 AI Availability"]} 
                cta="Start 30 Day Pilot" 
                recommended={false} 
            />
            <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <PricingCard 
                    tier="Professional" 
                    price="3,000" 
                    target="Mid-Range & City Hotels" 
                    features={["50–150 Rooms", "Everything in Starter", "Direct Booking Link Sync", "Multi-Channel Dashboard", "Priority AI Training", "Advanced Lead Scoring"]} 
                    cta="Most Popular" 
                    recommended={true} 
                />
            </motion.div>
            <PricingCard 
                tier="Enterprise" 
                price="Custom" 
                target="Large Resorts & Groups" 
                features={["150+ Rooms", "Everything in Pro", "Full White-label Support", "Multi-Property Dashboard", "Dedicated Account Manager", "Custom API Webhooks"]} 
                cta="Contact Sales" 
                recommended={false} 
            />
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ fontSize: '4rem', marginBottom: 24, opacity: 0.2 }}>&ldquo;</div>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: 32 }}>We recover more revenue in 48 hours than our competitors do in 4 months.</h2>
          <div style={{ fontWeight: 600, color: 'var(--color-green)' }}>NOCTURN AI GROWTH TEAM</div>
        </div>
      </section>
    </main>
  );
}
