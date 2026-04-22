"use client";

import React from "react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer section-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 0 60px' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand" style={{ marginBottom: '24px' }}>
              <Logo size={28} variant="white" showText={true} />
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>
                by Sheers Software
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '280px' }}>
              The AI-First revenue recovery layer for Malaysian hospitality. Stop losing bookings to silence.
            </p>
            <div className="footer-status" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
                <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
                   SSM: 202501033756
                </div>
                <div style={{ padding: '6px 12px', background: 'rgba(0,180,140,0.05)', border: '1px solid rgba(0,180,140,0.1)', borderRadius: '6px', fontSize: '0.75rem', color: 'var(--color-green)' }}>
                   ● SYSTEM ACTIVE
                </div>
            </div>
          </div>

          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: 'white', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Product</h4>
            <a href="/how-it-works" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>How It Works</a>
            <a href="/pilot" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Founding Cohort</a>
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Insight Hub</a>
            <a href="/apply" style={{ color: 'var(--color-green)', textDecoration: 'none', fontWeight: 600 }}>Apply Now →</a>
          </div>

          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: 'white', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</h4>
            <a href="/about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Our Story</a>
            <a href="/about#team" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mission</a>
            <a href="mailto:hello@sheerssoft.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Contact Desk</a>
          </div>

          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: 'white', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h4>
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Terms of Service</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginTop: '12px' }}>PDPA 2024/2025 Compliant</span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>LHDN e-Invoice Ready (Aug 2026)</span>
          </div>
        </div>

        {/* Compliance Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', marginBottom: '24px' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', lineHeight: 1.7, maxWidth: 900 }}>
            <strong style={{ color: 'rgba(255,255,255,0.4)' }}>Data Protection (PDPA 2024/2025):</strong> Sheers Software Sdn Bhd complies with Malaysia&apos;s Personal Data Protection Act, including mandatory Data Protection Officer (DPO) appointment, 72-hour breach notification, and explicit consent requirements for automated profiling. Guest data is encrypted at rest and in transit. Each property&apos;s data is fully isolated. Full data export available on request.
            {' | '}
            <strong style={{ color: 'rgba(255,255,255,0.4)' }}>LHDN e-Invoicing:</strong> Nocturn AI is prepared for Malaysia&apos;s mandatory e-invoicing requirement effective August 2026 (LHDN MyInvois), supporting self-billing and individual e-invoice generation in compliance with IRBM guidelines.
            {' | '}
            <strong style={{ color: 'rgba(255,255,255,0.4)' }}>Perlindungan Data Peribadi (PDPA 2024/2025):</strong> Sheers Software Sdn Bhd mematuhi Akta Perlindungan Data Peribadi Malaysia, termasuk pelantikan Pegawai Perlindungan Data (DPO), notifikasi pelanggaran dalam masa 72 jam, dan persetujuan eksplisit untuk pemprosesan profil automatik.
            {' | '}
            <strong style={{ color: 'rgba(255,255,255,0.4)' }}>E-Invois LHDN:</strong> Nocturn AI sedia untuk keperluan e-invois mandatori Malaysia yang berkuat kuasa Ogos 2026 (LHDN MyInvois), menyokong pengebilan kendiri dan penjanaan e-invois individu mengikut garis panduan LHDN.
          </p>
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Sheers Software Sdn Bhd. All rights reserved.
          </p>
          <div className="footer-meta" style={{ display: 'flex', gap: '24px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-green)' }}>✓</span> PDPA 2024/2025 Compliant
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-green)' }}>✓</span> LHDN e-Invoice Ready
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                🇲🇾 VMY2026 Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
