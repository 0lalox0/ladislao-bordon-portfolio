import Link from 'next/link'

export function Header() {
  const navLinks = [
    { href: '/#proyectos', label: 'Proyectos' },
    { href: '/#stack', label: 'Stack' },
    { href: '/#sobre-mi', label: 'Sobre mí' },
    { href: '/#contacto', label: 'Contacto' },
  ]

  return (
    <header className="border-b border-line/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-title text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          aria-label="Ladislao Bordon - Inicio"
        >
          Ladislao <span className="text-accent">Bordon</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cv-ladislao-bordon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-line bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            CV
          </Link>
        </nav>

        <nav className="flex items-center gap-2 md:hidden" aria-label="Navegación móvil">
          <Link
            href="/cv-ladislao-bordon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-line bg-background px-2.5 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-3 sm:py-1.5 sm:text-sm"
          >
            CV
          </Link>
        </nav>
      </div>
    </header>
  )
}
