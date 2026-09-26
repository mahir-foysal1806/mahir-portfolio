import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-ink-950/90 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto my-10 w-[92%] max-w-3xl rounded-3xl border border-white/10 bg-ink-850 overflow-hidden"
          >
            <div className="relative">
              <img
                src={project.cover}
                alt={`${project.title} cover`}
                className="w-full aspect-[16/9] object-cover"
              />
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full glass border border-white/10 text-bone-100"
              >
                <X size={18} />
              </button>
              <span className="absolute bottom-4 left-4 rounded-full bg-brass-400 text-ink-900 text-xs font-medium px-3 py-1">
                {project.status}
              </span>
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-xs tracking-wide text-brass-300">{project.category}</p>
              <h3 className="mt-2 font-display text-3xl text-bone-100">{project.title}</h3>
              <p className="mt-3 text-bone-300 leading-relaxed">{project.description}</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm text-brass-300">Client / brand type</h4>
                  <p className="mt-2 text-bone-200 text-sm leading-relaxed">{project.brandType}</p>
                </div>
                <div>
                  <h4 className="text-sm text-brass-300">Design objective</h4>
                  <p className="mt-2 text-bone-200 text-sm leading-relaxed">{project.objective}</p>
                </div>
                <div>
                  <h4 className="text-sm text-brass-300">Creative direction</h4>
                  <p className="mt-2 text-bone-200 text-sm leading-relaxed">{project.creativeDirection}</p>
                </div>
                <div>
                  <h4 className="text-sm text-brass-300">Typography</h4>
                  <p className="mt-2 text-bone-200 text-sm leading-relaxed">{project.typography}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm text-brass-300">Color palette</h4>
                <div className="mt-3 flex gap-3">
                  {project.palette.map((hex) => (
                    <div key={hex} className="flex flex-col items-center gap-2">
                      <span
                        className="h-10 w-10 rounded-full border border-white/15"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-xs text-bone-400">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm text-brass-300">Design process</h4>
                <ol className="mt-3 space-y-2">
                  {project.process.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-bone-200 leading-relaxed">
                      <span className="text-brass-400 font-display">{String(i + 1).padStart(2, '0')}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="text-sm text-brass-300">Goal</h4>
                <p className="mt-2 text-sm text-bone-200 leading-relaxed">{project.goal}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
