'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/page/')[0].replace(/^\//, '')

  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
      <button
        className={`group relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
          prevPage
            ? 'bg-transparent text-white border border-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]'
            : 'cursor-not-allowed bg-transparent text-gray-600 border border-gray-800'
        }`}
        disabled={!prevPage}
        onClick={() => {
          if (prevPage) {
            window.location.href =
              currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`
          }
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg className={`w-4 h-4 transition-transform duration-300 ${prevPage ? 'group-hover:-translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </span>
         {prevPage && <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
      </button>

      <span className="text-sm font-medium text-gray-400">
        Página <span className="text-red-500">{currentPage}</span> de <span className="text-white">{totalPages}</span>
      </span>

      <button
        className={`group relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
          nextPage
             ? 'bg-transparent text-white border border-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]'
            : 'cursor-not-allowed bg-transparent text-gray-600 border border-gray-800'
        }`}
        disabled={!nextPage}
        onClick={() => {
          if (nextPage) {
            window.location.href = `/${basePath}/page/${currentPage + 1}`
          }
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          Siguiente
          <svg className={`w-4 h-4 transition-transform duration-300 ${nextPage ? 'group-hover:translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        {nextPage && <div className="absolute inset-0 -z-10 bg-gradient-to-l from-red-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
      </button>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <h1 className="mb-10 text-center text-3xl font-extrabold  text-gray-100 sm:text-4xl">
          {title}
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Sidebar Filter */}
          <aside className="mb-8 w-full lg:mb-0 lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-white/5 bg-[#0F0F0F]/80 p-6 shadow-xl backdrop-blur-md">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Filtrar por Etiqueta
              </h3>
              
              <div className="grid grid-cols-3 gap-2">
                {pathname.startsWith('/blog') ? (
                   <div className="col-span-3 flex items-center justify-center px-3 py-2 rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/20 text-xs font-bold transition-transform hover:scale-105 mb-2">
                    Todos
                  </div>
                ) : (
                  <Link
                    href={`/blog`}
                     className="col-span-3 flex items-center justify-center px-3 py-2 rounded-xl bg-transparent border border-gray-800 text-gray-400 text-xs font-medium hover:border-gray-600 hover:text-white transition-all hover:scale-105 mb-2"
                  >
                    Todos
                  </Link>
                )}

                {sortedTags.map((t) => {
                   const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(t)
                   return (
                  <Link
                    key={t}
                    href={`/tags/${slug(t)}`}
                    className={`flex items-center justify-center px-2 py-2 rounded-lg text-[10px] font-medium transition-all duration-300 hover:scale-105 text-center break-words min-h-[40px] h-full ${
                      isActive
                        ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                        : 'bg-gray-800/50 text-gray-400 border border-transparent hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {t}
                  </Link>
                )})}
              </div>
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayPosts.map((post, index) => (
                <motion.div
                  key={post.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
