"use client"

import { useState } from "react"
import { ChevronRight, Search } from "lucide-react"
import DocsPage from "./DocsPage2"

export function Sidebar2() {
  const [open, setOpen] = useState(true)

  return (
    <aside
      className={`${
        open ? "w-64" : "w-20"
      } bg-[#0a0a0a] border-r border-white/10 text-white h-screen flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between p-4 border-b border-white/10 ${
          !open ? "flex-col gap-2" : ""
        }`}
      >
        <a
          href="/"
          className={`flex ${
            open ? "items-center justify-start gap-2" : "flex-col items-center"
          } min-w-0 w-full`}
        >
          <img
            src="/KivoffIco.svg"
            alt="Kivoff Logo"
            className={`${open ? "h-6" : "h-8"} w-auto flex-shrink-0 transition-all duration-300`}
          />
          {open && (
            <h1 className="text-[15px] font-semibold text-white whitespace-nowrap">
              Kivoff UI Library
            </h1>
          )}
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`p-1 transition-transform ${
            !open ? "rotate-90 mt-2" : ""
          }`}
          aria-label={open ? "Colapsar menú lateral" : "Expandir menú lateral"}
        >
          <ChevronRight
            className={`h-4 w-4 text-white/60 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

{/* Search */} 
{open && ( 
  <div className="px-4 py-3 border-b border-white/10"> 
    <div className="relative flex items-center gap-2 bg-[#111111] border border-white/10 rounded-md px-3 py-2 text-sm text-gray-300"> 
      <Search className="h-4 w-4 text-gray-400" /> 
      <input 
        type="text" 
        placeholder="Search UI Library..." 
        className="bg-transparent outline-none flex-1 placeholder:text-gray-500 pr-12" 
      /> 
      <kbd className="absolute right-3 text-[10px] text-gray-500 border border-gray-700 px-1.5 py-[1px] rounded"> 
        ⌘K 
      </kbd>
    </div> 
  </div> 
)}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6 text-[13px] space-y-8">
        {/* Getting Started */}
        <div>
          <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
            Getting Started
          </h2>
          <ul className="space-y-1.5">
            <li className="hover:text-white/90 cursor-pointer">Introduction</li>
            <li className="hover:text-white/90 cursor-pointer">Quick Start</li>
            <li className="hover:text-white/90 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Blocks */}
        <div>
          <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
            Blocks
          </h2>
          <ul className="space-y-1.5">
            <li className="hover:text-white/90 cursor-pointer">Client</li>
            <li className="hover:text-white/90 cursor-pointer">
              Password-Based Auth
            </li>
            <li className="flex items-center gap-2 hover:text-white/90 cursor-pointer">
              <span>Social Auth</span>
              <span className="text-[10px] bg-emerald-500/90 text-black px-1.5 py-[1px] rounded-md">
                NEW
              </span>
            </li>
            <li className="hover:text-white/90 cursor-pointer">Dropzone</li>
            <li className="hover:text-white/90 cursor-pointer">Realtime Cursor</li>
            <li className="hover:text-white/90 cursor-pointer">Current User Avatar</li>
            <li className="hover:text-white/90 cursor-pointer">Realtime Avatar Stack</li>
            <li className="hover:text-white/90 cursor-pointer">Realtime Chat</li>
            <li className="flex items-center gap-2 hover:text-white/90 cursor-pointer">
              <span>Infinite Query Hook</span>
              <span className="text-[10px] bg-emerald-500/90 text-black px-1.5 py-[1px] rounded-md">
                NEW
              </span>
            </li>
          </ul>
        </div>

        {/* AI Editors Rules */}
        <div>
          <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
            AI Editors Rules
          </h2>
          <ul className="space-y-1.5">
            <li className="hover:text-white/90 cursor-pointer">Prompts</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
            Platform
          </h2>
          <ul className="space-y-1.5">
            <li className="hover:text-white/90 cursor-pointer">Platform Kit</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
