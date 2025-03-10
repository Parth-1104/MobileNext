import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const speakers = [
  {
    name: 'Sunil Bhatnagar',
    role: ' CXO-Lithium Project',
    image: assets.photo1,
    topic: 'Building Beautiful UIs with Flutter',
  },
  {
    name: 'Mukesh Bansal',
    role: 'Mobile Security Expert',
    image: assets.photo2,
    topic: 'Security Best Practices in Mobile Apps',
  },
];

const Speakers: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 via-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
            Featured Speakers
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Learn from industry experts and innovators
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="group bg-white rounded-lg shadow-lg p-6 border border-sky-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Speaker Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              {/* Speaker Details */}
              <h3 className="text-xl font-semibold text-blue-700">{speaker.name}</h3>
              <p className="text-sky-600 font-medium mb-3">{speaker.role}</p>

              {/* Topic */}
              {/* <p className="text-slate-500 text-sm font-medium">Speaking on:</p>
              <p className="text-slate-700 group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-2">
                {speaker.topic}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
