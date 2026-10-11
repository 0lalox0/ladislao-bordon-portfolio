import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" className="mx-auto min-h-[70vh] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <section>
            <h1 className="font-title text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Ladislao <span className="text-accent">Bordon</span>
            </h1>
            <p className="mt-2 text-base text-muted sm:text-lg">
              Desarrollador full-stack • La Plata, Argentina
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
