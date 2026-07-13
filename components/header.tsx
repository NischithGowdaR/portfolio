'use client'

import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
]

export function Header() {
  const [activeItem, setActiveItem] = useState('home')

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
  }

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl">
      <nav className="bg-[#0b0f19]/80 backdrop-blur-md border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-full px-2.5 py-1.5 flex items-center justify-between sm:justify-around gap-1">
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
      </nav>
    </header>
  )
}
