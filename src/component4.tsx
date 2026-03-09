import { ArrowRight, Sparkles } from 'lucide-react'
import DashboardMockup from './dashboard-mockup'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/40 via-zinc-950 to-zinc-950" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-400 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Introducing Nexus 2.0 — Now with AI agents</span>
            <ArrowRight className="w-3 h-3" />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Work smarter with{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              AI-powered
            </span>{' '}
            productivity
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Nexus combines intelligent automation, real-time collaboration, and powerful analytics to help your team accomplish more in less time.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
              Start for free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Watch demo
            </button>
          </div>
          
          <p className="mt-4 text-sm text-zinc-500">No credit card required · Free 14-day trial</p>
        </div>
        
        {/* Dashboard mockup */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" style={{top: '60%'}} />
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}