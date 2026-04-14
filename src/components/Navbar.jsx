import { memo, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]
function NavbarComponent() {
  const [activeId, setActiveId] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll aavumbol navbar-nte background onnude dark aakkan
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section Observer for Active Link
  useEffect(() => {
    const sections = ['home', ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveId(visible.target.id)
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.16, 0.32, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      {/* Floating Glass Pill */}
      <div 
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-2xl md:rounded-full px-5 py-3 transition-all duration-500 border ${
          scrolled 
            ? 'bg-[#0a0a0e]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Brand */}
        <Link 
          className="flex items-center gap-2 text-white font-bold tracking-widest text-lg group" 
          to="/" 
          aria-label="K Pranav Eswar portfolio home"
          onClick={() => scrollToSection('home')}
        >
          PRANAV
          {/* Signal Indicator */}
          <span className="w-2 h-2 rounded-full bg-[#ff2038] shadow-[0_0_8px_rgba(255,32,56,0.8)] animate-pulse" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              type="button"
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeId === item.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {/* Magic Sliding Background */}
              {activeId === item.id && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] p-2 relative z-50"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} 
            className="w-6 h-[2px] bg-white block transition-transform"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
            className="w-6 h-[2px] bg-white block transition-opacity"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} 
            className="w-6 h-[2px] bg-white block transition-transform"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 mt-2 w-full rounded-2xl bg-[#0a0a0e]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden md:hidden flex flex-col p-4 gap-2"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  type="button"
                  className={`px-4 py-3 text-left rounded-xl text-sm font-medium tracking-wide transition-colors ${
                    activeId === item.id 
                      ? 'bg-white/10 text-white border border-white/5' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export const Navbar = memo(NavbarComponent)