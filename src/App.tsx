import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import OurVision from './components/OurVision';
import WhyChooseUs from './components/WhyChooseUs';
import WhatWeDo from './components/WhatWeDo';
import Portfolio from './components/Portfolio';
import OurProcess from './components/OurProcess';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FromCeoDesk from './components/FromCeoDesk';
import WhatsAppChatWidget from './components/WhatsAppChatWidget';
import ClientsMarquee from './components/ClientsMarquee';
import OurTeams from './components/OurTeams';

// Advanced page transition variants
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
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Scroll-triggered section variants
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.2
    }
  }
};

// Stagger children variants
const staggerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <Header />
        
        {/* Add padding for fixed header */}
        <div className="pt-20">

        {/* Hero Section with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Hero />
        </motion.div>

        {/* Our Story Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <OurStory />
        </motion.section>

        {/* Our Vision Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <OurVision />
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <WhyChooseUs />
        </motion.section>

        {/* What We Do Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <WhatWeDo />
        </motion.section>

        {/* Our Team Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <OurTeams />
        </motion.section>

        {/* From CEO Desk Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <FromCeoDesk />
        </motion.section>

        {/* Work Process Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <WorkProcess />
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <Portfolio />
        </motion.section>



        {/* Our Clients Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <ClientsMarquee />
        </motion.section>
        {/* Testimonials Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <Testimonials />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <Contact />
        </motion.section>

        {/* Footer Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
          <Footer />
        </motion.section>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 z-50 origin-left"
          style={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
      <WhatsAppChatWidget />
    </AnimatePresence>
  );
}

export default App;