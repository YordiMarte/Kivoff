"use server";

import { Resend } from "resend";
import { contactConfig } from "@/config/contact";
import {
  salesSchema,
  type SalesField,
  type SalesFormState,
} from "@/lib/validations/sales";

const GENERIC_ERROR = `Something went wrong. Please email us at ${contactConfig.email}.`;

export async function submitSalesInquiry(
  _previous: SalesFormState,
  formData: FormData,
): Promise<SalesFormState> {
  if (formData.get("website")) return { status: "success" };

  const values: Record<SalesField, string> = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    companySize: String(formData.get("companySize") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = salesSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<SalesField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as SalesField | undefined;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return { status: "error", fieldErrors, values };
  }

  const { name, email, companySize, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? contactConfig.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "development") {
      console.info("[sales inquiry] email not configured, logging only:", parsed.data);
      return { status: "success" };
    }
    console.error("Missing RESEND_API_KEY or CONTACT_FROM_EMAIL");
    return { status: "error", message: GENERIC_ERROR, values };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Kivoff <${from}>`,
      to,
      replyTo: email,
      subject: `Sales inquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company size: ${companySize}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: GENERIC_ERROR, values };
    }
  } catch (error) {
    console.error("Sales inquiry failed:", error);
    return { status: "error", message: GENERIC_ERROR, values };
  }

  return { status: "success" };
}