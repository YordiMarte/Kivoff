import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { featuredQuote } from "@/config/featured-quote";
import { getInitials } from "@/lib/utils";

export function FeaturedQuote() {
  const { quote, name, role, cta } = featuredQuote;

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <figure className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
          “{quote}”
        </blockquote>

        <figcaption className="mt-10 flex items-center gap-3">
          <span
            aria-hidden
            className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-white/25 to-white/5 text-sm font-semibold ring-1 ring-white/15"
          >
            {getInitials(name)}
          </span>
          <div className="text-left">
            <p className="text-base font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </figcaption>

        <Link
          href={cta.href}
          className="group mt-12 inline-flex h-10 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] pr-3 pl-5 text-sm font-medium transition-colors hover:bg-white/[0.12]"
        >
          {cta.label}
          <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      </figure>
    </section>
  );
}