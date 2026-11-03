"use server";

import { GENERIC_ERROR, sendInquiry } from "@/lib/send-inquiry";
import { getFieldErrors } from "@/lib/validations/form-state";
import {
  salesSchema,
  type SalesField,
  type SalesFormState,
} from "@/lib/validations/sales";

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
    return {
      status: "error",
      fieldErrors: getFieldErrors<SalesField>(parsed.error),
      values,
    };
  }

  const { name, email, companySize, message } = parsed.data;
  const sent = await sendInquiry({
    subject: `Sales inquiry from ${name}`,
    replyTo: email,
    body: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company size: ${companySize}`,
      "",
      message,
    ].join("\n"),
  });

  return sent
    ? { status: "success" }
    : { status: "error", message: GENERIC_ERROR, values };
}