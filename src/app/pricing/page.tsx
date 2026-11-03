import Link from "next/link";
import { Check } from "lucide-react";
import { pricing } from "@/config/pricing";

export default function PricingPage() {
  return (
    <section id="pricing" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl font-medium tracking-tight sm:text-6xl">
          Pricing
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {pricing.map((plan, index) => (
            <article
              key={plan.name}
              className={`flex min-h-full flex-col ${
                index > 0 ? "border-white/10 sm:border-l lg:pl-8" : ""
              } ${index < pricing.length - 1 ? "sm:pr-8" : ""}`}
            >
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-3 min-h-7 text-lg">
                <span className="font-medium">{plan.price}</span>
                {plan.priceSuffix && (
                  <span className="ml-1 text-muted-foreground">
                    {plan.priceSuffix}
                  </span>
                )}
              </p>

              <div className="mt-5 flex min-h-[4.25rem] items-center border-y border-white/10 py-4 text-sm text-muted-foreground">
                {plan.annual ? (
                  <span className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="relative inline-flex h-6 w-10 items-center rounded-full bg-indigo-500 p-1"
                    >
                      <span className="ml-auto size-4 rounded-full bg-white" />
                    </span>
                    {plan.billing}
                  </span>
                ) : (
                  plan.billing
                )}
              </div>

              <ul className="mt-7 flex flex-col gap-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-slate-300 text-background"
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-12">
                {plan.actions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`inline-flex min-h-10 flex-1 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${
                      action.primary
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-white/5 bg-white/[0.06] text-foreground hover:bg-white/10"
                    }`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
