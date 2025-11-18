export default function Pricing(){
  const plans = [
    { name:'Starter', price:'Request', features:['Up to 3 entities','Core workflows','Email support'] },
    { name:'Pro', price:'Request', features:['Unlimited entities','Automation builder','Priority support'] },
    { name:'Enterprise', price:'Custom', features:['SSO & SCIM','Custom integrations','Dedicated CSM'] },
  ]

  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.name} className="rounded-2xl p-6 bg-gradient-to-b from-white/8 to-white/3 ring-1 ring-white/10">
            <h4 className="text-white font-semibold text-lg">{p.name}</h4>
            <div className="text-slate-300 text-sm mb-4">{p.price}</div>
            <ul className="space-y-2 text-slate-300 text-sm">
              {p.features.map(f => (<li key={f} className="flex gap-2"><span className="mt-2 size-1.5 rounded-full bg-emerald-400"/><span>{f}</span></li>))}
            </ul>
            <div className="pt-4">
              <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 font-semibold text-sm px-4 py-2">Request Pricing</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
