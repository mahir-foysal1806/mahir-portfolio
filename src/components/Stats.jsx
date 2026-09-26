const ITEMS = [
  { label: 'Social Media Design', desc: 'Posts, carousels and campaign visuals' },
  { label: 'Brand Visuals', desc: 'Consistent visual systems for brands' },
  { label: 'Canva Templates', desc: 'Editable kits for creators and teams' },
  { label: 'Creative Content', desc: 'Posters, banners and presentations' },
]

export default function Stats() {
  return (
    <section className="border-y border-white/5">
      <div className="mx-auto max-w-content px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {ITEMS.map((item) => (
          <div key={item.label} className="lg:border-l lg:first:border-l-0 lg:pl-6 lg:first:pl-0 hairline">
            <p className="font-display text-lg text-bone-100">{item.label}</p>
            <p className="mt-1 text-sm text-bone-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
