import Link from "next/link";
import { ArrowRight, Code, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";


const icons = {
  code: Code,
  sparkles: Sparkles,
  rocket: Rocket,
} as const;

export function Footer() {
  return (
    <section className="relative isolate overflow-hidden">

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-28 text-center sm:pt-28">

        <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient">Build the tools.</span>
          <br />
          Available today.
          <br />
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-foreground px-6 text-base font-medium text-background hover:bg-foreground/90"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
          </div>
        </div>
    </section>
  );
}