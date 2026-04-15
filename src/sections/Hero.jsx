import { lazy, memo, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { profile } from '../data/portfolio'

const HeroScene = lazy(() => import('./HeroScene'))

function HeroComponent() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#020203]"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center text-[#ff2038] animate-pulse font-mono text-sm tracking-widest">
              Loading visual matrix...
            </div>
          }
        >
          <HeroScene />
        </Suspense>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 pt-28 sm:pt-32 lg:pt-0 pb-12 pointer-events-none">
        <motion.div
          className="flex flex-col items-center text-center w-full max-w-5xl pointer-events-auto translate-y-14 sm:translate-y-16 lg:translate-y-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="px-5 sm:px-6 py-4">
            <h1 className="text-[3rem] leading-[0.92] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white mb-2 uppercase tracking-tighter drop-shadow-[0_0_25px_rgba(0,0,0,0.75)]">
              {profile.name}
            </h1>

            <p className="text-xs sm:text-sm md:text-xl lg:text-2xl text-gray-300 font-medium max-w-3xl leading-relaxed">
              {profile.role}
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 mt-6 sm:mt-8 w-full px-2 sm:px-0 max-w-[340px] sm:max-w-md">
            <a
              href="#projects"
              className="w-1/2 text-center px-4 py-3 bg-[#ff2038]/95 text-white font-bold rounded-2xl hover:bg-[#d0182a] transition-all shadow-[0_0_25px_rgba(255,32,56,0.35)] tracking-wide uppercase text-[11px] sm:text-sm"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-1/2 text-center px-4 py-3 bg-black/40 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10 tracking-wide uppercase text-[11px] sm:text-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 mt-6 sm:mt-7 text-lg sm:text-2xl text-white/90">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff2038] transition-all duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-[#ff2038] transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter />
            </a>

            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff2038] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(HeroComponent)