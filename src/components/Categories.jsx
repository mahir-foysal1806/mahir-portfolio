const CATS = [
  { title: 'Social Media', desc: 'Feed posts, carousels and stories' },
  { title: 'Branding', desc: 'Logos and lightweight visual systems' },
  { title: 'Marketing', desc: 'Ads, banners and campaign visuals' },
  { title: 'Canva Templates', desc: 'Editable kits for teams and creators' },
  { title: 'Posters', desc: 'Event and promotional posters' },
  { title: 'Presentations', desc: 'Pitch decks and business slides' },
  { title: 'Content Design', desc: 'Thumbnails and creator assets' },
]

export default function Categories() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-display text-4xl sm:text-5xl text-bone-100 max-w-lg">
          Where I can help
        </h2>

        <div className="mt-14 flex flex-wrap gap-4">
          {CATS.map((c) => (
            <div
              key={c.title}
              className="flex-1 min-w-[220px] rounded-2xl border border-white/10 p-6 hover:border-brass-400/40 hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="font-display text-lg text-bone-100">{c.title}</h3>
              <p className="mt-2 text-sm text-bone-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
