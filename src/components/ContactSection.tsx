import { site } from '@/content/site'

export function ContactSection() {
  return (
    <section id="contacto" className="mt-16 scroll-mt-24">
      <div className="mb-6">
        <h2 className="font-title text-2xl font-semibold tracking-tight sm:text-3xl">Contacto</h2>
        <p className="mt-2 max-w-2xl text-muted">
          ¿Tenés un proyecto o una oportunidad? Podés escribirme por email o conectar por LinkedIn/GitHub.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Email
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          GitHub
        </a>
        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          CV
        </a>
      </div>
    </section>
  )
}
