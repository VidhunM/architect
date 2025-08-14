import { motion } from "framer-motion";

const OurPhilosophy = () => {
  const designPrinciples = [
    "Emphasis on sustainable materials",
    "Integration of natural light",
    "Focus on functional spaces",
    "Use of geometric forms",
    "Harmonious color palettes"
  ];

  return (
    <section id="our-philosophy" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            OUR DESIGN PHILOSOPHY
          </motion.h2>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
          
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-2xl font-semibold text-blue-900 max-w-3xl mx-auto leading-relaxed"
          >
            Guiding principles that shape our architectural approach and design methodology
          </motion.h3>
        </motion.div>

        {/* Professional Content Layout */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-6">
                Core Design Principles
              </h3>
              
              <div className="space-y-6">
                {designPrinciples.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1, ease: "easeOut" }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-3 group-hover:bg-blue-700 transition-colors duration-300"></div>
                    <span className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {principle}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Professional Visual Elements */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Professional Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Professional Excellence</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Delivering architectural solutions that meet the highest standards of quality and innovation
                </p>
              </div>
            </div>

            {/* Secondary Professional Element */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gray-800 rounded-lg mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-800">Quality Assured</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Professional Footer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <div className="w-32 h-px bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 italic">
            "Excellence in design is not an act, but a habit of continuous improvement and innovation."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
