import { ArrowRight } from "lucide-react";
import { contactConfig, mailto } from "@/config/contact";

export function ContactOptions() {
  const { heading, email, options } = contactConfig;

  return (
    <div className="mx-auto max-w-6xl px-6">
      <h1 className="text-gradient text-5xl font-medium tracking-tight sm:text-6xl">
        {heading}
      </h1>

      <ul className="mt-16 grid gap-5 md:grid-cols-3">
        {options.map((option) => (
          <li key={option.id}>
            <article className="group flex h-full min-h-72 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-brand/40 hover:bg-white/[0.05]">
              <h2 className="text-xl font-medium">{option.title}</h2>

              <div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {option.description}
                </p>

                <a
                  href={mailto(email, option.cta.subject)}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {option.cta.label || email}
                  {option.cta.label && (
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  )}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}