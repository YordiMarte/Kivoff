'use client'

import { motion } from "@/lib/motion"
import { 
  Github, 
  ExternalLink, 
  CreditCard, 
  Bot, 
  MessageSquare, 
  Database, 
  Smartphone, 
  Globe,
  Zap,
  Shield,
  Users,
  Code,
  Rocket,
  Lock,
  Brain,
  Command,
  CodeXml,
} from "lucide-react"

const templates = [
    {
    name: "Accelerated Development",
    description: "Tools that reduce development time by 70% with pre-built components and optimized templates.",
    icons: [
      { icon: Command, label: "Command" }
    ],
  },
  {
    name: "Integrated Security",
    description: "Authentication and authorization are out of the box, with security best practices implemented from the start.",
    icons: [
      { icon: Lock, label: "Lock" }
    ],
  },
  {
    name: "Complete Observability",
    description: "Real-time monitoring, detailed metrics, and smart alerts to keep your applications running smoothly.",
    icons: [
      { icon: CodeXml, label: "Codexml" },
    ],
  },
  {
    name: "Integrated AI",
    description: "Native AI capabilities to automate repetitive tasks and improve development productivity.",
    icons: [
      { icon: Brain, label: "Brain" }
    ],
  },
  {
    name: "Optimized Performance",
    description: "Ultra-fast apps with automatic optimizations, lazy loading, and smart caching.",
    icons: [
      { icon: Zap, label: "Zap" }
    ],
  },
  {
    name: "Global Scalability",
    description: "Automatic deployment to multiple regions with global CDN and intelligent load balancing.",
    icons: [
      { icon: Globe, label: "Globe" }
    ],
  },
]

export function TemplatesSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why choose Kivoff
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            We build the tools you need to create modern, scalable, and secure applications.
          </p>
          </div>

        {/* Templates Grid - estilo tarjetas modernas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-gray-700 bg-[#111112] p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: '0 0 0 1.5px #fff2, 0 0 12px 0 #fff1' }}
            >
              {/* Icono grande en la esquina superior izquierda */}
              <div className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 rounded-lg bg-[#18181b] border border-gray-700">
                {template.icons[0] && (() => {
                  const Icon = template.icons[0].icon;
                  return <Icon className="w-6 h-6 text-[#00DC82]" />;
                })()}
              </div>
              {/* Título */}
              <h3 className="text-2xl font-bold text-white mb-2 mt-12">
                {template.name}
              </h3>
              {/* Descripción */}
              <p className="text-gray-300 text-base leading-relaxed">
                {template.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )}
