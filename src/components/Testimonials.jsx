import { MessageSquareQuote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-content px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 sm:py-20 text-center">
          <MessageSquareQuote className="mx-auto text-brass-400" size={32} strokeWidth={1.3} />
          <h2 className="mt-6 font-display text-3xl sm:text-4xl text-bone-100">Client Feedback</h2>
          <p className="mt-4 mx-auto max-w-md text-bone-400 leading-relaxed">
            Client testimonials will be added here as projects are completed.
          </p>
        </div>
      </div>
    </section>
  )
}
