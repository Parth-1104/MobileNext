import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const speakers = [
  {
    name: 'Sunil Bhatnagar',
    role: 'CXO Lithium Project IPLT. Electric Trucks. ZET',
    image: "https://media.licdn.com/dms/image/v2/D5603AQFmuDp6FMzPmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714995676310?e=1747267200&v=beta&t=CMJLRtiB6DyJLDqE5Qwzi2ZYTN5Le6v4dmDStyY2Us4",
    topic: 'Clean and Green Mobility - Challenges and Opportunities',
    linkedinId: "sunil-bhatnagar-47251423",
  },
  {
    name: 'Mukesh Bansal',
    role: 'Co Founder & CTO at TelioEV',
    image: assets.photo2,
    topic: 'MobileTechnologies Fuelling the Electric Vehicle Ecosystem',
    linkedinId: "mukeshtalks",
  },
  {
    name: 'Nihar Ranjan Rout',
    role: 'CEO at Creuto',
    image: "https://media.licdn.com/dms/image/v2/D5603AQGa_OnfkJ_S0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718739078931?e=1747267200&v=beta&t=u5AWXPHSZlt4mVxQG72MPEo1fzlYUbvyYpiHpUUlL-o",
    topic: 'Security Best Practices in Mobile Apps',
    linkedinId: "niharrout/?originalSubdomain=in",
  },
  {
    name: 'Devansh Anand Tiwari',
    role: 'SDE II at Amazon, Luxembourg',
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGmNH1zz80XLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722076608361?e=1747872000&v=beta&t=smtrQjVmzdaYy74z4RGYPINfgRbmFjUQQ7NUC4bPm6A",
    topic: 'Security Best Practices in Mobile Apps',
    linkedinId: "devansh-anand-tiwari",
  },
  {
    name: 'Ayush Chandra',
    role: 'User Experience Researcher at Amazon Web Services',
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGBFjvKgc-W-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675886850396?e=1747872000&v=beta&t=CYpCfwHA9Qn2erlyNbdBWaDIsqt5Kv3CAQZyXIc9WDk",
    topic: 'Security Best Practices in Mobile Apps',
    linkedinId: "ayush-chandra910",
  },
  {
    name: ' Anjali Shah',
    role: 'User Experience Architect at US BANK',
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEdpslfGEfEsw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1729625537703?e=1742806800&v=beta&t=-Sgc2vFMhaZS4aGSC5bfSBZ_e8DBRSKSqJ6SPqs22cc",
    topic: 'Security Best Practices in Mobile Apps',
    linkedinId: "anjalishah12",
  },
  {
    name: ' Amod Kumar Pandey',
    role: 'Research Analystat  DRDO, Delhi Headquarters',
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGgJpVMDJb0RA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690995784013?e=1747872000&v=beta&t=m9f26jLp7eePmq45AHhmrTFrARk7SnY6DCw3W50wuoA",
    topic: 'security aspect on cyber and 5G in Quantum Era',
    linkedinId: "a-k-pandey-57206939",
  },
  {
    name: ' Satya Prakash Goel',
    role: 'Research Analystat  DRDO, Delhi Headquarters',
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHwY50W5J-zCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517470980364?e=1747872000&v=beta&t=AM5CP9w4H9m8Xdobka82ZLOPTV-UC8Lj2vbowmcKD9s",
    topic: 'Security Best Practices in Mobile Apps',
    linkedinId: "spgoel",
  },
];

const navigateToLinkedIn = (linkedinId: string) => {
  // Check if the linkedinId is a full URL or just a username
  const url = linkedinId.startsWith('http') 
    ? linkedinId 
    : `https://www.linkedin.com/in/${linkedinId}/`;
  
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Speakers: React.FC = () => {
  return (
    <section className="py-1 bg-gradient-to-b from-indigo-50 via-sky-50 to-blue-50">
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
              onClick={() => speaker.linkedinId && navigateToLinkedIn(speaker.linkedinId)}
            >
              {/* Speaker Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => speaker.linkedinId && navigateToLinkedIn(speaker.linkedinId)}
                  style={{ cursor: speaker.linkedinId ? 'pointer' : 'default' }}
                />
              </div>

              {/* Speaker Details */}
              <h3 className="text-xl font-semibold text-blue-700">{speaker.name}</h3>
              <p className="text-sky-600 font-medium mb-3">{speaker.role}</p>

              {/* Topic */}
               {/* <p className="text-slate-500 text-sm font-medium">Location:</p>
              <p className="text-slate-700 group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-2">
                {speaker.topic}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </p>  */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;