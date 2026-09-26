const TOOLS = ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Freepik', 'AI Design Tools']

export default function Tools() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-display text-4xl sm:text-5xl text-bone-100 max-w-md">
          Tools I design with
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-bone-200 hover:border-brass-400/50 hover:text-brass-300 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
