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
        <AdSenseScript pId="" /> {/* Add your Publisher ID here later: ca-pub-XXXXXXXXXXXXXXXX */}
      </body>
    </html>
  );
}
