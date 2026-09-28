import profile from '../assets/profile.png'
import { P } from '../data/profile'
export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="mx-auto max-w-content px-6 grid md:grid-cols-[0.6fr_1.4fr] gap-12 items-center">
        <img src={profile} alt={`Portrait of ${P.name}`} className="rounded-2xl border border-white/10 w-full max-w-xs aspect-[4/5] object-cover" />
        <div>
          <p className="font-mono text-xs text-brass-400">04 / ABOUT</p>
          <h2 className="mt-3 font-display text-4xl text-bone-100">Hi, I'm {P.name}.</h2>
          <p className="mt-5 text-bone-300 leading-relaxed max-w-xl">
            I'm an AI developer who builds LLM-powered products end to end: retrieval pipelines, agents with tools, and the Node.js and Postgres backends behind them.
          </p>
          <p className="mt-4 text-bone-300 leading-relaxed max-w-xl">
            I'm based in {P.location} and looking for a full-time remote role where I can ship AI features with a product team. I write clear async updates and document what I build.
          </p>
        </div>
      </div>
    </section>
  )
}
