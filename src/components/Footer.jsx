import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/jaykhairnar2005', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/jay-khairnar-689684271', label: 'LinkedIn' },
    { icon: <FiMail size={18} />, href: 'mailto:jaykhairnar336@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#0a0a0a] py-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left — name + credit */}
        <div className="text-center sm:text-left">
          <p className="text-gray-700 dark:text-gray-300 font-semibold tracking-tight">Jay Khairnar</p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
            Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>

        {/* Center — copyright */}
        <p className="text-sm text-gray-400 dark:text-gray-600 order-last sm:order-none">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Right — social icons */}
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
