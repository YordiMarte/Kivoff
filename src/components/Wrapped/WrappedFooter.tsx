import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 text-center text-gray-400">
            <Link href="/wrapped" className="hover:text-black underline">
        Terms of Wrapped
        </Link>
    </footer>
    );
}