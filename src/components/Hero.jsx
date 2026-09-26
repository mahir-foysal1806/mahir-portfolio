import { motion } from 'framer-motion'
import { ArrowUpRight, Circle } from 'lucide-react'
import profile from '../assets/profile.png'

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brass-400/10 blur-[120px]" />

      <div className="mx-auto max-w-content px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm tracking-wide text-brass-400">
            Canva Designer &middot; Social Media Visual Designer
          </p>

          <h1 className="mt-6 font-display text-balance text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4rem] text-bone-100">
            I turn ideas into visuals people remember.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-bone-300 leading-relaxed">
            I create clean, engaging and conversion-focused visual content for
            brands, businesses and creators.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-brass-400 text-ink-900 px-7 py-3.5 text-sm font-medium hover:bg-brass-300 transition-colors"
            >
              View My Work
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-bone-100 hover:border-brass-400/60 hover:text-brass-300 transition-colors"
            >
              Let's Work Together
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-bone-300">
            <Circle size={8} className="fill-emerald-400 text-emerald-400" />
            Available for Freelance Projects
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img
              src={profile}
              alt="Portrait of Mahir Foysal, Canva Designer"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          </div>

          <div className="hidden sm:flex absolute -left-6 top-10 glass rounded-2xl border border-white/10 px-4 py-3 items-center gap-2 shadow-xl">
            <span className="text-sm text-bone-100">Canva Designer</span>
          </div>

          <div className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 glass rounded-2xl border border-white/10 px-4 py-3 items-center gap-2 shadow-xl">
            <span className="text-sm text-bone-100">50+ Designs</span>
          </div>

          <div className="hidden sm:flex absolute -left-4 bottom-10 glass rounded-2xl border border-white/10 px-4 py-3 items-center gap-2 shadow-xl">
            <Circle size={7} className="fill-emerald-400 text-emerald-400" />
            <span className="text-sm text-bone-100">Available for Work</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
