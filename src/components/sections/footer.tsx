import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className="relative isolate overflow-hidden">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-28 text-center sm:pt-28">
          <h2 className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Build the tools.</span>
            <br />
            Deploy the future.
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-foreground px-6 text-base font-medium text-background hover:bg-foreground/90"
            >
              <Link href="/contact">Get started</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="text-base font-semibold tracking-tight"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} {siteConfig.subtitle}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}