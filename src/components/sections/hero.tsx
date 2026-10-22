import Link from "next/link";
import { ArrowRight, Code, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const icons = {
  code: Code,
  sparkles: Sparkles,
  rocket: Rocket,
} as const;

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28">
        <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient">Build the tools.</span>
          <br />
          Deploy the future.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Kivoff is an engineering team that designs and ships custom software
          and AI-powered tools for companies. {siteConfig.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full border border-white/10 bg-white/5 pr-2 pl-5 text-foreground hover:bg-white/10"
          >
            <Link href="#contact">
              Start building
              <span className="grid size-7 place-items-center rounded-full bg-white/10">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </Button>

          <Link
            href="#products"
            className="group flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] pr-4 pl-2 text-sm transition-colors hover:bg-white/[0.07]"
          >
            <span className="rounded-full bg-brand/20 px-2 py-0.5 text-xs font-medium text-brand">
              New
            </span>
            AI-powered tools
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {siteConfig.pillars.map((pillar) => {
            const Icon = icons[pillar.icon];
            return (
              <li key={pillar.label} className="flex items-center gap-2">
                <Icon className="size-4" aria-hidden />
                {pillar.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}