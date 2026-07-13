import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
