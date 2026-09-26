import { Check } from 'lucide-react'

const POINTS = [
  'Clean and modern visual style',
  'Brand consistency across every asset',
  'Fast, clear communication',
  'Editable Canva files',
  'Attention to detail',
  'Social-media-focused design',
  'Client-friendly workflow',
  'Open to revisions',
]

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-bone-100">
            Why clients work with me
          </h2>
          <p className="mt-5 text-bone-400 max-w-sm leading-relaxed">
            A straightforward way to work with a designer who treats your brand
            visuals as seriously as you do.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3 text-bone-200">
              <Check size={18} className="mt-0.5 shrink-0 text-brass-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
