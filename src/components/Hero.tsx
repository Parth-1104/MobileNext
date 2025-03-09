import React from 'react';
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
  `}</style>
);

const Herowithimage: React.FC = () => {
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
  }
  
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
            Mobile Dev Conference 2025
          </h1>
          <div className="flex items-center mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
            
            <div>
              <div className="text-xl font-bold text-gray-900">March 19, 2025</div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                
              
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin size={16} className="mr-1" />
                <span>Bennett University</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-8 max-w-xl drop-shadow-lg">
            Join the world's leading mobile developers and innovators for  learning, networking, and inspiration.
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
            {/* <div className='ml-6 mt-3'>
              <Button2 />
            </div> */}
          </div>
        </div>

        {/* Right side phone animation */}
        <div className="md:w-1/2 flex justify-center perspective-1000 pb-8 md:pb-0">
          <div className="relative w-80 h-[600px] rotate-3d">
            {/* Phone Frame */}
            <div className="absolute inset-0 border-[12px] pb-6 border-black rounded-[3rem] bg-black phone-shadow transition-all duration-500">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl phone-inner-shadow"></div>

              {/* Video filling the screen */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <iframe
                  className="w-full h-[calc(100%+120px)] -mt-[60px] pointer-events-none"
                  src="https://www.youtube.com/embed/mhK0i-lkRHo?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&playsinline=1&enablejsapi=0&loop=1&playlist=mhK0i-lkRHo&origin=http://localhost:5173"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Mobile Dev Conference Video"
                  loading="lazy"
                />
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
    <div className="w-full bg-[#336699] text-white py-3  overflow-hidden shadow-lg ">
      <div className="relative overflow-hidden">
        <div className="marquee-animation inline-block font-semibold text-lg whitespace-nowrap">
          <span className="flex items-center">
            <span className="inline-block animate-pulse text-yellow-300 mr-2">🔔</span> 
            REGISTRATION DEADLINE: 15 MAR 2025 
            <span className="inline-block animate-pulse text-yellow-300 ml-2">🔔</span> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="inline-block animate-pulse text-yellow-300 mr-2">🔔</span> 
            REGISTRATION DEADLINE: 15 MAR 2025 
            <span className="inline-block animate-pulse text-yellow-300 ml-2">🔔</span> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="inline-block animate-pulse text-yellow-300 mr-2">🔔</span> 
            REGISTRATION DEADLINE: 15 MAR 2025 
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