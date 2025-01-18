import { ReactNode } from 'react'
import Image from 'next/image'

interface StudySourceProps {
  title: string
  source: string
  date: string
  icon: ReactNode
  description: string
  time: string
}

export default function StudySource({
  title,
  source,
  date,
  icon,
  description,
  time,
}: StudySourceProps) {
  return (
    <div className="mb-8  flex items-start space-x-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center  justify-center rounded-full bg-red-100 text-red-600">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {source} • {date} • {time}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-500">{description}</p>
      </div>
    </div>
  )
}
