import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Contacto
            </h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarme. Estaré encantado de
              escucharte y responder lo antes posible.
            </p>
            <dl className="mt-8 text-base text-gray-500 dark:text-gray-300">
              <div className="mt-6">
                <dt className="sr-only">Dirección de correo electrónico</dt>
                <dd className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3">gregoriowhite333@gmail.com</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Número de teléfono</dt>
                <dd className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="ml-3">+34 695 866 771</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Ubicación</dt>
                <dd className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="ml-3">Barcelona, España</span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-8 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
