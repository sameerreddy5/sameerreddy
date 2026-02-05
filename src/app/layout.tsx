import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

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
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Desktop Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main style={{
            flex: 1,
            marginLeft: '0',
            width: '100%',
            paddingBottom: '80px' // Space for mobile nav
          }} className="main-content">
            {children}
          </main>

          {/* Mobile Bottom Nav */}
          <MobileNav />
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .main-content {
              margin-left: 280px !important; /* Sidebar width */
              padding-bottom: 0 !important;
              max-width: calc(100vw - 280px);
            }
          }
        `}</style>
      </body>
    </html>
  );
}
