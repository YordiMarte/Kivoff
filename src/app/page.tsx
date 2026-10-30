import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { FeaturedQuote } from "@/components/sections/featured-quote";
import { Partners } from "@/components/sections/partners";
import { Footer } from "@/components/sections/footer";
import { Products } from "@/components/sections/products";
import { Products2 } from "@/components/sections/products2";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Products />
      <FeaturedQuote />
      <Products2 />
      <Testimonials />
      <Footer />
    </main>
  );
}