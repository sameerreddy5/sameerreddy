import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sameer Reddy | Instagram Growth, AI Tools & Smart Tech",
  description: "Helping creators grow with clarity, discipline, and practical tools. No noise. Only growth.",
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
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

          {/* Top Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main style={{
            flex: 1,
            width: '100%',
            paddingTop: '70px', // Space for fixed navbar
            paddingBottom: '2rem'
          }} className="main-content">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

        </div>
      </body>
    </html>
  );
}
