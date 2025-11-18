import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ThreePillars from './components/ThreePillars'
import FeatureBlocks from './components/FeatureBlocks'
import PersonaCards from './components/PersonaCards'
import Timeline from './components/Timeline'
import Comparison from './components/Comparison'
import ResultsImpact from './components/ResultsImpact'
import Security from './components/Security'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* hero backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_top,rgba(16,185,129,0.15),transparent),radial-gradient(40rem_30rem_at_80%_20%,rgba(6,182,212,0.12),transparent)]" />

      <div className="relative">
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <ThreePillars />
          <FeatureBlocks />
          <PersonaCards />
          <Timeline />
          <Comparison />
          <ResultsImpact />
          <Security />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App