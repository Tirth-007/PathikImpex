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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/categories", label: "Categories" },
  { href: "/products", label: "Products" },
];

export const metadata: Metadata = {
  title: "Pathik Impex | Import Export Sourcing Partner",
  description:
    "Pathik Impex supports domestic and international buyers sourcing Indian agriculture, chemicals, marble, and granite products.",
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
        <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link href="/" className="leading-tight">
              <span className="block text-lg font-semibold tracking-wide text-neutral-950">
                Pathik Impex
              </span>
              <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-emerald-700 sm:block">
                Import Export
              </span>
            </Link>
            <div className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-neutral-950">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/inquiry"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-neutral-950 px-4 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Send Inquiry
            </Link>
          </nav>
        </header>
        {children}
        <footer className="border-t border-stone-200 bg-neutral-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_1fr_auto]">
            <div>
              <p className="text-xl font-semibold">Pathik Impex</p>
              <p className="mt-3 max-w-md leading-7 text-stone-300">
                Indian sourcing and export coordination for buyers who need clear product communication and responsive follow-up.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-stone-300">
              <Link href="/about" className="hover:text-white">About us</Link>
              <Link href="/categories" className="hover:text-white">Categories</Link>
              <Link href="/products" className="hover:text-white">Products</Link>
              <Link href="/inquiry" className="hover:text-white">Product inquiry</Link>
            </div>
            <Link
              href="/inquiry"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-neutral-950 hover:bg-stone-100"
            >
              Start Sourcing
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
