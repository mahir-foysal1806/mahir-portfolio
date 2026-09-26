import { useState } from 'react'
import {
  Mail,
  Send,
  Linkedin,
  Github,
  ExternalLink,
} from 'lucide-react'

const CONTACT_EMAIL = 'foysalmahir01@gmail.com'

const LINKS = [
  {
    label: 'Email',
    value: 'foysalmahir01@gmail.com',
    href: 'mailto:foysalmahir01@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/md-mahir-foysal-013362389',
    href: 'https://www.linkedin.com/in/md-mahir-foysal-013362389/',
    icon: Linkedin,
  },
  {
    label: 'Behance',
    value: 'behance.net/mahirfoysal3',
    href: 'https://www.behance.net/mahirfoysal3',
    icon: ExternalLink,
  },
  {
    label: 'X',
    value: 'x.com/Mahirfoysalcs',
    href: 'https://x.com/Mahirfoysalcs',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    value: 'github.com/mahir-foysal1806',
    href: 'https://github.com/mahir-foysal1806',
    icon: Github,
  },
]

const BUDGETS = [
  'Under $200',
  '$200 – $500',
  '$500 – $1,000',
  '$1,000+',
  "Let's discuss",
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: BUDGETS[0],
    details: '',
  })

  const update = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Project request from ${form.name || 'a client'}`
    )

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Project type: ${form.projectType}
Budget range: ${form.budget}

Details:
${form.details}`
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-content px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        
        {/* Left Side */}
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-bone-100">
            Start a project
          </h2>

          <p className="mt-5 text-bone-400 leading-relaxed max-w-sm">
            Share a few details about your brand and what you need,
            and I'll get back to you.
          </p>

          {/* Contact Links */}
          <ul className="mt-10 space-y-4">
            {LINKS.map((link) => {
              const Icon = link.icon

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.label === 'Email'
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      link.label === 'Email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="group flex items-center gap-3 text-bone-200 hover:text-brass-300 transition-colors"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 group-hover:border-brass-400/50 transition-colors">
                      <Icon size={15} />
                    </span>

                    <span className="text-sm">
                      <span className="block text-bone-400">
                        {link.label}
                      </span>

                      {link.value}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={update('name')}
                type="text"
                className="field-input"
                placeholder="Your name"
              />
            </Field>

            <Field label="Email">
              <input
                required
                value={form.email}
                onChange={update('email')}
                type="email"
                className="field-input"
                placeholder="you@company.com"
              />
            </Field>

          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            <Field label="Project Type">
              <input
                value={form.projectType}
                onChange={update('projectType')}
                type="text"
                className="field-input"
                placeholder="e.g. Instagram carousel, branding"
              />
            </Field>

            <Field label="Budget Range">
              <select
                value={form.budget}
                onChange={update('budget')}
                className="field-input"
              >
                {BUDGETS.map((budget) => (
                  <option
                    key={budget}
                    value={budget}
                  >
                    {budget}
                  </option>
                ))}
              </select>
            </Field>

          </div>

          <Field label="Project Details">
            <textarea
              required
              value={form.details}
              onChange={update('details')}
              rows={5}
              className="field-input resize-none"
              placeholder="Tell me about your brand and what you need designed."
            />
          </Field>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-brass-400 text-ink-900 px-7 py-3.5 text-sm font-medium hover:bg-brass-300 transition-colors"
          >
            Send Project Request
            <Send size={15} />
          </button>
        </form>

      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-bone-400">
        {label}
      </span>

      {children}
    </label>
  )
}