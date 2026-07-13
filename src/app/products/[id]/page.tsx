import Image from "next/image";
import Link from "next/link";
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
        <div className="border-l-2 border-red-500 bg-red-50 p-6 text-red-700">
          Product not found.
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Image
            src={product.image}
            alt={product.name}
            width={1200}
            height={900}
            className="aspect-[4/3] h-full w-full object-cover"
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
            <div className="grid gap-6 border-y border-neutral-200 py-5 sm:grid-cols-2">
              <Info label="Availability" value={product.moq} />
              <Info label="Quotation" value={product.quotation} />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/inquiry?product=${product.id}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-6 font-semibold text-white hover:bg-neutral-800"
              >
                Request Quote
              </Link>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-6 font-semibold text-neutral-950 hover:bg-stone-100"
              >
                More in {product.category}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Private consultation
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
            What helps the team respond precisely
          </h2>
          <p className="mt-5 leading-7 text-neutral-600">{product.details}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <DetailList title="Applications" items={product.applications} />
          <DetailList title="Specifications" items={product.specifications} />
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-neutral-950">{label}</p>
      <p className="mt-1 text-neutral-600">{value}</p>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-neutral-300 pt-5">
      <h3 className="font-semibold text-neutral-950">{title}</h3>
      <ul className="mt-4 space-y-3 text-neutral-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
