import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="relative  w-full h-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/4oorPqZwrRk?autoplay=1&mute=1&controls=0&loop=1&playlist=4oorPqZwrRk&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&wmode=transparent&enablejsapi=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Background Video"
      ></iframe>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black bg-opacity-50">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 mb-4 md:mb-6">
          Mobile Dev Conference 2025
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          Join the world's leading mobile developers and innovators for three days
          of learning, networking, and inspiration.
        </p>
        {/* Register Button */}
        <button className="relative group bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium py-3 px-8 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-violet-400/30 blur-xl transform scale-150 animate-pulse"></div>
          </div>
        </button>

        {/* Date and Location */}
        <h2 className="mt-6 text-sm md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
          19 March 2025 <br /> Bennett University
        </h2>
      </div>
    </div>
  );
};

export default VideoBackground;
