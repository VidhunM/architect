import React, { useEffect, useState } from 'react';

const images = [
  'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'https://images.pexels.com/photos/1571175/pexels-photo-1571175.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
];

const ImageMontage = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  useEffect(() => {
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Spaces That <span className="text-amber-500">Inspire</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every project tells a unique story. From concept to completion, we craft interiors 
            that reflect your personality and enhance your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                visibleImages.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src={image}
                alt={`Interior Design ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">View Project</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageMontage;