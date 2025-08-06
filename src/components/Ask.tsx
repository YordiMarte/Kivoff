'use client'

import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "@/lib/motion"

const faqs = [
  {
    question: "How does Kivoff handle large-scale codebases and monorepos?",
    answer:
      "Kivoff's tools are architected for enterprise scale, efficiently handling codebases with millions of lines across thousands of files. Our AI-powered infrastructure learns your team's patterns, conventions, and architecture, ensuring suggestions match your coding standards and understand your system's unique context.",
  },
  {
    question: "Does Kivoff support on-premises or VPC deployment?",
    answer:
      "Kivoff currently operates on SOC 2 Type II compliant AWS infrastructure. While we don't offer on-premises deployment today, our cloud architecture delivers enterprise-grade security controls, data isolation, and performance for all our tools.",
  },
  {
    question: "How do usage limits work for Enterprises?",
    answer:
      "Each Enterprise developer receives a monthly allotment of premium AI requests across the Kivoff suite. Organizations can pre-commit additional usage for high-volume teams, while administrators maintain full cost control through configurable limits at both the team and individual user level.",
  },
  {
    question: "How can I track AI adoption across my organization?",
    answer:
      "Enterprise administrators have access to comprehensive analytics dashboards showing adoption rates, usage patterns by team and individual, AI-assisted code metrics, and productivity insights. Data can be exported through our API for integration with your existing analytics platforms.",
  },
]

export function Ask() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-4"
              >
                <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                <span className="text-white flex-shrink-0 ml-4">
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 pt-2 pb-4 pr-8">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
