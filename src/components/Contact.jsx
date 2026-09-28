import { Mail, Github, Linkedin } from 'lucide-react'
import { P } from '../data/profile'
export default function Contact() {
  const l = 'inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-bone-100 hover:border-brass-400/60 hover:text-brass-300 transition-colors'
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="mx-auto max-w-content px-6 text-center">
        <p className="font-mono text-xs text-brass-400">05 / CONTACT</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-bone-100 text-balance">Hiring for an AI role? Let's talk.</h2>
        <p className="mt-4 text-bone-300">Open to full-time remote AI engineering roles.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${P.email}`} className="inline-flex items-center gap-2 rounded-full bg-brass-400 text-ink-900 px-7 py-3 text-sm font-medium hover:bg-brass-300 transition-colors"><Mail size={16} /> {P.email}</a>
          <a href={P.github} className={l}><Github size={16} /> GitHub</a>
          <a href={P.linkedin} className={l}><Linkedin size={16} /> LinkedIn</a>
        </div>
        <p className="mt-16 font-mono text-xs text-bone-400">© {new Date().getFullYear()} {P.name}</p>
      </div>
    </section>
  )
}
