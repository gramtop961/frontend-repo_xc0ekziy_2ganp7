export default function FinalCTA(){
  return (
    <section id="cta" className="py-20 relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h3 className="text-white text-3xl font-extrabold tracking-tight mb-4">Ready to transform your tax workflows?</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center rounded-2xl bg-white text-slate-900 font-semibold text-sm px-6 py-3 shadow-lg">Book a Demo</a>
          <a href="#" className="inline-flex items-center rounded-2xl border border-white/20 text-white font-semibold text-sm px-6 py-3 hover:bg-white/10">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
