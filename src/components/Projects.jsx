import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import SpotlightCard from './SpotlightCard';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: "project-1",
      title: "Student Skill Gap Analysis",
      description: "A full-stack MERN web app that analyzes student academic profiles to identify skill gaps and generate personalized recommendations. Designed RESTful APIs with Node.js and Express.js; used MongoDB to store and query student data for real-time analysis. Features a responsive React dashboard with dynamic data visualizations.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      githubUrl: "https://github.com/jaykhairnar2005",
      demoUrl: null,
      className: "md:col-span-2 md:row-span-2"
    },
    {
      id: "project-2",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with JWT authentication, product catalog, and cart functionality serving 500+ users. Optimized MongoDB queries and API response time by 40% through indexing and efficient schema design.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/jaykhairnar2005",
      demoUrl: null,
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: "project-3",
      title: "Spam Message Detector",
      description: "A machine learning-powered spam classifier integrated with a modern React frontend. Achieves 95% accuracy in real-time text classification via a dedicated Flask RESTful API.",
      techStack: ["Python", "Flask", "React"],
      githubUrl: "https://github.com/jaykhairnar2005",
      demoUrl: null,
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">
            Selected <span className="font-serif italic text-brand-600 dark:text-gray-400">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-500 font-light max-w-2xl">
            A handcrafted selection of my recent projects showcasing full-stack development and complex problem solving.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(280px,_auto)] gap-6">
          {projects.map((project) => (
            <SpotlightCard
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={project.className}
            >
              <div className="p-8 md:p-10 flex flex-col h-full justify-between">
                <div>
                  <motion.h3 layoutId={`title-${project.id}`} className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </motion.h3>
                  <motion.p layoutId={`desc-${project.id}`} className="text-gray-600 dark:text-gray-400/80 text-sm md:text-base leading-relaxed line-clamp-3 font-light">
                    {project.description}
                  </motion.p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Expanded Modal View */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            {projects.filter(p => p.id === selectedId).map(project => (
              <motion.div
                layoutId={`card-${project.id}`}
                key="modal"
                className="relative w-full max-w-4xl bg-white dark:bg-[#080808] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors z-10"
                >
                  <FiX size={20} />
                </button>

                <div className="p-8 md:p-16">
                  <motion.h3 layoutId={`title-${project.id}`} className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-gray-900 dark:text-white">
                    {project.title}
                  </motion.h3>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.p layoutId={`desc-${project.id}`} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-12 max-w-3xl">
                    {project.description}
                  </motion.p>
                  
                  <div className="flex items-center gap-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-[#030303] rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                      >
                        <FiGithub className="text-xl" />
                        View Source
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                      >
                        Live Preview
                        <FiExternalLink className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
