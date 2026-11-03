"use server";

import { GENERIC_ERROR, sendInquiry } from "@/lib/send-inquiry";
import { getFieldErrors } from "@/lib/validations/form-state";
import {
  supportSchema,
  type SupportField,
  type SupportFormState,
} from "@/lib/validations/support";

export async function submitSupportRequest(
  _previous: SupportFormState,
  formData: FormData,
): Promise<SupportFormState> {
  if (formData.get("website")) return { status: "success" };

  const values: Record<SupportField, string> = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = supportSchema.safeParse(values);
  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: getFieldErrors<SupportField>(parsed.error),
      values,
    };
  }

  const { name, email, topic, message } = parsed.data;
  const sent = await sendInquiry({
    subject: `Support request (${topic}) from ${name}`,
    replyTo: email,
    body: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n"),
  });

  return sent
    ? { status: "success" }
    : { status: "error", message: GENERIC_ERROR, values };
}