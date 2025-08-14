


// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import OurStory from './components/OurStory';
// import OurVision from './components/OurVision';
// import WhyChooseUs from './components/WhyChooseUs';
// import WhatWeDo from './components/WhatWeDo';
// import Portfolio from './components/Portfolio';
// import OurProcess from './components/OurProcess';
// import WorkProcess from './components/WorkProcess';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import FromCeoDesk from './components/FromCeoDesk';
// import WhatsAppChatWidget from './components/WhatsAppChatWidget';
// import ClientsMarquee from './components/ClientsMarquee';
// import OurTeams from './components/OurTeams';

// // Improved page transition variants
// const pageVariants = {
//   initial: {
//     opacity: 0,
//     y: 20,
//     scale: 0.98
//   },
//   in: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.25, 0.46, 0.45, 0.94],
//       staggerChildren: 0.1
//     }
//   },
//   out: {
//     opacity: 0,
//     y: -20,
//     scale: 0.98,
//     transition: {
//       duration: 0.4,
//       ease: [0.25, 0.46, 0.45, 0.94]
//     }
//   }
// };

// // Optimized scroll-triggered section variants
// const sectionVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//     scale: 0.98
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.25, 0.46, 0.45, 0.94]
//     }
//   }
// };

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   useEffect(() => {
//     // Ensure smooth loading animation
//     const timer = setTimeout(() => setIsLoaded(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         className="min-h-screen"
//         initial="initial"
//         animate={isLoaded ? "in" : "initial"}
//         exit="out"
//         variants={pageVariants}
//       >
//         <Header />
        
//         {/* Add padding for fixed header */}
//         <div className="pt-20">
//           {/* Hero Section with improved animation */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ 
//               opacity: 1, 
//               y: 0,
//               transition: { 
//                 duration: 0.8, 
//                 delay: 0.2,
//                 ease: [0.25, 0.46, 0.45, 0.94]
//               }
//             }}
//           >
//             <Hero />
//           </motion.div>

//           {/* Our Story Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <OurStory />
//           </motion.section>

//           {/* Our Vision Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <OurVision />
//           </motion.section>

//           {/* Why Choose Us Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <WhyChooseUs />
//           </motion.section>

//           {/* What We Do Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <WhatWeDo />
//           </motion.section>

//           {/* Our Team Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <OurTeams />
//           </motion.section>

//           {/* From CEO Desk Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <FromCeoDesk />
//           </motion.section>

//           {/* Work Process Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <WorkProcess />
//           </motion.section>

//           {/* Portfolio Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <Portfolio />
//           </motion.section>

//           {/* Our Clients Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <ClientsMarquee />
//           </motion.section>

//           {/* Testimonials Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <Testimonials />
//           </motion.section>

//           {/* Contact Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <Contact />
//           </motion.section>

//           {/* Footer Section */}
//           <motion.section
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <Footer />
//           </motion.section>
//         </div>

//         {/* Fixed Scroll Progress Indicator */}
//         <motion.div
//           className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 z-50 origin-left"
//           style={{ scaleX }}
//         />
//       </motion.div>
//       <WhatsAppChatWidget />
//     </AnimatePresence>
//   );
// }

// export default App;



import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import OurVision from './components/OurVision';
import OurVisionNew from './components/OurVisionNew';
import OurPhilosophy from './components/OurPhilosophy';
import WhyChooseUs from './components/WhyChooseUs';
import WhatWeDo from './components/WhatWeDo';
import Portfolio from './components/Portfolio';
// import OurProcess from './components/OurProcess';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FromCeoDesk from './components/FromCeoDesk';
import WhatsAppChatWidget from './components/WhatsAppChatWidget';
import ClientsMarquee from './components/ClientsMarquee';
import OurTeams from './components/OurTeams';
import Architecture from './components/Architecture';

// Improved page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4
    }
  }
};

// Optimized scroll-triggered section variants
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Ensure smooth loading animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
      <motion.div
        className="min-h-screen"
        initial="initial"
        animate={isLoaded ? "in" : "initial"}
        exit="out"
        variants={pageVariants}
      >
        <Header />
        
        {/* Add padding for fixed header */}
        <div className="pt-20">
          {/* Hero Section with improved animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.2,
                
              }
            }}
          >
            <Hero />
          </motion.div>

          {/* Our Story Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <OurStory />
          </motion.section>

          {/* Our Vision Section (Original) */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <OurVision />
          </motion.section>

          {/* Why Choose Us Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <WhyChooseUs />
          </motion.section>

          {/* What We Do Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <WhatWeDo />
          </motion.section>

          {/* From CEO Desk Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <FromCeoDesk />
          </motion.section>

          {/* Architecture Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Architecture />
          </motion.section>

          {/* Work Process Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <WorkProcess />
          </motion.section>

          {/* Our Team Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <OurTeams />
          </motion.section>

          {/* Our Vision New Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <OurVisionNew />
          </motion.section>

          {/* Our Philosophy Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <OurPhilosophy />
          </motion.section>

          {/* Portfolio Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Portfolio />
          </motion.section>

          {/* Our Clients Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ClientsMarquee />
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Testimonials />
          </motion.section>

          {/* Careers Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Careers />
          </motion.section>

          {/* Contact Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Contact />
          </motion.section>

          {/* Footer Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Footer />
          </motion.section>
        </div>

        {/* Fixed Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 z-50 origin-left"
          style={{ scaleX }}
        />
      </motion.div>
      )}
      <WhatsAppChatWidget />
    </AnimatePresence>
  );
}

export default App;