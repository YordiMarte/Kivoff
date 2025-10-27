"use client"

import { Button } from "@/components/ui/button"
export function Hero2() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 50px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 50px)
          `,
        }}
      />

      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          UI Blocks for Kivoff Projects
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl">
          A collection of React components and blocks built on the shadcn/ui library that connect your front-end to your Supabase backend.
        </p>

        <Button
          variant="secondary"
          className="rounded-md px-6 py-5 text-sm font-medium bg-[#00DC82] text-black hover:bg-gray-200 transition"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}