import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imageData = {
  "Living Room": [
    "/images/LIVING/modern-luxury-living-room-interior.jpg",
    "/images/LIVING/modern-luxury-living-room-interior (1).jpg",
    "/images/LIVING/modern-living-room-interior-design.jpg",
    "/images/LIVING/modern-classic-style-hotel-room-with-lounge-dining-area-designer-furniture-3d-rendering.jpg",
    // "/images/LIVING/minimaliste-interior-design.jpg",
    // "/images/LIVING/elegant-living-room-interior-with-modern-furniture.jpg",
    // "/images/LIVING/digital-lavender-style-interior-design.jpg",
    // "/images/LIVING/blue-wall-living-room-3d-render-interior.jpg",
  ],
  "Modular Kitchen": [
    "/images/Kitchen/3d-render-kitchen-interior-design.jpg",
    "/images/Kitchen/669e5d0ae18eb2a161bbce59e4ad19a9.jpg",
    "/images/Kitchen/c864e712e6ec9e83d7f28287f0f54f29.jpg",
    "/images/Kitchen/dbb97bf61f13d77f7cced7ceb740b3df.jpg",
    // "/images/Kitchen/modern-kitchen-design-with-blue-cabinets.jpg",
  ],
  
  
  "Master Bedroom": [
    "/images/Bedroom/modern-bedroom-interior-with-gray-accents.jpg",
    "/images/Bedroom/modern-elegant-bedroom-interior.jpg",
    "/images/Bedroom/room-interior-hotel-bedroom.jpg",
  ],
  "Kids Room": [
    "/images/KIDS BEDROOM/soft-pastel-hues-room-children.jpg",
    "/images/KIDS BEDROOM/small-juvenile-bedroom-arrangement.jpg",
    "/images/KIDS BEDROOM/small-juvenile-bedroom-arrangement (1).jpg",
    "/images/KIDS BEDROOM/small-juvenile-bedroom-arrangement (2).jpg",
    // "/images/KIDS BEDROOM/ca88acc0-0b17-47c9-b20d-1361f095ce31.jpg",
    // "/images/KIDS BEDROOM/1.jpg",
  ],
  
} as const;

type Category = keyof typeof imageData;

const FromCeoDesk = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Master Bedroom");
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Show popup when section comes into view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('from-ceo-desk');
      if (section && !hasShownPopup) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          setShowPopup(true);
          setHasShownPopup(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownPopup]);

  return (
    <section id="from-ceo-desk" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            OUR PROJECTS
          </motion.h2>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-semibold text-blue-900 mb-4"
          >
            Interior Design
          </motion.h3>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-900"
          >
            Design Ideas for Every Space.
          </motion.p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(imageData) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border font-medium transition-colors ${
                activeCategory === category ? 'bg-blue-900 text-white' : 'text-blue-900 border-blue-900 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {imageData[activeCategory].map((imgUrl: string, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <img src={imgUrl} alt={activeCategory} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-blue-900">{activeCategory} Design #{index + 1}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="px-8 py-3 text-blue-900 border border-blue-900 hover:bg-blue-50 font-medium rounded-full transition-colors shadow-lg">
            Explore More {activeCategory} Designs
          </button>
        </div>
      </div>

      {/* Discount Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex">
                {/* Left Section - Promotional Message */}
                <div className="w-1/2 bg-blue-900 p-6 relative overflow-hidden">
                  {/* Full background image */}
                  <div className="absolute inset-0">
                    <img src="/images/ab.jpg" alt="Interior Design" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Enjoy a Special Discount on Your Dream Home!
                    </h3>
                    <p className="text-sm text-white mb-4">
                      Get 10% off your first interior design project. Just fill out the form below to claim your discount.
                    </p>
                  </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="w-1/2 bg-white p-6 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl font-bold"
                  >
                    ×
                  </button>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Connect with the designer today!
                  </h4>
                  
                  <form className="space-y-3">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-600"
                    />
                    
                    <div className="flex">
                      <select className="w-1/3 px-2 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:border-blue-600">
                        <option value="+91">+91</option>
                        <option value="+971">+971</option>
                        <option value="+1">+1</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Mobile*"
                        className="w-2/3 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-600"
                    />
                    
                    <div className="relative">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-600 appearance-none">
                        <option value="">Choose City*</option>
                        <option value="gurugram">Gurugram</option>
                        <option value="thane">Thane</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="navi-mumbai">Navi Mumbai</option>
                        <option value="pune">Pune</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        ▼
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Get My Discount
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to the privacy policy and terms of use
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FromCeoDesk;
