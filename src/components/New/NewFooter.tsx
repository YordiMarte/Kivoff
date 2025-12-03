import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 text-center text-gray-400">
            <Link href="/termsNew" className="hover:text-black underline">
        Terms of New
        </Link>
    </footer>
    );
}