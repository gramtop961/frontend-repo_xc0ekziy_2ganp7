import { motion } from 'framer-motion'

const rows = [
  { feature: 'Unified workflows', values: ['✔','◯','◯','—'] },
  { feature: 'Automation builder', values: ['✔','◯','—','—'] },
  { feature: 'Real-time dashboards', values: ['✔','✔','◯','◯'] },
  { feature: 'Audit trails', values: ['✔','✔','✔','◯'] },
  { feature: 'Open integrations', values: ['✔','◯','◯','◯'] },
]

export default function Comparison(){
  const cols = ['Mytaxflow','Loctax','Keeyns','Fonoa']
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3 className="text-white text-2xl font-bold mb-6">Why teams choose Mytaxflow</h3>
        <div className="overflow-x-auto rounded-2xl ring-1 ring-white/10 bg-white/5">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-300">
                <th className="p-4">Feature</th>
                {cols.map(c => (<th key={c} className="p-4">{c}</th>))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr key={r.feature} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay:i*0.05}} className="border-t border-white/10">
                  <td className="p-4 text-slate-200">{r.feature}</td>
                  {r.values.map((v, idx) => (<td key={idx} className="p-4 text-center">{v}</td>))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pt-4">
          <a href="#" className="text-emerald-300 hover:text-emerald-200 text-sm">See Detailed Comparison →</a>
        </div>
      </div>
    </section>
  )
}
