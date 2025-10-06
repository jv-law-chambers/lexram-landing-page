import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LexRam.ai | AI Legal Research Platform for Indian Law",
  description:
    "AI-powered legal research platform with grounded responses from Supreme Court, High Courts & statutes. 9 Indian languages. Free beta access. Made for Indian law.",
  keywords: [
    "AI legal research",
    "Indian law database",
    "Supreme Court search",
    "legal AI India",
    "multilingual legal platform",
  ],
  openGraph: {
    title: "LexRam.ai",
    description:
      "AI-powered legal research platform exclusively for Indian law",
    url: "https://lexram.ai",
    siteName: "LexRam.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LexRam.ai",
    description:
      "AI-powered legal research platform exclusively for Indian law",
    url: "https://lexram.ai",
    applicationCategory: "Legal Technology",
    operatingSystem: "Web Browser",
  };


  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        {/* ✅ JSON-LD Schema Script (Safe and SEO-friendly) */}
        <script
          id="lexram-schema"
          type="application/ld+json"
        >
          {JSON.stringify(schemaData)}
        </script>
      </head>
        <body>
          <ThemeProvider
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
