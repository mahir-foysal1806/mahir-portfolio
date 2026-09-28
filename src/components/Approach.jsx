const S = [
  ['Understand', 'Define the user problem and what a good answer looks like before writing code.'],
  ['Build', 'Small, testable pieces: retrieval, tools, memory, API. Typed and documented.'],
  ['Evaluate', 'Test answers against real examples so quality is measured, not guessed.'],
  ['Ship', 'Ship with logs, limits and safe sandboxing, then improve from real usage.'],
]
export default function Approach() {
  return (
    <section id="approach" className="py-24 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs text-brass-400">03 / APPROACH</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-bone-100 max-w-2xl">How I take an AI feature from idea to production</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {S.map(([t, d], i) => (
            <div key={t} className="border-t border-brass-400/50 pt-5">
              <p className="font-mono text-xs text-bone-400">0{i + 1}</p>
              <h3 className="mt-2 font-display text-xl text-bone-100">{t}</h3>
              <p className="mt-2 text-sm text-bone-300 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
