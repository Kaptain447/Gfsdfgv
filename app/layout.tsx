import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import "@/app/globals.css"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Famous FX",
  description: "Professional services at your fingertips.",
  keywords: ["investment", "wealth management", "finance", "trading", "financial planning"],
  authors: [{ name: "Famous FX" }],
  creator: "Famous FX",
  publisher: "Famous FX",
  openGraph: {
    title: "Famous FX - Your Financial Future",
    description:
      "Famous FX is a leading investment platform offering expert guidance and innovative tools for financial growth.",
    url: "https://www.famousfx.com",
    siteName: "Famous FX",
    images: [
      {
        url: "https://www.famousfx.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Famous FX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Famous FX - Your Financial Future",
    description:
      "Famous FX is a leading investment platform offering expert guidance and innovative tools for financial growth.",
    creator: "@FamousFX",
    images: ["https://www.famousfx.com/twitter-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* Google Translate */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
                'google_translate_element'
              );
            }
          `}
        </Script>

        {/* Smartsupp Live Chat */}
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '2f904c94b74c0b4d3017cb21b485773e02ea0fe2';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Components that use useSearchParams MUST be inside Suspense */}
          <Suspense fallback={null}>
            <ScrollProgress />
            <Header />
          </Suspense>

          <main className="flex-1">{children}</main>

          <Footer />
          {/* Global analytics */}
          <Analytics />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
