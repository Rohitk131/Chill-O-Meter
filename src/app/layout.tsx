import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins,Sour_Gummy } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const sourgummy = Sour_Gummy({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className} ${sourgummy.className}`}
      >
        {children}
      </body>
    </html>
  );
}
