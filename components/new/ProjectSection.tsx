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
    description: 'A sophisticated matchmaking system where skill meets strategy. Challenge rivals and rise through the ranks.',
    image: 'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463168/248_1x_shots_so_ywndqa.png',
    traits: [
      { name: 'Battle Request', desc: 'Direct PvP flow' },
      { name: 'Rank System', desc: 'S / A / B / C levels' },
      { name: 'Stage Progress', desc: 'Stage 1-5 evolution' },
      { name: 'Discord Webhook', desc: 'Kill-feed alerts' },
    ]
  },
  {
    title: 'Global Rankings',
    tag: 'Ranking',
    description: 'The definitive leaderboard for the Touge community. Every millisecond counts in the pursuit of perfection.',
    image: 'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463234/764_1x_shots_so_ibkbcb.png',
    traits: [
      { name: '100+ Drivers', desc: 'Active community' },
      { name: 'Time Attack', desc: 'Sector-by-sector' },
      { name: 'Battle Wins', desc: 'PvP performance' },
      { name: 'Real-time API', desc: 'Instant updates' },
    ]
  },
  {
    title: 'Precision Track Analytics',
    tag: 'Tracks',
    description: 'Optimize your performance by analyzing driver telemetry and YouTube video overlays to identify the perfect racing line and close performance gaps.',
    image: 'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463050/380_1x_shots_so_yv6jll.png',
    traits: [
      { name: 'YouTube Analysis', desc: 'Video-based telemetry' },
      { name: 'Overlay Comparison', desc: 'Identifies time gaps' },
      { name: 'Apex Detection', desc: 'Cornering precision' },
      { name: 'Pace Analytics', desc: 'Consistency tracking' },
    ]
  },
  {
    title: 'Driver Profile',
    tag: 'Profile',
    description: 'Your digital racing identity. Track your growth, rewards, and standing in the community.',
    image: 'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770462907/375_1x_shots_so_mgeriy.png',
    traits: [
      { name: 'Stats Profile', desc: 'Career overview' },
      { name: 'Rank Display', desc: 'Visual progression' },
      { name: 'Personal Best', desc: 'Circuit records' },
      { name: 'Achievement', desc: 'Special driver tags' },
    ]
  },
  {
    title: 'Automated Server Hub',
    tag: 'Server',
    description: 'Industrial-grade infrastructure with an automated 24-hour map rotation driven by community choice and voting.',
    image: 'https://res.cloudinary.com/dq0pfesxe/image/upload/v1770463737/706_1x_shots_so_ewmnc7.png',
    traits: [
      { name: '24h Rotation', desc: 'Automated changes' },
      { name: 'Voting System', desc: 'Community choice' },
      { name: 'Live Records', desc: 'Track-specific' },
      { name: 'Node.js VPS', desc: 'Dedicated backend' },
    ]
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
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length)

  return (
    <section ref={sectionRef} className="px-6 py-24 bg-black/50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Community Header */}
        <div className="mb-20 text-center lg:text-left">
          <SectionName name={'Featured Project'} description={'Project D - My most advanced development'} />
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 leading-tight">
            A Platform Built for <span className="text-red-600">Pure Speed</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            Join the most advanced Touge community. Project Dream connects drivers across the globe with high-performance 
            VPS servers, real-time rankings, and a competitive battle system that rewards skill and consistency.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a 
              href="https://www.instagram.com/projectd" 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold"
            >
              <Github className="w-5 h-5" /> Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@projectd" 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold"
            >
              <ExternalLink className="w-5 h-5" /> TikTok
            </a>
            <a 
              href="https://discord.gg/projectd" 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 hover:bg-red-600/20 transition-all font-bold"
            >
              <ChevronRight className="w-5 h-5" /> Join Discord
            </a>
          </div>
        </div>

        {/* Visual Explorer (Refactored Carousel) */}
        <div className="showcase-container mt-32 relative">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="h-1 w-8 bg-red-600 rounded-full" />
              Project Deep Dive
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
                {showcaseSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
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
                  <span className="text-red-500 font-mono tracking-widest uppercase text-xs">Section Showcase</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white mt-2 mb-6">
                    {showcaseSlides[currentSlide].title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed mb-10">
                    {showcaseSlides[currentSlide].description}
                  </p>

                  {/* Feature Grid Inside Content */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {showcaseSlides[currentSlide].traits.map((trait, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="text-white font-bold text-sm mb-1">{trait.name}</h4>
                        <p className="text-xs text-gray-500">{trait.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mb-12">
                    <button 
                      onClick={prevSlide} 
                      className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white group"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={nextSlide} 
                      className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white group"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div>
                     <a
                      href="https://www.projectd.space/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-500 font-bold hover:translate-x-2 transition-transform text-lg"
                    >
                      Explore Project D <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual Content */}
            <div className="order-1 lg:order-2 sticky top-24">
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full scale-75 opacity-50" />
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl bg-gray-900"
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




