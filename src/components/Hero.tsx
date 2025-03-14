import React, { useRef, useEffect } from 'react';
import Button from './Button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';
import Button2 from './button2';

// Add a style tag for the marquee animation
const MarqueeStyle = () => (
  <style jsx>{`
    @keyframes marquee-rtl {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    
    .marquee-animation {
      animation: marquee-rtl 25s linear infinite;
    }
    
    /* Custom video styling */
    .phone-video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(0.99); /* Zoom out to 85% of original size */
    }
  `}</style>
);

const Herowithimage = () => {
  const videoRef = useRef(null);
  
  // Set up video to autoplay when component mounts
  useEffect(() => {
    if (videoRef.current) {
      // Set attributes programmatically
      videoRef.current.muted = true;
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      
      // Force play on load - helps with mobile browsers
      const playVideo = () => {
        videoRef.current.play().catch(error => {
          console.log("Video autoplay failed:", error);
        });
      };
      
      videoRef.current.addEventListener('loadedmetadata', playVideo);
      
      // Try playing immediately as well
      playVideo();
      
      // Cleanup
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', playVideo);
        }
      };
    }
  }, []);

  const handleClick = () => {
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkHbQOaNtO65Kl91UWmgs6LhURUMyTlZPTEpTMEZLQjlEMkNDUTBZWkJSVi4u', '_blank');
  };
  
  const handleDownload = () => {
    const pdfUrl = assets.pdf; // Adjust path if needed
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'brochure.pdf'; // Suggested download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleClick2 = () => {
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkHiDwdnGBnRJkHESRsFQ5jJUMzY0RzNBQTE2RzBZUzZXUkhHN0tYUzY4WC4u&origin=QRCode', '_blank');
  };
  
  return (
    <>
      <MarqueeStyle />
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 text-gray-900">
        {/* Background gradient circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/3 -left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-blue-300 to-gray-200 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute -bottom-1/3 -right-1/3 w-[600px] h-[600px] bg-gradient-to-l from-gray-300 to-blue-400 rounded-full blur-3xl animate-bounce delay-1000"></div>
        </div>

        <div className="max-w-6xl w-full mt-[52px] py-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 pt-[75px] px-6">
          {/* Left side text content */}
          <div className="text-left md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 drop-shadow-xl mb-6 animate-pulse">
              Mobile Next Conference 2025
            </h1>
            <div className="flex items-center mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div>
                <div className="text-xl font-bold text-gray-900">March 19, 2025</div>
                <div className="flex items-center text-sm text-gray-600 mt-1"></div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin size={16} className="mr-1" />
                  <span>Bennett University</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-8 max-w-xl drop-shadow-lg">
              Join the world's leading mobile developers and innovators for learning, networking, and inspiration.
            </p>
            <div className='flex items-center align-middle'>
              <button 
                onClick={handleClick}
                className="relative group bg-gradient-to-r from-blue-500 to-blue-300 text-white font-bold py-4 px-10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 shadow-xl 
                md:py-4 md:px-10 md:text-lg text-sm px-6 py-3"
              >
                <span className="relative z-10">Register Now</span>
              </button>
              <button 
                onClick={handleDownload}
                className="relative ml-5 group bg-gradient-to-r from-blue-500 to-blue-300 text-white font-bold py-4 px-10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 shadow-xl 
                md:py-4 md:px-10 md:text-lg text-sm px-6 py-3"
              >
                <span className="relative z-10">Brochure</span>
              </button>
            </div>
            <div className='mt-4'>
              <h3>
                Got an innovative app? Showcase it to industry leaders <br />  
                Register your app <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkHiDwdnGBnRJkHESRsFQ5jJUMzY0RzNBQTE2RzBZUzZXUkhHN0tYUzY4WC4u&origin=QRCode" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'underline' }}>here</a>
              </h3>
            </div>
          </div>

          {/* Right side phone animation */}
          <div className="md:w-1/2 flex justify-center perspective-1000 pb-8 md:pb-0">
            <div className="relative w-80 h-[600px] rotate-3d">
              {/* Phone Frame */}
              <div className="absolute inset-0 border-[12px] pb-6 border-black rounded-[3rem] bg-black phone-shadow transition-all duration-500">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl phone-inner-shadow"></div>

                {/* Video container with proper overflow handling */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-black flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      className="phone-video"
                      src={assets.vdo}
                      muted
                      autoPlay
                      playsInline
                      loop
                      preload="auto"
                    />
                  </div>
                </div>

                {/* Side Buttons (Volume & Power) */}
                <div className="absolute -left-[14px] top-24 w-[2px] h-16 bg-gray-400 rounded-l-lg"></div>
                <div className="absolute -right-[14px] top-20 w-[2px] h-8 bg-gray-400 rounded-r-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      {/* Animated Marquee below hero section - Left to Right Movement */}
      <div className="w-full bg-[#336699] text-white py-3 overflow-hidden shadow-lg">
        <div className="relative overflow-hidden">
          <div className="marquee-animation inline-block font-semibold text-lg whitespace-nowrap">
            <span className="flex items-center">
              <span className="inline-block animate-pulse text-yellow-300 mr-2">🔔</span> 
              REGISTRATION DEADLINE: 17 MAR 2025 
              <span className="inline-block animate-pulse text-yellow-300 ml-2">🔔</span> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="inline-block animate-pulse text-yellow-300 mr-2">🔔</span> 
              REGISTRATION DEADLINE: 17 MAR 2025 
              <span className="inline-block animate-pulse text-yellow-300 ml-2">🔔</span> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="inline-block animate-pulse text-yellow-300 mr-2">🔔</span> 
              REGISTRATION DEADLINE: 17 MAR 2025 
              <span className="inline-block animate-pulse text-yellow-300 ml-2">🔔</span> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herowithimage;