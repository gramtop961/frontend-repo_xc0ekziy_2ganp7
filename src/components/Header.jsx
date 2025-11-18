import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ children, href }) => (
    <a href={href} className="text-sm text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400/80 to-cyan-500/80 ring-1 ring-white/30 shadow-lg shadow-cyan-500/20 grid place-items-center">
            <span className="text-slate-900 font-extrabold">M</span>
          </div>
          <span className="text-white font-semibold tracking-tight group-hover:opacity-90">Mytaxflow</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink href="#product">Product</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#integrations">Integrations</NavLink>
          <NavLink href="#use-cases">Use Cases</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#resources">Resources</NavLink>
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:block">
          <a href="#cta" className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 font-semibold text-sm px-4 py-2 shadow-lg shadow-emerald-500/25 hover:shadow-cyan-500/30 transition-shadow">
            Book a Demo
          </a>
        </div>

        {/* Mobile */}
        <button className="lg:hidden p-2 text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Panel */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="px-6 py-4 grid gap-4">
            <NavLink href="#product">Product</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#integrations">Integrations</NavLink>
            <NavLink href="#use-cases">Use Cases</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 font-semibold text-sm px-4 py-2 shadow-lg">
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
