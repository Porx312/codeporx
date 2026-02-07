interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  category: string
}

const projectsData: Project[] = [
  {
    title: 'ProjectD',
    description: `Una herramienta avanzada para pilotos y entusiastas de Assetto Corsa que buscan optimizar sus tiempos en pista. El sistema permite crear rutas personalizadas, analizar trayectorias en curvas y mejorar el rendimiento vuelta tras vuelta mediante datos precisos y visualizaciones interactivas.`,
    imgSrc: '/static/images/projects/project-dream.png',
    href: 'https://projectdream.vercel.app/',
    category: 'SimRacing Tool',
  },
]

export default projectsData
