"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import type { HTMLHeaderElement } from "react"

const navItems = [
  { id: "home", label: "//01 <home>" },
  { id: "skills", label: "//02 <skills>" },
  { id: "projects", label: "//03 <projects>" },
  { id: "contact", label: "//04 <contact>" },
]

export function Header() {
  const headerRef = useRef<HTMLHeaderElement>(null)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
    }, headerRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`border px-3 py-1 text-sm transition-all duration-300 hover:bg-[#ff0004] hover:text-white ${
                activeSection === item.id
                  ? "border-[#ff0004] bg-[#ff0004] text-white"
                  : "border-[#ff0004] text-[#ff0004]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="text-xl font-bold tracking-wider">
          <span className="text-white">{"<"}</span>
          <span className="text-white">CODEPORK</span>
          <span className="text-white">{"/>"}</span>
        </div>

        <div className="flex items-center gap-8">
          {navItems.slice(2).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`border px-3 py-1 text-sm transition-all duration-300 hover:bg-[#ff0004] hover:text-white ${
                activeSection === item.id
                  ? "border-[#ff0004] bg-[#ff0004] text-white"
                  : "border-[#ff0004] text-[#ff0004]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
