import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "Nexonica Systems Pvt. Ltd.",
      location: "Nashik, Maharashtra",
      period: "Jan 2026 – Mar 2026",
      bullets: [
        "Developed and maintained full-stack web applications using the MERN stack with a focus on scalable and modular architecture.",
        "Implemented RESTful APIs and backend business logic using Node.js and Express.js, integrated with MongoDB for efficient data management.",
        "Built responsive and interactive user interfaces in React.js, improving usability and cross-device compatibility.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">
            Work <span className="font-serif italic text-brand-600 dark:text-gray-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-500 font-light max-w-2xl">
            Hands-on industry experience building production-grade applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-5xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-8 border-l border-gray-200 dark:border-white/10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1 w-[10px] h-[10px] rounded-full bg-brand-500" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mt-0.5">
                    {exp.company}
                    <span className="text-gray-400 dark:text-gray-500 font-normal"> · {exp.location}</span>
                  </p>
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.bullets.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
