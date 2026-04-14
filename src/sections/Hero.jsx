import { lazy, memo, Suspense } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

const HeroScene = lazy(() => import('./HeroScene'))

function HeroComponent() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020203]" id="home">
      
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-[#ff2038] animate-pulse font-mono text-sm tracking-widest">Loading visual matrix...</div>}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Foreground Overlay Content */}
      {/* pointer-events-none is added to the wrapper so you can touch/swipe the 3D canvas behind it */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between min-h-screen px-6 md:px-12 lg:px-24 pt-28 pb-12 pointer-events-none">
        
        {/* Left: Text Content */}
        {/* pointer-events-auto brings back clicking for text/buttons */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-2xl pointer-events-auto mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          
          {/* Responsive Heading */}
          <h1 className="text-[3rem] leading-[1.1] sm:text-[4rem] md:text-7xl lg:text-[5.5rem] font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl">
            {profile.name}
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 font-medium max-w-lg leading-relaxed">
            {profile.role}
          </p>
          
          {/* Actions: Stack on very small screens, side-by-side on normal */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#ff2038] text-white font-bold rounded-xl hover:bg-[#d0182a] transition-colors border border-[#ff2038]/50 shadow-[0_0_20px_rgba(255,32,56,0.3)] tracking-wide uppercase text-sm"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#0a0a0e]/80 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10 tracking-wide uppercase text-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right: Portrait Reveal */}
        <motion.div
          className="relative pointer-events-auto w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] flex-shrink-0"
          initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0, scale: 0.9 }}
          animate={{ clipPath: 'circle(100% at 50% 50%)', opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Image Container with Glow */}
          <div className="absolute inset-0 rounded-full border border-[#ff2038]/40 shadow-[0_0_50px_rgba(255,32,56,0.15)] bg-[#0a0a0e]/50 backdrop-blur-sm overflow-hidden">
            <img
              src={profile.photo}
              alt="K Pranav Eswar"
              className="w-full h-full object-cover object-top"
              loading="eager"
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                event.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            {/* Fallback if image fails */}
            <div className="hidden absolute inset-0 items-center justify-center bg-[#111] text-[#ff2038] font-mono text-2xl font-bold tracking-widest">
              KPE
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default memo(HeroComponent)