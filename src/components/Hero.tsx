import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      image: "/images/ab.jpg",
      title: "Interior Design",
      description: "Elegant and functional interiors that reflect your lifestyle.",
    },
    {
      image: "/images/aa.jpg",
      title: "Architectural Excellence",
      description: "Innovative architectural solutions blending art and function.",
    },
    {
      image: "/images/pm.jpg",
      title: "Project Management",
      description: "Seamless execution and delivery, on time and on budget.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      scale: 1.05,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      scale: 0.95,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <section id="hero" className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-center justify-center">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence custom={direction}>
          <motion.img
            key={currentImage}
            src={slides[currentImage].image}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 80, damping: 20 },
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
            }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-8 max-w-3xl">
        <motion.h1
          key={slides[currentImage].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold mb-4"
        >
          {slides[currentImage].title}
        </motion.h1>
        <motion.p
          key={slides[currentImage].description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-6"
        >
          {slides[currentImage].description}
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition"
        >
          Get Free Estimate
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
