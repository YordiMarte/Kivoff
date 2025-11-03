"use client"
import { Sidebar2 } from "@/components/KUI/SIdebar2"
import { Hero2 } from "@/components/KUI/Hero2"
import DocsPage2 from "@/components/KUI/DocsPage2"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function TermsUIPage() { 
    return (
        <div className="relative min-h-screen bg-[#0d0d0d] text-white flex">
            <Sidebar2 />
            <div className="flex-1 flex flex-col">
                <main className="px-8 pt-24">
                    <div className="flex items-center justify-between mb-8">
                        <Hero2 />
                        <Link
                            href="/terms/changelog"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg text-sm font-medium"
                        >
                            <span>🗒️</span> Changelog
                        </Link>
                    </div>
                    <DocsPage2 />
                </main>
            </div>
        </div>
    )
}