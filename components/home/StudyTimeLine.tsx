'use client'
import { FaYoutube, FaPaperclip, FaBook, FaCode, FaVideo } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import StudySource from './StudySource'
const studySources = [
  {
    title: 'HTML Básico y CSS Básico',
    source: 'YouTube - HolaMundo',
    date: 'Septiembre 2022',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Curso básico de HTML y CSS',
    time: '3 horas',
  },
  {
    title: 'HTML Avanzado',
    source: 'YouTube - Jhon Mircha, SoyDalto, DorianDesign',
    date: 'Septiembre 2022',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Serie de videos sobre conceptos avanzados de HTML',
    time: '22 horas',
  },
  {
    title: 'CSS Avanzado',
    source: 'YouTube - Jhon Mircha, Midudev, DorianDesign',
    date: 'Octubre 2022',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Serie de videos sobre conceptos avanzados de CSS',
    time: '28 horas',
  },
  {
    title: 'Git & GitHub',
    source: 'Web - lenguajejs.com',
    date: 'Diciembre 2022',
    icon: <FaBook className="h-6 w-6" />,
    description: 'Guía básica de Git & GitHub',
    time: '2 horas',
  },
  {
    title: 'Proyectos, Código de otros, etc',
    source: 'Github',
    date: 'Enero 2024',
    icon: <FaCode className="h-6 w-6" />,
    description: 'Durante este tiempo estuve trabajando en proyectos, viendo código de otros, etc.',
    time: 'Actualmente',
  },
  {
    title: 'JavaScript Básico',
    source: 'YouTube - SoyDalto',
    date: 'Diciembre 2022',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Curso básico de JavaScript',
    time: '10 horas',
  },
  {
    title: 'JavaScript Intermedio',
    source: 'YouTube - Jhon Mircha, DorianDesign, Midudev, freeCodeCamp',
    date: 'Febrero 2023',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Curso intermedio de JavaScript',
    time: '30 horas',
  },
  {
    title: 'JavaScript Avanzado',
    source: 'Web - javascript.info, developer.mozilla.org, hackerrank.com, lenguajejs.com',
    date: 'Julio 2023',
    icon: <FaPaperclip className="h-6 w-6" />,
    description: 'Curso avanzado de JavaScript',
    time: '10 horas',
  },
  {
    title: 'React Básico',
    source: 'YouTube - Midudev, Jhon Mircha',
    date: 'Noviembre 2023',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Curso básico de React',
    time: '12 horas',
  },
  {
    title: 'React Intermedio',
    source:
      'Web - es.react.dev, w3schools.com, freeCodeCamp.org, Libro de React (autor: Carlos Azaustre)',
    date: 'Noviembre 2023',
    icon: <FaPaperclip className="h-6 w-6" />,
    description: 'Curso intermedio de React',
    time: '8 horas',
  },
  {
    title: 'Node.js, Express y MongoDB',
    source: 'YouTube - Midudev, Jhon Mircha',
    date: 'Diciembre 2023',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Curso básico de Node.js, Express y MongoDB',
    time: '14 horas',
  },

  {
    title: 'Tailwind CSS',
    source: 'YouTube - Midudev',
    date: 'Marzo 2024',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Curso básico de Tailwind CSS',
    time: '6 horas',
  },
  {
    title: 'SEO y SEM',
    source: 'Web - Romuald Fons, Pedro Seo',
    date: 'Abril 2024',
    icon: <FaPaperclip className="h-6 w-6" />,
    description: 'Guía básica de SEO y SEM',
    time: '7 horas',
  },
  {
    title: 'React Avanzado',
    source: 'Udemy - Fernando Herrera',
    date: 'Abril 2024',
    icon: <FaVideo className="h-6 w-6" />,
    description: 'Curso avanzado de React',
    time: '10 horas',
  },
  {
    title: 'Zustand',
    source: 'Udemy - Fernando Herrera',
    date: 'Abril 2024',
    icon: <FaVideo className="h-6 w-6" />,
    description: 'Curso avanzado de React con Zustand',
    time: '5 horas',
  },
  {
    title: 'TanStack Query',
    source: 'Udemy - Fernando Herrera',
    date: 'Abril 2024',
    icon: <FaVideo className="h-6 w-6" />,
    description: 'Curso avanzado de React con TanStack Query',
    time: '5 horas',
  },
  {
    title: 'Next.js',
    source: 'Udemy, YouTube - Fernando Herrera, Jhon Mircha',
    date: 'Octubre 2024',
    icon: <FaVideo className="h-6 w-6" />,
    description: 'Curso avanzado de Next.js',
    time: '16 horas',
  },
  {
    title: 'Next.js',
    source: 'Web - nextjs.org/docs',
    date: 'Noviembre 2024',
    icon: <FaBook className="h-6 w-6" />,
    description: 'Documentación oficial de Next.js',
    time: '8 horas',
  },
  {
    title: 'SQL y PostgreSQL',
    source: 'Udemy - Fernando Herrera',
    date: 'Actualmente en progreso',
    icon: <FaVideo className="h-6 w-6" />,
    description:
      'Curso completo sobre SQL y el manejo de bases de datos con PostgreSQL, abarcando desde conceptos básicos hasta consultas avanzadas.',
    time: '8 horas (estimado)',
  },
]

export default function StudyTimeline() {
  const [showAll, setShowAll] = useState(false)
  const studyRef = useRef<HTMLElement>(null)

  const visibleSources = showAll ? studySources : studySources.slice(0, 5)

  const toggleShowAll = () => {
    setShowAll((prev) => !prev)
    if (showAll && studyRef.current) {
      studyRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" id="study" ref={studyRef}>
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Mi Trayectoria de Aprendizaje
        </h2>
        <div className="relative">
          <div className="absolute   bottom-0 left-6  top-5 w-0.5 bg-red-300 dark:bg-red-600"></div>
          <div className="relative space-y-8">
            {visibleSources.map((source, index) => (
              <StudySource key={index} {...source} />
            ))}
          </div>
        </div>
        {studySources.length > 5 && (
          <div className="mt-8 text-center">
            <button onClick={toggleShowAll}>{showAll ? 'Ver menos' : 'Ver más'}</button>
          </div>
        )}
      </div>
    </section>
  )
}
