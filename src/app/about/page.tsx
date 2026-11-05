import type { Metadata } from "next";
import { AboutStory } from "@/components/sections/about-story";
import { AboutTeam } from "@/components/sections/about-team";
import { AboutVideo } from "@/components/sections/about-video";
import { aboutHero } from "@/config/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kivoff is an engineering team that builds custom software and AI-powered tools for companies.",
};

export default function AboutPage() {
  return (
    <main className="pb-24">
      <section className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
        <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {aboutHero.heading}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          {aboutHero.description}
        </p>
      </section>

      <AboutVideo />
      <AboutStory />
      <AboutTeam />
    </main>
  );
}