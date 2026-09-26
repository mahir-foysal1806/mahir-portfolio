import { ArrowUpRight, Circle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850 px-8 py-16 sm:py-24 text-center">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-brass-400/10 blur-[100px]" />

          <h2 className="relative font-display text-balance text-4xl sm:text-5xl text-bone-100 max-w-2xl mx-auto">
            Have a brand that needs better visuals?
          </h2>
          <p className="relative mt-5 max-w-lg mx-auto text-bone-400 leading-relaxed">
            Let's create clean, engaging and consistent visuals that help your
            brand stand out.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brass-400 text-ink-900 px-7 py-3.5 text-sm font-medium hover:bg-brass-300 transition-colors"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-bone-100 hover:border-brass-400/60 hover:text-brass-300 transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="relative mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-bone-300">
            <Circle size={8} className="fill-emerald-400 text-emerald-400" />
            Currently open to freelance opportunities
          </div>
        </div>
      </div>
    </section>
  )
}
