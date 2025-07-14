import { MapPin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-black text-white px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* —————————————————— Copy block —————————————————— */}
          <div>
            <h2
              id="contact-heading"
              className="text-4xl font-extrabold sm:text-5xl"
            >
              Let’s talk.
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Got a project in mind, a question, or just want to say hi? I’m all
              ears—drop me a line anytime.
            </p>

            <dl className="mt-8 space-y-4 text-base text-neutral-400">
              <div className="flex items-center">
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-red-500" />
                  <span className="ml-3">Barcelona, Spain</span>
                </dd>
              </div>

            
            </dl>
          </div>

          {/* —————————————————— Form block —————————————————— */}
          <div className="mt-12 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
