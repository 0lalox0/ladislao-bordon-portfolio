import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const titleFont = Bricolage_Grotesque({
  variable: '--font-title',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const bodyFont = IBM_Plex_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tusitio.com.ar'

export const metadata: Metadata = {
  title: {
    default: 'Ladislao Bordon – Desarrollador full-stack',
    template: '%s | Ladislao Bordon',
  },
  description:
    'Portfolio de Ladislao "Lalo" Bordon, desarrollador full-stack freelance en La Plata, Argentina.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Ladislao Bordon',
    title: 'Ladislao Bordon – Desarrollador full-stack',
    description:
      'Desarrollador full-stack freelance. Productos web completos, de la base de datos al deploy, y sistemas con IA aplicada.',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Ladislao Bordon – Desarrollador full-stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladislao Bordon – Desarrollador full-stack',
    description:
      'Desarrollador full-stack freelance. Productos web completos, de la base de datos al deploy, y sistemas con IA aplicada.',
    images: ['/og.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${titleFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-white focus:shadow"
        >
          Saltar al contenido
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
