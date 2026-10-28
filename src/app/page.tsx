import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { ProjectList } from '@/components/ProjectList'
import { StackSection } from '@/components/StackSection'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { site } from '@/content/site'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.fullName,
  alternateName: site.displayName,
  jobTitle: site.role,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'La Plata',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  email: site.email,
  url: site.siteUrl,
  sameAs: [site.github, site.linkedin],
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" className="mx-auto min-h-[70vh] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <Hero />
          <ProjectList />
          <StackSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  )
}
