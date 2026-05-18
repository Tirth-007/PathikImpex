import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export default function CategoriesPage() {
  return (
    <main>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Trade categories
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
            Product categories buyers can understand quickly.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Each category is positioned for importers, distributors, project buyers, and domestic procurement teams who need a clear starting point.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6">
          {categories.map((category) => (
            <article
              key={category.name}
              className="grid overflow-hidden rounded-lg border border-stone-200 bg-white lg:grid-cols-[0.8fr_1.2fr]"
            >
              <Image
                src={category.image}
                alt={`${category.name} sourcing category`}
                width={1200}
                height={800}
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <div className="flex flex-col justify-center gap-5 p-6 md:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    {category.name}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
                    {category.description}
                  </h2>
                  <p className="mt-4 leading-7 text-neutral-600">{category.buyerValue}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-neutral-700"
                    >
                      {product}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/products?category=${encodeURIComponent(category.name)}`}
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-950 px-5 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    View Products
                  </Link>
                  <Link
                    href={`/inquiry?category=${category.slug}`}
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-stone-300 px-5 text-sm font-semibold text-neutral-950 hover:bg-stone-100"
                  >
                    Ask About {category.name}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
