import ProjectCard from './ProjectCard'
const projects = [
  {
    title: 'Reformas y Obras en Barcelona',
    description:
      'Página diseñada para atraer clientes potenciales y presentar los servicios especializados de reformas y construcción de la empresa.',
    imageUrl: '/static/images/projects/project1.png',
    projectUrl: 'https://www.obrasyabcn.com/',
  },
  {
    title: 'Agencia de Marketing Digital',
    description:
      'Sitio web para una agencia de marketing con integración de Stripe, ideal para gestionar pagos.',
    imageUrl: '/static/images/projects/project2.png',
    projectUrl: 'https://agenciamarketing.vercel.app/',
  },
  {
    title: 'CRM para Gestión Empresarial',
    description:
      'Herramienta completa para administrar clientes, visualizar gráficos analíticos y crear presupuestos y facturas personalizadas.',
    imageUrl: '/static/images/projects/project3.png',
    projectUrl: 'https://adminbrasya.vercel.app/login',
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
