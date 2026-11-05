import { aboutStory } from "@/config/about";

export function AboutStory() {
  const { heading, lead, paragraphs } = aboutStory;

  return (
    <section className="mx-auto mt-28 max-w-6xl px-6">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <h2 className="max-w-sm text-4xl font-medium leading-[1.1] tracking-tight text-balance sm:text-5xl">
          {heading}
        </h2>

        <div>
          <p className="text-xl leading-snug text-foreground/90 sm:text-2xl">
            {lead}
          </p>
          <div className="mt-8 flex flex-col gap-6">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}