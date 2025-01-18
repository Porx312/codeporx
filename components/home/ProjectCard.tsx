import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          width={400}
          height={200}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </div>
        <div className="mt-6">
          <Link
            href={projectUrl}
            className="text-base font-semibold text-red-700 hover:text-red-500"
          >
            Ver proyecto
          </Link>
        </div>
      </div>
    </div>
  )
}
