import { ReactNode } from 'react'
import Image from 'next/image'

interface StudySourceProps {
  title: string
  source: string
  date: string
  icon: ReactNode
  description: string
}

export default function StudySource({ title, source, date, icon, description }: StudySourceProps) {
  return (
    <div className="mb-8 flex items-start space-x-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">
          {source} • {date}
        </p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  )
}
