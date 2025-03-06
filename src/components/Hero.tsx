import React from 'react';

const Herowithimage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden bg-gradient-to-br from-white to-gray-100 text-gray-900">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-blue-300 to-gray-200 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute -bottom-1/3 -right-1/3 w-[600px] h-[600px] bg-gradient-to-l from-gray-300 to-blue-400 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left side text content */}
        <div className="text-left md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 drop-shadow-xl mb-6 animate-pulse">
            Mobile Dev Conference 2025
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-xl drop-shadow-lg">
            Join the world's leading mobile developers and innovators for three days
            of learning, networking, and inspiration.
          </p>
          <button className="relative group bg-gradient-to-r from-blue-500 to-blue-300 text-white font-bold py-4 px-10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 shadow-xl">
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
    className="w-full h-full pointer-events-none"
    src="https://www.youtube.com/embed/Gf8Ey_EUrzA?autoplay=1&mute=1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Mobile Dev Conference Video"
  ></iframe>
</div>

              {/* Side Buttons (Volume & Power) */}
              <div className="absolute -left-[14px] top-24 w-[2px] h-16 bg-gray-400 rounded-l-lg"></div>
              <div className="absolute -right-[14px] top-20 w-[2px] h-8 bg-gray-400 rounded-r-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herowithimage;
