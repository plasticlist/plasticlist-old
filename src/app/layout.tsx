import type { Metadata } from "next";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "PlasticList",
  description: "Figure out what plastic chemicals are in your food.",
  metadataBase: new URL('https://plasticlist.app/'),
  twitter: {
    card: "summary_large_image",
    title: "PlasticList",
    description: "Find out what plastic chemicals are in your food.",
    creator: "@TheSlavant",
    images: [
      {
        url: "/og-image.png",
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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-sm",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
