import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/ProductsSection"
import { TemplatesSection } from "@/components/TemplatesSection"
import { Information } from "@/components/Information"
import { Ask } from "@/components/Ask"
import { Community } from "@/components/community"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <ProductsSection />
      <TemplatesSection />
      <Community />
      <Ask />
    </>
  )
}