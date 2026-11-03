import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { SalesForm } from "@/components/sections/sales-form";
import { contactConfig, mailto } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact sales",
  description:
    "Tell us about your project and talk to Kivoff about custom software and AI-powered products.",
};

const benefits = [
  "Discuss your project and goals",
  "Get a demo of our products",
  "Learn about timelines and next steps",
] as const;

export default function ContactSalesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-24 pb-24 sm:pt-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-0">
        <div className="md:pr-12">
          <h1 className="text-gradient text-5xl font-medium tracking-tight sm:text-6xl">
            Contact sales
          </h1>

          <ul className="mt-10 flex flex-col gap-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-lg">
                <CircleCheck className="size-5 shrink-0 text-foreground" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-muted-foreground">
            Technical issues or product questions?{" "}
            <a
              href={mailto(contactConfig.email, "Support request")}
              className="text-foreground underline underline-offset-4"
            >
              Contact support
            </a>
          </p>
        </div>

        <div className="md:border-l md:border-white/10 md:pl-12">
          <SalesForm />
        </div>
      </div>
    </main>
  );
}