import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AdSenseScript from "@/components/AdSenseScript";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        {children}
        <AdSenseScript pId="ca-pub-3156356414560763" />
      </body>
    </html>
  );
}
