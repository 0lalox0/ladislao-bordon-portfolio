import Link from 'next/link'
import { projects } from '@/content/projects'

export function ProjectList() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const others = projects.filter((p) => !p.featured).slice(0, 3)

  return (
    <section id="proyectos" className="mt-16 scroll-mt-24">
      <div className="mb-8">
        <h2 className="font-title text-2xl font-semibold tracking-tight sm:text-3xl">Proyectos</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Una selección de proyectos con foco en producto, integración con sistemas y sistemas con IA aplicada.
        </p>
      </div>

      <div className="space-y-10">
        {featured.map((project) => (
          <article
            key={project.slug}
            className="group border border-line/60 rounded-lg p-6 transition-colors hover:border-accent/60 sm:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                      Destacado
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-title text-xl font-semibold tracking-tight sm:text-2xl">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="transition-colors hover:text-accent focus-visible:text-accent"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-muted">{project.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
                  {project.stack.slice(0, 6).map((tech) => (
                    <li key={tech} className="rounded-full border border-line px-2 py-0.5">
                      {tech}
                    </li>
                  ))}
                  {project.stack.length > 6 && <li className="text-muted">+{project.stack.length - 6}</li>}
                </ul>
                <div className="mt-6">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:underline focus-visible:underline"
                  >
                    Ver detalle →
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-video w-full overflow-hidden rounded-md border border-line/60 bg-muted/20">
                  <div className="flex h-full w-full items-center justify-center text-xs text-muted">
                    {project.media.length > 0 ? project.media[0].alt : 'Imagen en preparación'}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <article
              key={project.slug}
              className="group border border-line/60 rounded-lg p-5 transition-colors hover:border-accent/60"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-2 font-title text-lg font-semibold tracking-tight">
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="transition-colors hover:text-accent focus-visible:text-accent"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted line-clamp-2">{project.tagline}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5 text-xs text-muted">
                {project.stack.slice(0, 4).map((tech) => (
                  <li key={tech} className="rounded-full border border-line px-1.5 py-0.5">
                    {tech}
                  </li>
                ))}
                {project.stack.length > 4 && <li className="text-muted">+{project.stack.length - 4}</li>}
              </ul>
              <div className="mt-4">
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:underline focus-visible:underline"
                >
                  Ver detalle →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
