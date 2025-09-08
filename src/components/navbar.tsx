"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { header } from "framer-motion/client"
import { Triangle } from "lucide-react"


export function Navbar () {
  return (
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 pb-4">

          <div className="flex items-center gap-3 ml-32">
            <img src="/KivoffLogo.svg" alt="Kivoff Logo" className="h-10 w-auto" />
          </div>

          <div className="flex flex-row flex-wrap justify-start gap-12 relative">
            <nav className="hidden justify-end gap-8 text-md text-gray-300 md:flex">

<div className="relative group">
  <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
    Products
  </button>
  <div className="absolute border border-gray-800 left-0 mt-2 hidden group-hover:grid grid-cols-3 gap-8 bg-black text-gray-400 p-8 rounded-2xl shadow-xl w-[900px]">

    <div>
      <h4 className="text-sm font-semibold mb-4 text-white">Frameworks</h4>
      <ul className="space-y-3">
        <li>
          <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./In.svg" alt="infera.js logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white">Infera.JS</span>
              <span className="text-xs text-gray-400">The AI-ready JS framework</span>
            </div>
          </a>
        </li>
      </ul>

      <h4 className="text-sm font-semibold mt-6 mb-4 text-white">Infrastructure</h4>
      <ul className="space-y-3">
        <li>
          <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./f.svg" alt="fforve logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white">Fforve</span>
              <span className="text-xs text-gray-400">Modern infra & scaling</span>
            </div>
          </a>
        </li>
      </ul>
    </div>


    <div>
      <h4 className="text-sm font-semibold mb-4 text-white">Platform</h4>
      <ul className="space-y-3">
        <li>
          <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./Ve.svg" alt="veftro logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white">Veftro</span>
              <span className="text-xs text-gray-400">Next-gen cloud platform</span>
            </div>
          </a>
        </li>
      </ul>

      <h4 className="text-sm font-semibold mt-6 mb-4 text-white">AI</h4>
      <ul className="space-y-3">
        <li>
          <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./Ky.svg" alt="ky logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white">Ky</span>
              <span className="text-xs text-gray-400">Your personal AI assistant</span>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-sm font-semibold mb-4 text-white">Tools</h4>
      <ul className="space-y-3">
        <li>
          <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./O.svg" alt="oryze logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white">Oryze</span>
              <span className="text-xs text-gray-400">Developer tools & automation</span>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </div>
</div>


              <div className="relative group">
                <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
                  Developers
                </button>
                <div className="absolute border border-gray-700 left-0 mt-2 hidden group-hover:grid grid-cols-3 gap-8 bg-black text-white p-8 rounded-2xl shadow-xl w-[700px]">
              <div>
                <h4 className="text-sm font-semibold mb-4">DEVELOPERS</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white">Docs</a></li>
                  <li><a href="#" className="hover:text-white">Kivoff UI</a></li>
                  <li><a href="#" className="hover:text-white">Changelog</a></li>
                  <li><a href="#" className="hover:text-white">Support</a></li>
                  <li><a href="#" className="hover:text-white">Guides</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">RESOURCES</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white">Customers</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Become a Partner</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Events</a></li>
                </ul>
                </div>
              </div>
            </div>

              <div className="relative group">
                <button className="hover:text-white transition-colors">
                  Solutions
                </button>
                <div className="absolute border border-gray-700 left-0 mt-2 hidden group-hover:grid grid-cols-3 gap-8 bg-black text-white p-8 rounded-2xl shadow-xl w-[500px]">

              <div>
                <h4 className="text-sm font-semibold mb-4">SKILL LEVEL</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white">AI Builders</a></li>
                  <li><a href="#" className="hover:text-white">No Code</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">WHO IT ‘ S FOR</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white">Startups</a></li>
                  <li><a href="#" className="hover:text-white">Enterprise</a></li>
                </ul>
              </div>

            </div>
          </div>

            <a href="#inversion" className="hover:text-white transition-colors">
              Inversion
            </a>

            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>

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

