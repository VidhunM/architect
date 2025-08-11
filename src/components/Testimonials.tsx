import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'MR. RADHAKRISHNAN',
    role: 'ORCHID SPRINGSS, KOLATHUR',
    rating: 5,
    quote: "Working with THE ARCHITECTURE FIRM for our residence interiors was an exceptional experience. Their sophisticated design sensibilities and impeccable attention to detail resulted in a home that is both timeless and luxurious. Every space reflects a perfect balance of elegance and functionality, tailored flawlessly to our lifestyle. The team’s professionalism, creativity, and commitment to excellence made the entire journey seamless and inspiring. We couldn’t have asked for a better partner to bring our vision of a super-premium residence to life.",
  },
  {
    name: 'MR.RAGHAV',
    role: 'ERI SCHEME, MOGAPPAIR',
    rating: 5,
    quote: "Myself Raghav, couldn’t have asked for a better team to bring my dream home to life. THE ARCHITECTURE FIRM understood my vision perfectly and turned it into something even more beautiful than I imagined. The way they handled every detail with care and made the whole journey so smooth is something I’ll always appreciate. Today, every space in my home feels special, and I’m grateful for their expertise and support throughout.",
  },
  {
    name: 'MR.THABSI VARGESSE',
    role: 'THIRUVOTTIYUR',
    rating: 5,
    quote: "Exceptional design, flawless execution, and a stress-free process. THE ARCHITECTURE FIRM delivered a home that exceeded my expectations in every way. Their professionalism and creativity made building my dream home an absolute pleasure. I strongly recommend them to anyone who is looking for construction within budget and designs out of box.",
  },
  {
    name: 'MRS.PRIYANKA',
    role: 'COIMBATORE',
    rating: 5,
    quote: `The design feels like it was made just for me—stylish, functional, and full of character. Every step felt easy with their guidance.
What stood out was their ability to turn simple ideas into spaces that feel warm, inviting, and premium in every sense. I specifically like their idea of open space pooja with landscape at our home, which I feel is a very unique design.
The journey of building my home felt effortless, thanks to their clear vision and flawless execution.`,
  },
  {
    name: 'MR.KARTHIKEYAN',
    role: 'KATHIRVEDU',
    rating: 5,
    quote: "We had such a wonderful experience building our dream home with THE ARCHITECTURE FIRM. Right from the start, they understood our taste and gave us a design that felt luxurious yet so practical for everyday living. The attention to detail in every corner and their ability to make spaces feel elegant and timeless truly impressed us. They guided us through every stage, making the entire process smooth and stress-free. The end result is a home that feels nothing short of perfect.",
  },
];

const SLIDE_DURATION = 400; // ms

type Testimonial = typeof testimonials[0];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setSliding(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setSliding(false);
      }, SLIDE_DURATION);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextIndex = (current + 1) % testimonials.length;

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border border-slate-300 rounded-2xl shadow-sm py-10 md:py-20 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-start gap-10 md:gap-16 bg-white">
          {/* Left Side - Heading */}
          <div className="w-full md:w-1/2">
            <h3 className="text-pink-900 text-lg font-semibold mb-2">
              Testimonials
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
              What our
              <br />
              customers say
            </h2>
            <hr className="w-16 border-t-2 border-slate-300 mt-4" />
          </div>
          {/* Right Side - Testimonial */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center min-h-[260px] relative">
            <div className="w-full h-full relative overflow-hidden flex-1" style={{ minHeight: 260 }}>
              {/* Current Slide */}
              <div
                className={`
                  absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out
                  ${sliding ? (direction === 'right' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'}
                `}
                key={current}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </div>
              {/* Next Slide (only when sliding) */}
              {sliding && (
                <div
                  className={`
                    absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out
                    ${direction === 'right' ? 'translate-x-0' : 'translate-x-0'}
                    ${direction === 'right' ? 'translate-x-full' : '-translate-x-full'}
                  `}
                  key={nextIndex}
                >
                  <TestimonialCard testimonial={testimonials[nextIndex]} />
                </div>
              )}
            </div>
            {/* Dots indicator BELOW the cards, inside the container */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 w-2 rounded-full ${idx === current ? 'bg-pink-900' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-0">
      <div className="mb-2">
        <span className="font-bold text-slate-800 text-lg">
          {testimonial.name}
        </span>
        <div className="flex items-center mt-1 mb-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <div className="text-slate-600 text-sm mb-2">
          {testimonial.role}
        </div>
      </div>
      <div className="text-slate-700 text-base leading-relaxed mb-4">
        {testimonial.quote}
      </div>
    </div>
  );
}

export default Testimonials;
