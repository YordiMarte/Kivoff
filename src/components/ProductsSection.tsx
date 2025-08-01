'use client'

import { motion } from "@/lib/motion"

const products = [
  {
    name: "CoreKit",
    icon: "🗄️",
    iconBg: "bg-blue-500",
    status: "Disponible",
    statusColor: "bg-green-100 text-green-700",
    description: "Framework fullstack con Supabase integrado, autenticación lista y componentes pre-construidos",
    features: ["Auth completa", "Base de datos lista", "API Routes", "Componentes UI"],
    link: "#",
    available: true
  },
  {
    name: "vX",
    icon: "⚡",
    iconBg: "bg-purple-500",
    status: "Beta",
    statusColor: "bg-blue-100 text-blue-700",
    description: "Generador visual de interfaces con IA que convierte diseños en código React + Tailwind",
    features: ["Design to Code", "IA Visual", "React + Tailwind", "Export instantáneo"],
    link: "#",
    available: true
  },
  {
    name: "Kivoff AI",
    icon: "🧠",
    iconBg: "bg-green-500",
    status: "Próximamente",
    statusColor: "bg-purple-100 text-purple-700",
    description: "SDK para crear asistentes inteligentes y automatizar workflows de desarrollo",
    features: ["SDK Modular", "Asistentes IA", "Automation", "Multi-modelo"],
    link: "#",
    available: false
  },
  {
    name: "Devflow",
    icon: "🔄",
    iconBg: "bg-orange-500",
    status: "En desarrollo",
    statusColor: "bg-orange-100 text-orange-700",
    description: "Monorepo avanzado con herramientas de CI/CD, testing y deployment automatizado",
    features: ["Monorepo Setup", "CI/CD Automático", "Testing Suite", "Deploy One-Click"],
    link: "#",
    available: false
  }
]

export function ProductsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas y frameworks diseñados para acelerar el desarrollo moderno
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
                    className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Explorar <span aria-hidden>→</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-gray-500 font-medium">
                    Próximamente <span aria-hidden>→</span>
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