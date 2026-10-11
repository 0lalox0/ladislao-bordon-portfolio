export function Footer() {
  const year = 2026

  return (
    <footer className="border-t border-line/60 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">© {year} Ladislao Bordon. Todos los derechos reservados.</p>
          <p className="text-sm text-muted">Desarrollado con Next.js, TypeScript y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
