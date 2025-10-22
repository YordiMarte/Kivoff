export function Section({ id, title, desc }: { id: string; title: string; desc: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-white/60 mb-6 max-w-2xl">{desc}</p>

      <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
        <div className="text-sm text-white/70">
          Example UI block for <span className="font-medium text-white">{title}</span> coming soon...
        </div>
      </div>
    </section>
  )
}
