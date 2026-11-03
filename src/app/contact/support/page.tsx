import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { SupportForm } from "@/components/sections/support-form";
import { contactConfig } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact support",
  description:
    "Ask questions, report problems or leave feedback about Kivoff products.",
};

const benefits = [
  "Ask product questions",
  "Report problems or unexpected behaviour",
  "Leave feedback",
] as const;

export default function ContactSupportPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-24 pb-24 sm:pt-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-0">
        <div className="md:pr-12">
          <h1 className="text-gradient text-5xl font-medium tracking-tight sm:text-6xl">
            Contact support
          </h1>

          <ul className="mt-10 flex flex-col gap-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-lg">
                <CircleCheck
                  className="size-5 shrink-0 text-foreground"
                  aria-hidden
                />
                {benefit}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
            Questions about projects, pricing, or demos?{" "}
            <Link
              href="/contact/sales"
              className="text-foreground underline underline-offset-4"
            >
              Contact sales
            </Link>
            <br />
            You can also email us at{" "}
            <a
              href={`mailto:${contactConfig.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {contactConfig.email}
            </a>
          </p>
        </div>

        <div className="md:border-l md:border-white/10 md:pl-12">
          <SupportForm />
        </div>
      </div>
    </main>
  );
}