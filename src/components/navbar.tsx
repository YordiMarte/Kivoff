"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 pb-4">

        {/* LOGO */}
        <div className="flex items-center gap-3 ml-32">
          <Link href="/">
            <img 
              src="/KivoffLogo.svg"  
              alt="Kivoff Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* NAV */}
        <div className="flex flex-row flex-wrap gap-12 relative">
          <div className="hidden md:flex gap-8 text-md text-gray-300">

            {/* PRODUCTS */}
            <div className="relative group">
              <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
                Products
              </button>

              <div className="absolute border border-gray-800 left-0 mt-2 hidden group-hover:grid grid-cols-3 gap-8 bg-black text-gray-400 p-8 rounded-2xl shadow-xl w-[900px]">

                <div>
                  <h4 className="text-sm font-semibold mb-4 text-gray-500">Frameworks</h4>

                  <ul className="space-y-3">
                    <li>
                      <Link href="/infera" className="flex items-start gap-3 hover:text-white">
                        <Image 
                          src="./In.svg" 
                          alt="Infera.js Logo" 
                          width={24} 
                          height={24} 
                          className="w-8 h-8 border border-gray-800 rounded-md p-1" 
                          />
                        <div className="flex flex-col">
                          <span className="text-white font-medium">Infera.JS</span>
                          <span className="text-xs text-gray-400">The AI-ready JS framework</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* DEVELOPERS */}
            <div className="relative group">
              <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
                Developers
              </button>

              <div className="absolute border border-gray-800 left-0 mt-2 hidden group-hover:grid grid-cols-1 gap-4 bg-black text-white p-6 rounded-2xl shadow-xl w-[300px]">

                <Link href="/docs" className="flex gap-3 hover:text-white">
                  <span>Docs</span>
                </Link>

                <Link href="/termsUI" className="flex gap-3 hover:text-white">
                  <span>Kivoff UI</span>
                </Link>

              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="relative group">
              <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
                Solutions
              </button>

              <div className="absolute border border-gray-800 left-0 mt-2 hidden group-hover:grid gap-4 bg-black text-white p-6 rounded-2xl shadow-xl w-[250px]">
                <div>AI Builders</div>
                <div>No Code</div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-4">

          {/* LINKS */}
          <Link href="#inversion" className="border border-black rounded-full px-4 py-2 hover:bg-[#18181b]">
            Inversion
          </Link>

          <Link href="#pricing" className="border border-black rounded-full px-4 py-2 hover:bg-[#18181b]">
            Pricing
          </Link>

          {/* BUTTONS (FIXED) */}
          <Button asChild className="bg-[#00DC82] text-black">
            <Link href="/terms3">Log In</Link>
          </Button>

          <Button asChild className="bg-[#00DC82] text-black">
            <Link href="/terms4">Contact</Link>
          </Button>

          <Button asChild className="bg-white text-black">
            <Link href="/terms5">Sign Up</Link>
          </Button>

        </div>

      </nav>
    </header>
  )
}