export default function TermsServiceL() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-black text-white">
      <div className="mb-8 flex flex-col items-center">
        <img
          src="/KivoffLogo.svg"
          alt="Kivoff Logo"
          className="w-12 h-12 mb-4"
        />
        <h1 className="text-lg font-medium">Log in to Kivoff</h1>
      </div>

      {/* Botones */}
      <div className="w-full max-w-xs flex flex-col gap-3">
        <button className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white py-3 rounded-md font-medium transition">
          Continue with Google
        </button>
        <button className="w-full bg-[#18181b] hover:bg-[#27272a] text-gray-300 py-3 rounded-md font-medium transition border border-gray-700">
          Continue with email
        </button>
        <button className="w-full bg-[#18181b] hover:bg-[#27272a] text-gray-300 py-3 rounded-md font-medium transition border border-gray-700">
          Continue with SAML SSO
        </button>
        <button className="w-full bg-[#18181b] hover:bg-[#27272a] text-gray-300 py-3 rounded-md font-medium transition border border-gray-700">
          Log in with passkey
        </button>
      </div>

      {/* Footer */}
      <p className="text-gray-400 text-sm mt-6">
        Don’t have an account?{" "}
        <a href="/signup" className="text-white hover:underline">
          Sign up
        </a>{" "}
        or{" "}
        <a href="/learn" className="text-white hover:underline">
          learn more
        </a>
      </p>
    </div>
  );
}
