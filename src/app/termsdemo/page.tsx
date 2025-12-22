import { ContactDemo } from "@/components/Contact/ContactDemo"
import { Navbar } from "@/components/navbar"
import  Footer  from "@/components/footer"

export default function TermsDemoPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <ContactDemo />
            <Footer />
        </main>
    )
}