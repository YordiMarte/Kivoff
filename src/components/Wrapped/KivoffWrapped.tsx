"use client";

import { motion } from "framer-motion";

export default function KivoffWrapped() {
    return(
        <section className="relative w-full bg-black text-white overflow-hidden">
            {/* desing - Tiled background system */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
            <div className="border-r border-b border-white/10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_6px)]" />
            <div className="border-r border-b border-white/10" />
            <div className="border-r border-b border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:6px_6px]" />
            <div className="border-b border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_6px)]" />
            <div />
        </div>

            {/* Background grid 2025*/}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,254,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,254,255,0.04)_1px,transparent_1px)] bg-[size:48]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
            </div>

            {/* Information of Kivoff Wrapped */}
            <div className="relative mx-auto max-w-5xl px-6 py-32">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Kivoff <span className="text-[#00DC82]">Wrapped</span>
                </h1>
                <p className="mt-6 max-2xl text-lg md:text-xl text-neutral-400">
                    You created more Kivoff products in 2025 than in all previous years 
                    combined.
                </p>
            </div>

            {/* Launch Year Section */}
            <section className="relative w-full bg-black text-white overflow-hidden border-t border-white/10">
                <div className="pointer-events-none absolute inset-0">
            {/* Floating animated tiles */}
                <motion.div
                    animate={{ y: [0, -12, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[10%] top-[15%] h-20 w-20 border border-white/10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_6px)]"
                />
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[30%] top-[40%] h-16 w-16 border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:6px_6px]"
                />
                <motion.div
                    animate={{ y: [0, -8, 0], opacity: [0.5, 0.75, 0.5] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[55%] top-[25%] h-12 w-12 border border-white/10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_6px)]"
                />
                <motion.div
                    animate={{ y: [0, 14, 0], opacity: [0.6, 0.85, 0.6] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[12%] top-[35%] h-28 w-28 border border-white/10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_6px)]"
                />
                <motion.div
                    animate={{ y: [0, -10, 0], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[20%] bottom-[20%] h-24 w-24 border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:6px_6px]"
                />
                <motion.div
                    animate={{ y: [0, 8, 0], opacity: [0.5, 0.75, 0.5] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[35%] bottom-[18%] h-14 w-14 border border-white/10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_6px)]"
                />
            </div>  

                <div className="relative mx-auto max-w-6xl px-6 py-24">
                    {/* Header */}
                    <div className="mb-16 ml-8 md:ml-13">
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                            Launch <span className="line-through text-neutral-600">Week</span>{" "}
                            <span className="text-white">Year</span>
                        </h2>
                        <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
                            Product Announcements - Everything we shipped in 2025.
                        </p>
                    </div>

                    {/* Grid 2025 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* October */}
                        <div className="border border-white/10 rounded-2xl p-6 bg-black  backdrop-blur">
                            <h3 className="text-xl font-semibold">October 2025 <span className="text-neutral-400 font-normal">.4 announcements</span></h3>
                            <ul className="mt-6 space-y-3 text-neutral-300">
                                <li>→ 17 oct: Start my journey as a founder</li>
                                <li>→ 22 oct: I already planned the structure and the kivoff products</li>
                                <li>→ 25 oct: building the Kivoff website...</li>
                                <li>→ 30 oct: Kickoff products already defined!</li>
                            </ul>
                        </div>

                        {/* November */}
                        <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold">November 2025</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">Launch Week</span>
                                <span className="text-neutral-400 text-sm">. 6 announcements</span>
                            </div>
                            <ul className="mt-6 space-y-3 text-neutral-300">
                                <li>→ 05 nov: Kivoff Landing page is live!</li>
                                <li>→ 12 nov: First version of Kivoff Tasks launched</li>
                                <li>→ 18 nov: Kivoff Notes is now available</li> 
                                <li>→ 24 nov: Kivoff Calendar released</li>
                                <li>→ 28 nov: Kivoff Habits launched</li>
                                <li>→ 30 nov: Kivoff Wrapped 2025 is here!</li>
                            </ul>
                        </div>

                        {/* December */}
                        <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur">
                            <h3 className="text-xl font-semibold">December 2025</h3>
                                <span className="text-neutral-400 text-sm">. 6 announcements</span>
                            <ul className="mt-6 space-y-3 text-neutral-300">
                                <li>→ 05 dec: Documentation Area</li>
                                <li>→ 12 dec: Kivoff UI is released</li>
                                <li>→ 20 dec: I am developing & Deploy infera.JS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
