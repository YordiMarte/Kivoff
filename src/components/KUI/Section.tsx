export function Section({
  id,
  title,
  desc,
}: {
  id: string
  title: string
  desc: string
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-white/60 mb-6 max-w-2xl">{desc}</p>

      <div className="border border-white/10 rounded-xl p-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] flex justify-center">
        <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 w-full max-w-sm text-white">
          <h3 className="text-lg font-semibold mb-1">Sign up</h3>
          <p className="text-sm text-white/60 mb-6">Create a new account</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
                placeholder="Password"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">
                Repeat Password
              </label>
              <input
                id="repeat-password"
                type="password"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
                placeholder="Repeat Password"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-white text-black font-medium py-2 rounded-md hover:bg-neutral-200 transition"
            >
              Sign up
            </button>
          </form>

          <p className="text-sm text-white/60 mt-6 text-center">
            Already have an account?{" "}
            <a href="#" className="text-white underline underline-offset-2">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
