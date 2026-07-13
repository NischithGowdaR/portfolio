'use client'

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL'],
    borderHover: 'hover:border-blue-500/50 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]',
    accentColor: 'from-blue-500 to-transparent',
    tagBgColor: 'hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30',
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Tailwind CSS', 'FastAPI'],
    borderHover: 'hover:border-indigo-500/50 hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]',
    accentColor: 'from-indigo-500 to-transparent',
    tagBgColor: 'hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/30',
  },
  {
    name: 'Tools & Technologies',
    skills: [
      'Git',
      'GitHub',
      'Version Control',
      'UI/UX Design',
      'Component Architecture',
    ],
    borderHover: 'hover:border-pink-500/50 hover:shadow-[0_0_50px_-12px_rgba(236,72,153,0.2)]',
    accentColor: 'from-pink-500 to-transparent',
    tagBgColor: 'hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30',
  },
  {
    name: 'AI & Specializations',
    skills: ['RAG', 'Machine Learning', 'LLM Integration', 'Voice AI'],
    borderHover: 'hover:border-purple-500/50 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]',
    accentColor: 'from-purple-500 to-transparent',
    tagBgColor: 'hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/30',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-28 px-4 bg-card relative overflow-hidden">
      {/* Subtle Dotted Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.25] -z-10" />

      {/* Background glow spots */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse [animation-delay:3s]" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Tools and technologies I master
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-background/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-[#0c1122]/80 transition-all duration-500 hover:scale-[1.01] ${category.borderHover}`}
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${category.accentColor}`} />

              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2.5 bg-[#121626]/80 text-slate-300 border border-white/[0.04] rounded-xl font-bold text-sm transition-all duration-200 shadow-sm cursor-default ${category.tagBgColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
