import { NextResponse } from "next/server";

type InquiryPayload = {
  name?: string;
  email?: string;
  country?: string;
  message?: string;
  productId?: string | null;
  productName?: string | null;
};

export async function GET() {
  return NextResponse.json(
    {
      message: "Inquiries are handled by email. Admin storage is not enabled.",
    },
    { status: 405 }
  );
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as InquiryPayload;
    const { name, email, country, message, productId, productName } = body;

    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL;
    const fromEmail = process.env.INQUIRY_FROM_EMAIL;
    const fromName = process.env.INQUIRY_FROM_NAME || "Pathik Impex";

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Inquiry email environment variables are not configured.");

      return NextResponse.json(
        { success: false, message: "Email is not configured." },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const subject = `New inquiry from ${name}`;
    const productLabel = productName || productId || "General inquiry";
    const htmlContent = `
      <h2>New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Country:</strong> ${escapeHtml(country)}</p>
      <p><strong>Product:</strong> ${escapeHtml(productLabel)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <p><strong>Requirement:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const textContent = [
      "New website inquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Country: ${country}`,
      `Product: ${productLabel}`,
      `Submitted: ${submittedAt}`,
      "",
      "Requirement:",
      message,
    ].join("\n");

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          email: fromEmail,
          name: fromName,
        },
        to: [{ email: toEmail }],
        replyTo: {
          email,
          name,
        },
        subject,
        htmlContent,
        textContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo email failed:", errorText);

      return NextResponse.json(
        { success: false, message: "Email could not be sent." },
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
