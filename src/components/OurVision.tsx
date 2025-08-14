import { motion } from "framer-motion";
import { useRef } from "react";

const OurVision = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = Math.floor(container.clientWidth * 0.9);
    const delta = direction === "left" ? -amount : amount;
    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-bold text-blue-900 text-center mb-8"
        >
          From Concept to Creation, We Bring a Dream Alive Through
        </motion.h2>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollByAmount("left")}
              className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 shadow-md hover:bg-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth px-1 no-scrollbar"
            >
              {[
                { src: "/images/video/2023018_Interior_Home_1920x1080.mp4", type: "video/mp4", fallback: "/images/video/fallback2.jpg" },
                { src: "/images/video/2140672_Expensive_Concrete_1920x1080.mp4", type: "video/mp4", fallback: "/images/video/fallback3.jpg" },
                { src: "/images/video/4943662_Estate_Facade_Balcony_Railing_1920x1080.mp4", type: "video/mp4", fallback: "/images/video/fallback4.jpg" },
                { src: "/images/video/4943700_Indoor_Color_1920x1080.mp4", type: "video/mp4", fallback: "/images/video/fallback5.jpg" },
                { src: "/images/video/0_Living_Room_Interior_Design_3840x2160.mov", type: "video/mp4", fallback: "/images/video/fallback1.jpg" },
              ].map((video) => (
                <div
                  key={video.src}
                  className="flex-none w-full sm:w-2/3 lg:w-1/2 xl:w-1/4 overflow-hidden rounded-xl shadow-lg"
                >
                  <video
                    className="w-full h-full aspect-video object-cover"
                    controls
                    muted
                    playsInline
                    loop
                    autoPlay
                    onCanPlay={() => console.log(`Video loaded: ${video.src}`)}
                    onError={(e) => console.error(`Error loading video: ${video.src}`, e)}
                  >
                    <source src={video.src} type={video.type} />
                    <img src={video.fallback} alt="Video fallback" className="w-full h-full object-cover" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollByAmount("right")}
              className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 shadow-md hover:bg-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;