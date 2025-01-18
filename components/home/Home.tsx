'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import DisponibleParaTrabajar from './ButtonAvaliable'
import { motion } from 'framer-motion'

export default function HomeMain() {
  return (
    <div className="flex items-center justify-center  ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white p-8"
      >
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <Image
              src="/static/images/logoluffy.jpeg"
              alt="Jose Blanco"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <motion.div className="absolute -bottom-2 -right-2" whileHover={{ scale: 1.1 }}>
              <DisponibleParaTrabajar />
            </motion.div>
          </motion.div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Jose Blanco</h1>
              <p className="mt-2 text-xl font-semibold text-red-600 dark:text-red-400">
                Desarrollador Fullstack | Especialista en SEO & SEM
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Apasionado por crear soluciones web innovadoras y optimizar la presencia en línea.
              Experto en desarrollo fullstack y estrategias de marketing digital.
            </p>

            <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 md:justify-start">
              <MapPin size={18} />
              <span>Barcelona, España</span>
            </div>

            <div className="flex justify-center space-x-4 md:justify-start">
              <Link
                href="https://github.com/Porx312"
                className="transform transition-transform hover:scale-110"
              >
                <Github
                  size={28}
                  className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/joseblancodev/"
                className="transform transition-transform hover:scale-110"
              >
                <Linkedin
                  size={28}
                  className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                />
              </Link>
              <Link
                href="mailto:gregoriowhite333@email.com"
                className="transform transition-transform hover:scale-110"
              >
                <Mail
                  size={28}
                  className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
