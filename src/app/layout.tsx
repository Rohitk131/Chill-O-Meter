import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Chill-O-Meter",
  description: "Are You the Ultimate Chill Guy? Take the Test!",
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

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Chill-O-Meter" />
        <meta property="og:description" content="Are You the Ultimate Chill Guy? Take the Test!" />
        <meta property="og:image" content="og-image.png" />
        <meta property="og:url" content="https://chill-o-meter.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chill-O-Meter" />
        <meta name="twitter:description" content="Are You the Ultimate Chill Guy? Take the Test!" />
        <meta name="twitter:image" content="og-image.png" />

        <title>Chill-O-Meter</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className} ${sourgummy.className}`}
      >
        {children}
      </body>
    </html>
  );
}
