import React from 'react';

const ProjectTour = () => {
  // Sample image URLs - replace with your actual project images
  const projectImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', // Modern home
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', // Luxury interior
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', // Contemporary design
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', // Minimalist apartment
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'  // Cozy living room
  ];

  const projectNames = ['Lifemakers', 'Noids', 'Carpens', 'Mumbai', 'Pune'];

  return (
    <div className="font-sans bg-white p-8 max-w-6xl mx-auto relative min-h-screen">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
        A 360-Degree Tour Of Our Executed Projects
      </h1>
      
      {/* Subheading */}
      <p className="text-lg text-gray-600 text-center mb-8">
        Like our design of Explore them from a different perspective!
      </p>
      
      {/* Project Locations Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {projectNames.map((name, index) => (
          <div 
            key={index} 
            className={`rounded-lg overflow-hidden shadow-md h-48 relative group ${index === 4 ? 'hidden md:block' : ''}`}
          >
            {/* Project Image */}
            <img 
              src={projectImages[index]} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Project Name Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-xl font-bold text-white text-center px-2">
                {name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      
      {/* Experience Button */}
      <div className="text-center mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors duration-300 transform hover:scale-105">
          Experience It Now
        </button>
      </div>
      
      {/* Windows Activation Notice */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-xs p-1 text-center">
        Activate Windows • Go to Settings to activate Windows
      </div> */}
    </div>
  );
};

export default ProjectTour;