import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      image: "/images/PROJECT MANAGEMENT.jpg",
      description: "Elegant and functional interiors that reflect your lifestyle.",
    },
    {
      image: "/images/interior-design-living-room-luxury-home.jpg",
      description: "Innovative architectural solutions blending art and function.",
    },
    {
      image: "/images/ARCHITECTURE.jpg",
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
    enter: (direction) => ({
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
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      scale: 0.95,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-center justify-center"
    >
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
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 md:px-8 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold mb-4 
                     text-2xl sm:text-3xl md:text-2xl
                     leading-tight md:leading-snug"
        >
          <span className="hidden sm:inline">
            Architectural Excellence&nbsp;||&nbsp;Interior Design&nbsp;||&nbsp;Project Management
          </span>
          <span className="block sm:hidden">
            Architectural Excellence<br />
             Interior Design<br />
             Project Management
          </span>
        </motion.h1>

        <motion.p
          key={slides[currentImage].description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-6"
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
