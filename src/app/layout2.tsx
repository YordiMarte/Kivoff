import { Sidebar2 } from "../components/KUI/SIdebar2";
import { Navbar2 } from "../components/KUI/Navbar2";
import { BackgroundGrid2 } from "../components/KUI/BackgroundGrid2";
import { Hero2 } from "../components/KUI/Hero2";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en">
        <body className="bg-[#0a0a0b] text-white min-h-screen flex">
            <Sidebar2 />
            <main className="flex-1 relative overflow-hidden">
                <BackgroundGrid2 />
                <Navbar2 />
                <section className="pt-24 px-8 max-w-4xl mx-auto relative z-10">
                    <Hero2 />
                    <div className="mt-12">{children}</div>
                </section>
            </main>
        </body>
    </html>
    )
}