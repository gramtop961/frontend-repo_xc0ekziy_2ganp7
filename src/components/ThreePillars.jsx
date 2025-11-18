import { motion } from 'framer-motion'
import { Layers, Bot, Link2 } from 'lucide-react'

export default function ThreePillars() {
  const items = [
    { icon: Layers, title: 'Unify', desc: 'One place for workflows, documents, tasks.' },
    { icon: Bot, title: 'Automate', desc: 'Rule-based flows reduce manual effort.' },
    { icon: Link2, title: 'Connect', desc: 'Integrations with ERPs, e‑invoicing, Parlez.' },
  ]

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{delay:i*0.05}}
            className="rounded-2xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 p-6 backdrop-blur">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/90 to-cyan-500/90 text-slate-900 grid place-items-center shadow-lg mb-4">
              {<item.icon />}
            </div>
            <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
