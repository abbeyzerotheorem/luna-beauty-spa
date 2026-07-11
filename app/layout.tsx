import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import clientData from "@/data/client"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: clientData.seo.title,
  description: clientData.seo.description,
  keywords: clientData.seo.keywords,
  openGraph: {
    title: clientData.seo.title,
    description: clientData.seo.description,
    images: [
      {
        url: clientData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: clientData.businessName,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: clientData.seo.title,
    description: clientData.seo.description,
    images: [clientData.seo.ogImage],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://lunabeautyspa.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": clientData.businessName,
              "description": clientData.seo.description,
              "url": "https://lunabeautyspa.com",
              "telephone": clientData.phone,
              "email": clientData.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": clientData.address.street,
                "addressLocality": clientData.address.city,
                "addressRegion": clientData.address.state,
                "postalCode": clientData.address.zip,
                "addressCountry": clientData.address.country,
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.068970",
                "longitude": "-118.400698",
              },
              "openingHoursSpecification": Object.entries(clientData.openingHours)
                .filter(([_, hours]) => !hours.closed)
                .map(([day, hours]) => ({
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": day.charAt(0).toUpperCase() + day.slice(1),
                  "opens": hours.open,
                  "closes": hours.close,
                })),
              "priceRange": "$$",
              "image": clientData.seo.ogImage,
              "sameAs": [
                clientData.socialLinks.instagram,
                clientData.socialLinks.facebook,
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
