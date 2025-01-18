'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  imgSrc: string
  href: string
}

const Card = ({ title, description, imgSrc, href }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        alt={title}
        src={imgSrc || '/placeholder.svg'}
        width={1000}
        height={563}
        className="h-64 w-full object-cover transition-transform duration-300 ease-in-out"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p className="mb-4 text-sm opacity-90">{description}</p>
        <Link
          href={href}
          className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors duration-300 hover:bg-gray-200"
        >
          Ver Mas
        </Link>
      </div>
    </motion.div>
  )
}

export default Card
