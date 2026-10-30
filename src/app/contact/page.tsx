import type { Metadata } from "next";
import { ContactOptions } from "@/components/sections/contact-options";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Kivoff about custom software, AI-powered products, or support.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-32 sm:pt-32">
      <ContactOptions />
    </main>
  );
}