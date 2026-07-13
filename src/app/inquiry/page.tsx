"use client";

import { Suspense, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { categories, getCategoryBySlug, products } from "@/data/products";

export default function InquiryPage() {
    return (
        <Suspense fallback={<InquiryShell />}>
            <InquiryForm />
        </Suspense>
    );
}

function InquiryForm() {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product") || "";
    const categorySlug = searchParams.get("category") || "";
    const category = getCategoryBySlug(categorySlug);

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.currentTarget);
        const selectedProductId = String(formData.get("productId") || "");
        const selectedProduct = products.find((product) => product.id === selectedProductId);

        const payload = {
            name: String(formData.get("name") || ""),
            company: String(formData.get("company") || ""),
            email: String(formData.get("email") || ""),
            country: String(formData.get("country") || ""),
            message: String(formData.get("message") || ""),
            productId: selectedProduct?.id || null,
            productName: selectedProduct?.name || category?.name || null,
        };

        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            let data;

            try {
                data = await res.json();
            } catch {
                console.error("Invalid JSON response");
                setStatus("error");
                return;
            }

            if (res.ok && data.success) {
                setStatus("sent");
                formRef.current?.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <main>
            <section className="border-b border-stone-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-14">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        Product inquiry
                    </p>
                    <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
                        Tell us which quartz surface you want to source.
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
                        Share product name, destination, quantity, slab or finish expectations, packing needs, and timeline. The business receives this through Formspree and can continue the conversation by email.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.75fr_1.25fr]">
                <aside className="space-y-5">
                    <div className="rounded-lg border border-stone-200 bg-white p-5">
                        <h2 className="text-xl font-semibold text-neutral-950">What helps us reply faster</h2>
                        <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-600">
                            <li>- Product name or quartz series</li>
                            <li>- Required quantity and slab expectations</li>
                            <li>- Destination country or port</li>
                            <li>- Packing, finish, processing, or documentation needs</li>
                        </ul>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-white p-5">
                        <h2 className="text-xl font-semibold text-neutral-950">Available categories</h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {categories.map((item) => (
                                <span
                                    key={item.name}
                                    className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-neutral-700"
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
                        alt="Business team reviewing quartz product inquiry"
                        width={1000}
                        height={750}
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                    />
                </aside>

                <form
                    ref={formRef}
                    action="/api/inquiry"
                    method="post"
                    onSubmit={handleSubmit}
                    className="rounded-lg border border-stone-200 bg-white p-5 md:p-7"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input label="Name" name="name" placeholder="Your name" />
                        <Input label="Company" name="company" placeholder="Company name" />
                        <Input label="Email" name="email" placeholder="name@company.com" type="email" />
                        <Input label="Country" name="country" placeholder="Destination country" />

                        <label className="space-y-2 md:col-span-2">
                            <span className="text-sm font-semibold text-neutral-950">Product</span>
                            <select
                                name="productId"
                                defaultValue={productId}
                                className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 outline-none focus:border-neutral-950"
                            >
                                <option value="">General or series inquiry</option>
                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name} - {product.category}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <label className="mt-4 block space-y-2">
                        <span className="text-sm font-semibold text-neutral-950">Requirement</span>
                        <textarea
                            name="message"
                            defaultValue={category ? `Interested in ${category.name}. ` : ""}
                            placeholder="Quantity, slab size or thickness, finish, packing, destination port, timeline, and any quality requirements"
                            className="min-h-44 w-full rounded-lg border border-stone-300 p-4 outline-none focus:border-neutral-950"
                            required
                        />
                    </label>

                    {status === "sent" && (
                        <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm font-medium text-emerald-800">
                            Inquiry sent successfully. The team will reply by email.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
                            Something went wrong. Please check the Formspree configuration and try again.
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-5 inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-6 font-semibold text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-500"
                    >
                        {status === "sending" ? "Sending..." : "Submit Inquiry"}
                    </button>
                </form>
            </section>
        </main>
    );
}

function Input({
    label,
    name,
    placeholder,
    type = "text",
}: {
    label: string;
    name: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <label className="space-y-2">
            <span className="text-sm font-semibold text-neutral-950">{label}</span>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className="h-12 w-full rounded-lg border border-stone-300 px-4 outline-none focus:border-neutral-950"
                required={name !== "company"}
            />
        </label>
    );
}

function InquiryShell() {
    return (
        <main className="mx-auto max-w-7xl px-5 py-12">
            <div className="rounded-lg border border-stone-200 bg-white p-6">
                <h1 className="text-3xl font-semibold text-neutral-950">Product inquiry</h1>
            </div>
        </main>
    );
}
