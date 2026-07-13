import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/data/products";

const tradePillars = [
  {
    title: "Buyer-first communication",
    text: "Requirements are captured clearly so the first follow-up can focus on quantity, specification, packing, and destination.",
  },
  {
    title: "Export-ready categories",
    text: "Advantis Quartz series are presented with buyer notes, applications, origin, and product visuals from the brochure.",
  },
  {
    title: "Email-led follow-up",
    text: "The current setup keeps inquiries in the client inbox, making domestic and international buyer conversations easy to continue.",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Quartz surface import export partner
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] text-neutral-950 md:text-7xl">
              Source Advantis Quartz surfaces with confidence.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              Pathik Impex helps domestic and international buyers review Advantis Quartz colors, compare surface series, and start professional quotation conversations for interior and project requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/categories"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-6 font-semibold text-white hover:bg-neutral-800"
              >
                Explore Categories
              </Link>
              <Link
                href="/inquiry"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-stone-300 px-6 font-semibold text-neutral-950 hover:bg-stone-100"
              >
                Submit Requirement
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Image
              src="/advantis/page-08.jpg"
              alt="Advantis Quartz luxe surface brochure visual"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <div className="grid grid-cols-3 gap-3 text-center">
              <Stat value={String(categories.length)} label="Quartz series" />
              <Stat value={String(products.length)} label="Products listed" />
              <Stat value="Email" label="Buyer follow-up" />
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
            <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
              Built for trade conversations
            </h2>
          </div>
          <Link href="/products" className="font-semibold text-neutral-950 underline-offset-4 hover:underline">
            View all products
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-white"
            >
              <Image
                src={category.image}
                alt={`${category.name} quartz surfaces`}
                width={1200}
                height={720}
                className="aspect-[5/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold text-neutral-950">{category.name}</h3>
                <p className="leading-6 text-neutral-600">{category.buyerValue}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Sourcing discipline
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
              Professional enough for surface buyers
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              Buyers should immediately understand the surface range, shortlist colors by series, and know what information is needed for a clean quotation follow-up.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {tradePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                <h3 className="font-semibold text-neutral-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Product snapshot
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-950">Featured quartz surfaces</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-white"
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
                <h3 className="text-xl font-semibold text-neutral-950">{product.name}</h3>
                <p className="leading-6 text-neutral-600">{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
      <p className="text-2xl font-semibold text-neutral-950">{value}</p>
      <p className="mt-1 text-xs font-medium text-neutral-600">{label}</p>
    </div>
  );
}
