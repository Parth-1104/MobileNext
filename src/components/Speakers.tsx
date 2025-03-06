import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const speakers = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Mobile Developer at Tech Giants',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    topic: 'Future of Cross-Platform Development',
  },
  {
    name: 'Michael Chen',
    role: 'Flutter Developer Advocate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    topic: 'Building Beautiful UIs with Flutter',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Mobile Security Expert',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    topic: 'Security Best Practices in Mobile Apps',
  },
  {
    name: 'David Kim',
    role: 'React Native Core Contributor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    topic: 'Advanced React Native Architecture',
  },
];

const Speakers: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 via-sky-50 to-blue-50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 mb-6">
            Featured Speakers
          </h2>
          <p className="text-slate-600 text-lg">
            Learn from industry experts and innovators
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="group relative bg-gradient-to-br from-white/95 via-white/90 to-transparent backdrop-blur-sm rounded-xl p-6 shadow-lg border border-sky-100 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              />
              
              <motion.div className="relative z-10" variants={cardVariants}>
                <motion.div 
                  className="relative w-32 h-32 mx-auto mb-6"
                  variants={imageVariants}
                >
                  <motion.img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full rounded-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div 
                    className="absolute -top-2 -right-2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-6 h-6 text-blue-500/30" />
                  </motion.div>
                </motion.div>

                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-700 to-indigo-700 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sky-600 mb-3 font-medium">{speaker.role}</p>
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm font-medium">Speaking on:</p>
                  <p className="text-slate-700 group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-2">
                    {speaker.topic}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Speakers;