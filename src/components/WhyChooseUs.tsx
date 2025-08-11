import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Settings,
  DollarSign,
  Globe2,
  Clock,
  ShieldCheck,
  Box,
  Eye,
  Ban,
  Headphones,
} from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
  { icon: <Briefcase className="w-12 h-12 text-blue-500" />, title: 'Expert Design & Professional Mastery' },
  { icon: <Settings className="w-12 h-12 text-blue-500" />, title: 'Seamless Project Management' },
  { icon: <DollarSign className="w-12 h-12 text-blue-500" />, title: 'Cost efficiency & Value engineering' },
  { icon: <Globe2 className="w-12 h-12 text-blue-500" />, title: 'Sustainable & Futuristic design' },
  { icon: <Clock className="w-12 h-12 text-blue-500" />, title: 'On time Delivery' },
  { icon: <ShieldCheck className="w-12 h-12 text-blue-500" />, title: 'Assured Warranty' },
  { icon: <Box className="w-12 h-12 text-blue-500" />, title: '3D modeling' },
  { icon: <Eye className="w-12 h-12 text-blue-500" />, title: 'Visual Clarity & Modelling' },
  { icon: <Ban className="w-12 h-12 text-blue-500" />, title: 'No Hidden Cost' },
  { icon: <Headphones className="w-12 h-12 text-blue-500" />, title: 'Long term support & Assistance' },
];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2500,
  slidesToShow: 5,
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

const WhyChooseUs = () => {
  return (
    <section className="py-8 md:py-16 bg-white px-4 sm:px-6">
      <div className="text-center mb-6 md:mb-10">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Why Choose Us ?
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center text-center w-full px-1 sm:px-2">
                <div className="mb-2 sm:mb-3">{item.icon}</div>
                <p className="text-xs sm:text-sm text-gray-700 px-1">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChooseUs;
