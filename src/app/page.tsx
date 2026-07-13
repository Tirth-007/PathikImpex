import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/data/products";

const trustSignals = [
  "Curated quartz portfolio",
  "Private quotation follow-up",
  "Specification-led conversation",
];

export default function Home() {
  const featuredSeries = categories.slice(0, 4);
  const featuredProducts = products.slice(0, 5);

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
            <div className="animate-float w-full max-w-sm border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d6b46d]">
                Selected finish
              </p>
              <h2 className="mt-3 text-3xl font-medium">Black Sparkle</h2>
              <p className="mt-4 leading-7 text-stone-200">
                A bold surface choice for bars, statement counters, and high-contrast interiors.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-stone-200">
                <span className="border border-white/15 px-3 py-2">Celestial Series</span>
                <span className="border border-white/15 px-3 py-2">Private quote</span>
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

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#997332]">
              Quiet confidence
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-neutral-950">
              Browse less noise. Shortlist better surfaces.
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              The site now keeps the public experience intentionally light: series, surface names, visual direction, and a direct path to discuss requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredSeries.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="group bg-white"
              >
                <div className="overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.name} quartz surfaces`}
                    width={1200}
                    height={800}
                    className="aspect-[5/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="border-x border-b border-neutral-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#997332]">
                    {category.products.length} finishes
                  </p>
                  <h3 className="mt-2 text-2xl font-medium text-neutral-950">{category.name}</h3>
                  <p className="mt-3 leading-6 text-neutral-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d6b46d]">
              Buyer path
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight">
              See enough to decide. Ask when it matters.
            </h2>
          </div>
          <div className="grid gap-3">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/inquiry?product=${product.id}`}
                className="group flex items-center justify-between border-b border-white/15 py-4"
              >
                <span>
                  <span className="block text-lg font-medium">{product.name}</span>
                  <span className="mt-1 block text-sm text-stone-400">{product.category}</span>
                </span>
                <span className="text-sm font-semibold text-[#d6b46d] transition group-hover:translate-x-1">
                  Request quote
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 border border-neutral-200 bg-white p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
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
