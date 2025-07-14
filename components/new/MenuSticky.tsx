"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Sparkles, FolderKanban, Mail } from "lucide-react" // Importa los nuevos íconos

const menuItems = [
  { id: "home", label: "home", icon: Home },
  { id: "skills", label: "skills", icon: Sparkles }, // Usando Sparkles para habilidades
  { id: "projects", label: "projects", icon: FolderKanban }, // Usando FolderKanban para proyectos
  { id: "contact", label: "contact", icon: Mail }, // Usando Mail para contacto
]

export default function StickyMenu() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 100)

      // Determine the active section based on scroll position
      const current = menuItems.find((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Consider a section active if its top is within 100px from the top of the viewport
          // and its bottom is below 100px from the top of the viewport.
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
              className="rounded-full bg-white bg-opacity-80 p-2 shadow-lg backdrop-blur-md" // Aumentado a backdrop-blur-md para un efecto más pronunciado
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <motion.ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } mt-2 flex-col space-y-2 rounded-lg bg-white bg-opacity-80 p-4 shadow-lg backdrop-blur-md dark:bg-neutral-900 dark:bg-opacity-80 dark:text-white md:mt-0 md:flex md:flex-row md:space-x-1 md:space-y-0`}
          >
            {menuItems.map((item) => {
              const IconComponent = item.icon // Obtener el componente del ícono
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "bg-red-500 text-white" // Cambiado a un color más genérico para shadcn/ui
                        : "text-gray-600 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-white"
                    }`}
                    aria-label={item.label} // Accesibilidad: etiqueta para el lector de pantalla
                  >
                    <IconComponent size={18} className="mr-2" /> {/* Renderiza el ícono */}
                    <span className="sr-only md:not-sr-only">{item.label}</span>{" "}
                    {/* Texto visible en desktop, solo para lector de pantalla en móvil */}
                  </a>
                </li>
              )
            })}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
