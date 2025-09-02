"use client"

import { section } from "framer-motion/client"


export function AtherFooter() {
    return (
        <section className="relative bg-[#19191b] flex flex-col items-center justify-center min-h-[340px] py-16 text-center px-6 overflow-hidden">
            <style>{`
                @keyframes float1 { 0%{transform:translateY(0);} 50%{transform:translateY(-16px);} 100%{transform:translateY(0);} }
                @keyframes float2 { 0%{transform:translateY(0);} 50%{transform:translateY(12px);} 100%{transform:translateY(0);} }
                @keyframes float3 { 0%{transform:translateX(0);} 50%{transform:translateX(-12px);} 100%{transform:translateX(0);} }
                @keyframes float4 { 0%{opacity:0.7;} 50%{opacity:1;} 100%{opacity:0.7;} }
            `}</style>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-8 h-8 bg-white/5 rounded-sm top-6 left-10 kivoff-float1" />
                <div className="absolute w-6 h-6 bg-white/5 rounded-sm top-1/4 left-1/3 kivoff-float2" />
                <div className="absolute w-5 h-5 bg-white/5 rounded-sm top-1/2 left-1/4 kivoff-float3" />
                <div className="absolute w-4 h-4 bg-white/5 rounded-sm bottom-10 right-20 kivoff-float4" />
                <div className="absolute w-7 h-7 bg-white/5 rounded-sm bottom-1/3 right-1/4 kivoff-float5" />
                <div className="absolute w-3 h-3 bg-white/5 rounded-sm bottom-1/4 left-1/2 kivoff-float6" />
                <div className="absolute w-6 h-6 bg-white/5 rounded-sm top-1/3 right-1/3 kivoff-float7" />
                <div className="absolute w-4 h-4 bg-white/5 rounded-sm top-1/2 right-1/4 kivoff-float8" />
                <div className="absolute w-5 h-5 bg-white/5 rounded-sm top-1/4 right-1/2 kivoff-float9" />
                <div className="absolute w-6 h-6 bg-white/5 rounded-sm top-1/3 right-1/3 kivoff-float10" />
                <div className="absolute w-5 h-5 bg-white/5 rounded-sm bottom-1/4 left-1/3 kivoff-float11" />

            </div>
            <div className="relative z-10 text-center flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                    Building the future of integrative software to AI.
                </h1>
                <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Kivoff is a software startup that develops digital tools, intuitive and accessible products for digital and financial growth, with integrated artificial intelligence.
                </p>
                <button
                    className="group flex items-center px-10 py-4 rounded-2xl border border-white/20 bg-white hover:bg-gray-300 transition-colors duration-200 focus:outline-none shadow-lg"
                >
                    <span className="text-black text-2xl font-bold mr-8">Start Deploying</span>
                    <span className="flex items-center justify-center w-12 h-12 rounded-full">
                        <img src="/Logo.svg" alt="Kivoff Logo" className="w-8 h-8 object-contain" />
                    </span>
                </button>
            </div>
        </section>
    )
}