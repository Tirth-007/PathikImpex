import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export default function CategoriesPage() {
  return (
    <main>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Quartz series
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
            Quartz series made simple to compare.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Each series gives buyers a clear visual direction before moving into private finish, quantity, and quotation discussions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="space-y-16">
          {categories.map((category) => (
            <section
              key={category.name}
              className="grid gap-8 border-t border-neutral-300 pt-10 lg:grid-cols-[0.75fr_1.25fr]"
            >
              <Image
                src={category.image}
                alt={`${category.name} quartz series`}
                width={1200}
                height={800}
                className="aspect-[16/9] h-full w-full object-cover"
              />
              <div className="flex flex-col justify-center gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    {category.name}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
                    {category.description}
                  </h2>
                  <p className="mt-4 leading-7 text-neutral-600">{category.buyerValue}</p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-neutral-700">
                  {category.products.map((product) => (
                    <Link
                      key={product}
                      href={`/products?category=${encodeURIComponent(category.name)}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/products?category=${encodeURIComponent(category.name)}`}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    View Products
                  </Link>
                  <Link
                    href={`/inquiry?category=${category.slug}`}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-300 px-5 text-sm font-semibold text-neutral-950 hover:bg-stone-100"
                  >
                    Ask About {category.name}
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
