import "./globals.css"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"

export const metadata: Metadata = {
  title: "Kivoff",
  description: "site",
  icons: {
    icon: "/KivoffIco.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
