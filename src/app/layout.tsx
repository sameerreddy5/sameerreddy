import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdSenseScript from "@/components/AdSenseScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sameer Reddy | Telugu Digital Storyteller",
  description: "No noise. Only growth. Join the journey of discipline and clarity.",
  other: {
    "google-adsense-account": "ca-pub-3156356414560763"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <AdSenseScript pId="ca-pub-3156356414560763" />
      </body>
    </html>
  );
}
