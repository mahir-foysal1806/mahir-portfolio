import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { P } from '../data/profile'
const code = `const agent = createAgent({
  llm,
  tools: [search, sandbox.run, db.query],
  memory: pgVectorStore,
})

await agent.stream(task)`
export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brass-400/10 blur-[120px]" />
      <div className="mx-auto max-w-content px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-bone-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to remote roles
          </div>
          <h1 className="mt-6 font-display text-balance text-[2.5rem] leading-[1.1] sm:text-6xl text-bone-100">
            I build AI agents and RAG systems that work in production.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone-300 leading-relaxed">
            {P.role} focused on LLM apps: LangChain, Node.js, PostgreSQL, vector databases and sandboxed code execution.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-brass-400 text-ink-900 px-7 py-3.5 text-sm font-medium hover:bg-brass-300 transition-colors">View projects <ArrowUpRight size={16} /></a>
            <a href={P.github} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-bone-100 hover:border-brass-400/60 transition-colors"><Github size={16} /> GitHub</a>
            {P.cv && <a href={P.cv} className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm text-bone-100 hover:border-brass-400/60 transition-colors">Download CV</a>}
          </div>
          <p className="mt-8 font-mono text-xs text-bone-400">{P.location} · Available for full-time remote</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-ink-850 shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="flex gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-500" /><span className="h-2.5 w-2.5 rounded-full bg-ink-500" /><span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
          </div>
          <pre className="p-6 font-mono text-[13px] leading-relaxed text-bone-200 overflow-x-auto"><code>{code}</code></pre>
        </motion.div>
      </div>
    </section>
  )
}
