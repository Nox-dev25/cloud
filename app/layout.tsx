import "./globals.css";
import type { Metadata } from "next";
import { Lexend, Sora } from "next/font/google";
import ReactLenis from "lenis/react";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Next.js site using Lexend font with black background",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${sora.variable} antialiased`}>
        {/* 👇 Smooth scrolling + required for GSAP ScrollTrigger */}
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
