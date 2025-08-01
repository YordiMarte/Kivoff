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
  Rocket
} from "lucide-react"

const templates = [
    {
    name: "Accelerated Development",
    description: "Tools that reduce development time by 70% with pre-built components and optimized templates.",
    icons: [
      { icon: Rocket, label: "Rocket" }
    ],
  },
  {
    name: "Integrated Security",
    description: "Authentication and authorization are out of the box, with security best practices implemented from the start.",
    icons: [
      { icon: Code, label: "Next.js" },
      { icon: Zap, label: "Vercel" }
    ],
  },
  {
    name: "AI Chatbot",
    description: "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
    icons: [
      { icon: Code, label: "Next.js" },
      { icon: Bot, label: "OpenAI" },
      { icon: Zap, label: "Vercel" }
    ],
    link: "#"
  },
  {
    name: "LangChain + Next.js Starter",
    description: "Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
    icons: [
      { icon: MessageSquare, label: "LangChain" },
      { icon: Code, label: "Next.js" }
    ],
    link: "#"
  },
  {
    name: "Flutter User Management",
    description: "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
    icons: [
      { icon: Smartphone, label: "Flutter" }
    ],
    link: "#"
  },
  {
    name: "Expo React Native Starter",
    description: "An extended version of create-t3-turbo implementing authentication on both the web and mobile applications.",
    icons: [
      { icon: Globe, label: "Expo" }
    ],
    link: "#"
  }
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

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-800/50"
            >
              {/* Icons */}
              <div className="flex items-center gap-2 mb-4">
                {template.icons.map((iconData, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700"
                    title={iconData.label}
                  >
                    <iconData.icon className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {template.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {template.description}
              </p>

              {/* Link */}
              <a
                href={template.link}
                className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                View Template
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-400 mb-6">
              Create your own template and share it with the community
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Submit Template
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 