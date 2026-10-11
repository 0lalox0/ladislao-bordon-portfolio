import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'asistente-emergencias',
    title: 'Asistente de emergencias viales',
    tagline:
      'Asistente de voz en tiempo real, basado en RAG, que da orientación inicial ante siniestros viales.',
    category: 'Académico/Investigación',
    featured: true,
    summary:
      'Asistente de voz en tiempo real que brinda orientación inicial ante siniestros viales. Las respuestas se basan en protocolos de primeros auxilios y atención ante accidentes, reduciendo el riesgo de alucinaciones mediante RAG.',
    problem:
      'En una emergencia la persona necesita orientación rápida y confiable. Un LLM solo puede inventar información; aquí las respuestas provienen de protocolos validados.',
    role: 'Evolución del agente de voz y la integración de sus componentes principales.',
    highlights: [
      'Integración y ajustes del agente con LiveKit (WebRTC, turnos de conversación, sesiones en tiempo real).',
      'Integración entre el agente, el pipeline RAG y los servicios cloud.',
      'Evaluación semántica (similaridad semántica) y pruebas con modelos locales.',
      'Métricas de retrieval y calidad: MRR, Recall@5, Answer Relevancy, cobertura de información crítica, fidelidad, cumplimiento de reglas de seguridad y latencia.',
    ],
    stack: [
      'Python',
      'LiveKit Agents',
      'WebRTC',
      'Deepgram (STT)',
      'OpenAI (LLM)',
      'Cartesia (TTS)',
      'Cohere (embeddings multilingües)',
      'Supabase',
      'PostgreSQL',
      'pgvector',
    ],
    architecture: '/projects/asistente-emergencias/arquitectura-diagrama.png', // TODO(lalo): agregar diagrama
    metrics: [], // TODO(lalo): agregar valores reales si los provee
    media: [], // TODO(lalo): agregar video/demo anonimizado
    links: {
      demo: undefined, // TODO(lalo): sin demo pública
      repo: undefined,
    },
    confidentiality:
      'Herramienta de asistencia inicial; no reemplaza servicios de emergencia ni profesionales médicos. No tiene demo pública.',
  },
  {
    slug: 'alquimon',
    title: 'Alquimon',
    tagline:
      'Plataforma full-stack para administrar contratos de alquiler, pagos, recibos y vencimientos.',
    category: 'Producto propio',
    featured: true,
    summary:
      'Plataforma web para gestionar contratos de alquiler, pagos, recibos, vencimientos y recordatorios con autenticación.',
    problem:
      'Reemplaza planillas, documentos sueltos y recordatorios manuales por un panel único con autenticación.',
    role: 'Desarrollo amplio y sostenido: desde CRUD inicial hasta funcionalidades de producto y deploy.',
    highlights: [
      'CRUD inicial, tareas y recordatorios.',
      'Gestión de pagos, recibos y descarga segura de recibos de inquilinos; mejoras en importes y redondeos.',
      'Filtros de contratos y distintivos visuales.',
      'Notificaciones y cron jobs para vencimientos y pagos pendientes.',
      'Preparación y correcciones de deploy en Vercel.',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Cron jobs', 'Vercel'],
    media: [], // TODO(lalo): capturas anonimizadas
    links: {
      demo: undefined, // TODO(lalo): URL demo Vercel
      repo: undefined, // TODO(lalo): repo público si aplica
    },
    confidentiality:
      'No mostrar datos reales de inquilinos, contratos ni importes. Ofrecer usuario demo con datos ficticios.',
  },
  {
    slug: 'campanas-whatsapp',
    title: 'SolucionSpamWhatsApp',
    tagline: 'Plataforma de campañas de WhatsApp integrada con la API oficial de Meta.',
    category: 'Producto real',
    featured: true,
    summary:
      'Plataforma para automatizar campañas de WhatsApp con contactos, plantillas, multimedia, webhooks y control de estados de envío.',
    problem:
      'Automatizar y gestionar campañas con las restricciones propias de la API oficial de Meta.',
    role: 'Integración con Meta y estabilidad de los flujos en producción.',
    highlights: [
      'Flujo de plantillas Meta con headers de imagen vía media_id.',
      'Conversión de imágenes WebP a JPEG con fallbacks.',
      'Importación de contactos desde Excel y creación de campañas.',
      'Webhooks, workers y secuenciación de mensajes; prevención de duplicados.',
      'Recordatorios, listas negras y control de estados de envío.',
      'Resolución de problemas en producción (dependencias, reintentos, consistencia).',
    ],
    stack: ['Meta WhatsApp API', 'Webhooks', 'Workers/colas', 'Procesamiento multimedia', 'Excel'], // TODO(lalo): completar lenguaje/framework
    media: [],
    links: { demo: undefined, repo: undefined },
    confidentiality:
      'Producto de cliente: sin capturas con datos reales ni nombres de clientes. Sin repo/demo públicos salvo indicación contraria.',
  },
  {
    slug: 'cidepint-unlp',
    title: 'CIDEPINT-UNLP',
    tagline: 'Sistema institucional de gestión administrativa, contable y de presupuestos.',
    category: 'Institucional',
    featured: false,
    summary:
      'Sistema institucional para centralizar procesos administrativos, contables y de presupuestos.',
    problem: 'Centralizar procesos repartidos entre planillas, documentos y correos.',
    role: 'Módulos administrativo y contable, presupuestos e integración de ramas en equipo.',
    highlights: [
      'Desarrollo de módulo administrativo y módulo contable.',
      'Correcciones en módulo de presupuestos.',
      'Integración de cambios entre ramas por funcionalidad y resolución de conflictos.',
      'Trabajo colaborativo con Pull Requests.',
    ],
    stack: ['Python', 'Flask', 'Vue.js', 'JavaScript', 'Bootstrap', 'PostgreSQL', 'Node.js', 'MinIO', 'Git'],
    media: [],
    links: { demo: undefined, repo: undefined }, // TODO(lalo): repo solo si público
  },
  {
    slug: 'montesinos-propiedades',
    title: 'Montesinos Propiedades',
    tagline: 'Plataforma inmobiliaria con Angular, GraphQL y renderizado en servidor.',
    category: 'Producto propio',
    featured: false,
    summary: 'Plataforma inmobiliaria con filtros por ciudad y detalle de propiedades, optimizada para SEO.',
    problem:
      'Mostrar propiedades, filtrarlas por ciudad y consultar detalle con buen rendimiento e indexación.',
    role: 'Conexión frontend–backend y preparación del deploy.',
    highlights: [
      'Integración Angular + Apollo + consultas GraphQL de propiedades.',
      'Navegación y vista de detalle de inmuebles.',
      'Configuración Angular SSR y adaptación a Vercel (serverless).',
      'Ajustes de handler, rutas a server.mjs y archivos incluidos en bundle.',
    ],
    stack: ['Angular', 'TypeScript', 'GraphQL', 'Apollo', 'SSR', 'Vercel'],
    media: [],
    links: { demo: undefined, repo: undefined }, // TODO(lalo): completar URLs
  },
  {
    slug: 'project-planning',
    title: 'ProjectPlanning + ProjectPlanning-Cloud',
    tagline: 'Sistema distribuido con backend cloud y procesos en Bonita BPM.',
    category: 'Académico/Investigación',
    featured: false,
    summary:
      'Sistema distribuido para gestión de proyectos, etapas, compromisos y observaciones, sincronizando app local con backend cloud y Bonita BPM.',
    problem:
      'Gestionar proyectos, etapas, compromisos y observaciones sincronizando app local con backend en la nube.',
    role: 'Integración local–cloud, Bonita y funcionalidades de etapas/compromisos/observaciones.',
    highlights: [
      'Integración inicial con Bonita y configuración Docker Compose.',
      'Persistencia cruzada de IDs entre BD y Bonita.',
      'Subida/recuperación de etapas entre app local y backend cloud.',
      'Compromisos, observaciones (registro/cancelación), finalización de etapas y comentarios.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Docker Compose', 'Bonita BPM'],
    architecture: '/projects/project-planning/arquitectura-diagrama.png', // TODO(lalo): diagrama
    media: [],
    links: { demo: undefined, repo: undefined },
  },
]
