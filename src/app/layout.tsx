import type { Metadata } from "next";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { CSPostHogProvider } from './providers'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "PlasticList",
  description: "Figure out what plastic chemicals are in your food.",
  metadataBase: new URL('https://plasticlist.app/'),
  openGraph: {
    title: "PlasticList",
    description: "Find out what plastic chemicals are in your food.",
    url: "https://plasticlist.app/",
    images: [
      {
        url: "https://plasticlist.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "PlasticList",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlasticList",
    description: "Find out what plastic chemicals are in your food.",
    creator: "@TheSlavant",
    images: [
      {
        url: "https://plasticlist.app/og-image.png",
        alt: "PlasticList",
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <CSPostHogProvider>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
      </CSPostHogProvider>
    </html>
  )
}
