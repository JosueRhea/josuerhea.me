import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font";

export const metadata: Metadata = {
  title: "Josue A. - @josuerhea",
  description: "A software engineer that makes stuff on the web thingy.",
  metadataBase: new URL("https://josuerhea.me"),
  openGraph: {
    title: "Josue A. - @josuerhea",
    description: "Just a software engineer.",
    url: "https://josuerhea.me",
    siteName: "Josue A. - @josuerhea",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Josue A.",
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
      <body className={`${GeistSans.variable}`}>{children}</body>
    </html>
  );
}
