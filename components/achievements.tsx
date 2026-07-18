'use client'

import { Award, Globe } from 'lucide-react'

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 bg-background relative overflow-hidden">
      {/* Dotted Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.25] -z-10" />

      {/* Background glow spot */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
            Achievements & Languages
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-medium">
            Recognition and multilingual capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          
          {/* Awards Card */}
          <div className="relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 sm:p-8 hover:bg-[#0c1122]/80 hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.2)] hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between">
            {/* Top gold accent stripe */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-500 to-yellow-500" />

            <div className="flex items-start gap-4 mb-6">
              <Award className="text-amber-500 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Awards</h3>
                <p className="text-primary font-bold mb-1">
                  1st Place – Best Poster Award
                </p>
                <p className="text-slate-400 text-sm font-medium">
                  Vismaya Kalpa 2025 Mini-Project Exhibition
                </p>
              </div>
            </div>

            {/* Award Photo Gallery */}
            <div className="grid grid-cols-2 gap-3.5 mt-2">
              <div className="relative p-1 rounded-xl bg-gradient-to-tr from-amber-500/30 to-yellow-500/10 shadow-md group hover:scale-[1.02] transition-transform duration-300">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#030014]">
                  <img 
                    src="/award-1.jpg" 
                    alt="Best Poster Award Stage Presentation" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>
              
              <div className="relative p-1 rounded-xl bg-gradient-to-tr from-amber-500/30 to-yellow-500/10 shadow-md group hover:scale-[1.02] transition-transform duration-300">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#030014]">
                  <img 
                    src="/award-2.jpg" 
                    alt="Best Poster Award Group Photo" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 sm:p-8 hover:bg-[#0c1122]/80 hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)] hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.01]">
            {/* Top blue accent stripe */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-indigo-500" />

            <div className="flex items-start gap-4">
              <Globe className="text-primary flex-shrink-0 mt-1" size={32} />
              <div className="w-full">
                <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                    <span className="text-slate-300 font-bold text-sm">English</span>
                    <span className="text-blue-400 font-bold text-xs px-3 py-1 rounded-full bg-[#12162b] border border-blue-500/30">Professional</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                    <span className="text-slate-300 font-bold text-sm">Kannada</span>
                    <span className="text-blue-400 font-bold text-xs px-3 py-1 rounded-full bg-[#12162b] border border-blue-500/30">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-bold text-sm">Hindi</span>
                    <span className="text-blue-400 font-bold text-xs px-3 py-1 rounded-full bg-[#12162b] border border-blue-500/30">Limited Working</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
