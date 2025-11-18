import { motion } from 'framer-motion'

export default function PersonaCards(){
  const personas = [
    { title: 'Tax Manager', bullets: ['Consolidated control tower', 'Automated reminders and approvals', 'Country-ready templates'] },
    { title: 'CFO / Leadership', bullets: ['Single source of truth', 'Risk and exposure insights', 'Forecasting and resource planning'] },
    { title: 'Compliance Teams', bullets: ['Guided workflows', 'Audit-ready trails', 'Clear ownership and SLAs'] },
  ]

  return (
    <section id="use-cases" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p, idx) => (
            <motion.div key={p.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: idx*0.05}} className="rounded-2xl p-6 bg-gradient-to-b from-white/6 to-white/2 ring-1 ring-white/10">
              <h3 className="text-white font-semibold text-lg mb-3">{p.title}</h3>
              <ul className="space-y-2 text-slate-300">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2"><span className="mt-2 size-1.5 rounded-full bg-emerald-400"/><span>{b}</span></li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="#use-cases" className="text-emerald-300 hover:text-emerald-200 text-sm">See Use Cases →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
