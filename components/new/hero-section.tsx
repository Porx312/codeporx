'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Folder from './Folder'
import TrueFocus from './TrueFocus'
import SplitText from './SplitPresentation'

const handleAnimationComplete = () => {
  console.log('All letters have animated!')
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nameRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }
      )

      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
      )

      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.4 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center md:min-h-[65vh]"
    >
      <div className="mx-auto max-w-4xl">
        <SplitText
          text="JOSE BLANCO"
          className="text-center text-5xl font-semibold md:text-9xl"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <TrueFocus
          sentence="Developer Javascript"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />

        <p
          ref={descRef}
          className="mx-auto max-w-2xl text-[clamp(0.9rem,2.5vw,1.2rem)] leading-relaxed text-gray-300"
        >
          I build thoughtful digital experiences using React, Node.js and modern cloud
          architectures.
        </p>
      </div>
      <div style={{ height: '100px', position: 'relative' }}>
        <Folder size={2} color="#5227FF" className="custom-folder z-50" />
      </div>
    </section>
  )
}
