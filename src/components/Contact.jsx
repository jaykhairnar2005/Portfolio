import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SpotlightCard from './SpotlightCard';

// ─────────────────────────────────────────────
// 🔑  PASTE YOUR EMAILJS CREDENTIALS HERE
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_uve1ot8';
const EMAILJS_TEMPLATE_ID = 'template_lup881r';
const EMAILJS_PUBLIC_KEY  = 'qLWty6-8VUPm6GeCc';
// ─────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guard: don't double-submit
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus('success');
        formRef.current.reset(); // clear all fields
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setErrorMsg('Something went wrong. Please try again or email me directly.');
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left: heading + contact links ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-gray-900 dark:text-white leading-[1.1]">
              Let's build something{' '}
              <span className="font-serif italic text-gray-400 dark:text-gray-500">
                extraordinary
              </span>.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400/90 leading-relaxed font-light mb-12">
              <p>
                Whether you have an interesting project, a freelance inquiry, or just want
                to connect—I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { label: 'Phone',    value: '+91 9322944897',            href: 'tel:+919322944897' },
                { label: 'Email',    value: 'jaykhairnar336@gmail.com',  href: 'mailto:jaykhairnar336@gmail.com' },
                { label: 'GitHub',   value: 'jaykhairnar2005',           href: 'https://github.com/jaykhairnar2005' },
                { label: 'LinkedIn', value: 'Jay Khairnar',              href: 'https://linkedin.com/in/jay-khairnar-689684271' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 border-b border-gray-200 dark:border-white/10 pb-4 hover:border-gray-900 dark:hover:border-white transition-colors"
                >
                  <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    {item.label}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-gray-900 dark:text-white font-medium group-hover:text-brand-500 dark:group-hover:text-gray-300 transition-colors">
                      {item.value}
                    </p>
                    <FiArrowRight className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            <SpotlightCard className="p-8 md:p-12">
              <form
                ref={formRef}
                className="flex flex-col gap-8"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-gray-200 dark:border-white/10 focus:border-gray-900 dark:focus:border-white outline-none text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-600 font-light"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-gray-200 dark:border-white/10 focus:border-gray-900 dark:focus:border-white outline-none text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-600 font-light"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-gray-200 dark:border-white/10 focus:border-gray-900 dark:focus:border-white outline-none text-gray-900 dark:text-white transition-colors resize-none placeholder-gray-400 dark:placeholder-gray-600 font-light"
                  />
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <p className="text-emerald-500 text-sm font-medium">
                    Message sent! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
                )}

                {/* Submit */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-[#030303] rounded-full font-medium transition-all hover:bg-gray-800 dark:hover:bg-gray-200 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                    {status !== 'sending' && (
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
              </form>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
