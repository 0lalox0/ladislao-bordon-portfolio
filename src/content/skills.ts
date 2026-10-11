export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    items: [
      'Python',
      'FastAPI',
      'Flask',
      'Node.js',
      'TypeScript',
      'Prisma',
      'SQLAlchemy',
      'PostgreSQL',
      'Supabase',
    ],
  },
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Apollo'],
  },
  {
    title: 'IA y datos',
    items: [
      'LiveKit Agents',
      'WebRTC',
      'Deepgram (STT)',
      'OpenAI (LLM)',
      'Cartesia (TTS)',
      'Cohere (embeddings)',
      'pgvector',
      'RAG',
    ],
  },
  {
    title: 'Infraestructura y herramientas',
    items: [
      'Docker',
      'Docker Compose',
      'Vercel',
      'Git',
      'MinIO',
      'Bonita BPM',
      'Cron jobs',
      'Webhooks',
      'Workers/colas',
      'Meta WhatsApp API',
    ],
  },
]
