import Image from "next/image";
import Me from "@/images/me.png"

export default function KivoffForwardRecapPage() {
  return (
    <section
      id="products"
      aria-labelledby="what-you-missed-title"
      className="border-t border-white/10 bg-black/40 px-6 py-20 sm:py-28"
    >
      <article className="mx-auto max-w-6xl">
        <p className="text-center text-sm text-muted-foreground">
          <time dateTime="2026-10-21">October 21st, 2026</time>
        </p>

        <h2
          id="what-you-missed-title"
          className="mx-auto mt-8 max-w-5xl text-center font-serif text-4xl leading-[1.05] tracking-tight text-gradient sm:text-6xl lg:text-7xl"
        >
          What you missed at Kivoff Forward
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
          Kivoff Forward was a special conference dedicated to the craft of
          building high-quality software.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
            <Image
                src={Me}
                alt=""
                width={48}
                height={48}
                sizes="48px"
                className="h-12 w-12 rounded-full object-cover"
                />

          <div className="text-left">
            <p className="text-sm font-semibold leading-tight text-foreground">
              Yordi Marte
            </p>
            <p className="mt-1 text-sm leading-tight text-muted-foreground">
              Founder & CEO
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Today, we gathered with a special group of builders, developers,
            designers, and creators to celebrate the obsession of building
            high-quality software.
          </p>

          <Image
            src="/images/what-you-missed-event.png"
            alt="Attendees gathered at Kivoff Forward"
            width={942}
            height={627}
            sizes="(max-width: 768px) 100vw, 960px"
            className="mt-8 h-auto w-full rounded-xl border border-white/10 object-cover"
          />
        </div>
      </article>
    </section>
  );
}
