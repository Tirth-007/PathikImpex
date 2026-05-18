import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Pathik Impex | Indian Export Partner",
  description:
    "Pathik Impex connects global buyers with Indian agriculture, chemical, marble, and granite products.",
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
        <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link href="/" className="font-semibold tracking-wide text-neutral-950">
              Pathik Impex
            </Link>
            <div className="flex items-center gap-5 text-sm font-medium text-neutral-600">
              <Link href="/products" className="hover:text-neutral-950">
                Products
              </Link>
              <Link href="/contact" className="hover:text-neutral-950">
                Inquiry
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-sm text-neutral-600 md:grid-cols-[1fr_auto]">
            <div>
              <p className="font-semibold text-neutral-950">Pathik Impex</p>
              <p className="mt-2 max-w-2xl">
                Export sourcing for agriculture, chemicals, marble, and granite products from India.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-950 px-5 font-semibold text-white hover:bg-neutral-800"
            >
              Send Inquiry
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
