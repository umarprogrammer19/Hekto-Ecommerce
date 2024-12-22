import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts with variable definitions for easy reference in CSS
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

// Set up metadata for SEO and accessibility
export const metadata: Metadata = {
  title: "Responsive Design Website",
  description: "A modern and responsive website built with Next.js.",
  openGraph: {
    title: "Responsive Design Website",
    description: "A modern and responsive website built with Next.js.",
    url: "https://yourwebsite.com",
    siteName: "My Responsive Site",
  },
};

// Set up viewport separately
export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
