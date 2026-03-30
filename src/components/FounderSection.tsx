"use client";

import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section className="section section-white snap-section" id="founder">
      <div className="container container-medium" style={{ maxWidth: 800 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow" style={{ color: 'var(--color-green)', fontWeight: 600 }}>FROM OUR FOUNDER</span>
            <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--color-navy)' }}>Why I Built This</h2>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="founder-letter-card"
            style={{ 
                background: '#fdfdfd', 
                border: '1px solid #eee', 
                padding: '64px', 
                borderRadius: '32px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
            }}
        >
            <div className="serif" style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-gray-600)', whiteSpace: 'pre-line' }}>
                {`I spent the last several months sitting across from Revenue Managers, Reservation Managers, GMs, and consultants who've collectively managed thousands of hotel rooms across Malaysia, Singapore, and the Middle East.

Every single one told me a version of the same story:

"We have the demand. We have guests trying to reach us. But between WhatsApp, email, phone calls, and OTA messages — things fall through the cracks. And the tools that promise to fix this are either built for a Western market that doesn't run on WhatsApp, too expensive for our budget, or require a 6-month IT project we don't have bandwidth for."

I'm not building another enterprise platform that takes 18 months to implement and requires a dedicated IT team. I'm building the layer that catches every inquiry your current systems miss — starting with the channels Malaysian hotels actually use.

Nocturn AI is in its founding stage. That means you get my direct attention, my fastest iteration, and the ability to shape this product around your property's real needs. The big vendors can't offer that. I can.

If you've been burned by overpromising tech vendors before, I understand the skepticism. That's why there's no contract, no setup fee, and a 30-day "prove-it-or-pay-nothing" guarantee.`}
            </div>

            <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 24 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--color-green)' }}>
                    <img src="/Basyir.png" alt="Ahmad Basyir Azahari" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                   <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', fontFamily: 'var(--font-serif)' }}>Ahmad Basyir</div>
                   <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Founder & CEO, Sheers Software Sdn Bhd</div>
                </div>
            </div>

            <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #eee', display: 'flex', gap: 32 }}>
                <a href="mailto:a.basyir@sheerssoft.com" style={{ color: 'var(--color-green)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Email Direct →</a>
                <a href="https://www.linkedin.com/in/ahmad-basyir-azahari/" style={{ color: 'var(--color-green)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Connect on LinkedIn →</a>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
