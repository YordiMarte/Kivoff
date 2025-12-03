export default function TermsNewInform() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
        <main className="relative max-w-3xl mx-auto pt-24 pb-32">

        <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div className="border-r border-neutral-700 opacity-20" />
        </div>

        <div className="mb-8">
            <a
            className="text-sm text-neutral-400 hover:text-neutral-200 transition flex items-center gap-2"
        >
            <span>←</span> Blog
        </a>
    </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            View all information and ads
        </h1>

        <div className="flex justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#00DC82]" />
            <div className="w-10 h-10 rounded-full bg-[#00DC82]" />
            <div className="w-10 h-10 rounded-full bg-[#00DC82]" />
        </div>

        <div className="flex items-center justify-center text-neutral-400 text-sm mb-4">
            <p>Kivoff website created on November 12, 2025</p>
        </div>

        <p className="text-neutral-500 text-sm text-right mb-12">
            Last updated: November 21, 2025
        </p>

        <article className="prose prose-invert prose-neutral max-w-none leading-relaxed">
            <p>
                Welcome to Kivoff! These Terms and Conditions govern your
                use of our website and services. By accessing or using Kivoff, you agree
                to comply with these Terms. If you do not agree with any part of these
                Terms, please do not use our services. Thank you for using Kivoff.
            </p>

            </article>
        </main>
    </div>
  );
}
