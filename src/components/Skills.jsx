import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiTool, FiGlobe, FiCloud } from 'react-icons/fi';
import SpotlightCard from './SpotlightCard';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FiCode className="text-2xl mb-4 text-gray-400" />,
      skills: ["Python", "JavaScript", "Java", "C++"],
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Frameworks & Libraries",
      icon: <FiLayers className="text-2xl mb-4 text-gray-400" />,
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Flask"],
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Databases",
      icon: <FiDatabase className="text-2xl mb-4 text-gray-400" />,
      skills: ["MongoDB", "MySQL"],
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Tools",
      icon: <FiTool className="text-2xl mb-4 text-gray-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Web Technologies",
      icon: <FiGlobe className="text-2xl mb-4 text-gray-400" />,
      skills: ["HTML5", "CSS3", "JavaScript"],
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Cloud & AI",
      icon: <FiCloud className="text-2xl mb-4 text-gray-400" />,
      skills: ["AWS Cloud Foundations", "NVIDIA Deep Learning"],
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">
            Technical <span className="font-serif italic text-brand-600 dark:text-gray-400">Arsenal</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-500 font-light max-w-2xl">
            A comprehensive overview of my technical expertise and the tools I use to build scalable software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={category.className}
            >
              <SpotlightCard className="h-full p-8 md:p-10">
                {category.icon}
                <h3 className="text-xl font-medium mb-6 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-50 dark:bg-white/[0.02] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/[0.05] rounded-xl text-sm font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
