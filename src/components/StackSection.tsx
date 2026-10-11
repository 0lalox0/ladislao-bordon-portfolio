import { skillGroups } from '@/content/skills'

export function StackSection() {
  return (
    <section id="stack" className="mt-16 scroll-mt-24">
      <div className="mb-6">
        <h2 className="font-title text-2xl font-semibold tracking-tight sm:text-3xl">Stack</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Tecnologías y herramientas con las que desarrollo productos completos.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article key={group.title} className="border border-line/60 rounded-lg p-5">
            <h3 className="font-title text-lg font-semibold tracking-tight">{group.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
