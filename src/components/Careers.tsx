import { motion } from "framer-motion";

const Careers = () => {
  return (
    <section id="careers" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
            CAREERS
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
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Join our team of creative professionals and be part of innovative architectural projects
          </motion.p>
        </motion.div>

        {/* Centered Join with Us Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 border border-blue-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join with Us</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700 text-sm">careers@architectcompany.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700 text-sm">+971 4 123 4567</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium">
              Send Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
