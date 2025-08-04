import { useState } from 'react';
import { Menu, X, } from 'lucide-react';
import { IoLogoWhatsapp,IoLogoInstagram  } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/public/Frame_1-removebg-preview.png" 
              alt="Roovexo Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">Roovexo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com/roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white hover:bg-black p-2 rounded-full transition-all duration-300"
                  aria-label="Instagram"
                >
                  <IoLogoInstagram  className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/+919716436292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white hover:bg-black p-2 rounded-full transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="https://threads.net/@roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white hover:bg-black p-2 rounded-full transition-all duration-300 font-bold text-sm"
                  aria-label="Threads"
                >
                  <FaThreads className="w-5 h-5" />

                </a>
              </div>
            <a
              href="#contact"
              className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-black text-white px-6 py-2 rounded-full text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-200">
                <a
                  href="https://instagram.com/roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <IoLogoInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/+919716436292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp className="w-6 h-6" />
                </a>
                <a
                  href="https://threads.net/@roovexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors duration-200 font-bold text-xl"
                  aria-label="Threads"
                >
                  <FaThreads className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;