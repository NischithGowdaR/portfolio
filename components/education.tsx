'use client'

const educationData = [
  {
    school: 'Kalpataru Institute of Technology (KIT)',
    degree: 'Bachelor of Science in Computer Science',
    year: '2023 – 2027',
    details: 'CGPA: 8.23',
    achievements: ['Strong foundation in computer networking', 'Full-stack development expertise'],
    borderColor: 'hover:border-blue-500/50 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)]',
    accentColor: 'bg-blue-500',
  },
  {
    school: 'Shree Vidhya Peeta PU College',
    degree: 'Pre-University Course (PCMB)',
    year: '2021 – 2023',
    details: '85% Achievement',
    achievements: [],
    borderColor: 'hover:border-indigo-500/50 hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.15)]',
    accentColor: 'bg-indigo-500',
  },
  {
    school: 'Stella Maris High School',
    degree: 'Secondary School Certificate (SSLC)',
    year: '2018 – 2021',
    details: '95% Achievement',
    achievements: [],
    borderColor: 'hover:border-purple-500/50 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.15)]',
    accentColor: 'bg-purple-500',
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.25] -z-10" />
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Education</h2>
          <p className="text-base sm:text-lg text-slate-400 font-medium">Academic background and achievements</p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-[#0b0f19]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 sm:p-8 hover:bg-[#0c1122]/80 transition-all duration-500 hover:scale-[1.005] ${edu.borderColor}`}
            >
              <div className={`absolute top-0 left-0 w-[5px] h-full ${edu.accentColor}`} />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4 pl-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <p className="text-primary font-semibold mt-1">{edu.degree}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm font-semibold text-slate-400">{edu.year}</p>
                  <p className="text-primary font-bold text-sm mt-1">{edu.details}</p>
                </div>
              </div>

              {edu.achievements.length > 0 && (
                <ul className="space-y-2 mt-4 pt-4 border-t border-white/[0.06] pl-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm font-medium">
                      <span className="text-primary font-extrabold mt-0.5">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
