// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Tell Next.js to load Inter and make it available as a CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // matches your CSS variable name
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Aondre Franklin — Senior Platform Engineer",
  description: "Platform engineer with 5 years at Bank of America.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // TypeScript: children can be any React content
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
