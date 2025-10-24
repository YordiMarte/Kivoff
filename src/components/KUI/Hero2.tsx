
export function Hero2() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          UI Blocks for <span className="text-white/90">Kivoff Projects</span>
        </h1>

        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10">
          A collection of React components and blocks built on the{" "}
          <span className="text-white/70 font-medium">shadcn/ui</span> library that connect your front-end
          to your Supabase back-end via a single command.
        </p>

        <button className="px-5 py-2.5 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-all">
          Get Started
        </button>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
    </section>
  )
}
