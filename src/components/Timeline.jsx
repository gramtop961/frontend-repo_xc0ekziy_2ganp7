import { motion } from 'framer-motion'
import { Cable, Settings2, Users2, ShieldCheck } from 'lucide-react'

export default function Timeline(){
  const steps = [
    { icon: Cable, title:'Connect', desc:'Plug into ERPs and e‑invoicing sources securely.' },
    { icon: Settings2, title:'Configure', desc:'Model entities, rules and responsibilities.' },
    { icon: Users2, title:'Collaborate', desc:'Assign, approve and track with clarity.' },
    { icon: ShieldCheck, title:'Control', desc:'Monitor deadlines, SLAs and compliance in real‑time.' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay:i*0.05}} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-900 grid place-items-center mb-3">
                <s.icon />
              </div>
              <h4 className="text-white font-semibold mb-1">{s.title}</h4>
              <p className="text-slate-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
