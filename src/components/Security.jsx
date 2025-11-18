export default function Security(){
  const tiles = [
    { title: 'GDPR compliant', desc:'Privacy by design with DPA support.' },
    { title: 'EU hosting', desc:'Data residency options available.' },
    { title: 'Audit trails', desc:'Immutable logs for every action.' },
    { title: 'Role‑based access', desc:'Granular permissions and SSO.' },
  ]
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-4 gap-6">
        {tiles.map(t => (
          <div key={t.title} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <h4 className="text-white font-semibold mb-1">{t.title}</h4>
            <p className="text-slate-300 text-sm">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
