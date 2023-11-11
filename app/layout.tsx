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
      <body className={`${GeistSans.variable}`}>
        {/* <div className="w-52 h-52 fixed top-20 right-20 blur-2xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-10 rounded-full -z-10" />
        <div className="w-52 h-52 fixed bottom-20 left-20 blur-2xl bg-gradient-to-r from-pink-500 to-indigo-500 opacity-10 rounded-full -z-10" /> */}
        {children}
      </body>
    </html>
  );
}
