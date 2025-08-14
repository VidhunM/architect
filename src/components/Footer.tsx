import React from "react";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ShieldCheck,
  Home,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* No Quality Compromise */}
          <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div className="flex items-center mb-4">
              <ShieldCheck className="h-6 w-6 text-blue-700 mr-3" />
              <h3 className="text-xl font-bold text-blue-700">NO QUALITY COMPROMISE</h3>
            </div>
            <p className="text-gray-300">
              We never compromise on our quality and ethics
            </p>
          </div>
          
          {/* Architectural Marvel */}
          <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div className="flex items-center mb-4">
              <Home className="h-6 w-6 text-blue-700 mr-3" />
              <h3 className="text-xl font-bold text-blue-700">ARCHITECTURAL MARVEL</h3>
            </div>
            <p className="text-gray-300">
              We are team of architects, involved for your project from design till execution
            </p>
          </div>
          
          {/* On Spot and On Time */}
          <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-700 mr-3" />
              <h3 className="text-xl font-bold text-blue-700">ON SPOT AND ON TIME</h3>
            </div>
            <p className="text-gray-300">
              Promised Timeline = Actual Date of Delivery. We strictly follow the timelines promised to you.
            </p>
          </div>
        </div>

        {/* Logo and Contact Section */}
        <div className="border-t border-gray-700 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Logo - Big and Bright */}
            <div className="mb-8 md:mb-0">
              <img 
                src="/images/logo2f.png" 
                alt="The Architecture Firm Logo"
                className="h-40 w-auto brightness-110 contrast-125 filter hover:brightness-125 transition-all"
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4 text-blue-700">Contact Us</h3>
                <p className="text-sm text-gray-300">Write to us at</p>
                <p className="text-white font-medium hover:text-blue-400 transition-colors">info@thearchitecturefirm.in</p>
                <p className="mt-2 text-sm text-gray-300">Call us at</p>
                <p className="text-white font-medium hover:text-blue-400 transition-colors">+91 90624 57539</p>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold mb-4 text-blue-700">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-semibold mb-4 text-blue-700">Address</h3>
                <p className="text-sm text-gray-300">W-126, 3rd Floor, 3rd Ave, Anna Nagar,</p>
                <p className="text-white font-medium hover:text-blue-400 transition-colors">Chennai, Tamil Nadu 600040</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;