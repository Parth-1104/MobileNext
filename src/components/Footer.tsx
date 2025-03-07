import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black to-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold text-white">Bennett University</h2>
            <p className="text-sm text-gray-400 max-w-xs">
              Preparing India to move with Times.
            </p>
            {/* <div className="flex space-x-4 mt-3">
              <FaTwitter size={20} />
              <FaFacebook size={20} />
              <FaLinkedin size={20} />
              <FaInstagram size={20} />
            </div> */}
          </div>

          {/* Contact Details */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Plot Nos 8-11, TechZone II, Greater Noida 201310, UP. India.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>Toll Free : 1800-103-8484</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>Email: info@bennett.edu.in</span>
              </li>
              <li>
                <a href="#" className="hover:text-white">General Query Form</a>
              </li>
              <li>
              <p className="text-gray-400">
              <span>Developed by </span>
              <a 
                href="https://www.linkedin.com/in/parth-singh427/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Parth <FaLinkedin className="inline ml-1 mb-1" size={14} />
              </a>
            </p>
            </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Our Location</h3>
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.9044627776055!2d77.5820091!3d28.4506465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden text-center">
          <h2 className="text-lg font-bold text-white">Bennett University</h2>
          <p className="text-sm text-gray-400 mt-1">Preparing India to move with Times.</p>
          {/* <div className="flex justify-center space-x-4 mt-3">
            <FaTwitter size={20} />
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
            <FaInstagram size={20} />
          </div> */}

          <div className="mt-6 space-y-3 text-sm text-gray-400">
            <p><FaMapMarkerAlt className="inline mr-2" /> Plot Nos 8-11, TechZone II, Greater Noida 201310, UP. India.</p>
            <p><FaPhone className="inline mr-2" /> Toll Free : 1800-103-8484</p>
            <p><FaEnvelope className="inline mr-2" /> Email: info@bennett.edu.in</p>
            <a href="#" className="block hover:text-white">General Query Form</a>
            <p className="text-gray-400">
              <span>Developed by </span>
              <a 
                href="https://www.linkedin.com/in/parth-singh427/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Parth <FaLinkedin className="inline ml-1 mb-1" size={14} />
              </a>
            </p>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              className="w-full h-38 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.9044627776055!2d77.5820091!3d28.4506465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>&copy; {new Date().getFullYear()} Bennett University. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;