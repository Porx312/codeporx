"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    name: "finapp",
    id: 1,
    title: "Financial Dashboard",
    description: ["showcase your Playslits,","showcase your Playslits,","showcase your Playslits,"],
    longDescription:
      "Helps users manage personal and business finances with bank integration and customizable dashboards.",
    image: "/dark.png?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    techColors: ["#61dafb", "#83cd29", "#336791", "#ff9900"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "ecommerce",
    id: 2,
    title: "E-Commerce Platform",
    description: ["showcase your Playslits,","showcase your Playslits,","showcase your Playslits,"],
    longDescription:
      "Full-stack platform with microservices, multiple gateways, and real-time inventory.",
    image: "/dark.png?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Stripe", "Docker"],
    techColors: ["#000000", "#47a248", "#635bff", "#2496ed"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "taskmanager",
    id: 3,
    title: "Task Management App",
    description: ["showcase your Playslits,","showcase your Playslits,","showcase your Playslits,"],
    longDescription:
      "Task solution with Kanban, time tracking, and team analytics.",
    image: "/dark.png?height=400&width=600",
    technologies: ["Vue.js", "Express", "Socket.io", "Redis"],
    techColors: ["#4fc08d", "#83cd29", "#010101", "#dc382d"],
    liveUrl: "#",
    githubUrl: "#",
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
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".project-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length)
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section ref={sectionRef} className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-center text-7xl font-bold mb-16">
          <span className="text-[#ff0004]">{"<"}</span>
          Projects
          <span className="text-[#ff0004]">{"/>"}</span>
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
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
<div key={index}
  className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
>
 
</div>

          ))}
        </div>
      </div>
    </section>
  )
}
