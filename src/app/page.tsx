import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ObservabilitySection } from "@/components/ObservabilitySection"
import { ProductsSection } from "@/components/ProductsSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { TemplatesSection } from "@/components/TemplatesSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ObservabilitySection />
      <ProductsSection />
      <TemplatesSection />
      <FeaturesSection />
    </>
  )
}