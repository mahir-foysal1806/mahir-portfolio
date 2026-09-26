import {
  LayoutGrid,
  GalleryHorizontal,
  Palette,
  Megaphone,
  FileStack,
  MonitorPlay,
  CalendarHeart,
  Youtube,
} from 'lucide-react'

const SERVICES = [
  {
    icon: LayoutGrid,
    title: 'Social Media Design',
    desc: 'Instagram posts, Facebook posts, LinkedIn graphics and branded social content.',
  },
  {
    icon: GalleryHorizontal,
    title: 'Carousel Design',
    desc: 'Educational, promotional and storytelling carousel designs.',
  },
  {
    icon: Palette,
    title: 'Brand Visuals',
    desc: 'Consistent visual systems for businesses and personal brands.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Design',
    desc: 'Promotional graphics, advertisements, campaign visuals and banners.',
  },
  {
    icon: FileStack,
    title: 'Canva Templates',
    desc: 'Editable Canva templates for businesses, creators and social media managers.',
  },
  {
    icon: MonitorPlay,
    title: 'Presentation Design',
    desc: 'Clean and engaging presentations for businesses, education and startups.',
  },
  {
    icon: CalendarHeart,
    title: 'Event & Promotional Design',
    desc: 'Posters, flyers, event graphics and promotional materials.',
  },
  {
    icon: Youtube,
    title: 'YouTube & Content Graphics',
    desc: 'Thumbnails and visual assets for content creators.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-display text-4xl sm:text-5xl text-bone-100 max-w-xl">
          What I can design for your brand
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-ink-900 p-7 hover:bg-ink-850 transition-colors"
            >
              <Icon className="text-brass-400" size={26} strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg text-bone-100">{title}</h3>
              <p className="mt-2 text-sm text-bone-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
