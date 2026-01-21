import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Basic Metadata
  title: {
    default: "GitHub Repo Contribution Analytics - Repository Insights & Statistics | by 152",
    template: "%s | GitHub Contribution Analytics"
  },
  description: "Analyze GitHub repository contributions with detailed insights. View contributor statistics, merged pull requests, commit history, and comprehensive analytics for any GitHub repository.",
  
  // Open Graph / Social Media Metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://repostats.geetasystems.co.in",
    siteName: "GitHub Repo Contribution Analytics | by 152",
    title: "GitHub Repo Contribution Analytics - Repository Insights & Statistics | by 152",
    description: "Comprehensive GitHub repository analytics tool. Track contributions, analyze pull requests, visualize commit patterns, and gain insights into your project's development activity.",
    images: [
      {
        url: "https://repostats.geetasystems.co.in/repostats.png",
        width: 1200,
        height: 630,
        alt: "GitHub Contribution Analytics Dashboard",
      },
    ],
  },
  
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "GitHub Repo Contribution Analytics - Repository Insights",
    description: "Analyze GitHub contributions, track merged pr, and visualize repository statistics with comprehensive analytics tools",
    images: ["https://repostats.geetasystems.co.in/repostats.png"],
    creator: "@githubcontrib",
    site: "@githubcontrib",
  },
  
  // Additional Metadata
  keywords: [
    "repo stats",
    "repostats",
    "repo 152",
    "hy152",
    "github analytics",
    "contribution statistics",
    "repository insights",
    "commit analysis",
    "pull request tracking",
    "github contributors",
    "code statistics",
    "developer analytics",
    "github metrics",
    "open source analytics",
    "repository dashboard",
    "github api",
    "contribution graphs",
    "developer insights",
    "project analytics"
  ],
  authors: [
    { name: "Harsh Yadav", url: "https://repostats.geetasystems.co.in" },
  ],
  creator: "GitHub Contrib Stats",
  publisher: "GitHub Contrib Stats",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Robots Meta Tag
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
  
  // Verification Tags (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
  },
  
  // Viewport for mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Canonical URL
  metadataBase: new URL("https://repostats.geetasystems.co.in"),
  
  // Additional Tags
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  
  // App Links
  appLinks: {
    web: {
      url: "https://repostats.geetasystems.co.in",
      should_fallback: true,
    },
  },
  
  // Category
  category: "developer tools",
  
  // Color Scheme
  colorScheme: "dark",
  
  // Theme Color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen`}
      >        
        <Header/>
        <main className="relative z-10">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}