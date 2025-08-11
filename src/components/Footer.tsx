import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Guarantees and Assurances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {/* Lowest Price Guaranteed */}
          <div className="border border-gray-400 rounded-lg p-6 bg-gray-800">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center relative">
                  <div className="text-xs font-bold text-gray-400 text-center leading-tight">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2">GUARANTEED</div>
                    <div className="mt-4">LOWEST</div>
                    <div>PRICES</div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">GUARANTEED</div>
                  </div>
                  <div className="absolute top-2 left-2 w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-300 mb-2">LOWEST PRICE GUARANTEED</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  No false claims. You get what you see. Lowest Price Guaranteed on home interiors.
                </p>
              </div>
            </div>
          </div>

          {/* Timely Delivery Assurance */}
          <div className="border border-gray-400 rounded-lg p-6 bg-gray-800">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-gray-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border border-gray-400 transform rotate-45"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs font-bold text-gray-400 text-center">
                      <div>DELIVERY</div>
                      <div>ASSURANCE</div>
                    </div>
                  </div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-300 mb-2">TIMELY DELIVERY ASSURANCE</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Promised Timeline = Actual Date of Delivery. We strictly follow the timelines promised to you.
                </p>
              </div>
            </div>
          </div>

          {/* Low Cost EMI */}
          <div className="border border-gray-400 rounded-lg p-6 bg-gray-800">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center relative">
                  <div className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center">
                    <div className="text-xs font-bold text-gray-400 text-center">
                      <div>LOW COST</div>
                      <div>EMI%</div>
                    </div>
                  </div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-300 mb-2">LOW COST EMI</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Get in touch with our designers to know more...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Company Information and Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
          {/* Company Logo */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-2">
              The Architecture Firm
            </div>
            {/* <div className="text-sm text-gray-400">
        
            </div> */}
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-pink-400 font-semibold mb-4">Overview</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Interior Designer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trends</a></li>
            </ul>
          </div>

          {/* Network Sites */}
          {/* <div>
            <h3 className="text-pink-400 font-semibold mb-4">Network Sites</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Square Yards UAE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prop VR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Square Yards Canada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Square Yards India</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prop AMC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Urban Money</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UM Oceania</a></li>
            </ul>
          </div> */}

          {/* Interior */}
          <div>
            <h3 className="text-pink-400 font-semibold mb-4">Interior</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">FAQS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-pink-400 font-semibold mb-4">More</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Commercial Interiors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lending Partners</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Refer And Earn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Contact, Address, and Social Links */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Us */}
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Contact Us</h3>
              <div className="text-sm text-gray-300 space-y-2">
                {/* <p>Call us on, </p>
                <p className="font-bold text-white"></p> */}
                <p>Write to us at</p>
                <p className="text-white">info@thearchitecturefirm.in</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Address</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>W-126, 3rd Floor, 3rd Ave, Anna Nagar,</p>
                <p className=" text-white">Chennai, Tamil Nadu 60004</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;