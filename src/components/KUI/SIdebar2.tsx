"use client"
import { useState } from "react"
import { ChevronRight, Search } from "lucide-react"

interface DocsPage2Props {
  active: string
}

export function DocsPage2({ active }: DocsPage2Props) {
  return (
    <div className="text-white">
      Página Docs — Active: {active}
    </div>
  )
}

export default function Sidebar2() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState("password-auth");

  return (
    <>
      <style jsx global>{`
        /* Ocultar todos los scrollbars */
        * {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE y Edge */
        }
        
        *::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <div className="flex h-screen overflow-hidden">
        {/* SIDEBAR */}
        <aside
          className={`${
            open ? "w-64" : "w-20"
          } bg-[#0a0a0a] border-r border-white/10 text-white flex flex-col transition-all duration-300`}
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
                open
                  ? "items-center justify-start gap-2"
                  : "flex-col items-center"
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
              className={`p-1 transition-transform ${!open ? 'rotate-90 mt-2' : ''}`}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              title={open ? "Cerrar menú" : "Abrir menú"}
            >
              <ChevronRight
                className={`h-4 w-4 text-white/60 transition-transform ${!open ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Search */}
          {open && (
            <div className="px-4 py-3 border-b border-white/10">
              <div className="relative flex items-center gap-2 bg-[#111111] border border-white/10 rounded-md px-3 py-2 text-sm text-gray-400">
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

          {/* Navigation - sin scrollbar visible */}
          <div className="flex-1 overflow-y-auto px-4 py-6 text-[13px] space-y-8">          {/* Navigation - sin scrollbar visible */}

            {/* Getting Started */}
            <div>
              <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
                Getting Started
              </h2>
              <ul className="space-y-1.5">
                <li
                  onClick={() => setActive("intro")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "intro" ? "text-white" : "text-white/70"
                  }`}
                >
                  Introduction
                </li>
                <li
                  onClick={() => setActive("quickstart")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "quickstart" ? "text-white" : "text-white/70"
                  }`}
                >
                  Quick Start
                </li>
                <li
                  onClick={() => setActive("faq")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "faq" ? "text-white" : "text-white/70"
                  }`}
                >
                  FAQ
                </li>
              </ul>
            </div>

            {/* Blocks */}
            <div>
              <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
                Blocks
              </h2>
              <ul className="space-y-1.5">
                <li
                  onClick={() => setActive("client")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "client" ? "text-white" : "text-white/70"
                  }`}
                >
                  Client
                </li>

                <li
                  onClick={() => setActive("password-auth")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "password-auth" ? "text-white" : "text-white/70"
                  }`}
                >
                  Password-Based Auth
                </li>

                <li
                  onClick={() => setActive("social-auth")}
                  className={`cursor-pointer flex items-center gap-2 hover:text-white/90 transition-colors ${
                    active === "social-auth" ? "text-white" : "text-white/70"
                  }`}
                >
                  <span>Social Auth</span>
                  <span className="text-[10px] bg-emerald-500/90 text-black px-1.5 py-[1px] rounded-md">
                    NEW
                  </span>
                </li>

                <li
                  onClick={() => setActive("dropzone")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "dropzone" ? "text-white" : "text-white/70"
                  }`}
                >
                  Dropzone
                </li>

                <li
                  onClick={() => setActive("realtime-cursor")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "realtime-cursor" ? "text-white" : "text-white/70"
                  }`}
                >
                  Realtime Cursor
                </li>

                <li
                  onClick={() => setActive("avatar")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "avatar" ? "text-white" : "text-white/70"
                  }`}
                >
                  Current User Avatar
                </li>

                <li
                  onClick={() => setActive("avatar-stack")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "avatar-stack" ? "text-white" : "text-white/70"
                  }`}
                >
                  Realtime Avatar Stack
                </li>

                <li
                  onClick={() => setActive("realtime-chat")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "realtime-chat" ? "text-white" : "text-white/70"
                  }`}
                >
                  Realtime Chat
                </li>

                <li
                  onClick={() => setActive("infinite-query")}
                  className={`cursor-pointer flex items-center gap-2 hover:text-white/90 transition-colors ${
                    active === "infinite-query" ? "text-white" : "text-white/70"
                  }`}
                >
                  <span>Infinite Query Hook</span>
                  <span className="text-[10px] bg-emerald-500/90 text-black px-1.5 py-[1px] rounded-md">
                    NEW
                  </span>
                </li>
              </ul>
            </div>

            {/* AI Editors */}
            <div>
              <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
                AI Editors Rules
              </h2>
              <ul className="space-y-1.5">
                <li
                  onClick={() => setActive("prompts")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "prompts" ? "text-white" : "text-white/70"
                  }`}
                >
                  Prompts
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h2 className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">
                Platform
              </h2>
              <ul className="space-y-1.5">
                <li
                  onClick={() => setActive("platform-kit")}
                  className={`cursor-pointer hover:text-white/90 transition-colors ${
                    active === "platform-kit" ? "text-white" : "text-white/70"
                  }`}
                >
                  Platform Kit
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}