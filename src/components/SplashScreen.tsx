import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '/images/logo2.png';

type SplashScreenProps = {
  onFinish?: () => void;
  durationMs?: number;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, durationMs = 1800 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, durationMs);
    return () => clearTimeout(timer);
  }, [onFinish, durationMs]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-44 h-auto md:w-56 drop-shadow-md"
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{
          opacity: 1,
          scale: [1, 1.03, 1],
          y: 0
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
      />
    </motion.div>
  );
};

export default SplashScreen;


