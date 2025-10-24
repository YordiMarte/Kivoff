"use client"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { h1 } from "framer-motion/client"

export function Sidebar2() {
    const [open, setOpen] = useState(true)

    return (
        <aside
            className={`${
                open ? "w-64" : "w-16"
            } bg-[#0d0d0d] border-r border-white/10 text-white h-screen flex flex-col transition-all duration-300`}
        >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-emerald-400" />
                    {open && <h1 className="text-sm font-semibold">Kivoff UI Library</h1>}
                </div>

                <button 
                    onClick={() => setOpen(!open)} 
                    className="p-1"
                    aria-label={open ? "Colapsar menú lateral" : "Expandir menú lateral"}
                    title={open ? "Colapsar menú lateral" : "Expandir menú lateral"}
                >
                    <ChevronRight
                        className={`h-4 w-4 text-white/60 transition-transform ${
                            open ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>

            <div className=" flex-1 overflow-y-auto px-3 py-4 text-sm space-y-6">
                <div>
                    <h2 className="text-xs text-white/40 mb-1 uppercase tracking-wider">Getting Started</h2>
                    <ul className="space-y-1">
                        <li>Introduction</li>
                        <li>Quick Start</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xs text-white/40 mb-1 uppercase tracking-wider">Blocks</h2>
                    <ul className="space-y-1">
                        <li>Password-Based Auth</li>
                        <li className="flex items-center gap-2">
                            <span>Social Auth</span>
                            <span className="text-[10px] bg-emerald-500 text-black px-1.5 py-[1px] rounded-md">NEW</span>
                        </li>
                        <li>Dropzone</li>
                        <li>Realtime</li>
                    </ul>
                </div>                
            </div>
        </aside>
    )
}