import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Una breve descripción del proyecto 1 y sus características principales.',
    imageUrl: '/placeholder.svg?height=200&width=400',
    projectUrl: '/proyecto1',
  },
  {
    title: 'Proyecto 2',
    description: 'Detalles sobre el proyecto 2 y lo que lo hace especial.',
    imageUrl: '/placeholder.svg?height=200&width=400',
    projectUrl: '/proyecto2',
  },
  {
    title: 'Proyecto 3',
    description: 'Información sobre el proyecto 3 y por qué es importante.',
    imageUrl: '/placeholder.svg?height=200&width=400',
    projectUrl: '/proyecto3',
  },
]

export default function Project() {
  return (
    <div className=" px-4 py-12 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Proyectos Principales
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
