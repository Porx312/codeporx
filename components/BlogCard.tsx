'use client'

import Link from 'next/link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface BlogCardProps {
  post: CoreContent<Blog>
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, summary, date, tags, path } = post
  
  return (
    <div
      className="group relative transform cursor-pointer transition-all duration-500 hover:-rotate-1 hover:scale-105 h-full"
    >
      <div className="hover:shadow-3xl relative z-10 w-full overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] text-white shadow-2xl backdrop-blur-xl duration-700 hover:border-red-500/40 hover:shadow-red-500/10 h-full flex flex-col aspect-square">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-red-400/10 opacity-40 transition-opacity duration-500 group-hover:opacity-60"></div>
          <div className="absolute -bottom-20 -left-20 h-48 w-48 transform animate-bounce rounded-full bg-gradient-to-tr from-red-500/10 to-transparent opacity-30 blur-3xl transition-all delay-500 duration-700 group-hover:scale-110 group-hover:opacity-50"></div>
          <div className="absolute left-10 top-10 h-16 w-16 animate-ping rounded-full bg-red-500/5 blur-xl"></div>
          <div className="absolute bottom-16 right-16 h-12 w-12 animate-ping rounded-full bg-red-500/5 blur-lg delay-1000"></div>
          <div className="absolute inset-0 translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-red-500/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[-200%]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col h-full">
           <div className="mb-4 flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            
            <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-100 group-hover:text-red-500 transition-colors duration-300">
               <Link href={`/${path}`} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {title}
               </Link>
            </h2>

            <div className="mb-4 flex items-center text-sm text-gray-400">
               <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </div>

            <p className="mb-6 text-gray-300 line-clamp-4 flex-grow text-sm sm:text-base">
              {summary}
            </p>

            <div className="mt-auto pt-4 flex items-center text-sm font-medium text-red-500 transition-colors duration-300 group-hover:text-red-400">
                  Leer Más
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
            </div>
          
           {/* Decorative corner accents */}
           <div className="absolute left-0 top-0 h-20 w-20 rounded-br-3xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
           <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-3xl bg-gradient-to-tl from-red-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
