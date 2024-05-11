import type { Metadata } from "next";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Plastic Chemicals Tests",
  description: "We are finding out how much plastic US consumers eat every day.",
  metadataBase: new URL('https://plasticlist.vercel.app/'),
  openGraph: {
    title: "Plastic Chemicals Tests",
    description: "We are finding out how much plastic US consumers eat every day.",
    url: "https://plasticlist.vercel.app/",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Plastic Chemicals Tests",
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
