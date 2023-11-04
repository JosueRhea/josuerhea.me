import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font";

export const metadata: Metadata = {
  title: "Josue A. - @josuerhea",
  description: "A software engineer that makes stuff on the web thingy.",
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
