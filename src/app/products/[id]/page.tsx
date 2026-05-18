import Link from "next/link";
import Image from "next/image";
import { getProductById } from "@/data/products";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">
          Product not found.
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr]">
          <Image
            src={product.image}
            alt={product.name}
            width={1200}
            height={900}
            className="aspect-[4/3] h-full w-full rounded-lg object-cover"
          />
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                {product.category}
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-neutral-950 md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-neutral-600">{product.summary}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                <p className="text-sm font-semibold text-neutral-950">MOQ</p>
                <p className="mt-1 text-neutral-600">{product.moq}</p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                <p className="text-sm font-semibold text-neutral-950">Origin</p>
                <p className="mt-1 text-neutral-600">{product.origin}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${product.id}`}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-6 font-semibold text-white hover:bg-neutral-800"
              >
                Request Quote
              </Link>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-stone-300 px-6 font-semibold text-neutral-950 hover:bg-stone-100"
              >
                More in {product.category}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Product note
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-950">What buyers can expect</h2>
          <p className="mt-5 leading-7 text-neutral-600">{product.details}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="font-semibold text-neutral-950">Applications</h3>
            <ul className="mt-4 space-y-3 text-neutral-600">
              {product.applications.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="font-semibold text-neutral-950">Specifications</h3>
            <ul className="mt-4 space-y-3 text-neutral-600">
              {product.specifications.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
