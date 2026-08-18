import { NextResponse } from "next/server";
import { getProductById } from "@/data/products";

type InquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  country?: string;
  message?: string;
  productId?: string | null;
  productName?: string | null;
};

export async function GET() {
  return NextResponse.json(
    {
      message: "Use POST to submit an inquiry.",
    },
    { status: 405 }
  );
}

export async function POST(req: Request) {
  try {
    const body = await readInquiryPayload(req);
    const { name, company, email, country, message, productId, productName } = body;

    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      console.error("FORMSPREE_ENDPOINT is not configured.");

      return NextResponse.json(
        { success: false, message: "Inquiry service is not configured." },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    const buyerName = company ? `${name} (${company})` : name;
    const productLabel =
      productName ||
      (productId ? getProductById(productId)?.name : null) ||
      productId ||
      "General inquiry";

    const formspreeData = new FormData();
    formspreeData.append("name", name);
    formspreeData.append("company", company || "");
    formspreeData.append("email", email);
    formspreeData.append("country", country);
    formspreeData.append("product", productLabel);
    formspreeData.append("product_id", productId || "");
    formspreeData.append("message", message);
    formspreeData.append("submitted_at", submittedAt);
    formspreeData.append("_subject", `New inquiry from ${buyerName}`);

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formspreeData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Inquiry service submission failed:", errorText);

      return NextResponse.json(
        { success: false, message: "Inquiry service could not accept the request." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Inquiry submission failed:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

async function readInquiryPayload(req: Request): Promise<InquiryPayload> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return req.json();
  }

  const formData = await req.formData();

  return {
    name: getFormValue(formData, "name"),
    company: getFormValue(formData, "company"),
    email: getFormValue(formData, "email"),
    country: getFormValue(formData, "country"),
    message: getFormValue(formData, "message"),
    productId: getFormValue(formData, "productId") || null,
    productName: getFormValue(formData, "productName") || null,
  };
}

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}
