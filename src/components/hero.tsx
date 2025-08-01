'use client'
import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "@/lib/motion"
import { ProductCard } from "./ProductCard"

import { Triangle } from "lucide-react";
import { features } from "process"
import { div } from "framer-motion/client"
import { ColorGridBackground } from "./ColorGridBackground"
import { InfiniteScrollLogos } from "./InfiniteScrollLogos"

export function Hero() {
    return (
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
            {/* Announcement Bar */}
            <div className="absolute top-0 left-0 w-full flex justify-center z-20 pt-8 mt-10">
                <div className="flex items-center gap-3 bg-transparent">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        New
                    </span>
                    <span className="text-white text-sm font-light font-sans">
                        Catch up with everything we announced at Kivoff Ship v1
                    </span>
                    <button className="ml-1 bg-white text-black font-medium font-sans text-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow hover:bg-gray-100 transition-colors">
                        Watch on demand
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>
            </div>
            <ColorGridBackground />
            <main className="mx-auto max-w-7xl px-6 py-24 w-full">

                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-8 mt-15">
                        Build and deploy the future <br />
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Powered by AI.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 text-center font-light font-sans max-w-3xl mx-auto mb-2 mt-10">
                        Kivoff offers AI-powered tools and infrastructure to create, scale, and launch smarter digital products.
                    </p>

                    <div className="flex flex-row gap-4 justify-center mb-24 mt-10">
                        <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow transition-colors hover:bg-gray-100">
                            <img src="/Logo.svg" alt="Kivoff Logo" className="h-5 w-5" />
                            Start Deploying
                        </button>

                        <button className="bg-black text-gray-300 px-6 py-3 rounded-full font-medium 
                        border-2 border-transparent bg-clip-padding border-gradient-to-r
                        from-purple-500 to-pink-500 hover:bg-gray-100 hover:bg-clip-border transition-colors"

                        style = {{
                            backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #8b5cf6, #ec4899)',
                            backgroundOrigin: 'padding-box, border-box',
                            backgroundClip: 'padding-box, border-box',
                        }}
                        >
                        Get a Demo
                        </button>
                    </div>



                    {/* Trusted By Section */}
                    <div className="mt-1">
                        <InfiniteScrollLogos />
                        <p className="text-sm font-medium text-gray-500 mb-4 mt-3">
                            Backed by the world's best teams and products. 
                            <br />
                            From small startups to established companies.
                        </p>
                    </div>
                </div>
            </main>

            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    )
}

export function Products() {
    const products = [
        {
            logo:"/Infera.jsV.svg",
            name:"",
            status:"Available",
            statusColor:"bg-green-100 text-green-700",
            description:"Full-stack framework with integrated Supabase, authentication-ready, and pre-built components.",
            features: ["Auth complete", "Database ready", "API Routes", "UI Components"],
            link:"#",
        },
        {
            logo:"/Veftro.svg",
            name:"",
            status:"Beta",
            statusColor:"bg-green-100 text-green-700", 
            description:"AI-powered visual interface builder that turns designs into code React + Tailwind.",
            features:["Design to Code", "Visual AI", "React + Tailwind", "Instant Export"],
            link:"#",
        },
        {
            logo:"/Or.svg",
            name:"",
            status:"soon",
            statusColor:"bg-purple-100 text-purple-700",
            description:"Advanced automation tool for digital workflows.",
            features:["Automation", "Integrations", "Visual Flows", "Multi-model"],
            link:"#",
        },
        {
            logo:"/ff.svg",
            name:"",
            status:"in development",
            statusColor:"bg-orange-100 text-orange-700",
            description:"Deployment and testing platform for modern devices.",
            features:["Automatic CI/CD", "Testing Suite", "One-Click Deploy", "Monorepo Setup"],
            link:"#",
        }
    ];

    return (
        <section className="bg-black text-white min-h-screen flex flex-col items-center">
            {}
            {}
            <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center bg-gray-50 py-12">
                {products.map((p) => (
                    <ProductCard key={p.name} {...p} />
        ))}
    </div>
    </section>
    )
}

