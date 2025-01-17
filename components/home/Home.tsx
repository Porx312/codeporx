import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function HomeMain() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm" id="home">
      <div className="flex flex-col items-center space-y-8">
        <Image
          src="/static/images/logoluffy.jpeg"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
        />

        <h1 className="text-center text-4xl font-bold">Jose Blanco</h1>
        <p className="text-center text-xl text-gray-600">
          Desarrollador Web | Diseñador UX | Creativo
        </p>

        <div className="flex space-x-4">
          <Link href="https://github.com/tu-usuario" className="text-gray-600 hover:text-black">
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/tu-usuario"
            className="text-gray-600 hover:text-blue-600"
          >
            <Linkedin size={24} />
          </Link>
          <Link href="https://twitter.com/tu-usuario" className="text-gray-600 hover:text-blue-400">
            <Twitter size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}
