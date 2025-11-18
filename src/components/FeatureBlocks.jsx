import { motion } from 'framer-motion'

function Block({ reverse=false, title, bullets, right, left }) {
  return (
    <div className={`grid lg:grid-cols-12 gap-10 items-center py-10 ${reverse ? 'lg:direction-rtl' : ''}`}>
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/15 overflow-hidden">
          {left || right}
        </div>
      </div>
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-3 text-slate-300">
          {bullets.map((b, i) => (
            <motion.li key={i} initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} viewport={{ once: true }} transition={{delay:i*0.05}} className="flex gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
              <span>{b}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function FeatureBlocks(){
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Block title="Unification" bullets={[
          'Centralize workflows, documents, and entities in one command center',
          'Single source of truth with roles and permissions',
          'Templates standardize processes across countries'
        ]} left={<Placeholder />} />

        <Block reverse title="Automation" bullets={[
          'Rule-based triggers automate data collection and filings',
          'Smart reminders and escalations',
          'No-code builder for teams'
        ]} right={<Placeholder />} />

        <Block title="Transparency" bullets={[
          'Live dashboards and SLA tracking',
          'Full audit trails for every action',
          'Stakeholder visibility across regions'
        ]} left={<Placeholder />} />

        <Block reverse title="Integration Ecosystem" bullets={[
          'Native ERPs and e‑invoicing connectors',
          'Open APIs for custom flows',
          'Parlez integration for multilingual workflows'
        ]} right={<IconWall />} />

        <Block title="Scalability" bullets={[
          'Multi‑entity structure with granular access',
          'Global-ready with local nuance',
          'Performance for thousands of workflows'
        ]} left={<Placeholder />} />
      </div>
    </section>
  )
}

function Placeholder(){
  return <div className="w-full h-full bg-[linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
}

function IconWall(){
  const icons = ['SAP','Oracle','Netsuite','Xero','Fonoa','Parlez','Sovos','Stripe']
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
      {icons.map(i => (
        <div key={i} className="h-20 rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center text-slate-200 text-sm">
          {i}
        </div>
      ))}
    </div>
  )
}
