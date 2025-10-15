export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-10">
      <main className="max-w-3xl mx-auto">{children}</main>
    </div>
  );
}
