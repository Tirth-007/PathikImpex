import Image from "next/image";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/data/products";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const selectedCategory = category && categories.some((item) => item.name === category)
    ? category
    : undefined;
  const visibleCategories = selectedCategory
    ? categories.filter((item) => item.name === selectedCategory)
    : categories;
  const visibleProducts = getProductsByCategory(selectedCategory);

  return (
    <main className="bg-[#f7f3ed]">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#997332]">
              Surface portfolio
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-tight text-neutral-950 md:text-6xl">
              A calmer way to shortlist quartz finishes.
            </h1>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-xl leading-7 text-neutral-600">
              Browse by series, keep the shortlist simple, and request private details only for the finishes that matter to your project.
            </p>
            <Link
              href="/inquiry"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Request a Private Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Link
            href="/products"
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${!selectedCategory
              ? "border-neutral-950 bg-neutral-950 text-white"
              : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-950"
              }`}
          >
            All Series
          </Link>
          {categories.map((item) => (
            <Link
              key={item.name}
              href={`/products?category=${encodeURIComponent(item.name)}`}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${selectedCategory === item.name
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-950"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="space-y-20">
          {visibleCategories.map((series) => {
            const seriesProducts = getProductsByCategory(series.name);

            return (
              <section
                key={series.name}
                className="border-t border-neutral-300 pt-10"
              >
                <div className="overflow-hidden">
                  <Image
                    src={series.image}
                    alt={`${series.name} quartz finishes`}
                    width={1800}
                    height={900}
                    className="h-[48vh] min-h-[340px] w-full object-cover"
                  />
                </div>

                <div className="mx-auto grid max-w-7xl gap-8 px-5 pt-7 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8c77f]">
                      {series.products.length} finishes
                    </p>
                    <h2 className="mt-2 text-4xl font-medium text-neutral-950">{series.name}</h2>
                    <p className="mt-4 max-w-lg leading-7 text-neutral-600">{series.buyerValue}</p>
                  </div>

                  <div className="divide-y divide-neutral-200">
                    {seriesProducts.map((product) => (
                      <div
                        key={product.id}
                        className="grid gap-4 py-5 md:grid-cols-[1fr_auto] md:items-center"
                      >
                        <div>
                          <h3 className="text-xl font-medium text-neutral-950">{product.name}</h3>
                          <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-600">
                            {product.summary}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={`/products/${product.id}`}
                            className="inline-flex h-10 items-center justify-center px-1 text-sm font-semibold text-neutral-950 underline-offset-4 transition hover:underline"
                          >
                            Details
                          </Link>
                          <Link
                            href={`/inquiry?product=${product.id}`}
                            className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-950 px-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
                          >
                            Quote
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#997332]">
              {visibleProducts.length} finishes visible
            </p>
            <h2 className="mt-3 text-3xl font-medium text-neutral-950">
              Need a finish recommendation?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              Send project notes and the team can help narrow the collection before a formal quotation.
            </p>
          </div>
          <Link
            href="/inquiry"
            className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Contact the Team
          </Link>
        </div>
      </section>
    </main>
  );
}
