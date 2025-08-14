import React, { useState } from "react";
import logo from "/images/logo2f.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-20 sm:h-14 w-auto cursor-pointer transition-all"
            onClick={() => scrollToSection("hero")}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center items-center">
          <div className="flex space-x-6 lg:space-x-10">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 font-medium hover:text-blue-900 transition-colors"
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 font-medium hover:text-blue-900 flex items-center transition-colors"
              >
                About Us
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <button
                    onClick={() => scrollToSection("vision")}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Our Vision
                  </button>
                  <button
                    onClick={() => scrollToSection("our-philosophy")}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Our Philosophy
                  </button>
                  <button
                    onClick={() => scrollToSection("our-team")}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Our Team
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-gray-700 font-medium hover:text-blue-900 transition-colors"
            >
              Our Service
            </button>

            <button
              onClick={() => scrollToSection("architecture")}
              className="text-gray-700 font-medium hover:text-blue-900 transition-colors"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection("from-ceo-desk")}
              className="text-gray-700 font-medium hover:text-blue-900 transition-colors"
            >
              Interior
            </button>
            <button
              onClick={() => scrollToSection("work-process")}
              className="text-gray-700 font-medium hover:text-blue-900 transition-colors whitespace-nowrap"
            >
              Project Management
            </button>
            <button
              onClick={() => scrollToSection("careers")}
              className="text-gray-700 font-medium hover:text-blue-900 transition-colors"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 font-medium hover:text-blue-900 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[60] max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 text-left py-3"
            >
              Home
            </button>
            <button
              onClick={() => setIsDropdownOpen((v) => !v)}
              className="text-gray-700 text-left py-3 flex items-center justify-between"
            >
              <span>About Us</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <button
                  onClick={() => scrollToSection("vision")}
                  className="block w-full text-left py-2 text-sm text-gray-700"
                >
                  Our Vision
                </button>
                <button
                  onClick={() => scrollToSection("our-philosophy")}
                  className="block w-full text-left py-2 text-sm text-gray-700"
                >
                  Our Philosophy
                </button>
                <button
                  onClick={() => scrollToSection("our-team")}
                  className="block w-full text-left py-2 text-sm text-gray-700"
                >
                  Our Team
                </button>
              </div>
            )}
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-gray-700 text-left py-3"
            >
              Our Service
            </button>
            <button
              onClick={() => scrollToSection("architecture")}
              className="text-gray-700 text-left py-3"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection("from-ceo-desk")}
              className="text-gray-700 text-left py-3"
            >
              Interior
            </button>
            <button
              onClick={() => scrollToSection("work-process")}
              className="text-gray-700 text-left py-3"
            >
              Project Management
            </button>
            <button
              onClick={() => scrollToSection("careers")}
              className="text-gray-700 text-left py-3"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 text-left py-3"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isDropdownOpen && !isMobileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
