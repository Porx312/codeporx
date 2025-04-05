import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function ProjectCard() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1743871986/Captura_de_pantalla_2025-04-05_184711_v8kjg6.png"
          alt="IdeStore - E-commerce para programadores"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-xl font-bold">IdeStore</h3>
          <p className="text-gray-200 text-sm">E-commerce inspirado en VS Code</p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Tienda online con diseño inspirado en VS Code que ofrece productos para programadores: camisetas, stickers y
          accesorios relacionados con lenguajes de programación y tecnologías web.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded-full">
            Next.js
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium rounded-full">
            Medusa.js
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-medium rounded-full">
            E-commerce
          </span>
        </div>

        <Link
          href="https://idestore.example.com"
          className="inline-flex items-center gap-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        >
          <span>Visitar tienda</span>
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  )
}
