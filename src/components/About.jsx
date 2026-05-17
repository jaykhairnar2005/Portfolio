
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-gray-900 dark:text-white leading-[1.1]">
              Engineering <span className="font-serif italic text-brand-600 dark:text-gray-400">solutions</span>,<br/> crafting experiences.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="space-y-8 text-xl text-gray-600 dark:text-gray-400/90 leading-relaxed font-light">
              <p>
                I'm a third-year BE Information Technology student at <span className="text-gray-900 dark:text-white font-medium">PVG's College of Engineering, Nashik</span>, with hands-on experience in full-stack development and software architecture. I build scalable applications using the <span className="text-gray-900 dark:text-white font-medium">MERN stack, Java, and Python.</span>
              </p>
              <p>
                Backed by <span className="text-gray-900 dark:text-white font-medium">AWS and NVIDIA certifications</span> and active participation in national-level hackathons, I focus on building intuitive, resilient systems that bridge the gap between complex ideas and functional reality.
              </p>
              <div className="pt-8 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-4xl font-serif text-gray-900 dark:text-white mb-2">2+</p>
                  <p className="text-sm font-medium tracking-wider uppercase text-gray-500">Years Coding</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-gray-900 dark:text-white mb-2">10+</p>
                  <p className="text-sm font-medium tracking-wider uppercase text-gray-500">Projects Built</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-gray-900 dark:text-white mb-2">8.0</p>
                  <p className="text-sm font-medium tracking-wider uppercase text-gray-500">GPA / 10</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
