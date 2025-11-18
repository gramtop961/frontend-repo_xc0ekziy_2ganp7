import { motion } from 'framer-motion'

export default function ResultsImpact(){
  const stats = [
    { value: '40%', label: 'less manual work' },
    { value: '80%', label: 'fewer deadline errors' },
    { value: '3–6 weeks', label: 'onboarding' },
  ]

  const testimonials = [
    {
      quote: 'Mytaxflow gave us clarity across 25 entities and cut our month-end scramble.',
      name: 'Elena M.', role: 'Head of Tax, Fintech Co.'
    },
    {
      quote: 'Automation and audit trails changed the game for compliance.',
      name: 'Paul R.', role: 'Compliance Lead, Retail Group'
    }
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay:i*0.05}} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
                <div className="text-4xl font-extrabold text-white">{s.value}</div>
                <div className="text-slate-300">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
            <div className="flex gap-6 p-6 overflow-x-auto snap-x">
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-[280px] sm:min-w-[360px] snap-start rounded-xl p-5 bg-slate-900/60 ring-1 ring-white/10">
                  <p className="text-slate-200 italic mb-3">“{t.quote}”</p>
                  <div className="text-slate-400 text-sm">{t.name} — {t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
