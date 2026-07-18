'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-white/[0.08] py-10 sm:py-16 px-4 overflow-hidden">
      {/* Dotted Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.25] -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-white mb-2 tracking-tight">Nischith Gowda R</h3>
            <p className="text-slate-400 font-semibold text-sm">Full-Stack Developer & AI Enthusiast</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-slate-400 text-sm font-bold">
            <a
              href="#projects"
              className="hover:text-primary transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="https://github.com/NischithGowdaR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nischith-gowda-r"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:nischitgowdar71@gmail.com"
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.05] text-center text-slate-500 text-xs font-semibold">
          <p>© {currentYear} Nischith Gowda R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
