import Image from 'next/image'

export default function AboutMe() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Sobre mí
            </h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              Soy un desarrollador web apasionado con experiencia en crear aplicaciones web modernas
              y responsivas. Mi objetivo es combinar diseño atractivo con funcionalidad robusta para
              ofrecer experiencias de usuario excepcionales.
            </p>
            <dl className="mt-10 space-y-10">
              {[
                {
                  name: 'Desarrollo Frontend',
                  description:
                    'Experto en React, Next.js y Tailwind CSS para crear interfaces de usuario dinámicas y atractivas.',
                },
                {
                  name: 'Desarrollo Backend',
                  description:
                    'Experiencia en Node.js y Express para construir APIs robustas y escalables.',
                },
                {
                  name: 'Bases de Datos',
                  description: 'Conocimientos en SQL y NoSQL, incluyendo PostgreSQL y MongoDB.',
                },
              ].map((skill) => (
                <div key={skill.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      {skill.name}
                    </p>
                  </dt>
                  <dd className="ml-16 mt-2 text-base text-gray-500 dark:text-gray-400">
                    {skill.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <Image
              className="relative mx-auto rounded-lg shadow-lg"
              src="/placeholder.svg?height=500&width=500"
              alt="Foto de perfil"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
