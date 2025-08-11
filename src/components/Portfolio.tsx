// export default Portfolio;
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

// Helper to chunk array into groups of n
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Remove architectureImages and only use viunnnnImages
const viunnnnImages = Array.from({ length: 17 }, (_, i) => `/images/vidunnnn/a(${i + 1}).png`);
const viunnnnSlides = chunkArray(viunnnnImages, 3); // three images per slide

const slides: string[][] = [...viunnnnSlides];

interface SlideProps {
  key: string;
  src: string;
}

const Portfolio: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const totalSlides = slides.length;

  const [direction, setDirection] = useState<number>(0);
  const dragThreshold = 100; // px
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const autoplayRef = useRef<number | null>(null);

  // Handle drag/swipe
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    if (info.offset.x < -dragThreshold) {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > dragThreshold) {
      setDirection(-1);
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  // Autoplay logic
  useEffect(() => {
    if (isDragging) return;
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isDragging, slides.length]);

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

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a selection of our recent architectural and interior design projects. Each image showcases our commitment to quality, creativity, and client satisfaction.
          </p>
        </motion.div>
        <div className="relative flex flex-col items-center">
          <div className="w-full max-w-4xl mx-auto overflow-hidden">
            <div className="relative h-[22rem] sm:h-[30rem]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-grab active:cursor-grabbing"
                  style={{ pointerEvents: 'auto' }}
                >
                  <div className={`flex w-full h-full gap-4 justify-center items-center ${slides[current].length > 1 ? 'px-4' : ''} flex-col md:flex-row`}>
                    {slides[current].map((src, idx) => (
                      <img
                        key={src}
                        src={src}
                        alt="Project"
                        className={`object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300
                          ${slides[current].length > 1 ? 'w-full h-56 md:w-1/3 md:h-full' : 'w-full h-full'}`}
                        loading="lazy"
                        style={{ objectPosition: 'center' }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;