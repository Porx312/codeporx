'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'study', label: 'Estudios' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'about', label: 'Acerca de' },
  { id: 'contact', label: 'Contacto' },
]

export default function StickyMenu() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 100)

      const current = menuItems.find((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="fixed right-4 top-4 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-full bg-white bg-opacity-80 p-2 shadow-lg backdrop-blur-sm"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <motion.ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } mt-2 flex-col space-y-2 rounded-lg bg-white bg-opacity-80 p-4 shadow-lg backdrop-blur-sm md:mt-0 md:flex md:flex-row md:space-x-1 md:space-y-0`}
          >
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
