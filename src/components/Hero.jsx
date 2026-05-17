import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const fullText = "A motivated Full Stack Developer building production-grade web applications with real-world impact.";
  const words = fullText.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gray-500 dark:text-gray-500 font-medium mb-6 tracking-[0.2em] uppercase text-xs">
              Jay Khairnar — Portfolio
            </p>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-6 text-gray-900 dark:text-white leading-[0.9]">
              Full Stack <br />
              <span className="font-serif italic text-gray-400 dark:text-gray-500">Developer</span>
            </h1>

            <div className="mt-12 mb-16">
              <motion.div
                className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed flex flex-wrap overflow-hidden"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, index) => (
                  <motion.span variants={child} key={index} className="mr-2 mb-2">
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5 sm:gap-6">
              {/* Primary CTA */}
              <MagneticButton
                href="#projects"
                className="group flex items-center gap-3 text-sm font-semibold tracking-wider uppercase text-gray-900 dark:text-white transition-colors"
              >
                View Selected Works
                <span className="w-8 h-[1px] bg-gray-900 dark:bg-white transition-all group-hover:w-12" />
              </MagneticButton>

              {/* Resume Download */}
              <MagneticButton
                href="/resume.pdf"
                download="Jay_Khairnar_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-white/20 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all"
              >
                <FiDownload className="transition-transform group-hover:translate-y-0.5" />
                Resume
              </MagneticButton>

              {/* Secondary CTA */}
              <MagneticButton
                href="#contact"
                className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors"
              >
                Let's Talk
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
