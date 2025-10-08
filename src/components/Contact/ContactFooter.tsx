import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 text-center text-gray-400">
            <Link href="/terms4" className="hover:text-white underline">
                Terms of Service
            </Link>
        </footer>
    )
}