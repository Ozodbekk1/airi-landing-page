/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIRI — Artificial Intelligence Research Institute of Uzbekistan",
  description:
    "AIRI is a national research institute advancing artificial intelligence and digital technologies in Uzbekistan.",
  keywords: [
    "AIRI",
    "Artificial Intelligence Uzbekistan",
    "Digital Technologies",
    "AI Research Institute",
  ],
  openGraph: {
    title: "AIRI Uzbekistan",
    description:
      "Advancing Artificial Intelligence and Digital Technologies in Uzbekistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-[#0B0F1A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
