# Plan: Portfolio de Ladislao "Lalo" Bordon

> Documento de instrucciones para OpenCode. Leelo completo antes de escribir código. Seguí las fases en orden y no saltees los criterios de aceptación.

## 1. Contexto y objetivo

Construir el sitio web personal de **Ladislao Bordon (Lalo)**, desarrollador full-stack freelance y estudiante avanzado de la Licenciatura en Sistemas (UNLP, La Plata, Argentina), para presentarse a reclutadores, empresas y clientes freelance.

**Trabajo principal del sitio:** que un reclutador entienda en menos de 30 segundos quién es Lalo, qué sabe hacer y qué construyó, y que pueda contactarlo.

**Audiencia:** reclutadores técnicos y no técnicos, líderes de equipo, potenciales clientes. Muchos entran desde el celular, desde LinkedIn.

**Idioma:** español rioplatense, sin exagerar el voseo en textos formales. Dejar la estructura lista para sumar inglés en la Fase 7.

**Datos personales fijos**
- Nombre: Ladislao Bordon (se presenta como Lalo)
- Rol: Desarrollador full-stack
- Ubicación: La Plata, Argentina
- GitHub: https://github.com/0lalox0
- LinkedIn: https://www.linkedin.com/in/ladislao-bordon/
- Email de contacto: ladislao.bordon@gmail.com (no inventar uno)
- CV: archivo `public/cv-ladislao-bordon.pdf` (lo agrega Lalo; si no existe, ocultar el botón)

## 2. Stack técnico

| Área | Decisión |
|---|---|
| Framework | Next.js (última versión estable, App Router) + TypeScript estricto |
| Estilos | Tailwind CSS (versión estable actual) |
| Componentes | Propios; usar shadcn/ui solo si hace falta algo accesible complejo (menú móvil, diálogo) |
| Animación | CSS puro; Framer Motion solo si una interacción lo justifica |
| Fuentes | `next/font` (ver sección de diseño) |
| Contenido | Archivo TypeScript tipado (`src/content/projects.ts`). **Sin base de datos ni CMS** |
| Contacto | Link `mailto:` + links sociales. Formulario opcional en Fase 7 con Resend |
| Analytics | Vercel Analytics (`@vercel/analytics`) |
| Gestor de paquetes | pnpm |
| Calidad | ESLint, Prettier, `tsc --noEmit`, Lighthouse |
| Deploy | Vercel (plan gratuito), repo en GitHub |

**Reglas sobre dependencias:** no agregar librerías fuera de esta lista sin explicar por qué en el commit. Preferir menos dependencias.

## 3. Estructura del repositorio

```
portfolio/
├─ public/
│  ├─ cv-ladislao-bordon.pdf          (lo agrega Lalo)
│  └─ projects/<slug>/                (capturas, gifs, diagramas, videos cortos)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx                     (home)
│  │  ├─ proyectos/[slug]/page.tsx    (detalle, generado estáticamente)
│  │  ├─ not-found.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ opengraph-image.tsx
│  ├─ components/
│  ├─ content/
│  │  ├─ projects.ts                  (los 6 proyectos)
│  │  ├─ skills.ts
│  │  └─ site.ts                      (nombre, links, textos globales)
│  └─ lib/
├─ .env.example
└─ README.md
```

## 4. Modelo de contenido

Definir en `src/content/projects.ts`:

```ts
export type Project = {
  slug: string;
  title: string;
  tagline: string;            // una línea para el listado
  category: "Producto propio" | "Producto real" | "Institucional" | "Académico/Investigación";
  featured: boolean;          // los 3 primeros se muestran en grande
  summary: string;            // 2-3 oraciones para el detalle
  problem: string;            // qué problema resuelve
  role: string;               // rol de Lalo, en una oración
  highlights: string[];       // 3-5 aportes concretos (los más fuertes)
  stack: string[];            // nombres de tecnologías
  architecture?: string;      // texto o ruta a un diagrama en /public
  metrics?: { label: string; value: string }[];  // solo si son reales
  media: { src: string; alt: string; type: "image" | "video" }[]; // puede estar vacío
  links: { demo?: string; repo?: string };       // omitir lo que no sea público
  confidentiality?: string;   // nota si hay que anonimizar
};
```

**Regla de contenido:** no inventar métricas, URLs, capturas ni resultados. Donde falte algo, dejar un `// TODO(lalo): ...` en el código y que el componente se muestre bien sin ese dato.

## 5. Contenido de los 6 proyectos

Orden fijo. Los textos son definitivos salvo ajustes de Lalo; recortarlos solo si no entran.

### 1. Asistente de emergencias viales (`asistente-emergencias`) — featured
- **Categoría:** Académico/Investigación
- **Tagline:** Asistente de voz en tiempo real, basado en RAG, que da orientación inicial ante siniestros viales.
- **Problema:** En una emergencia la persona necesita orientación rápida y confiable. Un modelo de lenguaje solo puede inventar información; acá las respuestas salen de protocolos de primeros auxilios y atención ante accidentes.
- **Rol:** Evolución del agente de voz y la integración de sus componentes principales.
- **Highlights:**
  - Integración y ajustes del agente con LiveKit (WebRTC, turnos de conversación, sesiones en tiempo real).
  - Integración entre el agente, el pipeline RAG y los servicios cloud.
  - Evaluación semántica del sistema (similaridad semántica) y pruebas con modelos locales.
  - Métricas de retrieval y calidad: MRR, Recall@5, Answer Relevancy, cobertura de información crítica, fidelidad, cumplimiento de reglas de seguridad y latencia.
- **Stack:** Python, LiveKit Agents, WebRTC, Deepgram (STT), OpenAI (LLM), Cartesia (TTS), Cohere (embeddings multilingües), Supabase, PostgreSQL, pgvector.
- **Arquitectura:** voz del usuario → STT → búsqueda semántica en pgvector → fragmentos del protocolo → LLM → TTS → audio. Incluir diagrama.
- **Nota:** No tiene demo pública (cada uso consume servicios pagos). Mostrar video de demo y tabla de métricas **solo con valores que entregue Lalo**.
- **Aclaración visible:** es una herramienta de asistencia inicial; no reemplaza a los servicios de emergencia ni a profesionales médicos.

### 2. Alquimon (`alquimon`) — featured
- **Categoría:** Producto propio
- **Tagline:** Plataforma full-stack para administrar contratos de alquiler, pagos, recibos y vencimientos.
- **Problema:** Reemplaza planillas, documentos sueltos y recordatorios manuales por un panel web único con autenticación.
- **Rol:** Desarrollo amplio y sostenido: desde el CRUD inicial hasta funcionalidades de producto y deploy.
- **Highlights:**
  - CRUD inicial, tareas y recordatorios.
  - Gestión de pagos, recibos y descarga segura de recibos de inquilinos; mejoras en importes y redondeos.
  - Filtros de contratos y distintivos visuales.
  - Notificaciones y procesos automáticos (cron jobs) para vencimientos y pagos pendientes.
  - Preparación y correcciones de deploy en Vercel.
- **Stack:** Next.js, TypeScript, Prisma, PostgreSQL, NextAuth, Cron jobs, Vercel.
- **Links:** demo en Vercel (URL: `TODO(lalo)`). Ofrecer usuario demo con datos ficticios.
- **Confidencialidad:** no mostrar datos reales de inquilinos, contratos ni importes.

### 3. SolucionSpamWhatsApp (`campanas-whatsapp`) — featured
- **Categoría:** Producto real (mostrarlo en una sección llamada "Experiencia profesional y contribuciones a productos reales", no como proyecto personal)
- **Tagline:** Plataforma de campañas de WhatsApp integrada con la API oficial de Meta.
- **Problema:** Automatizar y gestionar campañas de mensajería con contactos, plantillas, multimedia y estados de entrega, con las restricciones propias de la API de Meta.
- **Rol:** Integración con Meta y estabilidad de los flujos en producción.
- **Highlights:**
  - Flujo de plantillas de Meta con headers de imagen vía `media_id`.
  - Conversión de imágenes WebP a JPEG con fallbacks.
  - Importación de contactos desde Excel y creación de campañas.
  - Webhooks, workers y secuenciación de mensajes; prevención de duplicados.
  - Recordatorios, listas negras y control de estados de envío.
  - Resolución de problemas de producción (dependencias, reintentos, consistencia de campañas).
- **Stack/conceptos:** Meta WhatsApp API, webhooks, workers y colas, procesamiento multimedia, Excel. (Completar el lenguaje/framework: `TODO(lalo)`.)
- **Confidencialidad:** `confidentiality: "Producto de cliente: sin capturas con datos reales ni nombres de clientes."` Sin repo ni demo públicos salvo que Lalo indique lo contrario.

### 4. CIDEPINT-UNLP (`cidepint-unlp`)
- **Categoría:** Institucional
- **Tagline:** Sistema institucional de gestión administrativa, contable y de presupuestos.
- **Problema:** Centralizar procesos que estaban repartidos entre planillas, documentos y correos.
- **Rol:** Módulos administrativo y contable, presupuestos e integración de ramas en un equipo.
- **Highlights:**
  - Desarrollo del módulo administrativo y del módulo contable.
  - Correcciones en el módulo de presupuestos.
  - Integración de cambios entre ramas por funcionalidad y resolución de conflictos.
  - Trabajo colaborativo con Pull Requests.
- **Stack:** Python, Flask, Vue.js, JavaScript, Bootstrap, PostgreSQL, Node.js, MinIO, Git.
- **Links:** repo solo si es público (`TODO(lalo)`).

### 5. Montesinos Propiedades (`montesinos-propiedades`)
- **Categoría:** Producto propio
- **Tagline:** Plataforma inmobiliaria con Angular, GraphQL y renderizado en servidor.
- **Problema:** Mostrar propiedades, filtrarlas por ciudad y consultar el detalle de cada una, con buen rendimiento e indexación en buscadores.
- **Rol:** Conexión frontend–backend y preparación del deploy.
- **Highlights:**
  - Integración de Angular con Apollo y consultas GraphQL de propiedades.
  - Navegación y vista de detalle de inmuebles.
  - Configuración de Angular SSR y adaptación a Vercel como función serverless.
  - Ajustes del handler, rutas hacia `server.mjs` y archivos incluidos en el bundle.
- **Stack:** Angular, TypeScript, GraphQL, Apollo, SSR, Vercel.
- **Links:** demo y repo (`TODO(lalo)`).

### 6. ProjectPlanning + ProjectPlanning-Cloud (`project-planning`)
- **Categoría:** Académico/Investigación
- **Tagline:** Sistema distribuido de gestión de proyectos con backend cloud y procesos de negocio en Bonita BPM.
- **Problema:** Gestionar proyectos, etapas, compromisos y observaciones de organizaciones y proyectos sociales, sincronizando una aplicación local con un backend en la nube.
- **Rol:** Integración local–cloud, Bonita y funcionalidades de etapas, compromisos y observaciones.
- **Highlights:**
  - Integración inicial con Bonita y configuración de Docker Compose.
  - Persistencia cruzada de identificadores entre la base de datos y Bonita.
  - Subida y recuperación de etapas entre la aplicación local y el backend cloud.
  - Compromisos, observaciones (registro y cancelación), finalización de etapas y comentarios.
- **Stack:** FastAPI, PostgreSQL, SQLAlchemy, Docker, Docker Compose, Bonita BPM.
- **Arquitectura:** frontend/app local → backend local → ProjectPlanning-Cloud (FastAPI + PostgreSQL) → Bonita BPM. Incluir diagrama.

## 6. Páginas y secciones

### Home (`/`), una sola página con scroll
1. **Cabecera:** nombre/logotipo a la izquierda; anclas a Proyectos, Stack, Sobre mí, Contacto; botón CV. En móvil, menú accesible.
2. **Hero:** nombre, "Desarrollador full-stack", una frase de propuesta de valor concreta (ej.: "Desarrollo productos web completos, de la base de datos al deploy, y sistemas con IA aplicada") y botones: Ver proyectos, CV, GitHub, LinkedIn. Mostrar "La Plata, Argentina" y disponibilidad (texto editable en `site.ts`).
3. **Proyectos:** los 3 `featured` en formato grande con imagen y los otros 3 en formato compacto. Ver sección de diseño: **no usar una grilla de tarjetas idénticas**.
4. **Stack:** agrupado en Backend, Frontend, IA y datos, Infraestructura y herramientas. Sin barras de porcentaje ni "nivel de habilidad".
5. **Sobre mí:** máximo 3 párrafos. Contenido: estudiante avanzado de la Licenciatura en Sistemas en la UNLP (finaliza entre principios y mediados de 2027), trabaja como freelance, experiencia con productos reales y trabajo en equipo.
6. **Contacto:** email (`mailto:`), LinkedIn, GitHub, CV.
7. **Footer** mínimo.

### Detalle de proyecto (`/proyectos/[slug]`)
Orden: título y tagline → rol, categoría y stack → media → problema → aportes (highlights) → arquitectura/diagrama → métricas (si hay) → links → navegación al proyecto anterior/siguiente. Generar con `generateStaticParams`. Slug inexistente → `not-found`.

## 7. Dirección de diseño

Objetivo: que se vea como el sitio de una persona concreta, no como una plantilla. Evitar estos clichés: fondo crema con serif y acento terracota, fondo casi negro con un único acento verde ácido, una grilla de tarjetas redondeadas idénticas con la misma sombra, etiquetas en MAYÚSCULAS con tracking sobre cada título, numeración 01/02/03 decorativa, entradas fade-and-slide en cada sección, hover animado en todas las tarjetas.

**Propuesta de tokens (se puede ajustar con criterio, manteniendo la intención):**

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#EEF1F0` | fondo general (gris verdoso muy claro) |
| `--ink` | `#17202B` | texto principal |
| `--muted` | `#566170` | texto secundario |
| `--accent` | `#1D4ED8` | links, foco, acentos |
| `--mark` | `#F2C230` | un único subrayado/resaltado de marca |
| `--line` | `#C9D0D6` | divisores con sentido |

- **Modo oscuro:** soportarlo con `prefers-color-scheme`, derivando los tokens (no solo invertir).
- **Tipografía:** *Bricolage Grotesque* para títulos (variable, con carácter) e *IBM Plex Sans* para el cuerpo, ambas con `next/font`. Monoespaciada solo para fragmentos de código reales. Escala tipográfica clara, líneas de texto de menos de 80 caracteres.
- **Layout:** alineación a la izquierda, composición asimétrica, mucho aire. El listado de proyectos es **editorial**: filas grandes con título, tagline, tecnologías y miniatura, en lugar de tarjetas iguales. Los 3 destacados ocupan más espacio y llevan imagen.
- **Un solo momento memorable:** en el hero, un diagrama pequeño del flujo del asistente de voz (voz → STT → búsqueda → LLM → TTS) dibujado en SVG, con una única animación al cargar. Todo lo demás, quieto y disciplinado.
- **Movimiento:** solo en respuesta a acciones (abrir menú, expandir) y la animación única del hero. Respetar `prefers-reduced-motion`.
- **Imágenes:** capturas con marco simple, `next/image`, `alt` descriptivo, tamaños definidos para evitar saltos de layout.
- **Copys:** verbos claros, voz activa, sin frases de relleno ni superlativos vacíos.

## 8. Requisitos no funcionales

- **Responsive** desde 360 px; probar en 360, 768 y 1280 px.
- **Accesibilidad:** HTML semántico, un único `h1` por página, foco visible, contraste AA, navegación por teclado, `alt` en imágenes, enlace "saltar al contenido".
- **Rendimiento:** Lighthouse ≥ 95 en Rendimiento, Accesibilidad, Buenas prácticas y SEO en móvil. Sin JavaScript innecesario del lado del cliente; páginas estáticas.
- **SEO:** `metadata` por página, imagen Open Graph generada, `sitemap.ts`, `robots.ts`, datos estructurados `Person` (JSON-LD) en la home.
- **Seguridad y privacidad:** no commitear secretos; `.env.example` con `NEXT_PUBLIC_CONTACT_EMAIL` y `NEXT_PUBLIC_SITE_URL`; no publicar datos de clientes ni de usuarios reales.

## 9. Fases de trabajo

Hacé un commit por fase con mensaje claro (Conventional Commits). Antes de cerrar cada fase corré `pnpm lint`, `pnpm tsc --noEmit` y `pnpm build`.

**Fase 0 – Setup.** `create-next-app` (TypeScript, Tailwind, App Router, ESLint, `src/`), pnpm, Prettier, `.env.example`, README inicial, `.gitignore`.
*Aceptación:* `pnpm dev` y `pnpm build` funcionan.

**Fase 1 – Base y diseño.** Tokens como variables CSS y en la config de Tailwind, fuentes, `layout.tsx`, cabecera, footer, modo claro/oscuro, enlace "saltar al contenido".
*Aceptación:* layout base responsive y accesible por teclado.

**Fase 2 – Contenido.** Tipos y archivos de contenido (`projects.ts`, `skills.ts`, `site.ts`) con los 6 proyectos de la sección 5.
*Aceptación:* sin errores de tipos; los `TODO(lalo)` quedan listados en el README.

**Fase 3 – Home.** Hero con diagrama SVG, listado editorial de proyectos, stack, sobre mí y contacto.
*Aceptación:* la home se ve completa con contenido real y sin imágenes faltantes que rompan el diseño (usar un placeholder neutro cuando no haya media).

**Fase 4 – Detalle de proyectos.** Ruta dinámica estática, componentes de media, bloque de métricas condicional, navegación entre proyectos, `not-found`.
*Aceptación:* los 6 slugs se generan en el build; un slug inválido devuelve 404.

**Fase 5 – SEO y calidad.** Metadata, Open Graph, sitemap, robots, JSON-LD, revisión de accesibilidad y Lighthouse.
*Aceptación:* se cumplen las metas de la sección 8.

**Fase 6 – Deploy.**
1. Subir el repo a GitHub (`portfolio`).
2. Importar en Vercel, framework Next.js, rama `main` a producción.
3. Cargar las variables de entorno.
4. Verificar la URL de producción y los links.
5. Conectar el dominio propio cuando Lalo lo compre.
*Aceptación:* sitio público con HTTPS y previews por rama.

**Fase 7 – Opcional.** Versión en inglés (`/en`, con i18n sencillo basado en archivos), formulario de contacto con Resend, página de blog o notas técnicas, descarga del CV con tracking básico.

## 10. Reglas de trabajo para OpenCode

- Seguí este documento como fuente de verdad. Si algo es ambiguo o contradictorio, elegí la opción más simple y anotala en el README en una sección "Decisiones".
- No inventes información, métricas, URLs ni testimonios.
- No agregues páginas, secciones ni dependencias que no estén en el plan.
- Escribí componentes pequeños y tipados; sin `any`.
- Mantené el contenido separado del código de presentación.
- Al terminar cada fase, resumí qué hiciste y qué falta en 3-5 líneas.

## 11. Pendientes que debe aportar Lalo

- [ ] Email de contacto y URL del sitio en `.env`.
- [ ] CV en PDF.
- [ ] Capturas, GIF o video corto de cada proyecto (con datos ficticios o anonimizados).
- [ ] Video de demo del asistente de emergencias y valores reales de sus métricas.
- [ ] URLs de demo y repos públicos (Alquimon, Montesinos, CIDEPINT, ProjectPlanning).
- [ ] Confirmar si SolucionSpamWhatsApp puede mostrarse y con qué nivel de detalle.
- [ ] Lenguaje y framework de SolucionSpamWhatsApp.
- [ ] Diagramas de arquitectura (asistente de emergencias y ProjectPlanning).
- [ ] Dominio propio (opcional al inicio).