import { ArrowUpRight } from 'lucide-react'
import profile from '../assets/profile.png'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <div className="relative mx-auto w-full max-w-xs lg:max-w-none order-2 lg:order-1">
          <div className="rounded-[1.75rem] border border-white/10 overflow-hidden">
            <img
              src={profile}
              alt="Mahir Foysal at work"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-balance text-4xl sm:text-5xl text-bone-100">
            Designing visuals that make brands look better.
          </h2>
          <p className="mt-6 text-bone-300 leading-relaxed max-w-xl">
            I'm Mahir Foysal, a Canva designer and social media visual designer.
            I focus on creating clean, engaging and useful visual content for
            businesses, creators and digital brands — the kind of posts,
            templates and marketing visuals that make a page look considered
            rather than thrown together.
          </p>
          <p className="mt-4 text-bone-300 leading-relaxed max-w-xl">
            My work sits at the intersection of design and social media: I
            think about how a post performs on a feed, not just how it looks
            on its own.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass-400 text-ink-900 px-7 py-3.5 text-sm font-medium hover:bg-brass-300 transition-colors"
          >
            Let's Create Something
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
