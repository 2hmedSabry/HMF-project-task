import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SEO_CONFIG } from "@/constants/seo";

const jannaLT = localFont({
  src: [
    {
      path: "../../public/fonts/JannaLT-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JannaLT-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-janna",
  display: "swap",
});

// Viewport config - prevents layout shifts
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.url),
  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: "HMF Consulting Engineers" }],
  creator: "HMF",
  publisher: "HMF Consulting Engineers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.url,
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this file or equivalent
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    creator: SEO_CONFIG.twitter.handle,
    images: ["/og-image.jpg"],
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
    canonical: SEO_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${jannaLT.className} antialiased bg-[#F7F6F6]`}>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": SEO_CONFIG.siteName,
              "url": SEO_CONFIG.url,
              "logo": `${SEO_CONFIG.url}/logo.png`, // Update if logo path is known
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-505-933-440", // Using the number from Footer
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["Arabic"]
              },
              "sameAs": [
                "https://www.facebook.com/hmfaqih",
                "https://www.instagram.com/hmfaqih",
                "https://www.youtube.com/@hmfaqih"
              ]
            })
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:bg-black focus:text-white focus:p-4 focus:rounded-md"
        >
          الانتقال إلى المحتوى الرئيسي
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
