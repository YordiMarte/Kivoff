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


function AnimatedSquares() {
    const squares = [
    { style: { top: "5%", left: "10%", width: 24, height: 24, animationDelay: "0s" } },
        { style: { top: "20%", left: "30%", width: 32, height: 32, animationDelay: "1s" } },
        { style: { top: "40%", left: "60%", width: 20, height: 20, animationDelay: "2s" } },
        { style: { top: "60%", left: "15%", width: 28, height: 28, animationDelay: "1.5s" } },
        { style: { top: "70%", left: "50%", width: 16, height: 16, animationDelay: "2.5s" } },
        { style: { top: "80%", left: "80%", width: 24, height: 24, animationDelay: "0.5s" } },
        { style: { top: "30%", left: "80%", width: 18, height: 18, animationDelay: "1.2s" } },
        { style: { top: "55%", left: "70%", width: 22, height: 22, animationDelay: "2.2s" } },
        { style: { top: "15%", left: "50%", width: 26, height: 26, animationDelay: "0.8s" } },
        { style: { top: "10%", left: "70%", width: 20, height: 20, animationDelay: "1.8s" } },
        { style: { top: "25%", left: "15%", width: 30, height: 30, animationDelay: "0.6s" } },
        { style: { top: "45%", left: "40%", width: 22, height: 22, animationDelay: "2.8s" } },
        { style: { top: "65%", left: "75%", width: 26, height: 26, animationDelay: "1.4s" } },
        { style: { top: "85%", left: "20%", width: 18, height: 18, animationDelay: "2.1s" } },
        { style: { top: "50%", left: "5%", width: 24, height: 24, animationDelay: "0.9s" } },
        { style: { top: "35%", left: "90%", width: 28, height: 28, animationDelay: "2.7s" } },
        { style: { top: "75%", left: "40%", width: 20, height: 20, animationDelay: "1.7s" } },
        { style: { top: "90%", left: "60%", width: 22, height: 22, animationDelay: "0.4s" } },
        { style: { top: "12%", left: "85%", width: 26, height: 26, animationDelay: "1.1s" } },
        { style: { top: "50%", left: "55%", width: 18, height: 18, animationDelay: "2.3s" } },
    ];
    return (
        <>
            {squares.map((sq, i) => (
                <div
                    key={i}
                    className="bg-green-900 opacity-80 rounded-sm animate-square-float"
                    style={{
                        position: "absolute",
                        ...sq.style,
                    }}
                />
            ))}
            <style jsx global>{`
                @keyframes square-float {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
                    50% { transform: translateY(-30px) scale(1.1); opacity: 1; }
                }
                .animate-square-float {
                    animation: square-float 6s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
export function Hero() {
    return (
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full flex justify-center z-20 pt-8 mt-3">
                <button className="flex items-center gap-3 bg-[#181A1B] border border-[#333] px-4 py-2 rounded-full shadow hover:bg-[#232526] transition-colors">
                    <span className="bg-[#00DC82] text-black text-xs font-semibold px-3 py-1 rounded-full">
                        New
                    </span>
                    <span className="text-white text-xm font-medium font-sans">
                        View all the announcements
                    </span>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 text-white"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            </div>
            <ColorGridBackground />
            <main className="mx-auto max-w-7xl px-6 py-24 w-full">

                <div className="text-center">
                    <h1 className="font-sans font-medium text-white text-[50px] leading-[62px] md:text-[70px] md:leading-[80px] lg:text-[88px] lg:leading-[90px] mb-10 mt-10">
                        Build the tools. 
                        <br /> 
                        Deploy the future. 
                        <br />
                        <span className="text-[#00DC82]">Powered by AI.</span>
                    </h1>

                <div className="flex flex-row gap-6 justify-center mb-24 mt-12">
                    <button className="bg-white text-black px-7 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg 
                        hover:shadow-xl hover:bg-gray-100 transition-all duration-300">
                            <img src="/Logo.svg" alt="Kivoff Logo" className="h-6 w-6" />
                            Start Deploying
                        </button>

                    <button
                        className="relative px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 overflow-hidden"
                        style={{
                            border:"2px solid #00DC82",
                            backgroundColor:"black",
                        }}
                    >
                        <span className="relative z-10">Get a Demo</span>
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00DC82] to-[#00b56f] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </button>
            </div>


                    <div className="mt-1">
                        <p className="text-center text-[15px] font-mono font-normal tracking-wider text-gray-500 mb-4 mt-0 uppercase">
                            BACKED BY THE WORLD'S BEST TEAMS AND PRODUCTS 
                        </p>
                    </div>
                    <InfiniteScrollLogos />

                    <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatedSquares />
            </div>

                </div>
            </main>
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

