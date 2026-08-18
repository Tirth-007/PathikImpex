import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/data/products";

const trustSignals = [
  "Curated quartz portfolio",
  "Private quotation follow-up",
  "Specification-led conversation",
];

export default function Home() {
  const showcaseSeries = categories.slice(0, 4);
  const featuredProducts = products.slice(0, 6);

  return (
    <main className="bg-[#f7f3ed]">
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <Image
          src="/advantis/page-25.jpg"
          alt="Premium black quartz bar surface"
          width={1600}
          height={1000}
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,10,10,0.92),rgba(10,10,10,0.58),rgba(10,10,10,0.12))]" />
        <div className="absolute left-0 top-24 h-px w-full bg-white/15" />

        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-rise max-w-3xl space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6b46d]">
              Pathik Impex
            </p>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] md:text-7xl">
              Premium quartz surfaces for spaces that need presence.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-stone-200">
              A refined Advantis Quartz portfolio for buyers, designers, and project teams who want to compare finishes first and discuss details privately.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/inquiry"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-[#ead8b5]"
              >
                Request a Private Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View Surface Portfolio
              </Link>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="animate-float w-full max-w-sm border-l border-white/25 pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d6b46d]">
                Selected finish
              </p>
              <h2 className="mt-3 text-3xl font-medium">Black Sparkle</h2>
              <p className="mt-4 leading-7 text-stone-200">
                A bold surface choice for bars, statement counters, and high-contrast interiors.
              </p>
              <div className="mt-6 flex gap-5 text-sm text-stone-200">
                <span>Celestial Series</span>
                <span>Private quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 text-sm font-medium text-neutral-700 md:grid-cols-3">
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b28a3c]" />
              {signal}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#997332]">
              Surface showcase
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-neutral-950">
              A collection shown like a surface should be seen.
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              Each glimpse gives the product room to breathe first, then keeps the commercial conversation separate and easy to act on.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-16">
          {showcaseSeries.map((category, index) => (
            <section key={category.name} className="group">
              <div className="overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.name} quartz surface showcase`}
                  width={1800}
                  height={900}
                  className="h-[52vh] min-h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mx-auto grid max-w-7xl gap-6 px-5 pt-7 md:grid-cols-[0.75fr_1fr_auto] md:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#997332]">
                    Showcase {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-4xl font-medium text-neutral-950">{category.name}</h3>
                </div>
                <p className="max-w-2xl leading-7 text-neutral-600">{category.description}</p>
                <Link
                  href={`/products?category=${encodeURIComponent(category.name)}`}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  View finishes
                </Link>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d6b46d]">
              Finish reel
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight">
              Names to remember, details kept private.
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/inquiry?product=${product.id}`}
                className="group border-t border-white/15 pt-4"
              >
                <span className="block text-lg font-medium">{product.name}</span>
                <span className="mt-1 block text-sm text-stone-400">{product.category}</span>
                <span className="mt-4 block text-sm font-semibold text-[#d6b46d]">
                  Request quote
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 border-t border-neutral-300 pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#997332]">
              Direct contact
            </p>
            <h2 className="mt-3 text-3xl font-medium text-neutral-950">
              Looking for a specific finish or quotation?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
              Send the product name, quantity, finish expectations, and project timeline. The team will continue the conversation privately by email.
            </p>
          </div>
          <Link
            href="/inquiry"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Start Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
