interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  category: string
}

const projectsData: Project[] = [
  {
    title: 'ObrasYaBcn',
    description: `Pagina para conversion de ventas y captacion de clientes optimizada para seo / sem`,
    imgSrc: '/static/images/projects/project1.png',
    href: 'https://www.obrasyabcn.com/',
    category: 'Paginas Web',
  },
  {
    title: 'CrmObrasYaBcn',
    description: `Crm para gestion de clientes y presupuestos`,
    imgSrc: '/static/images/projects/project3.png',
    href: 'https://adminbrasya.vercel.app/login',
    category: 'Crm',
  },
  {
    title: 'TransformaMax',
    description: `Blog de articulos Seo para ventas de productos afiliados`,
    imgSrc: '/static/images/projects/project4.png',
    href: 'https://www.transformamax.com/',
    category: 'Blog',
  },
  {
    title: 'CleanAura',
    description: `Proyecto de limpieza de casas y oficinas "Aun en desarrollo"`,
    imgSrc: '/static/images/projects/project5.png',
    href: 'https://www.cleanaura.org/',
    category: 'Blog',
  },
  {
    title: 'Portafolio Personal',
    description: `Portafolio personal de Jose`,
    imgSrc: '/static/images/projects/project6.png',
    href: 'https://porx312.github.io/Portafolio-Jose/',
    category: 'Portfolio',
  },
  // Add more projects with categories...
]

export default projectsData
