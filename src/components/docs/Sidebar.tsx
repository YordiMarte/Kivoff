"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {  Search , Sun } from "lucide-react"
import { sections } from "@/components/docs/data/sections"


export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-72 min-h-screen border-r border-neutral-800 bg-black/90 p-6 backdrop-blur-md">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <img src="/KivoffIco.svg" alt="Kivoff Logo" className="h-9 w-9" />
          <Link
            href="/"
            className="text-lg font-semibold text-white hover:text-gray-200 transition"
          >
            Docs
          </Link>
        </div>
        <motion.button
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800"
        >
          <Sun className="h-4 w-4 text-neutral-400" />
        </motion.button>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-md px-2 py-1 mb-6">
        <Search className="h-4 w-4 text-neutral-500" />
        <input
          type="text"
          placeholder="Search docs..."
          className="bg-transparent border-none outline-none text-sm text-neutral-300 ml-2 w-full placeholder-neutral-500"
        />
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden space-y-2 pr-1 scrollbar-none">
        {sections.map((s) => {
          const active = pathname === s.href;
          return (
            <motion.div
              key={s.href}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={s.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors truncate",
                  active
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                )}
              >
                {s.title}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="mt-8 pt-6 border-t border-neutral-800 mx-2">
        <Link
          href="/docs/developers"
          className="flex items-center gap-2 mt-2 text-sm text-neutral-400 hover:text-white transition mb-4"
        >
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          className="lucide lucide-bot-message-square"
          >
            <path d="M12 6V2H8"/>
            <path d="M15 11v2"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
            <path d="M9 11v2"/>
          </svg>
          Kivoff Developers
        </Link>

        <Link
          href="/contact-support"
          className="flex items-center gap-2 mt-2 text-sm text-neutral-400 hover:text-white transition"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-message-circle-icon lucide-message-circle"
            >
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
            </svg>
          Contact Support
        </Link>
      </div>
    </aside>
  )
}
