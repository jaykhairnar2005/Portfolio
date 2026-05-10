import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

const Achievements = () => {
  const achievementsList = [
    {
      title: "Smart India Hackathon (SIH) Participant",
      year: "2023 & 2025",
      type: "Hackathon",
      color: "text-brand-500 bg-brand-50 dark:bg-brand-500/10 border-brand-200 dark:border-brand-500/20"
    },
    {
      title: "TECHATHON — National Level Hackathon, AISSMS College of Engineering, Pune",
      year: "2024",
      type: "Hackathon",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20"
    },
    {
      title: "Fundamentals of Deep Learning — NVIDIA Certification",
      year: "Certified",
      type: "Certification",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20"
    },
    {
      title: "AWS Academy Graduate — Cloud Foundations + Official Training Badge",
      year: "Certified",
      type: "Certification",
      color: "text-orange-500 bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-gray-50 dark:bg-transparent transition-colors duration-300 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Honors & <span className="text-brand-600 dark:text-brand-400">Milestones</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
            Recognitions from hackathons, open-source communities, and professional certifications.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl hover:shadow-xl hover:shadow-brand-500/5 transition-all group backdrop-blur-sm"
            >
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                {item.type === 'Certification' ? <FiCheckCircle size={20} /> : <FiAward size={20} />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-auto pb-4 group-hover:text-brand-500 transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/10 mt-auto">
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                  {item.year}
                </span>
                <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
