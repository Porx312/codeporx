'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SkillsSection } from './skills-section'
import Contact from './Contact'
import HeroSection from './hero-section'
import { ProjectsSection } from './ProjectSection'
import SectionName from './Section'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
const BlackGradientBottom = ({ height = 'h-20', className = '' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`pointer-events-none absolute bottom-0 left-0 w-full ${height} bg-gradient-to-t from-black via-black/80 to-transparent ${className}`}
  />
)
export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen ">
      <main>
        <section id="home" className="background-pattern relative">
          <HeroSection />
          <BlackGradientBottom />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <SectionName name={'Contact'} description={'contact with me'} />
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-gray-400">
            © 2024 Jose Blanco. Built with Next.js, GSAP & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
