"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { header } from "framer-motion/client"
import { Triangle } from "lucide-react"


export function Navbar () {
  return (
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 backdrop-blur-md bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3 ml-32">
            <img src="/KivoffL.svg" alt="Kivoff Logo" className="h-8 w-auto" />
          </div>

<div className="flex flex-row flex-wrap justify-start gap-12 opacity-60">
          <nav className="hidden justify-end gap-8 text-sm text-gray-300 md:flex">
            <a href="#productos" className="hover:text-white transition-colors">Products</a>
            <a href="#developers" className="hover:text-white transition-colors">Developers</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#inversion" className="hover:text-white transition-colors">Investors</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="border border-gray-700 bg-black text-gray-300 px-3 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Log In
            </Button>
            <Button variant="outline" className="border border-gray-700 bg-black text-gray-300 px-3 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact
            </Button>
            <Button variant="outline" className="border border-white bg-white text-black px-3 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
  );
}

