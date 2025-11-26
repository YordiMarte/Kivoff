"use client";

import { Button } from "@/components/ui/button";

export function Hero2() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-20 bg-[#0b0b0b] overflow-hidden">
      
      {/* Pattern vertical lines */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
          bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] 
          [background-size:12px_12px]"
      />

      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          UI Blocks for Kivoff Projects
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl">
          A collection of React components and blocks built on the shadcn/ui library
          that connect your front-end to your Supabase backend.
        </p>

        <Button
          variant="secondary"
          className="rounded-md px-6 py-5 text-sm font-medium 
          bg-[#00DC82] text-black hover:bg-neutral-200 transition"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
