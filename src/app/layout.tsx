import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import { Header } from "@/components/Header";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: {
    default: "Hotel AI Concierge — Capture Every Inquiry 24/7 | Nocturn AI",
    template: "%s | Nocturn AI",
  },
  description:
    "Stop losing bookings after 6pm. Nocturn AI captures every WhatsApp, web & email inquiry 24/7 and proves revenue recovered. Free 30-day pilot for Malaysian hotels.",
  metadataBase: new URL("https://sheerssoft.com"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Nocturn AI",
    images: [
      {
        url: "/og-image.png", // Recommended: 1200x630
        width: 1200,
        height: 630,
        alt: "Nocturn AI - Hotel Revenue Recovery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en-MY">
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTA />
        <WhatsAppFloatingButton />
        <MetaPixel />

        {/* Google Analytics - GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

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
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="14" stroke="#22C55E" strokeWidth="2.5" />
                <path d="M16 6C10.5 6 8 12 8 16c0 4 2.5 10 8 10 -3-2-4.5-5.5-4.5-10S13 8 16 6z" fill="#22C55E" />
              </svg>
              <span>Nocturn AI</span>
            </div>
            <p className="footer-tagline">
              Capturing bookings while you sleep.
            </p>
            <p className="footer-company">
              A product by <a href="https://sheerssoft.com" style={{ color: "inherit", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">Sheers Software Sdn Bhd</a>
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <a href="/how-it-works">How It Works</a>
            <a href="/pilot">Pilot Program</a>
            <a href="/apply">Apply</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>

        <div className="footer-trust">
          <span>🔒 PDPA Compliant</span>
          <span>🔐 Encrypted</span>
          <span>🇲🇾 Built in Malaysia</span>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <a href="https://sheerssoft.com" style={{ color: "inherit", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">Sheers Software Sdn Bhd</a>. All rights reserved.</p>
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
        Apply for Founding Cohort →
      </a>
    </div>
  );
}
