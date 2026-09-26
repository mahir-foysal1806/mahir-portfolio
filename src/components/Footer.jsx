import { Linkedin, Github, ExternalLink } from 'lucide-react'

const LINKS = [
  {
    label: 'Behance',
    href: 'https://www.behance.net/mahirfoysal3',
    icon: ExternalLink,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-mahir-foysal-013362389/',
    icon: Linkedin,
  },
  {
    label: 'X',
    href: 'https://x.com/Mahirfoysalcs',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mahir-foysal1806',
    icon: Github,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-content px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-bone-100">
            Mahir Foysal
          </p>

          <p className="text-sm text-bone-400">
            Canva Designer &middot; Social Media Visual Designer
          </p>
        </div>

        <nav className="flex gap-6">
          {LINKS.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-bone-400 hover:text-brass-300 transition-colors"
              >
                {link.label}
                <Icon size={13} />
              </a>
            )
          })}
        </nav>

        <p className="text-xs text-bone-400">
          &copy; 2026 Mahir Foysal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}