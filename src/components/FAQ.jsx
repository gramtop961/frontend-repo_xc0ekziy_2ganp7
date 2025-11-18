import { useState } from 'react'

const data = [
  { q:'What is Mytaxflow?', a:'A unified workflow platform for multi‑country VAT operations.' },
  { q:'How long does onboarding take?', a:'Most teams are live within 3–6 weeks.' },
  { q:'Do you support SSO?', a:'Yes, SAML and SCIM are available on Enterprise.' },
  { q:'Which ERPs are supported?', a:'SAP, Oracle, Netsuite and more via open APIs.' },
  { q:'Is data hosted in the EU?', a:'Yes, EU hosting and data residency options are available.' },
]

export default function FAQ(){
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h3 className="text-white text-2xl font-bold mb-6">FAQ</h3>
        <div className="divide-y divide-white/10 rounded-2xl ring-1 ring-white/10 bg-white/5">
          {data.map((item, i) => (<Item key={i} {...item} />))}
        </div>
      </div>
    </section>
  )
}

function Item({ q, a }){
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={()=>setOpen(!open)} className="w-full text-left p-5 text-slate-200 hover:bg-white/5">
        {q}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-300 text-sm">{a}</div>
      )}
    </div>
  )
}
