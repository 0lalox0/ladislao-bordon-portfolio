import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="contenido" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-title text-3xl font-semibold tracking-tight sm:text-4xl">Página no encontrada</h1>
        <p className="mt-2 text-muted">La página que buscás no existe o fue movida.</p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-line bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
