import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Sour_Gummy } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const sourgummy = Sour_Gummy({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    default: "Chill-O-Meter - Are You the Ultimate Chill Guy?",
    template: "%s | Chill-O-Meter"
  },
  description: "Are You the Ultimate Chill Guy? Take the Test!",
  keywords: [
    "Chill Test", 
    "Personality Quiz", 
    "Chill-O-Meter", 
    "Fun Quiz",
    "Personality Assessment",
    "Online Quiz",
    "Chill Level",
    "Cool Factor Test"
  ],
  authors: [
    {
      name: "Chill-O-Meter Team",
      url: "/",
    }
  ],
  creator: "Chill-O-Meter Team",
  publisher: "Chill-O-Meter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chill-o-meter.vercel.app/",
    title: "Chill-O-Meter - Are You the Ultimate Chill Guy?",
    description: "Are You the Ultimate Chill Guy? Take the Test!",
    siteName: "Chill-O-Meter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chill-O-Meter Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chill-O-Meter - Are You the Ultimate Chill Guy?",
    description: "Are You the Ultimate Chill Guy? Take the Test!",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "Entertainment",
  applicationName: "Chill-O-Meter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Are You the Ultimate Chill Guy? Take the Test!" />
        <meta name="keywords" content="Chill Test, Personality Quiz, Chill-O-Meter, Fun Quiz" />
        <meta name="author" content="Chill-O-Meter" />

        <title>Chill-O-Meter</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className} ${sourgummy.className}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}