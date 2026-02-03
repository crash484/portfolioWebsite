"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Profile from "@/components/profile"
import Projects from "@/components/projects"
import About from "@/components/About"
import { useState, useEffect } from "react"
import Design from "@/components/Design"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {  }, [isDark])

  return (
    <div className={`${isDark ? "bg-bluish-2 text-tertiary" : "bg-secondary"} px-0`}>
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* design / hero */}
      <div id="Profile" className="px-0">
        <Design isDark={isDark} />
      </div>

      {/* about */}
      <div id="About" className="px-0 py-3 md:p-0.5">
        <About />
      </div>

      {/* profile */}
      <div className="px-0 py-4 md:p-15">
        <Profile />
      </div>

      {/* projects */}
      <div id="Projects" className="px-0 py-3 md:p-0.5">
        <Projects />
      </div>

      {/* footer */}
      <div className="px-0 py-3 md:p-0.5">
        <Footer />
      </div>
    </div>
  )
}
