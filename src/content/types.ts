export type ProjectCategory =
  | 'Producto propio'
  | 'Producto real'
  | 'Institucional'
  | 'Académico/Investigación'

export type ProjectMedia = {
  src: string
  alt: string
  type: 'image' | 'video'
}

export type ProjectMetrics = {
  label: string
  value: string
}

export type ProjectLinks = {
  demo?: string
  repo?: string
}

export type Project = {
  slug: string
  title: string
  tagline: string
  category: ProjectCategory
  featured: boolean
  summary: string
  problem: string
  role: string
  highlights: string[]
  stack: string[]
  architecture?: string
  metrics?: ProjectMetrics[]
  media: ProjectMedia[]
  links: ProjectLinks
  confidentiality?: string
}
