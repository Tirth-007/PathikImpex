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
    const visibleProducts = getProductsByCategory(selectedCategory);

    return (
        <main>
            <section className="border-b border-stone-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-14">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        Product catalog
                    </p>
                    <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
                                Products ready for serious sourcing conversations.
                            </h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
                                Review available categories, MOQ guidance, origin, and applications before submitting a requirement for pricing and documentation follow-up.
                            </p>
                        </div>
                        <Link
                            href="/inquiry"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-6 font-semibold text-white hover:bg-neutral-800"
                        >
                            Submit Requirement
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-8">
                <div className="flex flex-wrap gap-2">
                    <Link
                        href="/products"
                        className={`rounded-lg border px-4 py-2 text-sm font-semibold ${!selectedCategory
                            ? "border-neutral-950 bg-neutral-950 text-white"
                            : "border-stone-300 bg-white text-neutral-700 hover:border-neutral-950"
                            }`}
                    >
                        All Products
                    </Link>
                    {categories.map((item) => (
                        <Link
                            key={item.name}
                            href={`/products?category=${encodeURIComponent(item.name)}`}
                            className={`rounded-lg border px-4 py-2 text-sm font-semibold ${selectedCategory === item.name
                                ? "border-neutral-950 bg-neutral-950 text-white"
                                : "border-stone-300 bg-white text-neutral-700 hover:border-neutral-950"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-16">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {visibleProducts.map((product) => (
                        <article
                            key={product.id}
                            className="overflow-hidden rounded-lg border border-stone-200 bg-white"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={1200}
                                height={900}
                                className="aspect-[4/3] w-full object-cover"
                            />
                            <div className="space-y-4 p-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                                        {product.category}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                                        {product.name}
                                    </h2>
                                </div>
                                <p className="leading-6 text-neutral-600">{product.summary}</p>
                                <dl className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="rounded-lg bg-stone-50 p-3">
                                        <dt className="font-semibold text-neutral-950">MOQ</dt>
                                        <dd className="mt-1 text-neutral-600">{product.moq}</dd>
                                    </div>
                                    <div className="rounded-lg bg-stone-50 p-3">
                                        <dt className="font-semibold text-neutral-950">Origin</dt>
                                        <dd className="mt-1 text-neutral-600">{product.origin}</dd>
                                    </div>
                                </dl>
                                <div className="flex gap-3">
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="inline-flex h-11 flex-1 items-center justify-center rounded-lg border border-stone-300 px-4 text-sm font-semibold text-neutral-950 hover:bg-stone-100"
                                    >
                                        Details
                                    </Link>
                                    <Link
                                        href={`/inquiry?product=${product.id}`}
                                        className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-neutral-950 px-4 text-sm font-semibold text-white hover:bg-neutral-800"
                                    >
                                        Inquiry
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
