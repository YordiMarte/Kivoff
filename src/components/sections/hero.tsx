import Link from "next/link";
import { ArrowRight, Code, Rocket, Sparkles } from "lucide-react";
import { HeroParticles } from "@/components/sections/hero-particles";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const icons = {
  code: Code,
  sparkles: Sparkles,
  rocket: Rocket,
} as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroParticles />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-28 text-center sm:pt-28">
        <Link
          href="/kivoff-forward-recap"
          className="group flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] pr-3 pl-1.5 text-sm backdrop-blur transition-colors hover:bg-white/[0.08]"
        >
          <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-background">
            New
          </span>
          What you missed at Kivoff Forward
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient">Build the tools.</span>
          <br />
          Deploy the future.
          <br />
          <span className="text-brand">Powered by AI.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Kivoff is an engineering team that designs and ships custom software
          and AI tools for companies, from idea to deployment.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-foreground px-6 text-base font-medium text-background hover:bg-foreground/90"
          >
            <Link href="#contact">Start building</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-brand/60 bg-transparent px-6 text-base font-medium text-foreground hover:bg-brand/10"
          >
            <Link href="#contact">Get a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}