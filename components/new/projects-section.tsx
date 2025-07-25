'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    name: 'docsjs',
    id: 1,
    title: 'DocsJS - JavaScript Ecosystem Docs',
    description: [
      'Comprehensive JavaScript documentation.',
      'Explore libraries, frameworks, and tools.',
      'Built for developers by developers.',
    ],
    longDescription:
      'DocsJS is a powerful documentation platform focused on the JavaScript ecosystem. It offers in-depth guides, API references, and community-curated content in English. From vanilla JS to the latest frameworks, DocsJS helps developers stay productive and informed.',
    image: '/docsjs-yellow.png?height=400&width=600',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    techColors: ['#facc15', '#facc15', '#facc15', '#facc15'], // yellow tones
    liveUrl: 'https://docsjs.dev',
    githubUrl: 'https://github.com/yourusername/docsjs',
    featured: true,
  },
  {
    name: 'ecommerce',
    id: 2,
    title: 'E-Commerce Platform',
    description: [
      'showcase your Playslits,',
      'showcase your Playslits,',
      'showcase your Playslits,',
    ],
    longDescription:
      'Full-stack platform with microservices, multiple gateways, and real-time inventory.',
    image: '/dark.png?height=400&width=600',
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
      'showcase your Playslits,',
      'showcase your Playslits,',
      'showcase your Playslits,',
    ],
    longDescription: 'Task solution with Kanban, time tracking, and team analytics.',
    image: '/dark.png?height=400&width=600',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'Redis'],
    techColors: ['#4fc08d', '#83cd29', '#010101', '#dc382d'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const [currentProject, setCurrentProject] = useState(0)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      )

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

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length)
  const prevProject = () =>
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section ref={sectionRef} className="px-6 py-24 ">
      <div className="mx-auto max-w-6xl">
        <h2 ref={titleRef} className="mb-16 text-center text-7xl font-bold">
          <span className="text-[#ff0004]">{'<'}</span>
          Projects
          <span className="text-[#ff0004]">{'/>'}</span>
        </h2>

        {/* Featured Project */}
        {/*   <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL="/placeholder.svg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {projects[currentProject].title}
            </h3>
            <p className="text-gray-300 mb-2 text-base">
              {projects[currentProject].description}
            </p>
            <p className="text-gray-500 mb-4 text-sm">
              {projects[currentProject].longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {projects[currentProject].technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs border"
                  style={{
                    borderColor: projects[currentProject].techColors[i],
                    color: projects[currentProject].techColors[i],
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mb-4">
              <a
                href={projects[currentProject].liveUrl}
                className="text-sm flex items-center gap-1 px-4 py-2 bg-[#ff0004] text-white rounded hover:bg-[#cc0003]"
              >
                <ExternalLink className="w-4 h-4" /> Live
              </a>
              <a
                href={projects[currentProject].githubUrl}
                className="text-sm flex items-center gap-1 px-4 py-2 border border-gray-700 rounded text-white hover:bg-gray-800"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                className="p-2 border border-[#ff0004] text-[#ff0004] rounded hover:bg-[#ff0004] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-400">
                {currentProject + 1} / {projects.length}
              </span>
              <button
                onClick={nextProject}
                className="p-2 border border-[#ff0004] text-[#ff0004] rounded hover:bg-[#ff0004] hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div> */}

        {/* Projects Grid */}
        <div className="projects-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group transform cursor-pointer transition-all duration-500 hover:-rotate-1 hover:scale-105"
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
                          <svg
                            className="h-8 w-8 fill-current text-red-500 drop-shadow-lg filter transition-colors duration-300 group-hover:text-red-400"
                            viewBox="0 0 496 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path>
                          </svg>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
