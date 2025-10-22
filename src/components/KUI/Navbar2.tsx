export function Navbar2() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent border-b border-white/10 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <span className="text-white/60 text-sm">UI Blocks for Kivoff Projects</span>
        <button className="text-sm bg-white text-black font-medium px-3 py-1.5 rounded-md hover:bg-white/90 transition">
          Get Started
        </button>
      </div>
    </nav>
  )
}