import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Akshit W",
  description: "Portfolio website developed with nextJS",
  icons: {
    icon: 'favicon.ico',
    apple: 'favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} antialiased ${fredoka.className} max-w-full`}
      >
        <div className="flex flex-col overflow-x-clip">
          <Navbar />
          <main className="flex flex-grow flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
