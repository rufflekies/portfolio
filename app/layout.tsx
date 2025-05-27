import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import "./globals.css";
import type React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.title,
    template: `%s | ${DATA.title}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.title}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/thumbnails/hello-world.png`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="600x600" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
        <link rel="icon" type="image/svg+xml" href="/avatar.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-none"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TooltipProvider delayDuration={0}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
