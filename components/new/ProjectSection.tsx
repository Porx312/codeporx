'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, X } from 'lucide-react' // Added X for close button
import SectionName from './Section'
import Image from 'next/image'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    name: 'docsjs',
    id: 1,
    title: 'DocsJS - JavaScript Ecosystem Docs',
    description: [
      'Comprehensive JavaScript docs.',
      'Explore libraries, frameworks, and tools.',
      'Built for developers by developers.',
    ],
    longDescription:
      'DocsJS is a powerful documentation platform focused on the JavaScript ecosystem. It offers in-depth guides, API references, and community-curated content in Spanish.',
    image: '/docsjs.png?height=400&width=600',
    images: ['/1.png', '/2.png'],
    technologies: ['Next.js', 'MDX', 'Clerk', 'Vercel', 'Convex'],
    techColors: [
      '#3b82f6', // Next.js (black)
      '#f97316', // MDX (orange)
      '#3b82f6', // Clerk (blue)
      '#7c3aed', // Vercel (black)
      '#7c3aed', // Convex (purple)
    ],
    liveUrl: 'https://www.docsjs.com/',
    githubUrl: 'https://github.com/Porx312/DockEs',
    featured: true,
  },
  {
    name: 'ecommerce',
    id: 2,
    title: 'E-Commerce Platform',
    description: [
      'Microservices architecture',
      'Multiple payment gateways',
      'Real-time inventory updates',
    ],
    longDescription:
      'This E-Commerce Platform is a robust, full-stack solution built with a microservices architecture for scalability and resilience. It supports multiple payment gateways (e.g., Stripe, PayPal) and features real-time inventory management to prevent overselling. The platform ',
    image: '/docsjs.png?height=400&width=600',
    images: ['/1.png', '/2.png'],
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'Docker'],
    techColors: ['#000000', '#47a248', '#635bff', '#2496ed'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'taskmanager',
    id: 3,
    title: 'Task Management App',
    description: [
      'Kanban board for tasks',
      'Integrated time tracking',
      'Team collaboration features',
    ],
    longDescription:
      'The Task Management App is a comprehensive solution for individuals and teams to organize and track their work. It features an intuitive Kanban board for visual task management, integrated time tracking to monitor productivity, and robust team analytics to identify bottlenecks and optimize workflows. Real-time updates and notifications ensure everyone stays on the same page.',
    image: '/docsjs.png?height=400&width=600',
    images: ['/1.png', '/2.png'],
    technologies: ['Vue.js', 'Express', 'Socket.io', 'Redis'],
    techColors: ['#4fc08d', '#83cd29', '#010101', '#dc382d'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const openProjectDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectDetails = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionName name={'Projects'} description={'projects fullstack'} />

        <div className="projects-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <button
              type="button"
              onClick={() => openProjectDetails(project)}
              aria-label={`Open details for ${project.title}`}
              className="project-card … focus-visible:outline-red-500"
              key={index}
            >
              <div className="hover:shadow-3xl relative z-10 w-[350px] overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] text-white shadow-2xl backdrop-blur-xl duration-700 hover:border-red-500/40 hover:shadow-red-500/10">
                {' '}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-red-400/10 opacity-40 transition-opacity duration-500 group-hover:opacity-60"></div>
                  <div className="absolute -bottom-20 -left-20 h-48 w-48 transform animate-bounce rounded-full bg-gradient-to-tr from-red-500/10 to-transparent opacity-30 blur-3xl transition-all delay-500 duration-700 group-hover:scale-110 group-hover:opacity-50"></div>
                  <div className="absolute left-10 top-10 h-16 w-16 animate-ping rounded-full bg-red-500/5 blur-xl"></div>
                  <div className="absolute bottom-16 right-16 h-12 w-12 animate-ping rounded-full bg-red-500/5 blur-lg delay-1000"></div>
                  <div className="absolute inset-0 translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-red-500/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[-200%]"></div>
                </div>
                <div className="relative z-10 p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 animate-ping rounded-full border-2 border-red-500/20"></div>
                      <div className="absolute inset-0 animate-pulse rounded-full border border-red-500/10 delay-500"></div>
                      <div className="transform rounded-full border border-red-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 p-6 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:shadow-red-500/20 group-hover:rotate-12 group-hover:scale-110">
                        <div className="transform transition-transform duration-700 group-hover:rotate-180">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={100}
                            height={100}
                            className="w-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-105">
                      <p className="animate-pulse bg-gradient-to-r from-red-400 via-red-500 to-red-400 bg-clip-text text-3xl font-bold text-transparent">
                        {project.name}
                      </p>
                    </div>

                    <div className="max-w-sm space-y-1">
                      <p className="transform text-base font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                        {project.title}
                      </p>
                      <p className="transform text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                        {project.description[0]}
                      </p>
                      <p className="transform text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                        {project.description[1]}
                      </p>
                      <p className="transform text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                        {project.description[2]}
                      </p>
                    </div>

                    <div className="mt-6 h-0.5 w-1/3 transform animate-pulse rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-500 group-hover:h-1 group-hover:w-1/2"></div>

                    <div className="mt-4 flex space-x-2 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-red-500 delay-100"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-red-500 delay-200"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-0 h-20 w-20 rounded-br-3xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-3xl bg-gradient-to-tl from-red-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-200 ease-out"
          role="button"
          tabIndex={0}
          aria-label="Close project details"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeProjectDetails()
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              closeProjectDetails()
            }
          }}
        >
          <div
            className="relative mx-4 h-[auto] max-h-[90vh] w-full max-w-3xl transform  overflow-y-auto  rounded-3xl border-gray-700 bg-black/60 bg-gray-900 p-6 text-white shadow-2xl backdrop-blur-sm
                   transition-all duration-300 ease-out data-[state=closed]:translate-y-10
                   data-[state=open]:translate-y-0 data-[state=closed]:opacity-0
                   data-[state=open]:opacity-100 md:p-8"
            role="dialog"
            aria-modal="true"
            data-state={isModalOpen ? 'open' : 'closed'}
          >
            <button
              onClick={closeProjectDetails}
              className="absolute right-4 top-4 text-gray-400 transition-colors duration-200 hover:text-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Título del proyecto */}
            <h3 className="mb-4 text-center text-2xl font-bold md:text-5xl">
              {selectedProject.title}
            </h3>

            {/* Sección de la imagen */}
            <div className="flex w-full flex-wrap items-center justify-center gap-3 py-4">
              {selectedProject.images.slice(0, 1).map((src, index) => (
                <div key={src} className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-contain shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Sección de tecnologías */}
            <div className="py-3">
              <h4 className="mb-2 text-base font-semibold">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      borderColor: selectedProject.techColors[i],
                      color: selectedProject.techColors[i],
                      backgroundColor: `${selectedProject.techColors[i]}20`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sección de enlaces */}
            <div className="mt-5 flex flex-col items-stretch gap-2 sm:flex-row sm:justify-end">
              {/* Live demo */}
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live demo in a new tab"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-red-400
                       to-red-500 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg
                       ring-1 ring-inset ring-red-500/30 transition-all duration-200
                       hover:scale-[1.02] hover:from-red-300 hover:to-red-400
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                Live&nbsp;Demo
              </a>
              {/* GitHub repo */}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub (opens in a new tab)"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700
                       bg-gray-900/60 px-4 py-2 text-sm font-medium text-gray-100 shadow-lg
                       transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2"
              >
                <Github className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-6" />
                GitHub&nbsp;Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
