'use client'

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// —————————————————— Schema ——————————————————
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

type FormData = z.infer<typeof formSchema>

// —————————————————— Component ——————————————————
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  // Memoised utility class string
  const glassInput = useMemo(
    () =>
      [
        'w-full rounded-md px-3 py-2 text-white placeholder-white/80',
        ' bg-black bg-gradient-to-r from-gray-500  opacity-30 ',
        'transition-all ring-1 ring-white/30',
        'shadow-[0_4px_30px_rgba(0,0,0,0.08)]',
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
      ].join(' '),
    []
  )

  // —————————————————— Submit handler ——————————————————
  async function onSubmit(data: FormData) {
    setSubmitStatus('idle')
    setServerMessage(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const { message } = (await res.json()) as { message?: string }
        throw new Error(message ?? 'Unexpected server error')
      }

      setSubmitStatus('success')
      reset()
    } catch (err) {
      setSubmitStatus('error')
      setServerMessage(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  // —————————————————— Markup ——————————————————
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="contact">
      {/* Name field */}
      <div>
        <div className="group relative">
          <div className="relative z-10 h-20 w-full overflow-hidden rounded-xl bg-black opacity-90">
            <div className="transistion-all absolute z-10 h-full w-44 -translate-x-44 -skew-x-12 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 duration-700 ease-in group-hover:translate-x-[30rem]"></div>

            <div className="absolute inset-0.5 z-[1] flex flex-col items-center justify-center rounded-2xl bg-black text-white opacity-90">
              <input
                {...register('name')}
                disabled={isSubmitting}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="Your name"
                className={`input h-full w-full rounded-xl bg-black py-3 text-lg font-semibold opacity-90 ${
                  errors.name ? 'ring-red-500' : 'ring-white/30'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Email field */}
      <div className="group relative">
        <div className="relative z-10 h-20 w-full overflow-hidden rounded-xl bg-black opacity-90">
          <div className="transistion-all absolute z-10 h-full w-44 -translate-x-44 -skew-x-12 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 duration-700 ease-in group-hover:translate-x-[30rem]"></div>

          <div className="absolute inset-0.5 z-[1] flex flex-col items-center justify-center rounded-2xl bg-black text-white opacity-90">
            <input
              {...register('email')}
              type="email"
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="Your email"
              className={` h-full w-full rounded-xl bg-black py-3  text-lg font-semibold opacity-90 ${
                errors.email ? 'ring-red-500' : 'ring-white/30'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Message field */}

      <div className="group relative">
        <div className="relative z-10 h-36 w-full overflow-hidden rounded-xl bg-black opacity-90">
          <div className="transistion-all absolute z-10 h-full w-44 -translate-x-44 -skew-x-12 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 duration-700 ease-in group-hover:translate-x-[30rem]"></div>

          <div className="absolute inset-0.5 z-[1] flex flex-col items-center justify-center rounded-2xl bg-black text-white opacity-90">
            <textarea
              {...register('message')}
              rows={4}
              disabled={isSubmitting}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Your message"
              className={` h-full w-full rounded-xl bg-black py-3  text-lg font-semibold opacity-90 ${
                errors.message ? 'ring-red-500' : 'ring-white/30'
              } resize-none`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="group relative">
        <div className="relative z-10 h-14 w-full overflow-hidden rounded-xl bg-black opacity-90">
          <div className="transistion-all absolute z-10 h-full w-44 -translate-x-44 -skew-x-12 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 duration-700 ease-in group-hover:translate-x-[30rem]"></div>

          <div className="absolute inset-0.5 z-[1] flex items-center justify-center rounded-2xl bg-black text-white opacity-90">
            <button
              type="submit"
              disabled={isSubmitting}
              className="input h-full w-full rounded-xl bg-black px-16 py-3 text-lg font-semibold opacity-90"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                  Sending…
                </span>
              ) : (
                'Send message'
              )}
            </button>
          </div>
          <div className="absolute h-[100px] w-full bg-gradient-to-r from-red-500 to-orange-500 blur-[30px] duration-1000 group-hover:animate-spin"></div>
        </div>
      </div>

      {/* Status messages */}
      {submitStatus === 'success' && (
        <p className="mt-3 text-sm text-green-600">Message sent successfully. Thank you!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-3 text-sm text-red-600">
          {serverMessage ?? 'There was a problem. Please try again.'}
        </p>
      )}
    </form>
  )
}
