import type { MetadataRoute } from 'next'
import { projects } from '@/content/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tusitio.com.ar'
  const now = new Date()

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.8 : 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ]
}
