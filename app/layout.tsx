import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "ERS — Run errands without stress in Lagos",
  description:
    "Skip traffic and stress. ERS connects you with trusted runners to handle your errands instantly across Lagos.",

  keywords: [
    "errand service Lagos",
    "delivery Lagos",
    "runner app Nigeria",
    "send errands Lagos",
  ],

  openGraph: {
    title: "ERS — Run errands without stress",
    description:
      "Get anything done by trusted runners in Lagos.",
    url: "https://ers.wankysoftware.com",
    siteName: "ERS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0B0D12] text-white antialiased font-sans">

        {/* Structured Data (SEO) */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ERS",
              url: "https://ers.wankysoftware.com",
              description: "Errand runner platform in Lagos",
            }),
          }}
        />

        {children}

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />

      </body>
    </html>
  );
}