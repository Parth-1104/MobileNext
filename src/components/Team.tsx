import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  info?: string;
  linkedinId: string;
}

interface CommitteeSection {
  title: string;
  members: TeamMember[];
}

const TeamPage: React.FC = () => {
  // Leadership structure
  const leadership: TeamMember[] = [
    { 
      name: "Mr. Vineet Jain", 
      position: "PATRON",
      info: "MD, The Times Group, Chancellor, Bennett University",
      linkedinId: "vineet-jain" 
    },
    { 
      name: "Ms. Revati Jain", 
      position: "PATRON IN CHIEF",
      info: "Pro Chancellor, Bennett University",
      linkedinId: "revati-jain" 
    },
    { 
      name: "Prof. (Dr.) Abhay Bansal", 
      position: "GENERAL CHAIR",
      info: "Dean, School of Computer Science Engineering and Technology, Bennett University",
      linkedinId: "abhay-bansal" 
    }
  ];

  const committees: CommitteeSection[] = [
    {
      title: "Organization Secretaries",
      members: [
        { name: "Dr. Deepika Pantola", position: "Organization Secretary", linkedinId: "deepika-pantola" },
        { name: "Dr. Anuj Bharti", position: "Organization Secretary", linkedinId: "anuj-bharti" },
        { name: "Dr. Madhuri Gupta", position: "Organization Secretary", linkedinId: "madhuri-gupta" },
        { name: "Dr. Deepika Vatsa", position: "Organization Secretary", linkedinId: "deepika-vatsa" },
        { name: "Dr. Mohd. Abuzar Sayeed", position: "Organization Secretary", linkedinId: "abuzar-sayeed" },
      ],
    },
    {
      title: "Technical Program Committee",
      members: [
        { name: "Dr. Manish Raj", position: "Technical Chair", linkedinId: "manish-raj" },
        { name: "Dr. Shakti Sharma", position: "Technical Chair", linkedinId: "shakti-sharma" },
        { name: "Dr. Mukund Pratap Singh", position: "Technical Chair", linkedinId: "mukund-singh" },
        { name: "Dr. Naween Kumar", position: "Technical Chair", linkedinId: "naween-kumar" },
        { name: "Dr. Anu Rani", position: "Technical Chair", linkedinId: "anu-rani" },
        { name: "Dr. Garima Jaiswal", position: "Technical Chair", linkedinId: "garima-jaiswal" },
        { name: "Dr. Gitika Sharma", position: "Technical Chair", linkedinId: "gitika-sharma" },
        { name: "Dr. Riti Kushwaha", position: "Technical Chair", linkedinId: "riti-kushwaha" },
      ],
    },
    {
      title: "Local Organizing Committee",
      members: [
        { name: "Ms. Ankita Sharma", position: "Organizing Member", linkedinId: "ankita-sharma" },
        { name: "Ms. Priyanka Chauhan", position: "Organizing Member", linkedinId: "priyanka-chauhan" },
        { name: "Mr. Kundan", position: "Organizing Member", linkedinId: "kundan" },
      ],
    },
    {
      title: "Student Organizing Committee",
      members: [
        { name: "Rakshit Kapoor", position: "Student Coordinator", linkedinId: "rakshit-kapoor" },
        { name: "Arushi Shah", position: "Student Coordinator", linkedinId: "arushi-shah" },
        { name: "Siya Kakkar", position: "Student Coordinator", linkedinId: "siya-kakkar" },
        { name: "Parth Pankaj Singh", position: "Student Coordinator", linkedinId: "parth-singh" },
      ],
    },
  ];

  // References for each scrollable container
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Track scroll position for each section
  const [scrollPositions, setScrollPositions] = useState<number[]>(Array(committees.length).fill(0));
  
  // Track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<{section: number, card: number} | null>(null);
  const [hoveredLeadership, setHoveredLeadership] = useState<number | null>(null);

  // Function to handle scroll buttons
  const scroll = (index: number, direction: 'left' | 'right') => {
    const container = scrollContainerRefs.current[index];
    if (container) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Update scroll position for indicators
  const handleScroll = (index: number) => {
    const container = scrollContainerRefs.current[index];
    if (container) {
      const newPositions = [...scrollPositions];
      newPositions[index] = container.scrollLeft;
      setScrollPositions(newPositions);
    }
  };

  return (
    <section
      id="team"
      className="py-16 md:py-32 px-4 md:px-12 lg:px-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-100 text-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-2xl"></div>
        <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-indigo-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-100 opacity-20 blur-2xl"></div>
      </div>

      <motion.h1 
        className="text-4xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="relative inline-block">
          Our Team
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.div>
        </span>
      </motion.h1>

      {/* Leadership Section */}
      <motion.div 
        className="mb-20 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-6 pb-2 relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Leadership
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
        </motion.h2>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-md rounded-lg p-6 flex flex-col justify-between"
              style={{ minHeight: '220px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                backgroundColor: "rgba(255, 255, 255, 1)" 
              }}
              onHoverStart={() => setHoveredLeadership(index)}
              onHoverEnd={() => setHoveredLeadership(null)}
            >
              <div>
                <div className="mb-2">
                  <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {leader.position}
                  </span>
                </div>
                <motion.h3 
                  className="text-xl font-medium mb-1 text-gray-800 leading-tight" 
                  whileHover={{ color: "#2563EB" }}
                >
                  {leader.name}
                </motion.h3>
                {leader.info && (
                  <p className="text-gray-600 text-sm mb-4">{leader.info}</p>
                )}
              </div>
              <div className="flex items-center mt-auto">
                <motion.svg
                  className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 0 }}
                  animate={hoveredLeadership === index ? 
                    { rotate: [0, 10, 0], transition: { duration: 0.5 } } : 
                    { rotate: 0 }
                  }
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </motion.svg>
                <motion.a
                  href={`https://linkedin.com/in/${leader.linkedinId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-words text-sm hover:underline"
                  style={{ wordBreak: "break-all" }}
                >
                  {leader.linkedinId}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Committee sections */}
      {committees.map((committee, index) => (
        <motion.div 
          key={index} 
          className="mb-20 relative committee-section"
          data-index={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
        >
          <motion.h2 
            className="text-2xl font-semibold mb-6 pb-2 relative inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {committee.title}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.div>
          </motion.h2>

          {/* Mobile scroll controls with animations */}
          <motion.div 
            className="md:hidden flex justify-between mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button 
              onClick={() => scroll(index, 'left')}
              className="bg-white bg-opacity-70 backdrop-blur-sm shadow-md hover:shadow-lg rounded-full p-3 focus:outline-none transform transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              onClick={() => scroll(index, 'right')}
              className="bg-white bg-opacity-70 backdrop-blur-sm shadow-md hover:shadow-lg rounded-full p-3 focus:outline-none transform transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Scrollable container with animated cards */}
          <div 
            ref={el => scrollContainerRefs.current[index] = el}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            onScroll={() => handleScroll(index)}
          >
            {committee.members.map((member, memberIndex) => (
              <motion.div
                key={memberIndex}
                className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-md rounded-lg p-6 flex-shrink-0 w-72 md:w-auto flex flex-col justify-between"
                style={{
                  scrollSnapAlign: 'start',
                  minWidth: '280px',
                  minHeight: '160px'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: memberIndex * 0.05 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  backgroundColor: "rgba(255, 255, 255, 1)" 
                }}
                onHoverStart={() => setHoveredCard({section: index, card: memberIndex})}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div>
                  <motion.h3 
                    className="text-xl font-medium mb-1 text-gray-800 leading-tight" 
                    whileHover={{ color: "#2563EB" }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{member.position}</p>
                </div>
                <div className="flex items-center mt-auto">
                  <motion.svg
                    className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 0 }}
                    animate={hoveredCard?.section === index && hoveredCard?.card === memberIndex ? 
                      { rotate: [0, 10, 0], transition: { duration: 0.5 } } : 
                      { rotate: 0 }
                    }
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </motion.svg>
                  <motion.a
                    href={`https://linkedin.com/in/${member.linkedinId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-words text-sm hover:underline"
                    style={{ wordBreak: "break-all" }}
                  >
                    {member.linkedinId}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicators for mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            {committee.members.length > 1 && (
              <div className="flex space-x-2">
                {committee.members.map((_, i) => {
                  // Calculate if this dot is active based on scroll position
                  const container = scrollContainerRefs.current[index];
                  const scrollPosition = scrollPositions[index];
                  const cardWidth = 280; // approximate card width + gap
                  const isActive = container ? 
                    (i * cardWidth <= scrollPosition + 20) && ((i + 1) * cardWidth > scrollPosition) : 
                    i === 0;
                  
                  return (
                    <motion.div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ease-out ${isActive ? 'bg-blue-500 w-6' : 'bg-gray-300 w-3'}`}
                      animate={{
                        backgroundColor: isActive ? '#3B82F6' : '#D1D5DB',
                        width: isActive ? 24 : 12,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Add CSS for hiding scrollbars across browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TeamPage;