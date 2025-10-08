import { section } from "framer-motion/client";

export default function TermsServiceC() {
    return (
        <section className="min-h-screen bg-black text-gray-300 flex flex-col items-center px-6 py-20">
      {/* Header */}
      <div className="max-w-3xl text-center mb-16">
        <h1 className="text-5xl font-semibold text-white mb-4">How can we help?</h1>
        <p className="text-gray-400 text-lg">
          Get in touch with our sales and support teams for demos, onboarding support, or product questions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Sales */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📩</span>
            <h3 className="text-white font-medium text-lg">Sales</h3>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
          </p>
          <button className="border border-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition">
            Talk to sales →
          </button>
        </div>

        {/* Support */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">💬</span>
            <h3 className="text-white font-medium text-lg">Help & Support</h3>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Ask product questions, report problems, or leave feedback.
          </p>
          <button className="border border-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition">
            Contact support →
          </button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mt-24">
        <div>
          <h4 className="text-white font-medium mb-2">Join the community</h4>
          <p className="text-sm text-gray-400 mb-2">
            More than 15,000 Kivoff users share questions and best practices in our Slack community.
          </p>
          <a href="#" className="text-sm text-indigo-400 hover:underline">Join Slack →</a>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Documentation</h4>
          <p className="text-sm text-gray-400 mb-2">
            Explore Kivoff’s features, integrations, and how to use them.
          </p>
          <a href="#" className="text-sm text-indigo-400 hover:underline">Kivoff Docs →</a>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">General communication</h4>
          <p className="text-sm text-gray-400 mb-2">
            For other queries, get in touch via email.
          </p>
          <a href="mailto:hello@kivoff.com" className="text-sm text-indigo-400 hover:underline">
            hello@kivoff.com
          </a>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Developers</h4>
          <p className="text-sm text-gray-400 mb-2">
            Learn how to use the Kivoff API and SDK to extend our tools.
          </p>
          <a href="#" className="text-sm text-indigo-400 hover:underline">Kivoff API →</a>
        </div>
      </div>

      {/* Status */}
      <p className="text-gray-500 text-sm mt-20">
        <span className="text-indigo-400 mr-2">●</span> All systems operational
      </p>
    </section>
    )
}