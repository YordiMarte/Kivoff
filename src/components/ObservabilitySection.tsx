'use client'

import { motion } from "@/lib/motion"

export function ObservabilitySection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-gray-400 font-medium">Observability</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              Route-aware observability
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Monitor and analyze the performance and traffic of your projects.
            </p>
          </div>

          {/* Right - Graph */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              {/* Graph Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">Homepage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">Checkout</span>
                  </div>
                </div>
                
                {/* Metrics Overlay */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">Homepage</span>
                  </div>
                  <div className="text-white font-semibold">651,100</div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">Checkout</span>
                  </div>
                  <div className="text-white font-semibold">217,600</div>
                </div>
              </div>

              {/* Graph Container */}
              <div className="relative h-64 bg-gray-800 rounded-lg p-4">
                {/* Y-axis labels */}
                <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                  <span>400k</span>
                  <span>300k</span>
                  <span>200k</span>
                  <span>100k</span>
                </div>

                {/* Graph Lines */}
                <div className="ml-8 h-full relative">
                  {/* Blue line (Homepage) */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                    <path
                      d="M0,150 L50,120 L100,80 L150,40 L200,20 L250,60 L300,100"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  {/* Orange line (Checkout) */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                    <path
                      d="M0,180 L50,160 L100,140 L150,120 L200,100 L250,120 L300,140"
                      stroke="#F97316"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  Function Invocations
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-300 transition-colors">
                  Project X
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 