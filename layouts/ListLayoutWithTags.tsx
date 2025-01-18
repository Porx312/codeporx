'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { motion } from 'framer-motion'

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
    <div className="mt-10 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
      <button
        className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 sm:w-auto ${
          prevPage
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'cursor-not-allowed bg-gray-100 text-gray-400'
        }`}
        disabled={!prevPage}
        onClick={() => {
          if (prevPage) {
            window.location.href =
              currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`
          }
        }}
      >
        ← Anterior
      </button>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Página {currentPage} de {totalPages}
      </span>
      <button
        className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 sm:w-auto ${
          nextPage
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'cursor-not-allowed bg-gray-100 text-gray-400'
        }`}
        disabled={!nextPage}
        onClick={() => {
          if (nextPage) {
            window.location.href = `/${basePath}/page/${currentPage + 1}`
          }
        }}
      >
        Siguiente →
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
        <h1 className="mb-10 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
          {title}
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <aside className="mb-8 w-full lg:mb-0 lg:w-1/4">
            <div className="sticky top-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {sortedTags.map((t) => (
                  <Link
                    key={t}
                    href={`/tags/${slug(t)}`}
                    className={`rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                      decodeURI(pathname.split('/tags/')[1]) === slug(t)
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {t} ({tagCounts[t]})
                  </Link>
                ))}
              </div>
            </div>
          </aside>
          <main className="w-full lg:w-3/4">
            <div className="space-y-8">
              {displayPosts.map((post, index) => (
                <motion.div
                  key={post.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <article className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800">
                    <div className="p-6">
                      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <time
                          dateTime={post.date}
                          className="mb-2 block text-sm text-gray-500 dark:text-gray-400 sm:mb-0"
                          suppressHydrationWarning
                        >
                          {formatDate(post.date, siteMetadata.locale)}
                        </time>
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>
                      </div>
                      <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                        <Link
                          href={`/${post.path}`}
                          className="transition-colors duration-200 hover:text-red-500"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                        {post.summary}
                      </p>
                      <Link
                        href={`/${post.path}`}
                        className="inline-block rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-600"
                      >
                        Leer Más →
                      </Link>
                    </div>
                  </article>
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
