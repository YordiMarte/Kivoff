import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { FeaturedQuote } from "@/components/sections/featured-quote";
import { Partners } from "@/components/sections/partners";
import { Footer } from "@/components/sections/footer";
import { Products } from "@/components/sections/products";
import { Products2 } from "@/components/sections/products2";
import { Capabilities } from "@/components/sections/capabilities";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Capabilities />
      <Products />
      <FeaturedQuote />
      <Products2 />
      <Testimonials />
    </main>
  );
}