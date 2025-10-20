
import { Sidebar } from "@/components/docs/Sidebar";
import { Navbar } from "@/components/docs/Navbar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#0a0a0a] text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
            <main className="flex-1 px-8 py-10 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}