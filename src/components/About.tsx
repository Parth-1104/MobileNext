import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Lightbulb } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Annual Attendees' },
    { icon: Globe, value: '40+', label: 'Countries Represented' },
    { icon: Lightbulb, value: '150+', label: 'Innovation Workshops' },
    { icon: Award, value: '10+', label: 'Years of Excellence' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  const statCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    // hover: {
    //   scale: 1.05,
    //   transition: {
    //     type: "spring",
    //     stiffness: 400,
    //     damping: 10
    //   }
    // }
  };

  return (
    <section id="about" className="py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-sky-50 to-indigo-50">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 mb-6"
              variants={itemVariants}
            >
             About Mobile Next 
            </motion.h2>
            <motion.div 
              className="space-y-6 text-slate-700"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants}>
              Mobilon, Mobile Technologies club, Bennett University presents Mobile Next, an International Conference dedicated to the latest advancements and innovations in Mobile technologies. This one-day event brings together
industry experts, developers, and researchers for
insightful discussions and interactive sessions. 
              </motion.p>
              <motion.p variants={itemVariants}>
              With a focus on emerging frameworks, AI integration,
and next-gen connectivity, Mobile Next serves as a
platform to exchange ideas, showcase
groundbreaking work, and shape the future of mobile
technology.
              </motion.p>
              <motion.p variants={itemVariants}>
              An exclusive conference featuring industry
experts sharing insights on iOS and mobile
app development. Explore the latest trends,
technologies, and best practices in app
creation from seasoned professionals. Gain
valuable knowledge about the evolving app
development landscape and career
opportunities in the field. Engage in
discussions, ask questions, and expand your
understanding of this dynamic industry.
              </motion.p>
            </motion.div>

            
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000"
                alt="Conference speaker giving presentation"
                className="w-full h-[600px] object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-sky-900/30 to-transparent" />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-blue-600/90 to-sky-600/90 backdrop-blur-sm rounded-lg p-4 inline-block shadow-xl">
                  <p className="text-white font-semibold">
                    "Bringing together the world's most innovative mobile developers"
                  </p>
                  {/* <p className="text-blue-200 text-sm mt-1">
                    - Sarah Chen, Conference Founder
                  </p> */}
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-sky-500/30 backdrop-blur-sm rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-sky-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </motion.div>
      <div>
  <img 
    className='w-full  mt-[79px] h-[10vh] md:h-[15vh] rounded-lg shadow-md  ' 
    src={assets.foot}
    alt="Description of your image" 
  />
</div>
    </section>
  );
};

export default About;