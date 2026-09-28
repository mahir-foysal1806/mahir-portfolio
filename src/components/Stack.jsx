const G = [
  ['LLM & Agents', ['LangChain', 'Tool calling', 'Prompt engineering', 'Sandboxed code execution', 'Streaming']],
  ['Retrieval', ['RAG pipelines', 'Embeddings', 'Vector databases', 'Semantic search', 'Chunking strategies']],
  ['Backend & Data', ['Node.js', 'REST APIs', 'PostgreSQL', 'pgvector', 'Docker']],
]
export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs text-brass-400">02 / STACK</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-bone-100">Tools I build with</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {G.map(([t, items]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-ink-900 p-7">
              <h3 className="font-mono text-sm text-brass-400">{t}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((i) => <span key={i} className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-bone-200">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
