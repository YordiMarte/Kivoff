"use client"

import { Button } from "@/components/ui/button"
import { section } from "framer-motion/client"

export function ContactDemo() {
    return (
        <section className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
            {/* Left Side - Contact Form */}
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                    Talk to our Sales team
                </h1>
                <p className="text-gray-400 max-w-md mb-16">
                    Book a demo and set up a trial Enterprise account to see how
                    Kivoff-style infrastructure can accelerate your business growth and
                    app development.
                </p>

                <blockquote className="border-1-2 border-emerald-500 pl-6 text-lg text-white">
                    "The full solution was built and in production in less than one week."
                    <footer className="mt-4 text-sm text-gray-400">Developer, Kivoff</footer>
                </blockquote>
            </div>

{/* Right */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="text-sm text-gray-400">First Name:</label>
        <input 
            className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" 
            type="text"
            placeholder="First Name"
        />
            </div>
        <div>
            <label className="text-sm text-gray-400">Last Name:</label>
        <input 
            className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" 
            type="text"
            placeholder="Last Name"
        />
        </div>
    </div>

    <div>
            <label className="text-sm text-gray-400">Company Email:</label>
        <input 
        className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" 
        type="email"
        placeholder="Company Email"
        />
    </div>

    <div>
            <label className="text-sm text-gray-400">What are you interested in?</label>
        <textarea
        rows={4}
        className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2"
        placeholder="Tell us about your interest..."
        />
    </div>

                        <button className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 px-6 py-3 font-medium text-white transition-colors">
                    Request a Demo
                </button>
            </form>
        </div>
    </section>
    )
}