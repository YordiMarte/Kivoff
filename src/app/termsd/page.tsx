import Link from "next/link";

export default function TermsHome() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Legal</h1>
      <ul className="space-y-4">
        <li><Link href="/terms/privacy" className="text-neutral-300 hover:text-white">Privacy Policy</Link></li>
        <li><Link href="/terms/security" className="text-neutral-300 hover:text-white">Security</Link></li>
        <li><Link href="/terms/cookies" className="text-neutral-300 hover:text-white">Cookies</Link></li>
      </ul>
    </div>
  );
}
