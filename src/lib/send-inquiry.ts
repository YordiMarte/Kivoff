import { Resend } from "resend";
import { contactConfig } from "@/config/contact";

export const GENERIC_ERROR = `Something went wrong. Please email us at ${contactConfig.email}.`;

type Inquiry = {
  subject: string;
  replyTo: string;
  body: string;
};

export async function sendInquiry({
  subject,
  replyTo,
  body,
}: Inquiry): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? contactConfig.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "development") {
      console.info("[inquiry] email not configured, logging only:", {
        subject,
        replyTo,
        body,
      });
      return true;
    }
    console.error("Missing RESEND_API_KEY or CONTACT_FROM_EMAIL");
    return false;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Kivoff <${from}>`,
      to,
      replyTo,
      subject: subject.replace(/[\r\n]+/g, " "),
      text: body,
    });

    if (error) {
      console.error("Resend error:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Inquiry failed:", error);
    return false;
  }
}