import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div
        className={`mx-auto max-w-content px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'glass border border-white/5 rounded-full mx-4 sm:mx-auto sm:px-6 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : ''
        }`}
      >
        <a href="#home" className="font-display text-lg sm:text-xl tracking-tight text-bone-100">
          Mahir Foysal
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-bone-300 hover:text-brass-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-brass-400/50 px-5 py-2 text-sm text-brass-300 hover:bg-brass-400 hover:text-ink-900 hover:border-brass-400 transition-colors"
        >
          Let's Work Together
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-bone-100 p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-0 glass px-6 pt-24 pb-10 flex flex-col animate-rise">
          <nav className="flex flex-col gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-bone-100 hover:text-brass-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brass-400 text-ink-900 px-6 py-3 text-sm font-medium"
          >
            Let's Work Together
          </a>
        </div>
      )}
    </header>
  )
}
