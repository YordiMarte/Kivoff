"use client"

import { div } from "framer-motion/client"
import { changelogData } from "./changelogData"

export default function ChangelogPage() {
    return (
        <div className="min-h-screen bg-[#0c0c0d] text-gray-200 px-8 py-12">
            <h1 className="text-4xl font-semibold mb-2 text-white">Changelog</h1>
            <p className="text-gray-400 mb-10">
                New updates and product improvements
            </p>


      <div className="space-y-12">
        {changelogData.map((item, index) => (
          <div key={index} className="border-l border-gray-700 pl-6 relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-500 rounded-full"></div>

            <h2 className="text-2xl font-medium text-white mb-1">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm mb-3">{item.date}</p>
            <p className="text-gray-300 mb-4">{item.description}</p>

            {item.details && (
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}