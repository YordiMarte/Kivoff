'use client'

import { motion } from "@/lib/motion"
import { flushAllTraces } from "next/dist/trace"

const products = [
  {
    name: "Infera.js",
    icon: <img src="/In.svg" alt="Infera.js Logo" className="w-8 h-8" />,
    iconBg: "bg-black",
    status: "Available",
    statusColor: "bg-green-100 text-green-700",
    description: "An SDK + Infrastructure that enables developers to integrate AI in seconds with npm install infera.",
    features: ["Auth + AI", "SDK + Pnpm ", "API Routes", "Infrastructure automática"],
    link: "#",
    available: true
  },
  {
    name: "Veftro",
    icon: <img src="/Ve.svg" alt="Veftro Logo" className="w-8 h-8" />,
    iconBg: "bg-black",
    status: "Coming soon",
    statusColor: "bg-gray-100 text-gray-700",
    description: "Visual interface generator with AI that converts designs into React + Tailwind code",
    features: ["Design to Code", "IA Visual", "React + Tailwind", "Export instantáneo"],
    link: "#",
    available: false
  },
  {
    name: "Oryze",
    icon: <img src="/O.svg" alt="Oryze Logo" className="w-8 h-8" />,
    iconBg: "bg-black",
    status: "Coming soon",
    statusColor: "bg-gray-100 text-gray-700",
    description: "SDK to create smart assistants and automate development workflows",
    features: ["SDK Modular", "Asistentes IA", "Automation", "Multi-modelo"],
    link: "#",
    available: false
  },
  {
    name: "Fforve",
    icon: <img src="/f.svg" alt="Fforve Logo" className="w-8 h-8" />,
    iconBg: "bg-black",
    status: "Coming soon",
    statusColor: "bg-gray-100 text-gray-700",
    description: "Advanced monorepo with CI/CD tools, testing, and automated deployment",
    features: ["Monorepo Setup", "CI/CD Automático", "Testing Suite", "Deploy One-Click"],
    link: "#",
    available: false
  }
]

export function ProductsSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our products
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tools and frameworks designed to accelerate modern development
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              {/* Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${product.iconBg} rounded-xl flex items-center justify-center text-white text-xl`}>
                  {product.icon}
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-lg text-center"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-auto">
                {product.available ? (
                  <a
                    href={product.link}
                    className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold hover:text-[#00DC82] transition-colors"
                  >
                    Explore <span aria-hidden>→</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-gray-500 font-medium">
                    Coming soon <span aria-hidden>→</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 