import { testimonials, type Testimonial } from "@/config/testimonials";
import Image from "next/image";
import { getInitials } from "@/lib/utils";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 backdrop-blur-sm sm:w-[400px]">
      <div>
        <blockquote className="text-[15px] leading-relaxed text-foreground/90">
          “{item.quote}”
        </blockquote>
      </div>

      <figcaption className="mt-6 flex items-center gap-3">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            className="size-11 shrink-0 rounded-full object-cover ring-1 ring-white/15"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-white/20 to-white/5 text-xs font-semibold ring-1 ring-white/15"
          >
            {getInitials(item.name)}
          </span>
        )}
        <div className="text-sm">
          <p className="font-medium text-foreground">{item.name}</p>
          <p className="text-muted-foreground">{item.role}</p>
          <p className="text-xs text-muted-foreground/80">{item.company}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="customers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-gradient text-4xl font-medium tracking-tight sm:text-5xl">
          Beyond expectations
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          We build thoughtful software and AI products with teams ready to turn
          ambitious ideas into useful experiences.
        </p>
      </div>

      <div className="marquee mt-16">
        <div className="marquee__track">
          <ul className="flex gap-6 pr-6">
            {testimonials.map((item) => (
              <li key={item.name} className="flex">
                <TestimonialCard item={item} />
              </li>
            ))}
          </ul>
          <ul aria-hidden className="flex gap-6 pr-6">
            {testimonials.map((item) => (
              <li key={item.name} className="flex">
                <TestimonialCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}