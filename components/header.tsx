'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
]

export function Header() {
  const [activeItem, setActiveItem] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250

      // Highlight 'Home' if close to top
      if (window.scrollY < 120) {
        setActiveItem('home')
        return
      }

      for (const item of navItems) {
        if (item.id === 'home') continue
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveItem('home')
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveItem(id)
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-2xl">
      <nav className="relative bg-[#0b0f19]/90 backdrop-blur-md border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-2xl sm:rounded-full px-2.5 py-1.5">
        <div className="flex items-center justify-between sm:hidden">
          <span className="px-3 text-sm font-black text-white">NGR</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-300 hover:bg-white/10 hover:text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div id="mobile-navigation" className={`${isMenuOpen ? 'grid' : 'hidden'} gap-1 px-1 pb-1 pt-2 sm:hidden`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`min-h-11 rounded-xl px-3 text-left text-sm font-bold transition-colors ${activeItem === item.id ? 'bg-primary/15 text-primary' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="hidden sm:flex sm:items-center sm:justify-around sm:gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wide uppercase border transition-all duration-300 ${
              activeItem === item.id
                ? 'bg-primary/10 text-primary border-primary/40 shadow-[0_0_15px_rgba(139,92,246,0.15)] scale-[1.03]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
            }`}
          >
            {item.label}
          </button>
        ))}
        </div>
      </nav>
    </header>
  )
}
