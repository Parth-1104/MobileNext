import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <div className="flex items-center">
              <a href="/" className="flex items-center transition-all duration-300 focus:outline-none" aria-label="Scroll to top">
                <img src="https://www.bennett.edu.in/wp-content/uploads/2025/01/NAAC-Logo-2025-webp-1.webp" alt="NAAC Logo" className="h-12 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <HashLink to="/#home" className="relative text-black/90 hover:text-black transition-colors duration-200 py-2 group">
                Home
              </HashLink>
              <HashLink to="/#about" className="relative text-black/90 hover:text-black transition-colors duration-200 py-2 group">
                About
              </HashLink>
              <HashLink to="/#speakers" className="relative text-black/90 hover:text-black transition-colors duration-200 py-2 group">
                Speakers
              </HashLink>
              <Link to="/projects" className="relative text-black/90 hover:text-black transition-colors duration-200 py-2 group">
                Projects
              </Link>
              <Link to="/team" className="relative text-black/90 hover:text-black transition-colors duration-200 py-2 group">
                Team
              </Link>
              <HashLink to="/#timeline" className="relative text-black/90 hover:text-black transition-colors duration-200 py-2 group">
                Timeline
              </HashLink>
              {/* Add other links as needed */}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black/90 hover:text-black transition-all duration-200 hover:scale-110" aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            ref={menuRef}
            className={`md:hidden absolute top-full left-0 right-0 bg-black/20 backdrop-blur-lg transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="px-2 py-2 space-y-1">
              <HashLink to="/#home" onClick={() => setIsMenuOpen(false)} className="block py-2 text-black/90 hover:text-black transition-all duration-200 hover:translate-x-2">
                Home
              </HashLink>
              <HashLink to="/#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-black/90 hover:text-black transition-all duration-200 hover:translate-x-2">
                About
              </HashLink>
              <HashLink to="/#speakers" onClick={() => setIsMenuOpen(false)} className="block py-2 text-black/90 hover:text-black transition-all duration-200 hover:translate-x-2">
                Speakers
              </HashLink>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="block py-2 text-black/90 hover:text-black transition-all duration-200 hover:translate-x-2">
                Projects
              </Link>
              <Link to="/team" onClick={() => setIsMenuOpen(false)} className="block py-2 text-black/90 hover:text-black transition-all duration-200 hover:translate-x-2">
                Team
              </Link>
              <HashLink to="/#timeline" onClick={() => setIsMenuOpen(false)} className="block py-2 text-black/90 hover:text-black transition-all duration-200 hover:translate-x-2">
                Timeline
              </HashLink>
              {/* Add other links as needed */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
