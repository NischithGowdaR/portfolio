'use client'

import { Mail, ExternalLink, Code2, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-28 px-4 bg-background relative overflow-hidden">
      {/* Subtle Dotted Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.25] -z-10" />

      {/* Background glow spots */}
      <div className="absolute top-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[110px] pointer-events-none -z-10 animate-pulse [animation-delay:2s]" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
            I'm always open to discussing new projects, innovative ideas, and opportunities to collaborate.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Email Card */}
          <div className="relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-[#0c1122]/80 hover:shadow-[0_0_50px_-12px_rgba(239,68,68,0.2)] hover:border-red-500/40 transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-red-500 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a
                  href="mailto:nischitgowdar71@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors break-all font-bold text-[15px] hover:underline"
                >
                  nischitgowdar71@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-[#0c1122]/80 hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.2)] hover:border-green-500/40 transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-green-500 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                <p className="text-slate-400 font-bold text-[15px]">Tiptur, Karnataka 572201, India</p>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-[#0c1122]/80 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)] hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                <ExternalLink size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/nischith-gowda-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-bold text-[15px] hover:underline"
                >
                  linkedin.com/in/nischith-gowda-r
                </a>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-[#0c1122]/80 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)] hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
                <a
                  href="https://github.com/NischithGowdaR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-bold text-[15px] hover:underline"
                >
                  github.com/NischithGowdaR
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Action Banner */}
        <div className="relative overflow-hidden border border-primary/25 hover:border-primary/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl bg-gradient-to-tr from-[#0b0f19] to-[#120f32] transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-primary to-indigo-500" />
          <p className="text-lg text-slate-300 mb-6 font-bold relative z-10">
            Available for internships, freelance projects, and full-time opportunities
          </p>
          <a
            href="mailto:nischitgowdar71@gmail.com"
            className="inline-flex px-8 py-3.5 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-xl font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/35 relative z-10 text-sm"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
