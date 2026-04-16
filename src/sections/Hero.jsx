import { memo } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import snowVideo from '../assets/snow.mp4'

function HeroComponent() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#020203]"
      id="home"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={snowVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="absolute top-[12%] left-[10%] h-28 w-28 rounded-full bg-red-500/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[18%] right-[12%] h-36 w-36 rounded-full bg-red-500/10 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-[40%] right-[22%] h-20 w-20 rounded-full bg-[#ff2038]/10 blur-2xl"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 sm:px-10 lg:px-20">
        <motion.div
          className="flex w-full max-w-6xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="px-4">
            <h1 className="text-[3.2rem] leading-[0.9] sm:text-[4.8rem] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem] font-black uppercase tracking-[-0.05em] text-white">
              {profile.name}
            </h1>

           <p className="hero-role-text mt-4 text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium tracking-wide text-gray-300">
              {profile.role}
            </p>
          </div>

          <div className="mt-8 flex w-full max-w-[360px] sm:max-w-lg lg:max-w-xl flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="flex-1 rounded-2xl bg-[#ff2038] px-6 py-4 text-center text-sm sm:text-base lg:text-lg font-bold text-white shadow-[0_0_30px_rgba(255,32,56,0.35)] transition-all hover:scale-105 hover:bg-[#d0182a]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center text-sm sm:text-base lg:text-lg font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xl sm:text-2xl lg:text-3xl text-white/90">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#ff2038]"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#ff2038]"
            >
              <FaXTwitter />
            </a>

            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#ff2038]"
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