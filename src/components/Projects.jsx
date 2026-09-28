import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs text-brass-400">01 / PROJECTS</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-bone-100 max-w-2xl">Real problems, shipped systems.</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-ink-900 p-7 hover:border-brass-400/40 transition-colors flex flex-col">
              <h3 className="font-display text-2xl text-bone-100">{p.title}</h3>
              <p className="mt-1 text-bone-400">{p.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => <span key={s} className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-brass-300">{s}</span>)}
              </div>
              <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                <div><dt className="font-mono text-xs text-bone-400">PROBLEM</dt><dd className="text-bone-300">{p.problem}</dd></div>
                <div><dt className="font-mono text-xs text-bone-400">WHAT I BUILT</dt><dd className="text-bone-300">{p.built}</dd></div>
              </dl>
              <ul className="mt-4 space-y-1 text-sm text-bone-300 list-disc pl-5 marker:text-brass-400">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="mt-auto pt-6 flex gap-5 text-sm">
                {p.github && <a href={p.github} className="inline-flex items-center gap-1.5 text-bone-100 hover:text-brass-400"><Github size={15} /> Code</a>}
                {p.demo && <a href={p.demo} className="inline-flex items-center gap-1.5 text-bone-100 hover:text-brass-400"><ExternalLink size={15} /> Live demo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
