import React from 'react';

type Step = {
  number: number;
  title: string;
  imgSrc: string;
};

const stepsA: Step[] = [
  { number: 1, title: 'Design Consultation', imgSrc: '/images/our process/a1.png' },
  { number: 2, title: 'Book Your Order', imgSrc: '/images/our process/a2.png' },
  { number: 3, title: 'Site Measurement', imgSrc: '/images/our process/a3.png' },
  { number: 4, title: 'Finalize Your Design', imgSrc: '/images/our process/a4.png' },
  { number: 5, title: 'Production Kick Off', imgSrc: '/images/our process/a5.png' },
  { number: 6, title: 'Installation & Handover', imgSrc: '/images/our process/a6.png' },
];

const stepsB: Step[] = [
  { number: 1, title: 'Planning & Designing', imgSrc: '/images/our process/b1.png' },
  { number: 2, title: 'Preconstruction Preparation', imgSrc: '/images/our process/b2.png' },
  { number: 3, title: 'Laying & Foundation', imgSrc: '/images/our process/b3.png' },
  { number: 4, title: 'Framing', imgSrc: '/images/our process/b4.png' },
  { number: 5, title: 'Interior & Exterior Work', imgSrc: '/images/our process/b5.png' },
  { number: 6, title: 'Final Touches Before Move-in', imgSrc: '/images/our process/b6.png' },
];

const WorkProcess = () => {
  return (
    <section id="work-process" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            OUR PROCESS
          </h2>
        </div>

        {/* Home Interiors */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-900 text-center mb-6 sm:mb-8">
            Home Interiors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {stepsA.map((step, idx) => (
              <div
                key={`A-${step.number}`}
                className="group flex flex-col items-center text-center wp-slide p-3 sm:p-4"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs sm:text-sm md:text-base font-bold shadow mb-2 sm:mb-3 leading-none">
                  {step.number}
                </div>
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  className="w-16 sm:w-20 md:w-[150px] h-auto object-contain select-none transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  draggable={false}
                />
                <h3 className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-xl font-semibold text-blue-900">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Home Constructions */}
        <div>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-900 text-center mb-6 sm:mb-8">
            Home Constructions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {stepsB.map((step, idx) => (
              <div
                key={`B-${step.number}`}
                className="group flex flex-col items-center text-center wp-slide p-3 sm:p-4"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs sm:text-sm md:text-base font-bold shadow mb-2 sm:mb-3 leading-none">
                  {step.number}
                </div>
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  className="w-16 sm:w-20 md:w-[150px] h-auto object-contain select-none transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  draggable={false}
                />
                <h3 className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-xl font-semibold text-blue-900">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

// Slide-in animation styles
const wpStyles = `
  .wp-slide { 
    opacity: 0; 
    transform: translateY(80px); 
    animation: wp-enter 800ms cubic-bezier(0.25, 1, 0.5, 1) forwards; 
  }
  @keyframes wp-enter { 
    to { 
      opacity: 1; 
      transform: translateY(0); 
    } 
  }
`;

if (typeof document !== 'undefined') {
  const id = 'wp-slide-styles';
  if (!document.getElementById(id)) {
    const style = document.createElement('style');
    style.id = id;
    style.textContent = wpStyles;
    document.head.appendChild(style);
  }
}
