import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./layout.css";
import { Header } from "@/components/Header";
import { ChatWidget } from "@/components/ChatWidget";
import LinkedInInsightTag from "@/components/LinkedInInsightTag";

export const metadata: Metadata = {
  title: {
    default: "Nocturn AI: #1 Hotel AI Concierge Malaysia | 24/7 Revenue Recovery",
    template: "%s | Nocturn AI",
  },
  description:
    "Stop losing late-night bookings. Nocturn AI is the leading Hotel AI Concierge in Malaysia, automating WhatsApp, web & email inquiries to recover 15% revenue gap 24/7.",
  keywords: [
    "Hotel AI Concierge Malaysia",
    "AI for hotels Kuala Lumpur",
    "WhatsApp hotel chatbot",
    "automated hotel reservations Malaysia",
    "hotel revenue recovery AI",
    "reduce hotel OTA commission",
    "hospitality AI concierge",
    "Nocturn AI",
  ],
  metadataBase: new URL("https://ai.sheerssoft.com"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://ai.sheerssoft.com",
    siteName: "Nocturn AI | Sheers Software",
    title: "Nocturn AI: #1 Hotel AI Concierge Malaysia | 24/7 Revenue Recovery",
    description: "Stop losing late-night bookings. Nocturn AI automates WhatsApp, web & email inquiries to recover 15% revenue gap for Malaysian hotels 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nocturn AI - Hotel Revenue Recovery & AI Concierge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocturn AI: #1 Hotel AI Concierge Malaysia | 24/7 Revenue Recovery",
    description: "Stop losing bookings after 6pm. Nocturn AI captures every WhatsApp, web & email inquiry 24/7 to recover lost revenue.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
    languages: {
      "en-MY": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSGRML9H');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSGRML9H"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTA />
        <ChatWidget />
        <LinkedInInsightTag />

        {/* --- JSON-LD Schema for GEO & SEO --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Sheers Software Sdn Bhd",
                "url": "https://sheerssoft.com",
                "logo": "https://sheerssoft.com/og-image.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+601163263808",
                  "contactType": "customer service",
                  "areaServed": "MY",
                  "availableLanguage": ["English", "Malay"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Nocturn AI",
                "operatingSystem": "Web, WhatsApp",
                "applicationCategory": "BusinessApplication",
                "description": "An AI Concierge for hotels that captures WhatsApp, Web, and Email inquiries 24/7."
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is a Hotel AI Concierge?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A Hotel AI Concierge is an automated system that handles guest inquiries, bookings, and service requests 24/7 across platforms like WhatsApp and Web, ensuring no lead is lost after hours."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Nocturn AI recover 15% revenue for hotels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nocturn AI captures late-night inquiries that usually go unanswered, converting them into direct bookings on WhatsApp and preventing guests from booking through high-commission OTAs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Nocturn AI available for hotels in Malaysia?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Nocturn AI is specifically optimized for the Malaysian hospitality market, supporting local nuances and the high volume of WhatsApp-based inquiries in the region."
                    }
                  }
                ]
              }
            ])
          }}
        />

        {/* GA4 configured via GTM — add GA4 tag in GTM dashboard */}

        {/* HubSpot Tracking Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na2.hs-scripts.com/243983306.js">
        </script>
      </body>
    </html>
  );
}


/* ---- Footer ---- */
function Footer() {
  return (
    <footer className="footer section-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 0 60px' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand" style={{ marginBottom: '24px' }}>
              <span className="serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white' }}>Nocturn AI</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.1em' }}>by Sheers Software</span>
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

/* ---- Mobile CTA ---- */
function MobileCTA() {
  return (
    <div className="mobile-cta hide-desktop">
      <a href="/apply" className="btn btn-primary" style={{ width: "100%", borderRadius: 0 }}>
        Start 48-Hour Implementation — RM999 →
      </a>
    </div>
  );
}
