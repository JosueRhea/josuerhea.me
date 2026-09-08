import type { Metadata } from "next";
import "./globals.css";
import { Figtree, JetBrains_Mono } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Josué Alvarenga — Software Engineer",
  description:
    "Software engineer designing and building products for the web and mobile.",
  metadataBase: new URL("https://josuerhea.me"),
  openGraph: {
    title: "Josué Alvarenga — Software Engineer",
    description:
      "Software engineer designing and building products for the web and mobile.",
    url: "https://josuerhea.me",
    siteName: "Josué Alvarenga",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Josué Alvarenga — Software Engineer",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${mono.variable} antialiased selection:bg-foreground selection:text-background`}>
        {children}
      </body>
    </html>
  );
}
