import React from 'react';

const Herowithimage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-indigo-100/40 to-rose-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-emerald-100/40 to-violet-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left side text content */}
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-6 animate-gradient">
            Mobile Dev Conference 2025
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Join the world's leading mobile developers and innovators for three days
            of learning, networking, and inspiration.
          </p>
          <button className="relative group bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium py-3 px-8 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Register Now</span>
          </button>
        </div>

        {/* Right side phone animation */}
        <div className="md:w-1/2 flex justify-center perspective-1000">
          <div className="relative w-80 h-[600px] rotate-3d">
            {/* Phone Frame */}
            <div className="absolute inset-0 border-[12px] border-black rounded-[3rem] bg-black phone-shadow transition-all duration-500">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl phone-inner-shadow"></div>

              {/* Video filling the screen */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <iframe
                  className="w-full h-[600px] pointer-events-none"
                  src="https://www.youtube.com/embed/4oorPqZwrRk?autoplay=1&mute=1&controls=0&loop=1&playlist=4oorPqZwrRk&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&wmode=transparent&enablejsapi=1"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Mobile Dev Conference Video"
                ></iframe>
              </div>

              {/* Side Buttons (Volume & Power) */}
              <div className="absolute -left-[14px] top-24 w-[2px] h-16 bg-gray-800 rounded-l-lg"></div>
              <div className="absolute -right-[14px] top-20 w-[2px] h-8 bg-gray-800 rounded-r-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herowithimage;
