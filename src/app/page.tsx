import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { FeaturedQuote } from "@/components/sections/featured-quote";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedQuote />
      <Testimonials />
    </main>
  );
}