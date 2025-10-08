export default function TermsServiceS() {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-black text-white">
        <div className="mb-8 flex flex-col items-center">
            <img
                src="/KivoffLogo.svg"
                alt="Kivoff Logo"
                className="h-13 w-auto"
            />
        <h1 className="text-lg font-medium mt-6">Log in to Kivoff</h1>
    </div>

    <div className="w-full max-w-xs flex flex-col gap-3">
        <button className="w-full bg-[#00DC82] hover:bg-green-300 text-white py-3 rounded-md font-medium transition">
            Continue with Google
        </button>
        <button className="w-full bg-[#18181b] hover:bg-[#27272a] text-gray-300 py-3 rounded-md font-medium transition border border-gray-700">
            Continue with email
        </button>
        <button className="w-full bg-[#18181b] hover:bg-[#27272a] text-gray-300 py-3 rounded-md font-medium transition border border-gray-700">
            Continue with SAML SSO
        </button>
    </div>

        <div className="text-center mt-6 space-y-2">
            <p className="text-gray-500 text-sm">
                By signing up, you agree to our{" "}
            <a href="/terms" className="text-white hover:underline">
                Terms of Service
            </a>{" "}
            and{" "}
            <a href="/data-processing" className="text-white hover:underline">
                Data Processing Agreement
            </a>
        .
    </p>

        <p className="text-gray-400 text-sm">
            Already have an account?{" "}
        <a href="/terms3" className="text-white hover:underline">
            Log in
        </a>
    </p>
</div>
</div>
    );
}
