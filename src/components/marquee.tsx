import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { motion } from 'framer-motion';



// Accept speed as a prop with default value
const MarqueeCards = ({ speed = 1 }) => {
  const [position, setPosition] = useState(0);
  
  // Card data with specific images for each ID
  const cards = [
    {
      id: 1,
      alt: 'Mountain landscape',
      imageUrl: assets.f05
    },
    {
      id: 2,
      alt: 'Ocean view',
      imageUrl: assets.f06
    },
    {
      id: 3,
      alt: 'Forest scene',
      imageUrl: "data:image/png;base64,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"
    },
    {
      id: 4,
      alt: 'City skyline',
      imageUrl: assets.f04
    },
    {
      id: 5,
      alt: 'Desert sunset',
      imageUrl: assets.f01
    },
    {
      id: 6,
      alt: 'Snowy mountains',
      imageUrl: assets.f02
    }
  ];
  
  // Animation effect with fixed speed from props
  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate);
    
    function animate() {
      setPosition((prevPosition) => {
        // Reset position when all cards have moved out of view
        if (prevPosition <= -1200) {
          return 0;
        }
        // Move left by speed pixels each frame
        return prevPosition - speed;
      });
      requestAnimationFrame(animate);
    }
    
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]); // Add speed to dependency array
  
  return (
    <div className="w-full h-56 mt-4 overflow-hidden bg-gradient-to-b from-indigo-50 via-sky-50 to-blue-50 p-6 relative">
      {/* Overlay effects */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-sky-50 to-blue-50 opacity-40"></div>
       */}
      {/* Cards container */}
      <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
           Partners
          </h2>
          
        </motion.div>
      <div
        className="flex gap-6 absolute"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* First set of cards */}
        {cards.map(card => (
          <ImageCard key={card.id} card={card} />
        ))}
        
        {/* Duplicate set for continuous loop */}
        {cards.map(card => (
          <ImageCard key={`dup-${card.id}`} card={card} />
        ))}
      </div>
      
      {/* Glow effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500 to-transparent opacity-20"></div>
    </div>
  );
};

// Image Card component with hover effects
const ImageCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`w-60 h-[92px] rounded-lg overflow-hidden shadow-lg transition-all duration-300 relative ${isHovered ? 'scale-105 shadow-xl shadow-blue-500/20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image */}
      <img
        src={card.imageUrl}
        alt={card.alt}
        className="w-full h-full object-contain transition-transform duration-700 transform-gpu"
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />
      
      {/* Image ID overlay */}
      
      
      {/* Subtle border glow on hover */}
      <div
        className={`absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none border-2 border-blue-400 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      ></div>
      
      {/* Subtle vignette effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-60"></div>
       */}
      {/* Corner shine effect on hover */}
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 bg-white rotate-45 transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'}`}
      ></div>
    </div>
  );
};

export default MarqueeCards;