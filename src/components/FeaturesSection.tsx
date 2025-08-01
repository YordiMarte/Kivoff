'use client'

import { motion } from "@/lib/motion"

const features = [
  {
    icon: "🚀",
    title: "Desarrollo Acelerado",
    description: "Herramientas que reducen el tiempo de desarrollo en un 70% con componentes pre-construidos y templates optimizados."
  },
  {
    icon: "🔒",
    title: "Seguridad Integrada",
    description: "Autenticación y autorización listas para usar, con las mejores prácticas de seguridad implementadas desde el inicio."
  },
  {
    icon: "📊",
    title: "Observabilidad Completa",
    description: "Monitoreo en tiempo real, métricas detalladas y alertas inteligentes para mantener tus aplicaciones funcionando perfectamente."
  },
  {
    icon: "🤖",
    title: "IA Integrada",
    description: "Capacidades de IA nativas para automatizar tareas repetitivas y mejorar la productividad del equipo de desarrollo."
  },
  {
    icon: "⚡",
    title: "Performance Optimizada",
    description: "Aplicaciones ultra-rápidas con optimizaciones automáticas, lazy loading y caching inteligente."
  },
  {
    icon: "🌐",
    title: "Escalabilidad Global",
    description: "Deploy automático a múltiples regiones con CDN global y balanceo de carga inteligente."
  }
]

const stats = [
  { number: "10x", label: "Más rápido desarrollo" },
  { number: "99.9%", label: "Uptime garantizado" },
  { number: "50+", label: "Componentes pre-construidos" },
  { number: "24/7", label: "Soporte técnico" }
]

export function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por qué elegir Kivoff
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construimos las herramientas que necesitas para crear aplicaciones modernas, escalables y seguras
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Números que hablan por sí solos
            </h3>
            <p className="text-gray-600">
              Resultados reales de equipos que usan nuestras herramientas
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de desarrolladores que ya están construyendo el futuro con Kivoff
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Comenzar gratis
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver documentación
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 