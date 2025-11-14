import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../public/fonts/Geist/webfonts/Geist-Regular.woff2", // Regular weight
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Geist/webfonts/Geist-Bold.woff2", // Bold weight
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono/webfonts/GeistMono-Regular.woff2", // Adjust path/filename
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default : "ProfileList",
    template: "%s | NinjaList",
  },
  description: "Your comprehensive Listing of Ninjas",
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
        <div className="content">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
