import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            One platform to unify, automate, and scale tax workflows.
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Mytaxflow eliminates fragmented tools and manual work by delivering a unified workflow ecosystem for multi-country VAT operations.
          </motion.p>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="flex flex-wrap items-center gap-3 text-slate-200/90">
            <Badge>Unified Workflows</Badge>
            <Badge>Real-Time Visibility</Badge>
            <Badge>Smart Automation</Badge>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6}} className="flex flex-wrap gap-4 pt-2">
            <a href="#cta" className="inline-flex items-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 font-semibold text-sm px-6 py-3 shadow-lg shadow-emerald-500/30 hover:shadow-cyan-500/40 transition">
              Book a Demo
            </a>
            <a href="#" className="inline-flex items-center rounded-2xl border border-white/20 text-white font-semibold text-sm px-6 py-3 hover:bg-white/10 transition">
              Watch Overview Video
            </a>
          </motion.div>
        </div>

        {/* Right: Spline Scene */}
        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.8}} className="lg:col-span-5 h-[420px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40 backdrop-blur">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
    </section>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/15 px-3 py-1 text-sm">
      <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
      {children}
    </span>
  )
}
