import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Contact Manager",
    template: "%s · Contact Manager",
  },
  description: "Manage contacts with a simple Next.js app.",
  openGraph: {
    title: "Contact Manager",
    description: "Manage contacts with a simple Next.js app.",
    url: "/",
    siteName: "Contact Manager",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Manager",
    description: "Manage contacts with a simple Next.js app.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen  bg-gray-50">
          <Navbar/>
          <main className="container mx-auto px-4 py-8">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
