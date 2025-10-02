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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 pb-4">

          <div className="flex items-center gap-3 ml-32">
            <Link href="/">
              <img 
                src="/KivoffLogo.svg"  
                alt="Kivoff Logo" 
                className="h-10 w-auto"
          />
          </Link>
        </div>

          <div className="flex flex-row flex-wrap justify-start gap-12 relative">
            <div className="hidden justify-end gap-8 text-md text-gray-300 md:flex">

<div className="relative group">
  <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
    Products
  </button>

  <div className="absolute border border-gray-800 left-0 mt-2 hidden group-hover:grid grid-cols-3 gap-8 bg-black text-gray-400 p-8 rounded-2xl shadow-xl w-[900px]">

    <div>
      <h4 className="text-sm font-semibold mb-4 text-gray-500">Frameworks</h4>
      <ul className="space-y-3">
        <li>
          <a href="" className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./In.svg" alt="infera.js logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-[#00DC82] transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white flex items-center gap-2">
                Infera.JS
                <span className="text-[10px] font-semibold bg-[#00DC82] text-green-800 px-2 py-0.5 rounded-full transition-colors">
                Beta
                </span>
              </span>
              <span className="text-xs text-gray-400">The AI-ready JS framework</span>
            </div>
          </a>
        </li>
      </ul>

      <h4 className="text-sm font-semibold mt-6 mb-4 text-gray-500">Infrastructure</h4>
      <ul className="space-y-3">
        <li>
            <div className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./f.svg" alt="fforve logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-[#00DC82] transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white flex items-center gap-2">
                Fforve
              <span className="text-[10px] font-semibold bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </span>
              <span className="text-xs text-gray-400">Modern infra & scaling</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-sm font-semibold mb-4 text-gray-500">Platform</h4>
      <ul className="space-y-3">
        <li>
          <div className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./Ve.svg" alt="veftro logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-[#00DC82] transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white flex items-center gap-2">
                Veftro
                <span className="text-[10px] font-semibold bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
              </span>
              <span className="text-xs text-gray-400">Next-gen cloud platform</span>
            </div>
          </div>
        </li>
      </ul>

      <h4 className="text-sm font-semibold mt-6 mb-4 text-gray-500">AI</h4>
      <ul className="space-y-3">
        <li>
          <div className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./Ky.svg" alt="ky logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-[#00DC82] transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white flex items-center gap-2">
                Ky
                <span className="text-[10px] font-semibold bg-green-300 text-green-700 px-2 py-0.5 rounded-full">
                  In Development
                </span>
              </span>
              <span className="text-xs text-gray-400">Your personal AI assistant</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-sm font-semibold mb-4 text-gray-500">Tools</h4>
      <ul className="space-y-3">
        <li>
          <div className="flex items-start gap-3 hover:text-white transition-colors">
            <img src="./O.svg" alt="oryze logo"
              className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-[#00DC82] transition-colors" />
            <div className="flex flex-col">
              <span className="font-medium text-white flex items-center gap-2">
                Oryze
                <span className="text-[10px] font-semibold bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
              </span>
              <span className="text-xs text-gray-400">Developer tools & automation</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</div>


              <div className="relative group">
                <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
                  Developers
                </button>
                <div className="absolute border border-gray-800 left-0 mt-2 hidden group-hover:grid grid-cols-3 gap-8 bg-black text-white p-8 rounded-2xl shadow-xl w-[700px]">

              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-500">Developers</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          className="lucide lucide-file-text-icon lucide-file-text text-[#00DC82]"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Docs</span>
                        <span className="text-xs text-gray-400">Documentation</span>
                      </div>
                  </a>
                </li>

                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-layers2-icon lucide-layers-2 text-[#00DC82]"><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"/><path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Kivoff UI</span>
                        <span className="text-xs text-gray-400">Component library</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-crown-icon lucide-crown text-[#00DC82]"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Changelog</span>
                        <span className="text-xs text-gray-400">See what shipped</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-life-buoy-icon lucide-life-buoy text-[#00DC82]"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Support</span>
                        <span className="text-xs text-gray-400">Get help</span>
                      </div>
                    </a>
                  </li>

                <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" 
                      className="lucide lucide-compass-icon lucide-compass flex items-center justify-center text-[#00DC82]"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Guides</span>
                        <span className="text-xs text-gray-400">Find help quickly</span>
                      </div>
                    </a>
                  </li>

                  
                </ul>
              </div>


              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-500">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-smile-icon lucide-smile text-[#00DC82]"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Customers</span>
                        <span className="text-xs text-gray-400">Trusted by the teams</span>
                      </div>
                  </a>
                </li>

                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-pen-tool-icon lucide-pen-tool text-[#00DC82]"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Blog</span>
                        <span className="text-xs text-gray-400">The latest posts and changes</span>
                      </div>
                  </a>
                </li>

                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-heart-handshake-icon lucide-heart-handshake text-[#00DC82]"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Become a partner</span>
                        <span className="text-xs text-gray-400">Get help from solutions partners</span>
                      </div>
                  </a>
                </li>

                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-heart-pulse-icon lucide-heart-pulse text-[#00DC82]"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Careers</span>
                        <span className="text-xs text-gray-400">Join our team and make an impact</span>
                      </div>
                  </a>
                </li>

                  <li>
                    <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                      <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        className="lucide lucide-shopping-bag-icon lucide-shopping-bag text-[#00DC82]"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Events</span>
                        <span className="text-xs text-gray-400">Join us at an events</span>
                      </div>
                  </a>
                </li>

                </ul>
                </div>
              </div>
            </div>

              <div className="relative group">
                <button className="hover:text-white border border-black hover:bg-[#18181b] rounded-full px-4 py-2 transition-colors">
                  Solutions
                </button>
                <div className="absolute border border-gray-800 left-0 mt-2 hidden group-hover:grid grid-cols-3 gap-8 bg-black text-white p-8 rounded-2xl shadow-xl w-[550px]">

<div>
  <div>
  <h4 className="text-sm font-semibold mb-4 text-gray-500">SKILL LEVEL</h4>
  <ul className="space-y-3">
    {[
      { label: "AI Builders", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks-icon lucide-blocks text-[#00DC82]">
          <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/>
          <rect x="14" y="2" width="8" height="8" rx="1"/>
        </svg>
      )},
      { label: "No Code", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-metal-icon lucide-hand-metal text-[#00DC82]">
          <path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"/>
          <path d="M14 11V9a2 2 0 1 0-4 0v2"/>
          <path d="M10 10.5V5a2 2 0 1 0-4 0v9"/>
          <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"/>
        </svg>
      )}
    ].map((item, index) => (
      <li key={index}>
        <a
          href="#"
          className="flex items-start gap-3 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
            {item.icon}
          </div>
          <span className="font-medium text-white">{item.label}</span>
        </a>
      </li>
    ))}
  </ul>
</div>
</div>



<div>
  <h4 className="text-sm font-semibold mb-4 text-gray-500">WHO IT’S FOR</h4>
<ul className="space-y-3">
  {[
    { 
      label: "Startups", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up-icon lucide-trending-up text-[#00DC82]">
          <path d="M16 7h6v6"/>
          <path d="m22 7-8.5 8.5-5-5L2 17"/>
        </svg>
      )
    },
    { 
      label: "Enterprise", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2-icon lucide-building-2 text-[#00DC82]">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4"/>
          <path d="M10 10h4"/>
          <path d="M10 14h4"/>
          <path d="M10 18h4"/>
        </svg>
      )
    }
  ].map((item, index) => (
    <li key={index}>
      <a
        href="#"
        className="flex items-start gap-3 hover:text-white transition-colors"
      >
        <div className="w-8 h-8 border border-gray-800 rounded-md p-1 bg-black hover:bg-gray-400 transition-colors flex items-center justify-center">
          {item.icon}
        </div>
        <span className="font-medium text-white">{item.label}</span>
      </a>
    </li>
  ))}
</ul>

</div>

</div>
</div>



<div className="flex gap-4">
  {[
    { label: "Inversion", href: "#inversion" },
    { label: "Pricing", href: "#pricing" }
  ].map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="border border-black rounded-full px-4 py-2 font-medium text-center
              transition-colors duration-300 hover:bg-[#18181b] hover:text-white"
    >
      {item.label}
    </a>
  ))}
</div>


          <div className="flex gap-4">
            <Link href="/terms3">
            <Button variant="outline" className="border border-gray-700 bg-[#00DC82] text-black px-3 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Log In
            </Button>
          </Link>

          <div className="flex gap-4">
            <a href="">
            <Button variant="outline" className="border border-gray-700 bg-[#00DC82] text-black px-3 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact
            </Button>
          </a>

          <div className="flex gap-4">
            <a href="#">
            <Button variant="outline" className="border border-white bg-white text-black px-3 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Sign Up
            </Button>
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</header>
  );
}

