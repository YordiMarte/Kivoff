import { section } from "framer-motion/client";

export default function TermsServiceC() {
    return (
        <section className="min-h-screen bg-black text-gray-300 flex flex-col items-center px-6 py-20">
            <div className="max-w-3xl text-center mb-16">
        <h1 className="text-6xl font-semibold text-white mb-4">How can we help?</h1>
        <p className="text-center text-gray-400 text-lg max-w-xl">
            Get in touch with our sales and support teams for demos, onboarding support, or product questions.
        </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-[#111] border border-[#18181b] rounded-2xl p-8 transition">
            <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
            </svg>
            <h3 className="text-white font-medium text-lg">Sales</h3>
        </div>
        <p className="text-ls text-white mb-6">
            Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
        </p>
            <button className=" bg-[#00DC82] hover:bg-green-300 text-black font-medium px-4 py-2 rounded-lg text-sm transition">
            Talk to sales →
        </button>
    </div>

        <div className="bg-[#111] border border-[#18181b] rounded-2xl p-8 transition">
            <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>
                </svg>
            <h3 className="text-white font-medium text-lg">Help & Support</h3>
        </div> 
            <p className="text-ls text-white mb-6">
            Ask product questions, report problems, or leave feedback.
        </p>
            <button className="bg-[#00DC82] hover:bg-green-300 text-black font-medium px-4 py-2 rounded-lg text-sm transition">
            Contact support →
        </button>
    </div>
</div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mt-24">
        <div>
            <h4 className="text-white font-medium mb-2">Join the community</h4>
            <p className="text-sm text-gray-400 mb-2">
            More than 15,000 Kivoff users share questions and best practices in our Slack community.
        </p>
        <a href="#" className="text-sm text-[#00DC82] hover:underline">Join Slack →</a>
    </div>

        <div>
            <h4 className="text-white font-medium mb-2">Documentation</h4>
            <p className="text-sm text-gray-400 mb-2">
            Explore Kivoff’s features, integrations, and how to use them.
        </p>
            <a href="#" className="text-sm text-[#00DC82] hover:underline">Kivoff Docs →</a>
    </div>

        <div>
            <h4 className="text-white font-medium mb-2">General communication</h4>
            <p className="text-sm text-gray-400 mb-2">
            For other queries, get in touch via email.
        </p>
            <a href="mailto:hello@kivoff.com" className="text-sm text-[#00DC82] hover:underline">
            hello@kivoff.com
        </a>
    </div>

        <div>
            <h4 className="text-white font-medium mb-2">Developers</h4>
            <p className="text-sm text-gray-400 mb-2">
            Learn how to use the Kivoff API and SDK to extend our tools.
        </p>
            <a href="#" className="text-sm text-[#00DC82] hover:underline">Kivoff API →</a>
        </div>
    </div>

        <p className="text-gray-500 text-sm mt-20">
        <span className="text-[#00DC82] mr-2">●</span> All systems operational
    </p>
    </section>
    )
}