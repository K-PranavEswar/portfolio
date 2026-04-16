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

      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        className="absolute top-[12%] left-[10%] h-28 w-28 rounded-full bg-red-500/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[18%] right-[12%] h-36 w-36 rounded-full bg-red-500/10 blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[22%] h-20 w-20 rounded-full bg-[#ff2038]/10 blur-2xl"
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 pt-28 sm:pt-32 lg:pt-0 pb-12">
        <motion.div
          className="flex flex-col items-center text-center w-full max-w-5xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="px-5 sm:px-6 py-4">
            <h1 className="text-[3rem] leading-[0.92] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white mb-2 uppercase tracking-tighter">
              {profile.name}
            </h1>

            <p className="text-xs sm:text-sm md:text-xl lg:text-2xl text-gray-300 font-medium max-w-3xl leading-relaxed">
              {profile.role}
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 mt-6 sm:mt-8 w-full px-2 sm:px-0 max-w-[340px] sm:max-w-md">
            <a
              href="#projects"
              className="w-1/2 text-center px-4 py-3 bg-[#ff2038]/95 text-white font-bold rounded-2xl hover:bg-[#d0182a] transition-all shadow-[0_0_20px_rgba(255,32,56,0.25)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-1/2 text-center px-4 py-3 bg-black/40 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 mt-6 sm:mt-7 text-lg sm:text-2xl text-white/90">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff2038] transition-colors"
            >
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-[#ff2038] transition-colors">
              <FaXTwitter />
            </a>

            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff2038] transition-colors"
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