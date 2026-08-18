"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", match: (pathname: string) => pathname === "/" },
  { href: "/about", label: "About", match: (pathname: string) => pathname === "/about" },
  {
    href: "/categories",
    label: "Series",
    match: (pathname: string) => pathname.startsWith("/categories"),
  },
  {
    href: "/products",
    label: "Products",
    match: (pathname: string) => pathname.startsWith("/products"),
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const inquiryActive = pathname === "/inquiry" || pathname === "/contact";

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="leading-tight">
          <span className="block text-lg font-semibold tracking-wide text-neutral-950">
            Pathik Impex
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-[#997332] sm:block">
            Quartz surfaces
          </span>
        </Link>

        <div className="hidden items-center gap-2 text-sm font-semibold md:flex">
          {navItems.map((item) => {
            const active = item.match(pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-2 transition ${active
                  ? "text-neutral-950"
                  : "text-neutral-500 hover:text-neutral-950"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/inquiry"
          aria-current={inquiryActive ? "page" : undefined}
          className={`inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition ${inquiryActive
            ? "bg-[#997332] text-white hover:bg-[#7d5d29]"
            : "bg-neutral-950 text-white hover:bg-neutral-800"
            }`}
        >
          Request Quote
        </Link>
      </nav>
    </header>
  );
}
