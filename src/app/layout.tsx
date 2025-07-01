import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawana Lake Camping | Best Tents, Bonfire & Lakeside Campsite",
  description:
    "Experience the best Pawana Lake camping with lakeside tents, bonfire, BBQ, music, and starry nights. Safe & affordable getaway near Pune and Lonavala.",
  keywords: [
    // 🔹 Primary High-Traffic Keywords
    "Pawana Lake camping",
    "camping near Pawna Lake",
    "lakeside camping Maharashtra",
    "Pune camping",
    "Lonavala camping",
    "camping Maharashtra",
    "tent stay near Pune",
    "weekend camping Pune",

    // 🔹 Low-Traffic (Long-Tail & Localized)
    "Pawana Lake campings",
    "Pawana Lake campsite",
    "Pawna lake tents",
    "Pawna lake campsite",
    "best Pawna Lake camps",
    "affordable camping Pawna lake",
    "book tent near Pawna lake",
    "safe camping for couples near Pune",
    "family camping near Lonavala",
    "Pawna lake camping for groups",
    "camping near Pawna lake for couples",
    "overnight camping Pawna Lake",
    "campfire camping Pawna Lake",
    "lakeside tent Pawna Lake booking",
  ],
  metadataBase: new URL("https://www.pawanalakecampsite.in"),
  alternates: {
    canonical: "https://www.pawanalakecampsite.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Pawana Lake Camping",
    description:
      "Book the best camping experience near Pawana Lake with BBQ, sunset views, tents, music, and bonfire. Rated top by couples and families.",
    url: "https://www.pawanalakecampsite.in",
    siteName: "Pawana Lake Camping",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1686090450574-214118216bdc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Lakeside tents at Pawana Lake with bonfire and BBQ",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Lakeside tents at Pawana Lake with bonfire and BBQ",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1686090449928-ecccb85fb0e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Lakeside tents at Pawana Lake with bonfire and BBQ",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawana Lake Camping | Lakeside Tents & Bonfire Getaway",
    description:
      "Affordable and safe lakeside camping near Pawana Lake with BBQ, tents, bonfire & fun games. Book your weekend escape now!",
    images: [
      "https://plus.unsplash.com/premium_photo-1686090450574-214118216bdc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1686090449928-ecccb85fb0e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    site: "@yourtwitterhandle", // optional
  },
  // themeColor: "#10B981", // Tailwind's green-500
  other: {
    whatsapp: "https://wa.me/1234567890", // WhatsApp contact link
    // instagram: "https://instagram.com/yourinstagramhandle", // Replace with your Instagram handle
  },
};

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
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
