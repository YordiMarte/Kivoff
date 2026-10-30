import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { SiteBackground } from "@/components/layout/site-background";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { Footer } from "@/components/sections/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <SiteBackground />
        <Navbar />
        <div className="fle-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}