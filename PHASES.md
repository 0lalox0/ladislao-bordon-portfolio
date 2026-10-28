# Estado de fases

## Fase 0 – Setup (Completada)
- [x] Next.js App Router + TypeScript + Tailwind CSS + ESLint + Turbopack
- [x] pnpm configurado
- [x] Prettier + eslint-config-prettier (.prettierrc, .prettierignore)
- [x] .env.example creado (NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_SITE_URL)
- [x] README restaurado desde backup
- [x] .gitignore generado por Next.js
- [x] public/cv-ladislao-bordon.pdf preservado
- [x] Verificación: pnpm lint, pnpm tsc --noEmit, pnpm build OK
- Commits: 72963a6

## Fase 1 – Base y diseño (Completada)
- [x] Tokens CSS globales (--paper, --ink, --muted, --accent, --mark, --line) con prefers-color-scheme
- [x] Expuestos en Tailwind (@theme inline) + font-title/font-body
- [x] Fuentes: Bricolage Grotesque (títulos) e IBM Plex Sans (cuerpo) con next/font
- [x] layout.tsx: metadata base (es-AR), skip link "Saltar al contenido", estructura flex
- [x] Header responsive (logo, anclas, botón CV móvil/escritorio)
- [x] Footer (año fijo 2026 para compatibilidad con prerender estático)
- [x] page.tsx base con <main id="contenido">
- [x] Accesibilidad: foco visible, respeta prefers-reduced-motion
- [x] Verificación: pnpm lint, pnpm tsc --noEmit, pnpm build OK
- Commits: 82ee18d

## Fase 2 – Contenido (Completada)
- [x] src/content/projects.ts: tipado Project + 6 proyectos (sección 5 del plan)
- [x] src/content/skills.ts: stack agrupado (Backend, Frontend, IA y datos, Infraestructura y herramientas)
- [x] src/content/site.ts: textos globales, nombre, links
- [x] Listar TODO(lalo) en README/PHASES.md (capturas, URLs demo/repo, métricas, diagramas, nivel detalle SolucionSpamWhatsApp)
- [x] Verificación: pnpm lint, pnpm tsc --noEmit, pnpm build OK
- Commit: por fase

## Fase 3 – Home (Completada)
- [x]] Hero con propuesta de valor + botones (Ver proyectos, CV, GitHub, LinkedIn) + "La Plata, Argentina" + disponibilidad
- [x]] Diagrama SVG del flujo voz→STT→búsqueda→LLM→TTS (única animación, respeta reduced-motion)
- [x]] Listado editorial de proyectos (3 featured grandes + 3 compactos). Sin grilla idéntica
- [x]] Sección Stack agrupada
- [x]] Sección Sobre mí (máx 3 párrafos, UNLP, freelance)
- [x]] Sección Contacto (mailto, LinkedIn, GitHub, CV)
- [x]] Placeholder neutro para media si falta

## Fase 4 – Detalle proyectos (Completada)
- [ ] app/proyectos/[slug]/page.tsx con generateStaticParams, not-found para slug inválido
- [x]] Componentes de media (image/video) con next/image, alt descriptivo
- [x]] Bloque métricas condicional
- [x]] Arquitectura/diagrama condicional
- [x]] Navegación anterior/siguiente
- [x]] Generación de 6 slugs en build

## Fase 5 – SEO y calidad (Pendiente)
- [ ] Metadata por página, Open Graph image (opengraph-image.tsx), sitemap.ts, robots.ts
- [ ] JSON-LD Person en home
- [ ] Revisión accesibilidad (h1 único, foco, contraste AA)
- [ ] Lighthouse ≥95 (Performance, A11y, Best Practices, SEO) móvil

## Fase 6 – Deploy (Pendiente)
- [ ] Subir repo a GitHub (portfolio)
- [ ] Importar en Vercel (Next.js, rama main)
- [ ] Variables de entorno
- [ ] Verificar URL producción + links + previews

## Fase 7 – Internacionalización e inglés (NO opcional)
- [ ] Versión en inglés en `/en` con i18n sencillo basado en archivos (estructura lista para inglés desde línea base). Añadir rutas/archivos de traducciones (ES base). 
- [ ] Mantener diseño y estructura; separar contenido por idioma.
- [ ] Formulario de contacto con Resend (implementación base según plan)
- [ ] Página de blog o notas técnicas (estructura mínima según alcance)
- [ ] Descarga del CV con tracking básico
- Nota: según plan, el sitio debe dejar estructura lista para inglés en Fase 7 (y se implementa completo en Fase 7).

## Pendientes de Lalo (sección 11 del plan)
- [ ] Email de contacto y URL sitio en .env
- [ ] CV PDF (ya existe public/cv-ladislao-bordon.pdf)
- [ ] Capturas/GIF/video de cada proyecto (anonimizados)
- [ ] Video demo asistente de emergencias + métricas reales
- [ ] URLs demo/repo públicos (Alquimon, Montesinos, CIDEPINT, ProjectPlanning)
- [ ] Confirmar nivel detalle SolucionSpamWhatsApp
- [ ] Lenguaje/framework SolucionSpamWhatsApp
- [ ] Diagramas arquitectura (asistente emergencias + ProjectPlanning)
- [ ] Dominio propio (opcional)
