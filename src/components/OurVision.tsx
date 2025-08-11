import React from "react";
import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xl md:text-2xl font-medium text-center text-gray-700 mb-8"
        >
          From Concept to Creation: Your Furniture&apos;s Journey
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch">
            {/* Left - Text on Purple Background */}
            <div className="bg-gradient-to-br from-[#2e0a62] to-[#8236cf] text-white p-10 flex items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-2">
                  Step Inside Our Factory:
                </h3>
                <p className="text-3xl md:text-4xl font-bold leading-tight">
                  See Your Kitchen or <br /> Wardrobe Come to <br /> Life
                </p>
              </div>
            </div>

            {/* Right - Embedded YouTube Video */}
            <div className="relative w-full h-full min-h-[300px]">
              <div className="w-full h-full aspect-video">
                <iframe
                  className="w-full h-full rounded-md shadow-lg"
                  src="https://www.youtube.com/embed/L0PSxBh31NI?si=y9tFaA5YctBpIExl"
                  title="Modular Factory Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
