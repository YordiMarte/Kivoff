"use client"

import { Code, Rocket, Users } from "lucide-react"

const stats = [
  {
    name: "Designed specifically for solopreneurs, startups, and agile teams",
    value: "Designed for Creators",
    icon: Users,
  },
  {
    name: "Architecture that grows with you, from MVP to enterprise",
    value: "Scalability from Day 1",
    icon: Rocket,
  },
  {
    name: "Exceptional DX with clear documentation and intuitive tools",
    value: "Developer Experience",
    icon: Code,
  },
]

export function Information() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 mt-0">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Trusted by the most innovative teams
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Kivoff offers AI-powered tools and infrastructure to create, 
            scale, and launch smarter digital products
          </p>
        </div>

        <div className="mt-36">
          <div className="grid grid-cols-1 gap-y-12 text-center sm:grid-cols-3 sm:gap-x-6 lg:gap-x-8">
            {stats.map(stat => (
              <div key={stat.name} className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-base leading-7 text-gray-400">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
