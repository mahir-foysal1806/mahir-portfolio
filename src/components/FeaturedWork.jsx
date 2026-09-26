import { useMemo, useState } from 'react'
import { projects, categories } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function FeaturedWork() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl text-bone-100">Selected Work</h2>
            <p className="mt-4 max-w-md text-bone-400">
              A selection of visual design projects created for brands, businesses
              and digital platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === cat
                    ? 'border-brass-400 bg-brass-400 text-ink-900'
                    : 'border-white/10 text-bone-300 hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onView={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
