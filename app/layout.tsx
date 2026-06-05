import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import Analytics from "./components/Analytics"; // ✅ HERE

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0B0D12] text-white antialiased font-sans">

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

        <CookieBanner />
        <Analytics /> {/* ✅ THIS IS CORRECT */}

      </body>
    </html>
  );
}