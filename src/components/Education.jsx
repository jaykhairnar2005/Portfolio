import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering — Information Technology",
      institution: "PVG's College of Engineering, Nashik",
      period: "Aug 2023 – Aug 2027",
      gpa: "8.00 / 10.00",
      grade: "Distinction",
    },
  ];

  return (
    <section id="education" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">
            <span className="font-serif italic text-brand-600 dark:text-gray-400">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-500 font-light max-w-2xl">
            Academic foundation behind the work.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-5xl">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/10 transition-colors"
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 flex items-center justify-center text-brand-500">
                <FiBookOpen size={20} />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 block">
                    {edu.period}
                  </span>
                  <p className="text-gray-900 dark:text-white font-semibold mt-2 text-sm">
                    GPA: {edu.gpa}
                  </p>
                  <span className="inline-block mt-1 px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
