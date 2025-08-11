import React from 'react';
import { FaChalkboardTeacher, FaBuilding, FaCity, FaClipboardList } from 'react-icons/fa';

const OurStory = () => {
  return (
    <section className="py-20 bg-[#fdfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 text-center">
          <div>
            <FaBuilding className="mx-auto text-3xl text-blue-600" />
            <p className="text-2xl font-bold mt-2">100+</p>
            <p className="text-gray-600">Interior Projects</p>
          </div>
          <div>
            <FaChalkboardTeacher className="mx-auto text-3xl text-blue-600" />
            <p className="text-2xl font-bold mt-2">10+</p>
            <p className="text-gray-600">Design Experts</p>
          </div>
          <div>
            <FaCity className="mx-auto text-3xl text-blue-600" />
            <p className="text-2xl font-bold mt-2">10 Cities</p>
            <p className="text-gray-600">2 Countries</p>
          </div>
          <div>
            <FaClipboardList className="mx-auto text-3xl text-blue-600" />
            <p className="text-2xl font-bold mt-2">2 lac+</p>
            <p className="text-gray-600">Design Options</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Left Panel */}
          <div className="bg-blue-100 p-6 rounded-lg shadow text-left">
            <h3 className="text-xl font-semibold mb-2">Complete Indian Services</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              With an emphasis on details, extraordinary designs and exceptional customer service, we bring your dreams to life.
            </p>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              KNOW MORE →
            </button>
          </div>

          {/* Service Cards with Blue Icon URLs */}
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="We Design"
              className="mx-auto h-24 mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">We Design</h4>
            <p className="text-sm text-gray-600">
              From completed homes to modular kitchens and décor, our top designers create spaces that match your vision.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854866.png"
              alt="We Execute"
              className="mx-auto h-24 mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">We Execute</h4>
            <p className="text-sm text-gray-600">
              We follow a meticulous planning approach with detail-driven designs for interiors of your homes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
              alt="We Manage"
              className="mx-auto h-24 mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">We Manage</h4>
            <p className="text-sm text-gray-600">
              Our top interior designers spearhead quality assurance by extending support after project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
