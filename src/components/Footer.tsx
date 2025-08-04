import { Heart, ArrowUp } from 'lucide-react';
import { IoLogoWhatsapp,IoLogoInstagram  } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Custom Website Development',
    'E-commerce Solutions',
    'Mobile-First Design',
    'UI/UX Design',
    'Performance Optimization',
    'Maintenance & Support'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/public/Frame.png"
                  alt="Roovexo Logo" 
                  className="w-10 h-10 object-contain rounded-full"
                />
                <span className="text-xl font-bold">Roovexo</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Roovexo is your premier web development partner, creating exceptional digital experiences 
                that transform businesses and captivate audiences worldwide.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>by a passionate developer</span>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-4 mt-6">
                <span className="text-gray-300">Follow us:</span>
                <a
                  href="https://instagram.com/roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  aria-label="Instagram"
                >
                  <IoLogoInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="https://threads.net/@roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full font-bold"
                  aria-label="Threads"
                >
                                    <FaThreads className="w-5 h-5" />

                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Roovexo. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="https://instagram.com/roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <IoLogoInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/+919716436292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="https://threads.net/@roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-bold text-sm"
                  aria-label="Threads"
                >
                  <FaThreads className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;