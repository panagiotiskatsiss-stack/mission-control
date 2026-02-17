import type { Metadata } from "next";
import { Space_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-display",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mission Control - Hermes",
  description: "Autonomous business automation dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${ibmPlexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
