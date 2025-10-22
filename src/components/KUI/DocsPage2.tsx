"use client"
import { useEffect, useState } from "react"
import { Section } from "..//KUI/Section"

export function DocsPage() {
  const [active, setActive] = useState("auth")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = "auth"
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id
        }
      })
      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "auth", title: "Authentication", desc: "Components for user sign-in, sign-up, and session management." },
    { id: "storage", title: "Storage", desc: "UI blocks for uploading and managing files with Supabase Storage." },
    { id: "realtime", title: "Realtime", desc: "Realtime chat, presence indicators, and live updates." },
    { id: "avatars", title: "Avatars", desc: "Display user profile images and initials." },
  ]

  return (
    <div className="relative flex gap-8">
      <aside className="hidden lg:block sticky top-24 h-[80vh] w-52 text-sm text-white/60 border-r border-white/10 pr-4">
        <ul className="space-y-3">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`transition ${
                  active === sec.id ? "text-white font-medium" : "hover:text-white/80"
                }`}
              >
                {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 space-y-32 pb-32">
        {sections.map((sec) => (
          <Section key={sec.id} id={sec.id} title={sec.title} desc={sec.desc} />
        ))}
      </div>
    </div>
  )
}
