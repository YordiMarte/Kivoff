export default function TermsUILayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative min-h-screen bg-[#0d0d0d] text-white">
            
        {children}
    </div>
    )
}
