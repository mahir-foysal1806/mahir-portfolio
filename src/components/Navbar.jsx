import { P } from '../data/profile'
const L = [['Projects', '#projects'], ['Stack', '#stack'], ['Approach', '#approach'], ['About', '#about'], ['Contact', '#contact']]
export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5">
      <div className="mx-auto max-w-content px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-mono text-sm text-bone-100">{P.name}<span className="text-brass-400">_</span></a>
        <nav className="hidden md:flex gap-7">
          {L.map(([t, h]) => <a key={h} href={h} className="text-sm text-bone-300 hover:text-brass-400 transition-colors">{t}</a>)}
        </nav>
        <a href="#contact" className="rounded-full bg-brass-400 text-ink-900 px-4 py-1.5 text-sm font-medium hover:bg-brass-300 transition-colors">Hire me</a>
      </div>
    </header>
  )
}
