import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import logo from "@/images/logo/kivoff.png";
import { NavMenu } from "@/components/layout/nav-menu";

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

        <NavMenu />

        <div className="flex items-center gap-3 justify-self-end">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-foreground px-4 text-black hover:bg-foreground/90"
          >
            <Link href="/contact">
              Get started
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}