"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

export default function ContactPage() {
    return (
        <Suspense fallback={<ContactShell />}>
            <ContactForm />
        </Suspense>
    );
}

function ContactForm() {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product") || "";

    const [selectedProductId, setSelectedProductId] = useState(productId);
    const [form, setForm] = useState({
        name: "",
        email: "",
        country: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const selectedProduct = products.find((product) => product.id === selectedProductId);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const payload = {
            ...form,
            productId: selectedProduct?.id || null,
            productName: selectedProduct?.name || null,
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
                setForm({
                    name: "",
                    email: "",
                    country: "",
                    message: "",
                });
                setSelectedProductId("");
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
                <div className="mx-auto max-w-7xl px-5 py-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        Buyer inquiry
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold text-neutral-950 md:text-5xl">
                        Send your requirement
                    </h1>
                    <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                        Share the product, destination, quantity, and packing details. The sales team can continue the conversation directly by email.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[0.75fr_1.25fr]">
                <aside className="space-y-5">
                    <div className="rounded-lg border border-stone-200 bg-white p-5">
                        <h2 className="text-xl font-semibold text-neutral-950">Inquiry flow</h2>
                        <div className="mt-5 space-y-4 text-sm leading-6 text-neutral-600">
                            <p>
                                Website inquiries are delivered through Brevo to the business inbox.
                            </p>
                            <p>
                                Buyer replies stay in email, so the client can manage follow-up without a dashboard for now.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white">
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
                            alt="Business team reviewing export inquiry"
                            width={1000}
                            height={750}
                            className="aspect-[4/3] w-full object-cover"
                        />
                    </div>
                </aside>

                <form onSubmit={handleSubmit} className="rounded-lg border border-stone-200 bg-white p-5 md:p-7">
                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-neutral-950">Name</span>
                            <input
                                name="name"
                                value={form.name}
                                placeholder="Your name"
                                className="h-12 w-full rounded-lg border border-stone-300 px-4 outline-none focus:border-neutral-950"
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-neutral-950">Email</span>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                placeholder="name@company.com"
                                className="h-12 w-full rounded-lg border border-stone-300 px-4 outline-none focus:border-neutral-950"
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-neutral-950">Country</span>
                            <input
                                name="country"
                                value={form.country}
                                placeholder="Destination country"
                                className="h-12 w-full rounded-lg border border-stone-300 px-4 outline-none focus:border-neutral-950"
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-neutral-950">Product</span>
                            <select
                                value={selectedProductId}
                                className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 outline-none focus:border-neutral-950"
                                onChange={(event) => setSelectedProductId(event.target.value)}
                            >
                                <option value="">General inquiry</option>
                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <label className="mt-4 block space-y-2">
                        <span className="text-sm font-semibold text-neutral-950">Requirement</span>
                        <textarea
                            name="message"
                            value={form.message}
                            placeholder="Quantity, packing, destination port, timeline, and any quality requirements"
                            className="min-h-40 w-full rounded-lg border border-stone-300 p-4 outline-none focus:border-neutral-950"
                            onChange={handleChange}
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
                            Something went wrong. Please check the email configuration and try again.
                        </p>
                    )}

                    <button
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

function ContactShell() {
    return (
        <main className="mx-auto max-w-7xl px-5 py-12">
            <div className="rounded-lg border border-stone-200 bg-white p-6">
                <h1 className="text-3xl font-semibold text-neutral-950">Send your requirement</h1>
            </div>
        </main>
    );
}
