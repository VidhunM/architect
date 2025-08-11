import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import {
  Building2,
  Sofa,
  HardHat,
  Users,
  MessageSquare,
  Paintbrush,
  FileCheck
} from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    icon: <Building2 className="w-12 h-12 text-blue-500" />,
    title: 'ARCHITECTURE'
  },
  {
    icon: <Sofa className="w-12 h-12 text-blue-500" />,
    title: 'END TO END INTERIORS'
  },
  {
    icon: <HardHat className="w-12 h-12 text-blue-500" />,
    title: 'CONSTRUCTION & EXECUTION'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: 'PROJECT MANAGEMENT'
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
    title: 'DESIGN & CONSULTATION'
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-blue-500" />,
    title: 'RENOVATION & RETROFITTING'
  },
  {
    icon: <FileCheck className="w-12 h-12 text-blue-500" />,
    title: 'REGULATORY APPROVALS'
  }
];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      },
    },
  ],
};

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-8 md:py-16 bg-white relative overflow-hidden px-4 sm:px-6">
      {/* Blue border lines */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1 bg-blue-600"></div>
      
      <div className="text-center mb-6 md:mb-10">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-800"
        >
          WHAT DO WE DO?
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center text-center w-full px-1 sm:px-2">
                <div className="mb-2 sm:mb-3">{service.icon}</div>
                <p className="text-xs sm:text-sm text-gray-700 px-1">{service.title}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatWeDo;
