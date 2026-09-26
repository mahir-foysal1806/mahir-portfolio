import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, onView }) {
  return (
    <div className="group">
      <button
        onClick={() => onView(project)}
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 text-left"
      >
        <img
          src={project.cover}
          alt={`${project.title} — ${project.category} design`}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-wide text-brass-300">{project.category}</p>
            <h3 className="mt-1 font-display text-xl text-bone-100">{project.title}</h3>
          </div>
          <span className="shrink-0 mb-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-bone-100 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </button>
      <p className="mt-3 text-sm text-bone-400 leading-relaxed">{project.description}</p>
    </div>
  )
}
