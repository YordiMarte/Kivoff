import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { FeaturedQuote } from "@/components/sections/featured-quote";
import { Partners } from "@/components/sections/partners";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <FeaturedQuote />
      <Testimonials />
      <Footer />
    </main>
  );
}