import { lazy, memo, Suspense } from 'react'
import Hero from '../sections/Hero'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ScrollToTop } from '../components/ScrollToTop'
import { useGsapStory } from '../hooks/useGsapStory'
import { useLenis } from '../hooks/useLenis'

const About = lazy(() => import('../sections/About'))
const Skills = lazy(() => import('../sections/Skills'))
const Timeline = lazy(() => import('../sections/Timeline'))
const Education = lazy(() => import('../sections/Education'))
const Projects = lazy(() => import('../sections/Projects'))
const Certifications = lazy(() => import('../sections/Certifications'))
const Contact = lazy(() => import('../sections/Contact'))

function SectionFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-white text-lg tracking-widest animate-pulse">
      Loading Experience...
    </div>
  )
}

function Home() {
  useLenis()
  useGsapStory()

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

     <main className="relative">
  <Hero />

  <Suspense fallback={<SectionFallback />}>
    <About />
    <Skills />
    <Projects />
    <Timeline />
    <Education />
    <Certifications />
    <Contact />
  </Suspense>
</main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default memo(Home)
