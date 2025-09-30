"use client";

import { motion } from "framer-motion";

export function AtherFooter() {
    return (
    <motion.section
        className="relative bg-[#19191b] flex flex-col items-center justify-center min-h-[340px] py-16 text-center px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
      {/* Floating squares animations */}
    <style>{`
        @keyframes float1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-16px);} }
        @keyframes float2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(12px);} }
        @keyframes float3 { 0%,100%{transform:translateX(0);} 50%{transform:translateX(-12px);} }
        @keyframes float4 { 0%,100%{opacity:0.7;} 50%{opacity:1;} }
    `}</style>

      {/* Floating squares */}
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-8 h-8 bg-white/5 rounded-sm top-6 left-10 animate-[float1_6s_ease-in-out_infinite]" />
        <div className="absolute w-6 h-6 bg-white/5 rounded-sm top-1/4 left-1/3 animate-[float2_7s_ease-in-out_infinite]" />
        <div className="absolute w-5 h-5 bg-white/5 rounded-sm top-1/2 left-1/4 animate-[float3_8s_ease-in-out_infinite]" />
        <div className="absolute w-4 h-4 bg-white/5 rounded-sm bottom-10 right-20 animate-[float4_5s_ease-in-out_infinite]" />
        <div className="absolute w-7 h-7 bg-white/5 rounded-sm bottom-1/3 right-1/4 animate-[float1_9s_ease-in-out_infinite]" />
        <div className="absolute w-3 h-3 bg-white/5 rounded-sm bottom-1/4 left-1/2 animate-[float2_10s_ease-in-out_infinite]" />
    </div>

      {/* Content */}
    <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#00DC82] mb-4 leading-tight">
            Building the future of integrative software with AI.
        </h1>

        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Kivoff is a software startup that develops digital tools and intuitive,
            accessible products for digital and financial growth, with integrated
            artificial intelligence.
        </p>

        <a
            href="#"
            className="group flex items-center px-10 py-4 rounded-2xl border border-white/20 bg-white hover:bg-gray-200 transition-colors duration-200 focus:outline-none shadow-lg"
            aria-label="Start Deploying with Kivoff"
        >
        <span className="text-black text-2xl font-bold mr-6">
            Start Deploying
        </span>
        <span className="flex items-center justify-center w-12 h-12 rounded-full group-hover:bg transition">
            <img
                src="/Logo.svg"
                alt="Kivoff Logo"
                className="w-8 h-8 object-contain"
            />
        </span>
        </a>
    </div>
    </motion.section>
    );
}
