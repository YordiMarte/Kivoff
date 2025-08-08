import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/ProductsSection"
import { TemplatesSection } from "@/components/TemplatesSection"
import { Information } from "@/components/Information"
import { Ask } from "@/components/Ask"
import Testimonials from "@/components/Testimonials"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <ProductsSection />
      <TemplatesSection />
      <Testimonials />
      <Ask />
    </>
  )
}