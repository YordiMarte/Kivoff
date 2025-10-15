"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search, Sun } from "lucide-react"

const sections = [
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "Account", href: "/docs/account" },
  { title: "Your Sidebar", href: "/docs/sidebar" },
  { title: "Administration", href: "/docs/administration" },
  { title: "Teams", href: "/docs/teams" },
  { title: "Issues", href: "/docs/issues" },
  { title: "Issue Properties", href: "/docs/issue-properties" },
  { title: "Projects and Initiatives", href: "/docs/projects" },
  { title: "Cycles", href: "/docs/cycles" },
  { title: "Views", href: "/docs/views" },
  { title: "Find and Filter", href: "/docs/find-filter" },
  { title: "AI", href: "/docs/ai" },
  { title: "Integrations", href: "/docs/integrations" },
  { title: "Analytics", href: "/docs/analytics" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-72 min-h-screen border-r border-neutral-800 bg-black/80 p-6 backdrop-blur-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
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
          whileHover={{ rotate: 90 }}
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
      <nav className="flex-1 overflow-y-auto overflow-x-hidden space-y-1 pr-1">
        {sections.map((s) => {
          const active = pathname === s.href
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
          )
        })}
      </nav>

      {/* FOOTER */}
      <div className="mt-8 pt-6 border-t border-neutral-800 mx-2">
        <Link
          href="/docs/developers"
          className="block text-sm text-neutral-400 hover:text-white transition mb-4"
        >
          Kivoff Developers
        </Link>
        <Link
          href="/contact-support"
          className="block mt-2 text-sm text-neutral-400 hover:text-white transition"
        >
          Contact Support
        </Link>
      </div>
    </aside>
  )
}
