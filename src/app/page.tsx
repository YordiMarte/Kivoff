import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="bg-hero-glow flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-gradient max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
        {siteConfig.tagline}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        {siteConfig.subtitle}
      </p>
    </main>
  );
}