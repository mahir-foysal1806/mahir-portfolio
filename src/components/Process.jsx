const STEPS = [
  {
    n: '01',
    title: 'Discover',
    desc: 'Understand the brand, audience and design goal.',
  },
  {
    n: '02',
    title: 'Plan',
    desc: 'Define visual direction, references, colors and layout.',
  },
  {
    n: '03',
    title: 'Design',
    desc: 'Create the visual concepts and refine the strongest direction.',
  },
  {
    n: '04',
    title: 'Deliver',
    desc: 'Provide final assets and editable Canva files where applicable.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-display text-4xl sm:text-5xl text-bone-100">How a project runs</h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative lg:px-8 lg:first:pl-0 lg:last:pr-0">
              {i !== 0 && (
                <div className="hidden lg:block absolute left-0 top-6 h-px w-8 -translate-x-8 bg-white/10" />
              )}
              <span className="font-display text-3xl text-brass-400">{step.n}</span>
              <h3 className="mt-4 font-display text-xl text-bone-100">{step.title}</h3>
              <p className="mt-2 text-sm text-bone-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
