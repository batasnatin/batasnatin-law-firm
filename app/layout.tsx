import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants/site";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "lawyer Philippines",
    "law firm Philippines",
    "Taguig lawyer",
    "Taguig law firm",
    "labor lawyer Philippines",
    "pro bono legal services Philippines",
    "free legal advice Philippines",
    "BATASnatin",
    "Atty. Libayan",
    "labor law",
    "illegal dismissal",
    "NLRC",
    "DOLE",
    "family law Philippines",
    "annulment Philippines",
    "civil litigation Philippines",
    "criminal defense Philippines",
    "real estate law Philippines",
    "notary public Philippines",
    "BATASnatin LIVE",
    "Supreme Court lawyer",
    "Metro Manila lawyer"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@batasnatin",
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
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "PH-00",
    "geo.placename": "Taguig City",
    "geo.position": "14.5176;121.0489",
    "ICBM": "14.5176, 121.0489",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "@id": siteConfig.url,
              "name": siteConfig.name,
              "description": siteConfig.description,
              "url": siteConfig.url,
              "telephone": siteConfig.contact.phone,
              "email": siteConfig.contact.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": `${siteConfig.contact.address.suite}, ${siteConfig.contact.address.street}`,
                "addressLocality": siteConfig.contact.address.city,
                "addressRegion": siteConfig.contact.address.state,
                "postalCode": siteConfig.contact.address.zip,
                "addressCountry": "PH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "14.5176",
                "longitude": "121.0489"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "₱₱",
              "areaServed": {
                "@type": "Country",
                "name": "Philippines"
              },
              "knowsAbout": [
                "Labor Law",
                "Family Law",
                "Civil Law",
                "Criminal Defense",
                "Real Estate Law",
                "Environmental Law",
                "Corporation Law"
              ],
              "sameAs": [
                siteConfig.social.facebook,
                siteConfig.social.youtube
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}