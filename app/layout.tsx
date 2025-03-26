import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Mood | Your Intelligent Mood Journal",
  description:
    "AI-Mood is a smart journaling platform that analyzes your entries to track emotional patterns. Gain insights into your mood trends with beautiful visualizations and AI-powered reflection tools.",
  keywords: [
    "AI journal",
    "mood tracker",
    "emotional wellness",
    "mental health app",
    "AI mood analysis",
    "journaling app",
    "mood chart",
    "self-reflection tool",
    "sentiment analysis",
  ],
  authors: [{ name: "AI-Mood" }],
  openGraph: {
    title: "AI-Mood | Your Intelligent Mood Journal",
    description:
      "Track and understand your emotional patterns with AI-powered journaling. AI-Mood analyzes your entries to provide insightful mood visualizations and personal growth tools.",
    type: "website",
    url: "https://ai-mood.co.za/",
    images: [{ url: "https://ai-mood.co.za/ai-mood-og.png" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Mood | Your Intelligent Mood Journal",
    description:
      "Discover your emotional patterns with AI journaling. AI-Mood analyzes your entries to show mood trends and provide meaningful insights for personal growth.",
    images: ["https://ai-mood.co.za/ai-mood-twitter.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://ai-mood.co.za/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
