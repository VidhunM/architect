import React from 'react';
import { motion } from 'framer-motion';

const architectureImages: string[] = [
  '/images/ARCHITECTURE 1/modern-city-villa-with-chic-fence.jpg',
  '/images/ARCHITECTURE 1/beautiful-modern-building-modern-architecture.jpg',
  '/images/ARCHITECTURE 1/3d-rendering-house-model.jpg',
];

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            ARCHITECTURE
          </motion.h2>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-semibold text-blue-900 mb-4"
          >
            Selected works from our architecture gallery.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Architecture ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;


