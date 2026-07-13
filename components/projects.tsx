'use client'

import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'ClinSight AI',
    subtitle: 'Clinical Workflow Platform',
    description:
      'Multi-module platform automating clinical workflows including pre-consultation briefs, drug interaction checks, and specialist routing. Features OCR-based document parsing and real-time data sync.',
    highlights: [
      'AI-driven diagnostic dashboard',
      'Risk flagging & patient self-management',
      'Document parsing with OCR',
    ],
    tags: ['React.js', 'Node.js', 'AI/ML', 'Python'],
    link: '#',
    accentColor: 'from-cyan-500 to-blue-500',
    borderColor: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    tagBgColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  },
  {
    title: 'Career-Mock',
    subtitle: 'Voice-Based Interview Platform',
    description:
      'Voice-interactive interview platform with Supabase auth. Deployed on Vercel with recruiter credit system.',
    highlights: [
      'Voice-based interviews',
      'AI-powered evaluation',
      'Automated hiring decisions',
      'Role-based access control',
    ],
    tags: ['React.js', 'Supabase', 'AI/ML', 'Vercel'],
    link: '#',
    accentColor: 'from-violet-500 to-purple-500',
    borderColor: 'hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    tagBgColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  },
  {
    title: 'SmartHome',
    subtitle: 'Home Automation System',
    description:
      'Browser-based home automation system with voice-to-text control and FastAPI backend for intelligent device management.',
    highlights: [
      'Voice & text controls',
      'AI-driven automation',
      'Real-time device management',
      'FastAPI backend',
    ],
    tags: ['React.js', 'FastAPI', 'Python', 'AI/ML'],
    link: '#',
    accentColor: 'from-emerald-500 to-green-500',
    borderColor: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    tagBgColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 px-4 bg-background relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.25] -z-10" />

      {/* Background glow spots */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none -z-10 animate-pulse [animation-delay:3s]" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Building innovative solutions with modern technologies
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 hover:bg-[#0c1122]/80 transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between ${project.borderColor}`}
            >
              {/* Top Accent Gradient Border */}
              <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${project.accentColor}`} />

              <div className="space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary font-bold text-xs mt-1 uppercase tracking-wider">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-slate-350 leading-relaxed text-sm font-medium h-[120px] overflow-y-auto pr-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <p className="text-[10px] font-bold text-white tracking-widest uppercase opacity-75">Key Features</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400 font-semibold leading-relaxed">
                        <span className="text-primary font-extrabold mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags & Action Link footer wrapper */}
              <div className="mt-6 space-y-4 pt-4 border-t border-white/[0.06]">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 text-[10px] rounded-full font-bold border ${project.tagBgColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-bold transition-colors text-xs hover:underline pt-1"
                >
                  View Details
                  <ExternalLink size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
