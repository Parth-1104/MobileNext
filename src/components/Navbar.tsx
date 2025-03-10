import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { assets } from '../assets/assets_frontend/assets';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? '-translate-y-6' : ''}`}>
      <div className="bg-[#336699] h-6 w-full" />
      <div className="relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-md transition-opacity duration-300" />
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center h-20">
            {/* Left Logo (NAAC) - Consistent across all screen sizes with protective margin */}
            <div className="flex items-center">
              <a href="/" className="flex items-center transition-all duration-300 focus:outline-none" aria-label="Scroll to top">
                <img 
                  src="https://www.bennett.edu.in/wp-content/uploads/2025/01/NAAC-Logo-2025-webp-1.webp" 
                  alt="NAAC Logo" 
                  className="h-12 w-auto" 
                />
              </a>
            </div>

            {/* Desktop Navigation - With adjusted spacing at different breakpoints */}
            <div className="hidden md:flex md:justify-center space-x-3 lg:space-x-6 xl:space-x-8 md:mx-4 lg:mx-6">
              <HashLink to="/#home" className="relative text-black/90 hover:text-black font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 py-1 mb-1  group whitespace-nowrap">
                Home
                <span className="absolute inset-x-0 top-7 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </HashLink>
              <HashLink to="/#about" className="relative text-black/90 hover:text-black font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 py-1 mb-1  group whitespace-nowrap">
                About
                <span className="absolute inset-x-0 top-7 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </HashLink>
              <HashLink to="/#speakers" className="relative text-black/90 hover:text-black font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 py-1 mb-1  group whitespace-nowrap">
                Speakers
                <span className="absolute inset-x-0 top-7 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </HashLink>
              <Link to="/project2" className="relative text-black/90 hover:text-black font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 py-1 mb-1  group whitespace-nowrap">
                Apps
                <span className="absolute inset-x-0 top-7 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link to="/team" className="relative text-black/90 hover:text-black font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 py-1 mb-1  group whitespace-nowrap">
                Team
                <span className="absolute inset-x-0 top-7 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              {/* <HashLink to="/#timeline" className="relative text-black/90 hover:text-black font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 py-1 mb-1  group whitespace-nowrap">
                Timeline
                <span className="absolute inset-x-0 top-7 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </HashLink> */}
            </div>

            {/* Right Logo - With responsive sizing and safe space from navigation */}
            <div className="flex items-center">
              <a href="/" className="flex items-center transition-all duration-300 focus:outline-none" aria-label="Scroll to top">
                <img 
                  src={assets.logo5}  
                  alt="Logo" 
                  className="h-[24vh] md:h-[13vh] lg:h-[26vh] mt-9 ml-5 mr-5 w-auto"
                />
              </a>
              
              {/* Mobile Navigation Button - Only visible on small screens */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="ml-4 text-black/90 hover:text-black transition-all duration-200 hover:scale-110 md:hidden" 
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            ref={menuRef}
            className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-black/20 to-black/10 backdrop-blur-lg transform transition-all duration-500 ease-in-out overflow-hidden ${
              isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
            }`}
            style={{ 
              boxShadow: isMenuOpen ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
              transformOrigin: 'top' 
            }}
          >
            <div className="px-4 py-3 space-y-1">
              <HashLink 
                to="/#home" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-3 px-2 text-black/90 hover:text-black font-medium tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-black/5 hover:to-black/10 hover:translate-x-1 rounded"
              >
                Home
              </HashLink>
              <HashLink 
                to="/#about" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-3 px-2 text-black/90 hover:text-black font-medium tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-black/5 hover:to-black/10 hover:translate-x-1 rounded"
              >
                About
              </HashLink>
              <HashLink 
                to="/#speakers" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-3 px-2 text-black/90 hover:text-black font-medium tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-black/5 hover:to-black/10 hover:translate-x-1 rounded"
              >
                Speakers
              </HashLink>
              <Link 
                to="/project2" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-3 px-2 text-black/90 hover:text-black font-medium tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-black/5 hover:to-black/10 hover:translate-x-1 rounded"
              >
                Projects
              </Link>
              <Link 
                to="/team" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-3 px-2 text-black/90 hover:text-black font-medium tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-black/5 hover:to-black/10 hover:translate-x-1 rounded"
              >
                Team
              </Link>
              {/* <HashLink 
                to="/#timeline" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-3 px-2 text-black/90 hover:text-black font-medium tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-black/5 hover:to-black/10 hover:translate-x-1 rounded"
              >
                Timeline
              </HashLink> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;