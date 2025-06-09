"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
 /*  { title: "Services", path: "#services", hasDropdown: true }, */
  { title: "Portfolio", path: "#projects" },
  { title: "Contact", path: "/contact" },
];

const serviceDropdown = [
  { title: "Web Development", path: "/services/web" },
  { title: "Mobile Apps", path: "/services/mobile" },
  { title: "UI/UX Design", path: "/services/design" },
  { title: "Consulting", path: "/services/consulting" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path) => {
  setNavbarOpen(false);
  setActiveDropdown(null);

  if (path.startsWith("#")) {
    // Smooth scroll to section
    const el = document.querySelector(path);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = path; // fallback
    }
  } else {
    window.location.href = path; // for full page navigation
  }
};

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => handleLinkClick('/')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Gladness Rufus
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => {
                    if (link.hasDropdown) {
                      setActiveDropdown(activeDropdown === index ? null : index);
                    } else {
                      handleLinkClick(link.path);
                    }
                  }}
                >
                  <span>{link.title}</span>
                  {link.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden"
                    >
                      {serviceDropdown.map((item, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ backgroundColor: '#f8fafc', x: 4 }}
                          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
                          onClick={() => handleLinkClick(item.path)}
                        >
                          {item.title}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleLinkClick('/contact')}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {navbarOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <div key={index}>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 flex items-center justify-between"
                    onClick={() => {
                      if (link.hasDropdown) {
                        setActiveDropdown(activeDropdown === index ? null : index);
                      } else {
                        handleLinkClick(link.path);
                      }
                    }}
                  >
                    <span>{link.title}</span>
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </motion.button>
                  
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-1"
                      >
                        {serviceDropdown.map((item, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => handleLinkClick(item.path)}
                          >
                            {item.title}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg"
                onClick={() => handleLinkClick('#contact')}
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;