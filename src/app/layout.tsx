import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FloatingContact } from "@/components/FloatingContact";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pathik Impex | Premium Quartz Surface Portfolio",
  description:
    "Pathik Impex presents a curated Advantis Quartz surface portfolio with private quotation support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-50 text-neutral-950">
        <SiteHeader />
        {children}
        <FloatingContact />
        <footer className="border-t border-stone-200 bg-neutral-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_1fr_auto]">
            <div>
              <p className="text-xl font-semibold">Pathik Impex</p>
              <p className="mt-3 max-w-md leading-7 text-stone-300">
                A curated quartz surface portfolio with clear product communication and private quotation follow-up.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-stone-300">
              <Link href="/about" className="hover:text-white">About us</Link>
              <Link href="/categories" className="hover:text-white">Series</Link>
              <Link href="/products" className="hover:text-white">Products</Link>
              <Link href="/inquiry" className="hover:text-white">Product inquiry</Link>
            </div>
            <Link
              href="/inquiry"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-neutral-950 hover:bg-stone-100"
            >
              Request Quote
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
