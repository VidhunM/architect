import React from 'react';

const projects = [
  {
    image: '/images/gallery/mogappair-east.jpg',
    title: 'RESIDENTIAL CONSTRUCTION AT MOGAPPAIR EAST',
    description: 'A connoisseur of refined living and understated elegance',
    accent: 'gold',
  },
  {
    image: '/images/gallery/coimbatore-1.jpg',
    title: 'RESIDENTIAL CONSTRUCTION AT COIMBATORE',
    description: 'For a discerning client with a taste for timeless, refined design',
    accent: 'gold',
  },
  {
    image: '/images/gallery/erode.jpg',
    title: 'RESIDENTIAL CONSTRUCTION AT ERODE',
    description: 'For a visionary client with a keen eye for timeless design.',
    accent: 'gold',
  },
  {
    image: '/images/gallery/thiruvottiyur.jpg',
    title: 'RESIDENTIAL CONSTRUCTION AT THIRUVOTTIYUR',
    description: 'For a visionary client with a keen eye for timeless design.',
    accent: 'gold',
  },
];

const accentColors: Record<string, string> = {
  gold: 'bg-yellow-400',
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our <span className="text-yellow-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We kindly request you to spare a few minutes and have a glance at our works.
          </p>
        </div>
        <div className="space-y-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-stretch bg-white rounded-xl shadow-lg overflow-hidden`}
            >
              {/* Image */}
              <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 sm:h-80 md:h-full"
                  style={{ border: '4px solid #222', borderRight: idx % 2 === 1 ? 'none' : undefined, borderLeft: idx % 2 === 0 ? 'none' : undefined }}
                />
              </div>
              {/* Text & Accent */}
              <div className="md:w-1/2 flex flex-col justify-between p-8 relative">
                {/* Accent Bar */}
                <div className={`hidden md:block absolute top-0 right-0 w-24 h-full ${accentColors[project.accent]} opacity-80 z-0`} />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium mb-6">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;