import React, { useState } from 'react';

const imageData = {
  "Living Room": [
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    "https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg",
    "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg",
    "https://images.pexels.com/photos/3965505/pexels-photo-3965505.jpeg",
  ],
  "Module Kitchen": [
    "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
    "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg",
    "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg",
    "https://images.pexels.com/photos/6186826/pexels-photo-6186826.jpeg",
  ],
  "Wardrobe": [
  "https://images.pexels.com/photos/271722/pexels-photo-271722.jpeg",
  "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg",
  "https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg",
  "https://images.pexels.com/photos/5705496/pexels-photo-5705496.jpeg"
],


  "Master Bedroom": [
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
    "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
    "https://images.pexels.com/photos/7546275/pexels-photo-7546275.jpeg",
    "https://images.pexels.com/photos/29086914/pexels-photo-29086914.jpeg",
  ],
  "Kids Room": [
    "https://images.pexels.com/photos/3965515/pexels-photo-3965515.jpeg",
    "https://images.pexels.com/photos/3225487/pexels-photo-3225487.jpeg",
    "https://images.pexels.com/photos/7546275/pexels-photo-7546275.jpeg",
    "https://images.pexels.com/photos/7504920/pexels-photo-7504920.jpeg",
  ],
  "Kitchen Wall Tiles": [
    "https://images.pexels.com/photos/7534225/pexels-photo-7534225.jpeg",
    "https://images.pexels.com/photos/31253595/pexels-photo-31253595.jpeg",
    "https://images.pexels.com/photos/11089794/pexels-photo-11089794.jpeg",
    "https://images.pexels.com/photos/10117716/pexels-photo-10117716.jpeg",
  ],
  "Kitchen Fake Ceiling": [
    "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
    "https://images.pexels.com/photos/7174388/pexels-photo-7174388.jpeg",
    "https://images.pexels.com/photos/6312072/pexels-photo-6312072.jpeg",
    "https://images.pexels.com/photos/6186826/pexels-photo-6186826.jpeg",
  ],
  "Balcony": [
    "https://images.pexels.com/photos/1066727/pexels-photo-1066727.jpeg",
    "https://images.pexels.com/photos/225222/pexels-photo-225222.jpeg",
    "https://images.pexels.com/photos/4099388/pexels-photo-4099388.jpeg",
    "https://images.pexels.com/photos/133920/pexels-photo-133920.jpeg",
  ],
};

const DesignIdeas = () => {
  const [activeCategory, setActiveCategory] = useState("Living Room");

  return (
    <section id="design-ideas" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Design Ideas for Every Space</h1>
          <p className="text-lg text-blue-900">Because every corner holds a unique design potential.</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(imageData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border font-medium transition-colors ${
                activeCategory === category ? 'bg-blue-900 text-white' : 'text-blue-900 border-blue-900 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {imageData[activeCategory].map((imgUrl, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={imgUrl} alt={activeCategory} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-blue-900">{activeCategory} Design #{index + 1}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="px-8 py-3 text-blue-900 border border-blue-900 hover:bg-blue-50 font-medium rounded-full transition-colors shadow-lg">
            Explore More {activeCategory} Designs
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignIdeas;
