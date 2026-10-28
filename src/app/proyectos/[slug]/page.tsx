import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/content/projects'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      robots: { index: false, follow: false },
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tusitio.com.ar'

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `${baseUrl}/proyectos/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Ladislao Bordon`,
      description: project.tagline,
      url: `${baseUrl}/proyectos/${project.slug}`,
      type: 'article',
      siteName: 'Ladislao Bordon',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tusitio.com.ar'
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Proyectos',
        item: `${baseUrl}/#proyectos`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${baseUrl}/proyectos/${project.slug}`,
      },
    ],
  }

  return (
    <>
      <Header />
      <main id="contenido" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/#proyectos" className="text-sm text-muted hover:text-foreground">
            ← Volver a proyectos
          </Link>
        </div>

        <header className="mb-8">
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
          <h1 className="mt-3 font-title text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-muted">{project.tagline}</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-title text-xl font-semibold tracking-tight">Rol</h2>
            <p className="mt-2 text-muted">{project.role}</p>
          </div>
          <div>
            <h2 className="font-title text-xl font-semibold tracking-tight">Stack</h2>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm text-muted">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-line px-2 py-0.5">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {project.media.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 font-title text-xl font-semibold tracking-tight">Media</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.media.map((m, idx) => (
                <figure
                  key={idx}
                  className="overflow-hidden rounded-md border border-line/60 bg-muted/20"
                >
                  <div className="flex aspect-video items-center justify-center text-sm text-muted">
                    {m.alt}
                  </div>
                  <figcaption className="px-3 py-2 text-xs text-muted">{m.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8 space-y-6">
          <div>
            <h2 className="font-title text-xl font-semibold tracking-tight">Problema</h2>
            <p className="mt-2 text-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-title text-xl font-semibold tracking-tight">Resumen</h2>
            <p className="mt-2 text-muted">{project.summary}</p>
          </div>
          <div>
            <h2 className="font-title text-xl font-semibold tracking-tight">Aportes destacados</h2>
            <ul className="mt-3 space-y-2 text-muted">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {project.architecture && (
          <section className="mt-8">
            <h2 className="mb-3 font-title text-xl font-semibold tracking-tight">Arquitectura</h2>
            <div className="overflow-hidden rounded-md border border-line/60 bg-muted/20 p-4 text-center text-sm text-muted">
              Diagrama en preparación (ruta: {project.architecture})
            </div>
          </section>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 font-title text-xl font-semibold tracking-tight">Métricas</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="rounded-md border border-line/60 p-4">
                  <p className="text-sm text-muted">{m.label}</p>
                  <p className="mt-1 text-lg font-semibold">{m.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.confidentiality && (
          <section className="mt-8">
            <div className="rounded-md border border-line/60 bg-muted/10 p-4 text-sm text-muted">
              {project.confidentiality}
            </div>
          </section>
        )}

        {(project.links.demo || project.links.repo) && (
          <section className="mt-8">
            <h2 className="mb-3 font-title text-xl font-semibold tracking-tight">Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Demo
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Repo
                </a>
              )}
            </div>
          </section>
        )}

        <nav className="mt-10 flex items-center justify-between border-t border-line/60 pt-6">
          {prevProject ? (
            <Link href={`/proyectos/${prevProject.slug}`} className="text-sm text-muted hover:text-foreground">
              ← {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link href={`/proyectos/${nextProject.slug}`} className="text-sm text-muted hover:text-foreground">
              {nextProject.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  )
}
