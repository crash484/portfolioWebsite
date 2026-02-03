"use client"
import Image from "next/image"
import { TiWaves } from "react-icons/ti"
import { useState, useEffect } from "react"
import { FaTree } from "react-icons/fa";

export default function Header({ isDark, setIsDark }) {
  const [activeSection, setActiveSection] = useState("Profile")

  const trigger = () => {
    //alert("still coming up with the second theme sorry!")
    setIsDark(!isDark);
  }

  useEffect(() => {
    const sections = ["Profile", "Projects", "About"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="sticky top-0 z-999 mb-6 rounded-2xl backdrop-blur-2xl
                    flex justify-between px-4 py-2
                    md:flex-row md:gap-140 md:pl-5 md:mb-10">
      
      {/* logo */}
      <div className="flex items-center">
        <Image
          width={25}
          height={100}
          src="/logo.png"
          alt="my logo"
        />
      </div>

      {/* nav items — hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-4 md:basis-128">
        <button
          className={`p-3 text-center font-display ${isDark?"text-tertiary":"text-[#EDF1D6]"} hover:bg-card/50 transition-all duration-500 rounded-2xl relative
            ${activeSection === "Profile"
              ? `after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:rounded-full ${isDark ? "after:bg-tertiary" : "after:bg-[#EDF1D6]"}`
              : ""}`}
          onClick={() => scrollToSection("Profile")}
        >
          heyaa!
        </button>

        <button
          className={`p-3 text-center font-display ${isDark?"text-tertiary":"text-[#EDF1D6]"} hover:bg-card/50 transition-all duration-500 rounded-2xl relative
            ${activeSection === "About"
              ? `after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:rounded-full ${isDark ? "after:bg-tertiary" : "after:bg-[#EDF1D6]"}`
              : ""}`}
          onClick={() => scrollToSection("About")}
        >
          About
        </button>

        <button
          className={`p-3 text-center font-display ${isDark?"text-tertiary":"text-[#EDF1D6]"} hover:bg-card/50 transition-all duration-500 rounded-2xl relative
            ${activeSection === "Projects"
              ? `after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:rounded-full ${isDark ? "after:bg-tertiary" : "after:bg-[#EDF1D6]"}`
              : ""}`}
          onClick={() => scrollToSection("Projects")}
        >
          Projects
        </button>

        <button
          className="p-1 w-20 flex items-center justify-center hover:bg-card/50 transition-all duration-500 rounded-2xl"
          onClick={trigger}
          aria-label="Toggle dark mode"
        >
          {isDark ? <TiWaves /> : <FaTree />}
        </button>
      </div>
    </div>
  )
}
