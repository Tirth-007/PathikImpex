import Image from "next/image";
import Link from "next/link";

const strengths = [
  "Clear product communication for first-time and repeat buyers",
  "Series-wise Advantis Quartz catalog for faster color shortlisting",
  "Inquiry details structured around quantity, slab needs, finish, packing, and destination",
  "Email-first follow-up that is simple today and ready for CRM/database growth later",
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              About Pathik Impex
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
              A practical sourcing bridge for quartz surface buyers.
            </h1>
            <p className="text-lg leading-8 text-neutral-600">
              Pathik Impex is presented as a focused import/export partner for buyers who need a direct and professional route to Advantis Quartz surfaces from India. The website is designed to make the first inquiry efficient for both the buyer and the business.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-6 font-semibold text-white hover:bg-neutral-800"
            >
              Discuss a Requirement
            </Link>
          </div>
          <Image
            src="/advantis/page-14.jpg"
            alt="Advantis Quartz interior surface brochure visual"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Operating approach
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
            Built for buyers who compare colors, verify specs, and follow up
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {strengths.map((item) => (
            <div key={item} className="rounded-lg border border-stone-200 bg-white p-5">
              <p className="leading-7 text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-3">
          <Metric value="Domestic" label="Indian buyer and project conversations" />
          <Metric value="International" label="Importer and distributor inquiry handling" />
          <Metric value="Scalable" label="Email now, database and admin later" />
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
      <p className="text-2xl font-semibold text-neutral-950">{value}</p>
      <p className="mt-2 leading-6 text-neutral-600">{label}</p>
    </div>
  );
}
