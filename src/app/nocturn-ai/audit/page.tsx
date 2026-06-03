"use client";

import { motion } from "framer-motion";
import LeadMagnetCalculator from "@/components/LeadMagnetCalculator";
import "../../home.css"; // Reuse home styles

export default function AuditPage() {
  return (
    <div className="nocturn-v2" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-gray-50)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span className="eyebrow" style={{ color: 'var(--color-green)' }}>FREE REVENUE AUDIT</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-serif)', color: 'var(--color-navy)', marginBottom: 24, lineHeight: 1.1 }}>
            Find Out How Much You&apos;re Donating to OTAs
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-500)', maxWidth: 700, margin: '0 auto' }}>
            Use the calculator below to see exactly how much revenue you&apos;re losing when your front desk is closed — and how much Nocturn AI could recover for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <LeadMagnetCalculator />
        </motion.div>
        
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '1rem', marginBottom: 24 }}>
            Want a personalized breakdown of your hotel&apos;s revenue leakage?
          </p>
          <a href="https://wa.me/601163263808?text=Hi%20Basyir,%20I'd%20like%20a%20free%20revenue%20audit%20for%20my%20hotel." className="btn btn-solid-green btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Request Full Audit on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
