import type { Metadata, Viewport } from "next";
import { Geist_Mono, Outfit, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1c1917",
};

export const metadata: Metadata = {
  title: "Fishtechy — Measuring Fish Reinvented",
  description:
    "Fishtechy uses AI-powered measurement technology to accurately measure fish on your phone. Available for iOS and Android.",
  keywords: ["fish measurement", "fishing app", "AI fish measurement", "fishtechy", "fishing technology"],
  openGraph: {
    title: "Fishtechy — Measuring Fish Reinvented",
    description:
      "AI-powered fish measurement technology. Available for iOS and Android.",
    type: "website",
    siteName: "Fishtechy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fishtechy — Measuring Fish Reinvented",
    description:
      "AI-powered fish measurement technology. Available for iOS and Android.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${poppins.variable} ${roboto.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
