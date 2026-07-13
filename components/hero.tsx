'use client'

import { ArrowDown, Brain, Code2, Sparkles } from 'lucide-react'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#030014] via-[#080721] to-[#030014] px-4 py-28 overflow-hidden">
      {/* Subtle Dotted Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.35] -z-10" />

      {/* Background Mesh Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[12%] left-[8%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-primary/10 dark:bg-primary/20 blur-[80px] md:blur-[130px] animate-mesh" />
        <div className="absolute bottom-[20%] right-[8%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-[90px] md:blur-[140px] animate-mesh [animation-delay:4s]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1b1437]/60 border border-primary/30 text-primary-foreground/90 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} className="text-primary" />
            <span>Open for Internships & Opportunities</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight leading-[1.05]">
              Nischith Gowda R
            </h1>
            <p className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-primary via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Full-Stack Developer & AI Enthusiast
            </p>
          </div>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-medium">
            Computer Science undergraduate at Kalpataru Institute of Technology (KIT) with expertise in building scalable, secure web applications using React.js, Node.js, and Python. Passionate about AI-driven solutions, LLM integrations, and modern UI/UX paradigms.
          </p>

          <div className="flex gap-4 justify-start flex-wrap pt-4">
            <a
              href="mailto:nischitgowdar71@gmail.com"
              className="px-8 py-3.5 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/95 hover:to-indigo-600/95 text-white rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] cursor-pointer text-sm"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/NischithGowdaR"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/10 hover:border-white/25 text-white bg-white/5 hover:bg-white/10 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Right Column: Flat Photo & Floating Glass Cards */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4]">
            
            {/* Ambient Background Gradient for Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-indigo-500 to-cyan-400 rounded-3xl opacity-20 blur-2xl animate-pulse -z-10" />

            {/* Photo Double-Border Frame */}
            <div className="w-full h-full p-1.5 rounded-3xl bg-gradient-to-tr from-primary via-indigo-500 to-cyan-400 shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:shadow-[0_0_50px_rgba(139,92,246,0.35)] transition-all duration-500 hover:scale-[1.01]">
              <div className="w-full h-full relative rounded-[18px] overflow-hidden bg-[#030014]">
                {/* Profile Image */}
                <img
                  src="/profile.jpg"
                  alt="Nischith Gowda R"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-103"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Badge 1: Top-Left */}
            <div className="absolute -top-6 -left-6 bg-[#0b0f19]/80 backdrop-blur-md border border-white/[0.08] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float hover:border-primary/50 transition-colors duration-300">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Builds</p>
                <p className="text-sm font-bold text-foreground">Web Apps</p>
              </div>
            </div>

            {/* Floating Badge 2: Bottom-Right */}
            <div className="absolute -bottom-6 -right-6 bg-[#0b0f19]/80 backdrop-blur-md border border-white/[0.08] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-reverse hover:border-indigo-500/50 transition-colors duration-300">
              <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg">
                <Brain size={20} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Focuses on</p>
                <p className="text-sm font-bold text-foreground">AI & ML</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bounce Down Arrow */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce z-10"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  )
}
