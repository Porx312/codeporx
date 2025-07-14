"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import SectionName from "./Section"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skills = [
  {
    name: "React",
    icon: "/icons/react.svg",
    color: "#61dafb",
    bgColor: "rgba(97, 218, 251, 0.1)",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    color: "#ffffff",
    bgColor: "rgba(255, 255, 255, 0.1)",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    color: "#3178c6",
    bgColor: "rgba(49, 120, 198, 0.1)",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    color: "#83cd29",
    bgColor: "rgba(131, 205, 41, 0.1)",
    category: "Backend",
  },
  {
    name: "prisma",
    icon: "/icons/prisma.svg",
    color: "#3776ab",
    bgColor: "rgba(55, 118, 171, 0.1)",
    category: "Backend",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
    color: "#2496ed",
    bgColor: "rgba(36, 150, 237, 0.1)",
    category: "DevOps",
  },
  {
    name: "AWS",
    icon: "/icons/aws.svg",
    color: "#ff9900",
    bgColor: "rgba(255, 153, 0, 0.1)",
    category: "Cloud",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    color: "#47a248",
    bgColor: "rgba(71, 162, 72, 0.1)",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    color: "#336791",
    bgColor: "rgba(51, 103, 145, 0.1)",
    category: "Database",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    color: "#f34f29",
    bgColor: "rgba(243, 79, 41, 0.1)",
    category: "Tools",
  },
  {
    name: "Figma",
    icon: "/icons/figma.svg",
    color: "#f24e1e",
    bgColor: "rgba(242, 78, 30, 0.1)",
    category: "Design",
  },
  {
    name: "Tailwind",
    icon: "/icons/tailwindcss.svg",
    color: "#06b6d4",
    bgColor: "rgba(6, 182, 212, 0.1)",
    category: "CSS",
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
     

      // Skills grid animation
      gsap.fromTo(
        ".skill-icon",
        {
          scale: 0,
          opacity: 0,
          rotation: -180,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: {
            amount: 1.2,
            from: "random",
          },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      )

      // Hover animations
      const skillIcons = document.querySelectorAll(".skill-icon")
      skillIcons.forEach((icon) => {
        const tl = gsap.timeline({ paused: true })

        tl.to(icon, {
          scale: 1.1,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        })

        icon.addEventListener("mouseenter", () => tl.play())
        icon.addEventListener("mouseleave", () => tl.reverse())
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
             <SectionName name="Skills" description="Technologies I work wit" />


      <div
  ref={gridRef}
  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
>
          {skills.map((skill, index) => (
            <div key={index} className="skill-icon group cursor-pointer">
              <div
                className="relative w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl"
                style={{
                  backgroundColor: skill.bgColor,
                  border: `1px solid ${skill.color}20`,
                }}
              >
               
<div
  className="cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1" 
>
  <div
    className="text-white rounded-3xl border border-red-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-red-500/40 overflow-hidden hover:shadow-red-500/10 hover:shadow-3xl w-[100px] h-[100px] flex items-center justify-center" style={{
                  backgroundColor: skill.bgColor,
                  border: `1px solid ${skill.color}20`,
                }}
  >
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-red-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
      ></div>
   
     
   
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"
      ></div>
    </div>

    <div className="p-8 relative justify-center  z-10">
      <div className="">
        <div className="relative ">
          <div
            className="absolute inset-0 rounded-full border-2  border-red-500/20 animate-ping"
          ></div>
          <div
            className="absolute inset-0 rounded-full border border-red-500/10 animate-pulse delay-500"
          ></div>
        
          
          
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className=" transition-all duration-300 group-hover:scale-110"
                  style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
                />
        </div>


     

       

      </div>
    </div>

    <div
      className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
    <div
      className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
  </div>
</div>

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                  }}
                />
              </div>

              <div className="text-center">
                <h3
                  className="font-semibold text-sm transition-colors duration-300 group-hover:text-white"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements for decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff0004] rounded-full opacity-20 animate-pulse" />
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#61dafb] rounded-full opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#83cd29] rounded-full opacity-25 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>
    </section>
  )
}
