import Link from 'next/link'
import { site } from '@/content/site'

export function Hero() {
  return (
    <section className="pt-10 sm:pt-16">
      <h1 className="font-title text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Ladislao <span className="text-accent">Bordon</span>
      </h1>
      <p className="mt-3 text-lg text-muted sm:text-xl">{site.role}</p>
      <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{site.tagline}</p>
      <p className="mt-2 text-sm text-muted">
        {site.location} • {site.availability}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="#proyectos"
          className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow-sm transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ver proyectos
        </Link>
        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          CV
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
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-10">
        <p className="mb-3 text-sm text-muted">Flujo del asistente de voz (enfoque aplicado)</p>
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 520 60"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Flujo: voz → STT → búsqueda → LLM → TTS"
            className="w-full max-w-2xl"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-muted" />
              </marker>
            </defs>
            <line
              x1="70"
              y1="30"
              x2="120"
              y2="30"
              stroke="currentColor"
              className="text-line"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <line
              x1="165"
              y1="30"
              x2="215"
              y2="30"
              stroke="currentColor"
              className="text-line"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <line
              x1="260"
              y1="30"
              x2="310"
              y2="30"
              stroke="currentColor"
              className="text-line"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <line
              x1="355"
              y1="30"
              x2="405"
              y2="30"
              stroke="currentColor"
              className="text-line"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <circle cx="40" cy="30" r="16" stroke="currentColor" className="text-line" fill="none" />
            <text x="40" y="36" textAnchor="middle" fontSize="10" className="fill-current text-muted">
              Voz
            </text>
            <circle cx="135" cy="30" r="16" stroke="currentColor" className="text-line" fill="none" />
            <text x="135" y="36" textAnchor="middle" fontSize="10" className="fill-current text-muted">
              STT
            </text>
            <circle cx="230" cy="30" r="16" stroke="currentColor" className="text-line" fill="none" />
            <text x="230" y="36" textAnchor="middle" fontSize="10" className="fill-current text-muted">
              Búsqueda
            </text>
            <circle cx="325" cy="30" r="16" stroke="currentColor" className="text-line" fill="none" />
            <text x="325" y="36" textAnchor="middle" fontSize="10" className="fill-current text-muted">
              LLM
            </text>
            <circle cx="420" cy="30" r="16" stroke="currentColor" className="text-line" fill="none" />
            <text x="420" y="36" textAnchor="middle" fontSize="10" className="fill-current text-muted">
              TTS
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
