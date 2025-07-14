'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
export default function SectionName({ name, description }) {
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
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      )

      // Skills grid animation

      // Hover animations
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden py-20">
      {/* Fondo grande de "Skills" */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        ref={titleRef}
      >
        <span className="select-none text-[6rem] font-extrabold leading-none text-gray-800/10 dark:text-gray-200/10 md:text-[12rem] lg:text-[15rem]">
          {name}
        </span>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Etiqueta de consola con icono */}
        <div className="mb-4 flex items-center  justify-center gap-2 rounded-full bg-gray-800 px-4 py-2 font-mono text-sm text-gray-200 dark:bg-gray-200 dark:text-gray-800">
          <Image src="icons/typescript.svg" alt="ts" width={100} height={100} className="h-4 w-4" />
          <span>{name}.ts</span>
        </div>

        {/* Título principal */}
        <h2 className="mb-4 text-center text-5xl font-bold md:text-7xl">
          <span className="text-[#ff0004]">{'<'}</span>
          {name}
          <span className="text-[#ff0004]">{'/>'}</span>
        </h2>

        {/* Descripción */}
        <p className="mb-16 max-w-md text-center text-lg text-gray-400 dark:text-gray-500">
          {description}
        </p>
      </div>
    </section>
  )
}
