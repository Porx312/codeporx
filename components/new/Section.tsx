'use client'
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
export default function SectionName({name, description}) {
      const titleRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
     
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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
            end: "bottom 20%",
          },
        },
      )

      // Skills grid animation
    

      // Hover animations
     
    }, sectionRef)

    return () => ctx.revert()
}, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo grande de "Skills" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" ref={titleRef}>
        <span className="text-[6rem] md:text-[12rem] lg:text-[15rem] font-extrabold text-gray-800/10 dark:text-gray-200/10 select-none leading-none">
          {name}
        </span>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Etiqueta de consola con icono */}
        <div className="flex items-center justify-center  gap-2 bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 px-4 py-2 rounded-full text-sm font-mono mb-4">
          <Image src="icons/typescript.svg" alt="ts" width={100} height={100} className="w-4 h-4"/>
          <span>{name}.ts</span>
        </div>

        {/* Título principal */}
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">
          <span className="text-[#ff0004]">{"<"}</span>
         {name}<span className="text-[#ff0004]">{"/>"}</span>
        </h2>

        {/* Descripción */}
        <p className="text-gray-400 dark:text-gray-500 text-center mb-16 text-lg max-w-md">{description}</p>
      </div>
    </section>
  )
}
