import type { Metadata } from "next";
import "./globals.css";
import "./App.css";
import "./Home.css";
import "./Pages.css";
import PageLayout from "@/components/layout/PageLayout";
import MetaPixel from "@/components/MetaPixel";
import LinkedInInsightTag from "@/components/LinkedInInsightTag";

export const metadata: Metadata = {
  title: "SheersSoft | Business Software Solutions",
  description: "Empowering businesses with technology, strategy, and support. High-performance websites, PWAs, and autonomous AI for Malaysian businesses.",
  metadataBase: new URL("https://sheerssoft.com"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://sheerssoft.com",
    siteName: "Sheers Software",
    title: "SheersSoft | Business Software Solutions",
    description: "Empowering businesses with technology, strategy, and support. High-performance websites, PWAs, and autonomous AI for Malaysian businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SheersSoft - Business Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SheersSoft | Business Software Solutions",
    description: "Empowering businesses with technology, strategy, and support.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLayout>
          {children}
        </PageLayout>

        <MetaPixel />
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
                "@type": "LocalBusiness",
                "name": "Sheers Software Sdn Bhd",
                "image": "https://sheerssoft.com/og-image.png",
                "url": "https://sheerssoft.com",
                "telephone": "+601163263808",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "MY",
                  "addressRegion": "Kuala Lumpur"
                }
              }
            ])
          }}
        />

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
