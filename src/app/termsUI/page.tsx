import DocsPage2 from "@/components/KUI/DocsPage2"
import { Hero2 } from "@/components/KUI/Hero2"
import SIdebar2 from "@/components/KUI/SIdebar2"  

export default function TermsUIPage() {
    return (
        <div className="relative min-h-screen bg-[#0d0d0d] text-white flex">
            <SIdebar2 />
        
      <main className="flex-1 overflow-y-auto">
        <Hero2 />
        
        <div className="p-8">
          <DocsPage2 active="auth" />
        </div>
      </main>
    </div>
  )
}