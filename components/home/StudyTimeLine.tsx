import { FaYoutube, FaBook, FaVideo, FaUbuntu } from 'react-icons/fa'
import StudySource from './StudySource'

const studySources = [
  {
    title: 'Desarrollo Web Completo',
    source: 'Udemy',
    date: 'Enero 2023',
    icon: <FaUbuntu className="h-6 w-6" />,
    description: 'Curso completo de desarrollo web, cubriendo HTML, CSS, JavaScript, y más.',
  },
  {
    title: 'React Avanzado',
    source: 'YouTube - Midudev',
    date: 'Marzo 2023',
    icon: <FaYoutube className="h-6 w-6" />,
    description: 'Serie de videos sobre conceptos avanzados de React y mejores prácticas.',
  },
  {
    title: 'Introducción a Next.js',
    source: 'Documentación oficial de Next.js',
    date: 'Mayo 2023',
    icon: <FaBook className="h-6 w-6" />,
    description: 'Estudio de la documentación oficial para aprender los fundamentos de Next.js.',
  },
  {
    title: 'Tailwind CSS Masterclass',
    source: 'Frontend Masters',
    date: 'Julio 2023',
    icon: <FaVideo className="h-6 w-6" />,
    description: 'Curso en profundidad sobre el uso eficiente de Tailwind CSS en proyectos reales.',
  },
  // Puedes agregar más fuentes de estudio aquí
]

export default function StudyTimeline() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8" id="study">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Mi Trayectoria de Aprendizaje
        </h2>
        <div className="relative">
          <div className="absolute bottom-0 left-6 top-5 w-0.5 bg-indigo-200"></div>
          <div className="space-y-8">
            {studySources.map((source, index) => (
              <StudySource key={index} {...source} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
