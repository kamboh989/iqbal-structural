import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Navbar  from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iqbalstructuralsolutions.com"),

  title: {
    default: " Iqbal Structural Solutions | Steel Structure Company in Pakistan ",
    template: "%s | Iqbal Structural Solutions",
  },

  description:
    "Iqbal Structural Solutions provides expert steel structure design, fabrication, and construction services across Pakistan.",

  keywords: [
    "steel structure company",
    "steel fabrication Pakistan",
    "industrial steel structures",
    "PEB structures",
    "steel construction services",
    "Iqbal Structural Solutions",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Iqbal Structural Solutions",
    url: "https://iqbalstructuralsolutions.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Steel Structure Construction Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SCHEMA ORG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ConstructionCompany",
            name: "Iqbal Structural Solutions",
            url: "https://iqbalstructuralsolutions.com",
            logo: "https://iqbalstructuralsolutions.com/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Office#113 Mall of Faisalabad",
              addressLocality: "Faisalabad",
              addressCountry: "PK",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92 321 3333792",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61584510311404",
              "https://www.instagram.com/iqbalstructuralsolutions/",
            ],
          }),
        }}
      />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
