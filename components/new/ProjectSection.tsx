'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionName from './Section'
import Image from 'next/image'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const showcaseSlides = [
  {
    title: 'Competitive Battles',
    tag: 'Battles',
    description:
      'A sophisticated matchmaking system where skill meets strategy. Challenge rivals and rise through the ranks.',
    image:
      'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463168/248_1x_shots_so_ywndqa.png',
    traits: [
      { name: 'Battle Request', desc: 'Direct PvP flow' },
      { name: 'Rank System', desc: 'S / A / B / C levels' },
      { name: 'Stage Progress', desc: 'Stage 1-5 evolution' },
      { name: 'Discord Webhook', desc: 'Kill-feed alerts' },
    ],
  },
  {
    title: 'Global Rankings',
    tag: 'Ranking',
    description:
      'The definitive leaderboard for the Touge community. Every millisecond counts in the pursuit of perfection.',
    image:
      'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463234/764_1x_shots_so_ibkbcb.png',
    traits: [
      { name: '100+ Drivers', desc: 'Active community' },
      { name: 'Time Attack', desc: 'Sector-by-sector' },
      { name: 'Battle Wins', desc: 'PvP performance' },
      { name: 'Real-time API', desc: 'Instant updates' },
    ],
  },
  {
    title: 'Precision Track Analytics',
    tag: 'Tracks',
    description:
      'Optimize your performance by analyzing driver telemetry and YouTube video overlays to identify the perfect racing line and close performance gaps.',
    image:
      'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463050/380_1x_shots_so_yv6jll.png',
    traits: [
      { name: 'YouTube Analysis', desc: 'Video-based telemetry' },
      { name: 'Overlay Comparison', desc: 'Identifies time gaps' },
      { name: 'Apex Detection', desc: 'Cornering precision' },
      { name: 'Pace Analytics', desc: 'Consistency tracking' },
    ],
  },
  {
    title: 'Driver Profile',
    tag: 'Profile',
    description:
      'Your digital racing identity. Track your growth, rewards, and standing in the community.',
    image:
      'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770462907/375_1x_shots_so_mgeriy.png',
    traits: [
      { name: 'Stats Profile', desc: 'Career overview' },
      { name: 'Rank Display', desc: 'Visual progression' },
      { name: 'Personal Best', desc: 'Circuit records' },
      { name: 'Achievement', desc: 'Special driver tags' },
    ],
  },
  {
    title: 'Automated Server Hub',
    tag: 'Server',
    description:
      'Industrial-grade infrastructure with an automated 24-hour map rotation driven by community choice and voting.',
    image:
      'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463737/706_1x_shots_so_ewmnc7.png',
    traits: [
      { name: '24h Rotation', desc: 'Automated changes' },
      { name: 'Voting System', desc: 'Community choice' },
      { name: 'Live Records', desc: 'Track-specific' },
      { name: 'Node.js VPS', desc: 'Dedicated backend' },
    ],
  },
]

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.showcase-container',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.showcase-container',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length)

  return (
    <section ref={sectionRef} className="overflow-hidden bg-black/50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Community Header */}
        <div className="mb-20 text-center lg:text-left">
          <SectionName
            name={'Featured Project'}
            description={'Project D - My most advanced development'}
          />
          <h2 className="mb-6 mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            A Platform Built for <span className="text-red-600">Pure Speed</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-400 lg:mx-0">
            Join the most advanced Touge community. Project Dream connects drivers across the globe
            with high-performance VPS servers, real-time rankings, and a competitive battle system
            that rewards skill and consistency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="https://www.instagram.com/projectd"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition-all hover:bg-white/10"
            >
              <Github className="h-5 w-5" /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@projectd"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition-all hover:bg-white/10"
            >
              <ExternalLink className="h-5 w-5" /> TikTok
            </a>
            <a
              href="https://discord.gg/projectd"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-600/10 px-6 py-3 font-bold text-red-500 transition-all hover:bg-red-600/20"
            >
              <ChevronRight className="h-5 w-5" /> Join Discord
            </a>
          </div>
        </div>

        {/* Visual Explorer (Refactored Carousel) */}
        <div className="showcase-container relative mt-32">
          <div className="mb-12">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
              <div className="h-1 w-8 rounded-full bg-red-600" />
              Project Deep Dive
            </h3>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">
                {showcaseSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all ${
                      currentSlide === idx
                        ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {slide.tag}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-red-500">
                    Section Showcase
                  </span>
                  <h3 className="mb-6 mt-2 text-4xl font-black text-white md:text-5xl">
                    {showcaseSlides[currentSlide].title}
                  </h3>
                  <p className="mb-10 text-xl leading-relaxed text-gray-400">
                    {showcaseSlides[currentSlide].description}
                  </p>

                  {/* Feature Grid Inside Content */}
                  <div className="mb-10 grid grid-cols-2 gap-4">
                    {showcaseSlides[currentSlide].traits.map((trait, i) => (
                      <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <h4 className="mb-1 text-sm font-bold text-white">{trait.name}</h4>
                        <p className="text-xs text-gray-500">{trait.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-12 flex gap-4">
                    <button
                      onClick={prevSlide}
                      className="group rounded-full border border-white/10 p-4 text-white transition-all hover:bg-white/5"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="group rounded-full border border-white/10 p-4 text-white transition-all hover:bg-white/5"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <div>
                    <a
                      href="https://www.projectd.space/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-bold text-red-500 transition-transform hover:translate-x-2"
                    >
                      Explore Project D <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual Content */}
            <div className="sticky top-24 order-1 lg:order-2">
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 scale-75 rounded-full bg-red-500/20 opacity-50 blur-[100px]" />
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="shadow-3xl relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900"
                >
                  <Image
                    src={showcaseSlides[currentSlide].image}
                    alt={showcaseSlides[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
