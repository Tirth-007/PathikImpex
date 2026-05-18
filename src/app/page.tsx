import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-10 md:grid-cols-[1fr_0.85fr]">
          <div className="max-w-3xl space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Indian export sourcing partner
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] text-neutral-950 md:text-7xl">
              Reliable supply for global buyers.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              Pathik Impex helps importers source agriculture, chemicals, marble, and granite products from India with clear communication, export documentation, and practical shipment coordination.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-6 font-semibold text-white hover:bg-neutral-800"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-stone-300 px-6 font-semibold text-neutral-950 hover:bg-stone-100"
              >
                Request Quote
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <Image
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80"
              alt="Export cargo containers prepared for shipment"
              width={1200}
              height={900}
              className="aspect-[4/3] h-full w-full rounded-lg object-cover"
            />
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                <p className="text-2xl font-semibold">3</p>
                <p className="mt-1 text-xs font-medium text-neutral-600">Core categories</p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                <p className="text-2xl font-semibold">9</p>
                <p className="mt-1 text-xs font-medium text-neutral-600">Listed products</p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                <p className="text-2xl font-semibold">Email</p>
                <p className="mt-1 text-xs font-medium text-neutral-600">Fast follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Categories
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-950">Source by business need</h2>
          </div>
          <Link href="/products" className="font-semibold text-neutral-950 underline-offset-4 hover:underline">
            Browse full catalog
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-white"
            >
              <Image
                src={category.image}
                alt={`${category.name} category`}
                width={1200}
                height={720}
                className="aspect-[5/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-semibold text-neutral-950">{category.name}</h3>
                <p className="leading-6 text-neutral-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Featured products
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-950">Common export inquiries</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group overflow-hidden rounded-lg border border-stone-200 bg-stone-50"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="line-clamp-2 leading-6 text-neutral-600">{product.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            How inquiries work
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-950">Simple now, scalable later</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["1", "Buyer sends product requirement."],
            ["2", "Inquiry reaches the sales inbox through Brevo."],
            ["3", "Follow-up continues directly by email."],
          ].map(([step, text]) => (
            <div key={step} className="rounded-lg border border-stone-200 bg-white p-5">
              <p className="text-sm font-semibold text-emerald-700">Step {step}</p>
              <p className="mt-3 leading-6 text-neutral-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
