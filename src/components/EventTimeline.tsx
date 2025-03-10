import { motion } from "framer-motion";
import React, { useState } from "react";

const EventTimeline = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const [direction, setDirection] = useState("right");

  const programs = [
  {
    id: 0,
    time: "09:00 - 10:00",
    title: "Lamp Lighting",
    location: "B-Block Lounge",
    description:
      "Traditional lamp lighting ceremony to inaugurate the event with distinguished guests.",
    icon: "🪔",
  },
  {
    id: 1,
    time: "10:30 - 11:30",
    title: "Opening Ceremony",
    location: "B-Block Lounge",
    description:
      "Official welcome address and introduction to the event theme and schedule.",
    icon: "🎪",
  },
  {
    id: 2,
    time: "12:00 - 13:30",
    title: "Facilitating of Guests",
    location: "B-Block Lounge",
    description:
      "Special interactive session with esteemed guests and networking opportunities.",
    icon: "👥", // Swapped 🎙️ -> 👥
  },
  {
    id: 3,
    time: "14:00 - 15:30",
    title: "Speaker Session",
    location: "B-Block Lounge",
    description:
      "Keynote presentations from industry experts sharing insights and knowledge.",
    icon: "🎙️", // Swapped 👥 -> 🎙️
  },
  {
    id: 4,
    time: "16:00 - 17:30",
    title: "App Showcase",
    location: "002-ALH",
    description:
      "Demonstration of innovative projects and ideas developed by participants.",
    icon: "🏆",
  },
  {
    id: 5,
    time: "19:00 - 21:00",
    title: "Movie Night",
    location: "Open-Air Theater",
    description: "Concluding the day with a special film screening under the stars.",
    icon: "🎬",
  },
];


  const handleProgramChange = (newIndex) => {
    if (newIndex >= 0 && newIndex < programs.length) {
      setDirection(newIndex > activeProgram ? "right" : "left");
      setActiveProgram(newIndex);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-sky-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 mb-10">
          Event Schedule
        </h2>

        {/* Timeline */}
        <div className="relative mb-12">
          <div className="absolute h-1 w-full bg-gray-200 top-5">
            <div
              className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
              style={{ width: `${(activeProgram / (programs.length - 1)) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between">
            {programs.map((program) => (
              <div
                key={program.id}
                className="relative flex flex-col items-center cursor-pointer group"
                onClick={() => handleProgramChange(program.id)}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeProgram === program.id
                      ? "bg-blue-600 text-white scale-125"
                      : "bg-white border-2 border-gray-300 text-gray-500 group-hover:scale-110 group-hover:border-blue-300"
                  }`}
                >
                  {program.icon}
                </div>
                <div
                  className={`mt-2 text-sm text-center font-medium transition-all ${
                    activeProgram === program.id ? "text-blue-600" : "text-gray-600 group-hover:text-blue-500"
                  }`}
                >
                  {program.time.split(" - ")[0]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program details with animation */}
        <motion.div
          key={activeProgram}
          initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === "right" ? -50 : 50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg border border-gray-200 shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-blue-600">{programs[activeProgram].title}</h2>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {programs[activeProgram].time}
            </span>
          </div>

          <div className="mb-4 flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{programs[activeProgram].location}</span>
          </div>

          <p className="text-gray-700">{programs[activeProgram].description}</p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 transition-transform transform hover:-translate-x-1"
            onClick={() => handleProgramChange(activeProgram - 1)}
            disabled={activeProgram === 0}
          >
            ← Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-transform transform hover:translate-x-1"
            onClick={() => handleProgramChange(activeProgram + 1)}
            disabled={activeProgram === programs.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
