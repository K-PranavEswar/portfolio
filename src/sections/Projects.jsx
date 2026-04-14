import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { TiltCard } from '../components/TiltCard'
import { projects } from '../data/portfolio'
import { riseIn, stagger, viewport } from '../animations/motion'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  // Modal open aayirikumbol pinnile scroll thadayunnu
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [activeProject])

  return (
    <section className="section projects-section relative py-16 px-4" id="projects">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Premium showcase cards for systems with real-world utility."
        copy="Each build is framed like a production slate: intent, stack, and next action."
      />
      
      <motion.div 
        className="project-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto" 
        variants={stagger} 
        initial="hidden" 
        whileInView="show" 
        viewport={viewport}
      >
        {projects.map((project) => (
          <TiltCard 
            className="project-card group cursor-pointer" 
            key={project.title}
          >
            <motion.div 
              variants={riseIn} 
              className="h-full flex flex-col rounded-3xl overflow-hidden bg-white/5 border border-white/10"
              whileTap={{ scale: 0.98 }} // Touch feedback for mobile
            >
              
              {/* Project Image / Gradient Visual */}
              <div className="project-visual relative h-56 sm:h-64 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110 opacity-90 lg:opacity-80 lg:group-hover:opacity-100"
                  />
                ) : (
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${project.gradient}`} />
                )}
                
                <div className="absolute inset-0 bg-black/30 lg:group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Mobile Floating Tags - Better UX */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                   <span className="text-[10px] uppercase font-bold px-3 py-1 bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                      {project.tags[0]}
                   </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="project-body p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>
                
                <div className="tag-row flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  type="button" 
                  className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-bold text-sm lg:bg-white/10 lg:text-white lg:hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                  onClick={() => setActiveProject(project)}
                >
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </motion.div>

      {/* Responsive Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />
            
            <motion.dialog
              open
              className="project-modal relative w-full sm:max-w-3xl h-[90vh] sm:h-auto bg-zinc-900 border-t sm:border border-white/10 rounded-t-[2.5rem] sm:rounded-3xl shadow-2xl overflow-y-auto m-0 outline-none"
              initial={{ opacity: 0, y: "100%" }} // Slide up from bottom on mobile
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Sticky Close Button for Mobile Accessibility */}
              <div className="sticky top-0 right-0 z-[60] flex justify-end p-4 pointer-events-none">
                <button 
                  type="button" 
                  className="p-3 rounded-full bg-white text-black shadow-xl pointer-events-auto" 
                  onClick={() => setActiveProject(null)}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-0 -mt-16 sm:mt-0"> {/* Adjust for close button space */}
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  {activeProject.image ? (
                     <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover"/>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${activeProject.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>

                <div className="p-8 -mt-12 relative z-10">
                  <h3 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tighter">
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-cyan-400 bg-cyan-500/5 px-3 py-1 rounded-full border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-10">
                    {activeProject.copy || activeProject.subtitle}
                  </p>
                  
                  <div className="modal-actions grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8">
                    <a
  href={activeProject.sourceCode}
  target="_blank"
  rel="noreferrer"
  className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-center hover:bg-white/10 transition-all"
>
  SOURCE CODE
</a>
                  </div>
                </div>
              </div>
            </motion.dialog>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default memo(Projects)