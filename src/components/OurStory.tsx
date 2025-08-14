 

const OurStory = () => {
  return (
    <section className="py-20 bg-[#fdfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 text-center">
          <div>
            <img src="/images/icon/100+PROJECTS.png" alt="Projects" className="mx-auto h-12" />
            <p className="text-2xl font-bold mt-2">100+</p>
            <p className="text-gray-600">Projects</p>
          </div>
          <div>
            <img src="/images/icon/DESIGN EXPERTS.png" alt="Design Experts" className="mx-auto h-12" />
            <p className="text-2xl font-bold mt-2">25,000+</p>
            <p className="text-gray-600">sq ft Completed</p>
          </div>
          <div>
            <img src="/images/icon/CITIES.png" alt="Cities" className="mx-auto h-12" />
            <p className="text-2xl font-bold mt-2">15+ Cities</p>
            <p className="text-gray-600">Pan India</p>
          </div>
          <div>
            <img src="/images/icon/DESIGN OPTIONS.png" alt="Design Options" className="mx-auto h-12" />
            <p className="text-2xl font-bold mt-2">2 lac+</p>
            <p className="text-gray-600">Design Options</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Left Panel */}
          <div className="bg-blue-100 p-6 rounded-lg shadow text-left">
            <h3 className="text-xl font-semibold mb-2">How do we curate your dream ?</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              With an emphasis on details, extraordinary designs and exceptional customer service, we bring your dreams to life.
            </p>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              KNOW MORE →
            </button>
          </div>

          {/* Service Cards with Local Icon Images */}
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img
              src="/images/DESIGN MANAGE EXECUTE/WE DESIGN.png"
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
              src="/images/DESIGN MANAGE EXECUTE/WE EXECUTE.png"
              alt="We Execute"
              className="mx-auto h-24 mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">We Execute</h4>
            <p className="text-sm text-gray-600">
              We follow a meticulous planning approach with detail-driven designs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img
              src="/images/DESIGN MANAGE EXECUTE/WE MANAGE.png"
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
