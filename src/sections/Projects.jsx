import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.4 },
  }),
}

function Projects() {
  const [[index, direction], setPage] = useState([0, 0])
  
  const active = projects[index]

  const paginate = (newDirection) => {
    let nextIndex = index + newDirection
    if (nextIndex < 0) nextIndex = projects.length - 1
    if (nextIndex >= projects.length) nextIndex = 0
    
    setPage([nextIndex, newDirection])
  }

  const jumpToSlide = (dotIndex) => {
    setPage([dotIndex, dotIndex > index ? 1 : -1])
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-white/30"
    >
      {/* Background Blur Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.background || active.title}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={active.background || active.image}
            alt=""
            className="h-full w-full object-cover opacity-20 blur-[100px] saturate-150"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        
        {/* Left Column: Text Content */}
        {/* Added: relative positioning, fixed min-height, and padding-bottom to keep dots stable */}
        <div className="relative flex min-h-[500px] w-full flex-col justify-center pb-16 sm:min-h-[550px] lg:min-h-[600px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-8"
            >
              <div>
                <p className="mb-4 text-xs font-bold tracking-[0.3em] text-amber-200/80">
                  PROJECTS — {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                  {active.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-xl font-medium text-zinc-300">
                  {active.subtitle}
                </p>
                <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {active.copy}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={active.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-xl transition-all hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <ExternalLink size={18} className="transition-transform group-hover:-translate-y-0.5" />
                  View Source Code
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators - Now absolutely positioned to the bottom of the container */}
          <div className="absolute bottom-0 left-0 flex gap-3">
            {projects.map((_, dot) => (
              <button
                key={dot}
                onClick={() => jumpToSlide(dot)}
                aria-label={`Go to slide ${dot + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  dot === index 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Image & Controls */}
        <div className="flex flex-col items-center lg:items-end">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = offset.x * velocity.x
                if (swipe < -10000) paginate(1)
                else if (swipe > 10000) paginate(-1)
              }}
              className="relative w-full max-w-lg cursor-grab active:cursor-grabbing"
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="aspect-[16/10] w-full">
                  <img
                    src={active.image}
                    alt={`${active.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous project"
              className="group rounded-full border border-white/20 bg-white/5 p-4 backdrop-blur-xl transition-all hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="group rounded-full border border-white/20 bg-white/5 p-4 backdrop-blur-xl transition-all hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Projects)