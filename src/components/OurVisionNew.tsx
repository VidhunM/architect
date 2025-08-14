import { motion } from "framer-motion";

const OurVisionNew = () => {
  return (
    <section id="our-vision-new" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            OUR VISION
          </motion.h2>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-2xl font-semibold text-blue-900 mb-4"
          >
            Creating spaces that inspire
          </motion.h3>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-800 leading-relaxed"
          >
            Architecture is not just about buildings; it's about creating spaces that inspire. Our vision combines functionality with elegance, focusing on sustainable practices and innovative designs. We believe that each project should reflect the unique character of its surroundings while meeting the needs of its users.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVisionNew;
