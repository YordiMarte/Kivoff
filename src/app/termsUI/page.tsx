"use client"

import { Sidebar2 } from "@/components/KUI/SIdebar2"
import { Hero2 } from "@/components/KUI/Hero2"
import { DocsPage } from "@/components/KUI/DocsPage2"

export default function TermsUIPage() {
    return (
        <div className="relative min-h-screen bg-[#0d0d0d] text-white flex">
            <Sidebar2 />
            <div className="flex-1 flex flex-col">
                <main className="px-8 pt-24">
                    <Hero2 />
                    <DocsPage />
                </main>
            </div>
        </div>
    )
}