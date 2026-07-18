import { Award, ExternalLink } from 'lucide-react'

const certificates = [
  { title: 'CCNA: Introduction to Networks', file: '/certificates/ccna-introduction-to-networks.pdf' },
  { title: 'CCNA: Switching, Routing, and Wireless Essentials', file: '/certificates/ccna-switching-routing-wireless.pdf' },
  { title: 'CCNA: Enterprise Networking, Security, and Automation', file: '/certificates/ccna-enterprise-security-automation.pdf' },
  { title: 'Python Essentials 1', file: '/certificates/python-essentials-1.pdf' },
  { title: 'Python Essentials 2', file: '/certificates/python-essentials-2.pdf' },
  { title: 'Web Fundamentals', file: '/certificates/certificate-1.pdf' },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-28 px-4 bg-[#050714] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.2] -z-10" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Certificates</h2>
          <p className="text-base sm:text-lg text-slate-400 font-medium">Professional learning and networking credentials</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate) => (
            <a
              key={certificate.file}
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-16 items-center gap-3 rounded-xl bg-[#0b0f19]/70 border border-white/[0.08] p-4 hover:border-primary/50 hover:bg-[#10152a] transition-all duration-300"
              aria-label={`View ${certificate.title}`}
            >
              <Award className="text-primary shrink-0" size={21} />
              <span className="min-w-0 flex-1 font-bold leading-snug text-white">{certificate.title}</span>
              <ExternalLink className="text-slate-500 shrink-0 group-hover:text-primary transition-colors" size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
