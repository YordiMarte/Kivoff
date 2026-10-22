import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import logo from "@/images/logo/kivoff.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2 justify-self-start"
        >
          <Image
            src={logo}
            alt=""
            preload
            className="h-6 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <Button
            asChild
            size="sm"
            className="rounded-full border border-white/10 bg-white/5 px-4 text-foreground hover:bg-white/10"
          >
            <Link href="#contact">
              Get started
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}