import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
    default: "GitHub Contribution Analytics - Repository Insights & Statistics",
    template: "%s | GitHub Contribution Analytics"
  },
  description: "Analyze GitHub repository contributions with detailed insights. View contributor statistics, merged pull requests, commit history, and comprehensive analytics for any GitHub repository.",
  
  // Open Graph / Social Media Metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github-contrib-stats.app",
    siteName: "GitHub Contribution Analytics",
    title: "GitHub Contribution Analytics - Repository Insights & Statistics",
    description: "Comprehensive GitHub repository analytics tool. Track contributions, analyze pull requests, visualize commit patterns, and gain insights into your project's development activity.",
    images: [
      {
        url: "https://github-contrib-stats.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "GitHub Contribution Analytics Dashboard",
      },
    ],
  },
  
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "GitHub Contribution Analytics - Repository Insights",
    description: "Analyze GitHub contributions, track pull requests, and visualize repository statistics with comprehensive analytics tools",
    images: ["https://github-contrib-stats.app/og-image.png"],
    creator: "@githubcontrib",
    site: "@githubcontrib",
  },
  
  // Additional Metadata
  keywords: [
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
    { name: "GitHub Contrib Stats Team", url: "https://github-contrib-stats.app" },
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
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  
  // Viewport for mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Canonical URL
  metadataBase: new URL("https://github-contrib-stats.app"),
  
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
      url: "https://github-contrib-stats.app",
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
        itemScope
        itemType="https://schema.org/WebPage"
      >        
        <Header/>
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Footer with additional SEO context */}
        <footer className="relative z-10 mt-16 border-t border-white/10 backdrop-blur-sm bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} GitHub Contribution Analytics. Powered by GitHub API.</p>
              <p className="mt-2">
                Analyze repository contributions, track development activity, and gain insights into open source projects.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}