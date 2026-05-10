import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brand-500/50 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-400 rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none z-[1] hidden md:block mix-blend-screen"
        animate={{ x: mousePosition.x - 128, y: mousePosition.y - 128 }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
