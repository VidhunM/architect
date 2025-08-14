import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Herman Miller', logo: 'HM' },
  { name: 'West Elm', logo: 'WE' },
  { name: 'CB2', logo: 'CB2' },
  { name: 'Williams Sonoma', logo: 'WS' },
  { name: 'Restoration Hardware', logo: 'RH' },
  { name: 'Pottery Barn', logo: 'PB' },
  { name: 'Design Within Reach', logo: 'DWR' },
  { name: 'Room & Board', logo: 'R&B' }
];

const BrandPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            Our Brand Partners
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg"
          >
            We partner with the world's finest furniture and design brands
          </motion.p>
        </div>

        {/* Desktop Version - All visible */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-4 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-500 text-white rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-amber-400 transition-colors duration-300">
                <span className="font-bold text-sm">{brand.logo}</span>
              </div>
              <p className="text-slate-400 text-sm group-hover:text-white transition-colors duration-300">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Version - Carousel */}
        <div className="md:hidden">
          <div className="flex justify-center space-x-8 overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % brands.length;
              const brand = brands[index];
              return (
                <motion.div
                  key={offset}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: offset * 0.1 }}
                  className={`text-center p-4 rounded-lg transition-all duration-500 ${
                    offset === 1 ? 'transform scale-110' : 'opacity-60'
                  }`}
                >
                  <div className="w-16 h-16 bg-amber-500 text-white rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <span className="font-bold text-sm">{brand.logo}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{brand.name}</p>
                </motion.div>
              );
            })}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
