import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
  { icon: '/images/WHY CHOOSE US/EXPERT DESIGN.png', title: 'Expert Design & Professional Mastery' },
  { icon: '/images/WHY CHOOSE US/project-management (1).png', title: 'Seamless Project Management' },
  { icon: '/images/WHY CHOOSE US/COST EFFECTIVE.png', title: 'Cost efficiency & Value engineering' },
  { icon: '/images/WHY CHOOSE US/SUSTAINABLE DESIGN.png', title: 'Sustainable & Futuristic design' },
  { icon: '/images/WHY CHOOSE US/ON TIME DELIVERY.png', title: 'On time Delivery' },
  { icon: '/images/WHY CHOOSE US/ASSURED WARRANTY.png', title: 'Assured Warranty' },
  { icon: '/images/WHY CHOOSE US/3D MODELING.png', title: '3D modeling' },
  { icon: '/images/WHY CHOOSE US/VISUAL REALITY.png', title: 'Visual Clarity & Modelling' },
  { icon: '/images/WHY CHOOSE US/NO HIDDEN COST.png', title: 'No Hidden Cost' },
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
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
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
          WHY CHOOSE US ?
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
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain mb-2 sm:mb-3"
                  loading="lazy"
                />
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
