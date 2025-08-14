// export default Portfolio;
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

// Project images - all 17 images from vidunnnn folder
const projectImages = [
  {
    id: 1,
    image: "/images/vidunnnn/a(1).png",
    category: "Interior Design"
  },
  {
    id: 2,
    image: "/images/vidunnnn/a(2).png",
    category: "Interior Design"
  },
  {
    id: 3,
    image: "/images/vidunnnn/a(3).png",
    category: "Interior Design"
  },
  {
    id: 4,
    image: "/images/vidunnnn/a(4).png",
    category: "Interior Design"
  },
  {
    id: 5,
    image: "/images/vidunnnn/a(5).png",
    category: "Interior Design"
  },
  {
    id: 6,
    image: "/images/vidunnnn/a(6).png",
    category: "Interior Design"
  },
  {
    id: 7,
    image: "/images/vidunnnn/a(7).png",
    category: "Interior Design"
  },
  {
    id: 8,
    image: "/images/vidunnnn/a(8).png",
    category: "Interior Design"
  },
  {
    id: 9,
    image: "/images/vidunnnn/a(9).png",
    category: "Interior Design"
  },
  {
    id: 10,
    image: "/images/vidunnnn/a(10).png",
    category: "Interior Design"
  },
  {
    id: 11,
    image: "/images/vidunnnn/a(11).png",
    category: "Interior Design"
  },
  {
    id: 12,
    image: "/images/vidunnnn/a(12).png",
    category: "Interior Design"
  },
  {
    id: 13,
    image: "/images/vidunnnn/a(13).png",
    category: "Interior Design"
  },
  {
    id: 14,
    image: "/images/vidunnnn/a(14).png",
    category: "Interior Design"
  },
  {
    id: 15,
    image: "/images/vidunnnn/a(15).png",
    category: "Interior Design"
  },
  {
    id: 16,
    image: "/images/vidunnnn/a(16).png",
    category: "Interior Design"
  },
  {
    id: 17,
    image: "/images/vidunnnn/a(17).png",
    category: "Interior Design"
  }
];

// Helper function to get current set of images (10 first, then 7)
const getCurrentImageSet = (currentIndex: number) => {
  if (currentIndex === 0) {
    // First set: 10 images
    return projectImages.slice(0, 10);
  } else {
    // Second set: 7 images
    return projectImages.slice(10, 17);
  }
};

const Portfolio: React.FC = () => {
  const [currentSet, setCurrentSet] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const autoplayRef = useRef<number | null>(null);
  
  // Total sets: 2 (10 images + 7 images)
  const totalSets = 2;

  // Handle drag/swipe
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    if (info.offset.x < -100) {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    } else if (info.offset.x > 100) {
      setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets);
    }
  };

  // Autoplay logic
  useEffect(() => {
    if (isDragging) return;
    autoplayRef.current = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 5000);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isDragging, totalSets]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.5 }
    })
  };

  // Get current set of images
  const currentImages = getCurrentImageSet(currentSet);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            BEST OF OUR PROJECTS
          </motion.h2>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"
          />
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our innovative architectural and interior design projects showcasing creativity and excellence
          </motion.p>
        </motion.div>

        {/* Project Grid with Sliding */}
        <div className="relative">
          <div className="w-full max-w-6xl mx-auto overflow-hidden">
            <div className="relative h-[400px] md:h-[500px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSet}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  className="absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing"
                >
                  {/* Grid Layout - Responsive grid for 10 or 7 images */}
                  <div className={`grid gap-3 h-full ${
                    currentSet === 0 
                      ? 'grid-cols-5 grid-rows-2' // 10 images: 5x2 grid
                      : 'grid-cols-4 grid-rows-2' // 7 images: 4x2 grid (with 1 empty space)
                  }`}>
                    {currentImages.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className={`relative group ${
                          currentSet === 0 
                            ? 'col-span-1 row-span-1' // Equal size for 10 images
                            : index < 4 
                              ? 'col-span-1 row-span-1' // First 4 images
                              : 'col-span-1 row-span-1' // Last 3 images
                        }`}
                      >
                        <img
                          src={project.image}
                        alt="Project"
                          className="w-full h-full object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                        />
                        {/* VR Icon */}
                        <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-70 rounded-md p-1.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        {/* Project Title - Removed */}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSets }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSet ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 shadow-lg hover:bg-opacity-100 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentSet((prev) => (prev + 1) % totalSets)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 shadow-lg hover:bg-opacity-100 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;