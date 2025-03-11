import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  info?: string;
  linkedinId: string;
  photoUrl?: string;
}

interface CommitteeSection {
  title: string;
  members: TeamMember[];
}

const TeamPage: React.FC = () => {
  // Leadership structure with added photoUrl
  const leadership: TeamMember[] = [
    { 
      name: "Mr. Vineet Jain", 
      position: "PATRON",
      info: "MD, The Times Group, Chancellor, Bennett University",
      linkedinId: "vineet-jain",
      photoUrl: "https://www.bennett.edu.in/wp-content/uploads/2025/01/Vineet-Jain.jpg" 
    },
    { 
      name: "Ms. Revati Jain", 
      position: "PATRON IN CHIEF",
      info: "Pro Chancellor, Bennett University",
      linkedinId: "revati-jain",
      photoUrl: "https://www.bennett.edu.in/wp-content/uploads/2024/11/Ms.-Revati-Jain.jpg" 
    },
    { 
      name: "Prof. (Dr.) Abhay Bansal", 
      position: "GENERAL CHAIR",
      info: "Dean, School of Computer Science Engineering and Technology, Bennett University",
      linkedinId: "abhay-bansal",
      photoUrl: "https://www.bennett.edu.in/wp-content/uploads/2023/05/Abhay-Bansal.jpg" 
    }
  ];

  const committees: CommitteeSection[] = [
    {
      title: "Organizing Secretaries",
      members: [
        { 
          name: "Dr. Deepika Pantola", 
          position: "Organizing Secretary", 
          linkedinId: "dr-deepika-pantola-543b3325",
          photoUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHCToI8-yQkJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652800578265?e=1747267200&v=beta&t=3F6Hqbjfe8YCth34Kk7Gfkx1sX7lPXMfLxZ4Q4WAuxE" // Placeholder - replace with actual image
        },
        { 
          name: "Dr. Anuj Bharti", 
          position: "Organizing Secretary", 
          linkedinId: "dr-anuj-kumar-bharti-a0309367",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQE655OVog65jw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712855712403?e=1747267200&v=beta&t=Eq5svhNPOuKdRtdGitmRNEr0m6mPboPFdNq-sH8tSTg" 
        },
        { 
          name: "Dr. Madhuri Gupta", 
          position: "Organizing Secretary", 
          linkedinId: "dr-madhuri-gupta-606b8572",
          photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHjpXMRo50ajg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668664209847?e=1747267200&v=beta&t=mS8d1YUkOyoakW7JHEU5_vz_WMDGxWSpldh-xWMMhXA" 
        },
        { 
          name: "Dr. Deepika Vatsa", 
          position: "Organizing Secretary", 
          linkedinId: "deepika-vatsa",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQHDe83wAJUkHg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727718195356?e=1747267200&v=beta&t=08NFS0WMtg7slWd0AjhUSMdjeZJXOl9l1A1ZoJBF3ew" 
        },
        { 
          name: "Dr. Mohd. Abuzar Sayeed", 
          position: "Organizing Secretary", 
          linkedinId: "mohdabuzarsayeed",
          photoUrl: "https://media.licdn.com/dms/image/v2/C5603AQGPdnV_-qvPSQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631544871049?e=1747267200&v=beta&t=HaUXIfFgImaRxE-D-Y7fovHHSIKgvQsOFniGxuU58fI" 
        },
      ],
    },
    {
      title: "Technical Program Committee",
      members: [
        { 
          name: "Dr. Manish Raj", 
          position: "Technical Chair", 
          linkedinId: "manish-raj-64708032",
          photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHs1K78EGQ0_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684255701505?e=1747267200&v=beta&t=o862jPugHNWhJt9cM_hoFk0ftaKMdD-jtv_Gur_jE5I" 
        },
        { 
          name: "Dr. Shakti Sharma", 
          position: "Technical Chair", 
          linkedinId: "shakti11",
          photoUrl: "https://media.licdn.com/dms/image/v2/C5103AQEd6NWbg6LFoQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1572143392707?e=1747267200&v=beta&t=6diRlueDUKUhY6KI0BX8Qlf83h3-RDjTz0Uy1B_Dikc" 
        },
        { 
          name: "Dr. Mukund Pratap Singh", 
          position: "Technical Chair", 
          linkedinId: "mukund-pratap-singh-1b46159b",
          photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGfJGrjX59cyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685774654704?e=1747267200&v=beta&t=7DkuUz1YthJxosm77AnQjhvD4uInkbRAo3vpz4d_qoU" 
        },
        { 
          name: "Dr. Naween Kumar", 
          position: "Technical Chair", 
          linkedinId: "",
          photoUrl: "/api/placeholder/100/100" 
        },
        { 
          name: "Dr. Anu Rani", 
          position: "Technical Chair", 
          linkedinId: "dr-anu-rani-72617a196",
          photoUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHCtAnlEasxyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1656498614340?e=1747267200&v=beta&t=Z-CFmI8CFu66ikLECjOatpPe9uJ2KfYKbvdC-ApKUco" 
        },
        { 
          name: "Dr. Garima Jaiswal", 
          position: "Technical Chair", 
          linkedinId: "drgarimajaiswal01",
          photoUrl: "https://media.licdn.com/dms/image/v2/C5103AQGpDI0JR7ArpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1550417413531?e=1747267200&v=beta&t=DR_QzXf4xWjWMyjmjvC_aWrZl9BJhetxoIR5VNrzyig" 
        },
        { 
          name: "Dr. Gitika Sharma", 
          position: "Technical Chair", 
          linkedinId: "dr-gitika-sharma-051b288a",
          photoUrl: "https://media.licdn.com/dms/image/v2/C5103AQH22KR7NK_BSg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1577076837182?e=1747267200&v=beta&t=ET0IxCMqBxSGozcolIpml9qnL-pnPLcDJ4rkjrmHP54" 
        },
        { 
          name: "Dr. Riti Kushwaha", 
          position: "Technical Chair", 
          linkedinId: "dr-riti-kushwaha-2800375b",
          photoUrl: "https://media.licdn.com/dms/image/v2/C5603AQGnhTfPeF8kSA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1591541774872?e=1747267200&v=beta&t=GBedQyY5PkyjRkca6Qg6sww8MLtuYY940UFpgjUYT4k" 
        },
      ],
    },
    {
      title: "Local Organizing Committee",
      members: [
        { 
          name: "Ms. Ankita Sharma", 
          position: "Organizing Member", 
          linkedinId: "",
          photoUrl: "/api/placeholder/100/100" 
        },
        { 
          name: "Ms. Priyanka Chauhan", 
          position: "Organizing Member", 
          linkedinId: "priyanka-chauhan-928844230",
          photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQE0CFVdgltvIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679395742149?e=1747267200&v=beta&t=aBnD3BCOR5Z9wru1WWcUzdOrJeq0q5PeBeU7k7ebVfA" 
        },
        { 
          name: "Mr. Kundan", 
          position: "Organizing Member", 
          linkedinId: "kundan",
          photoUrl: "/api/placeholder/100/100" 
        },
      ],
    },
    {
      title: "Student Organizing Committee",
      members: [
        { 
          name: "Rakshit Kapoor", 
          position: "Chairperson,Mobilon", 
          linkedinId: "rakshit-kapoor-353312259",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQGQw0GHcdZGJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723582074577?e=1747267200&v=beta&t=q-t4Q7VK6VI3HB-3rn9b2b_is5KhYsgoyB833BJwCUQ" 
        },
        { 
          name: "Arushi Shah", 
          position: "Vice ChairPerson,Mobilon", 
          linkedinId: "arushi-shah-878445271",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQF5CrdAA2QpVA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732470124217?e=1747267200&v=beta&t=vYPqsFRPMw7p0PcKtm2I709acoztYxpHI0zLVRxiUnU" 
        },
        { 
          name: "Siya Kakkar", 
          position: "General Secretary,Mobilon", 
          linkedinId: "siya-kakkar",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQFW7YWuEizjxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727268674982?e=1747267200&v=beta&t=0TzLTigeQ8AcJvBD6FeUAM63mTEZ1eXM-OaGlOKJytk" 
        },
        { 
          name: "Vasu Bhatia", 
          position: "Management Head,Mobilon", 
          linkedinId: "vasu-bhatia",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQGOMMHSulT_Rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688456011347?e=1747267200&v=beta&t=r6lT90xdNM7Q7ATzQGszc7oXnrJZU4b1ANKv3i-sHdo" 
        },
        { 
          name: "Parth Pankaj Singh", 
          position: "Tech Co Head,Mobilon", 
          linkedinId: "parth-singh427",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQFmLU7ln22F-g/profile-displayphoto-shrink_400_400/B56ZQ2.McUHIAg-/0/1736089063427?e=1747267200&v=beta&t=RCeS50lKtQOjK3LHt-QbhRnm6oXm3bgpxn2qTnPuVw0" 
        },
        
        
        { 
          name: "Sankalp Tiwari", 
          position: "Events Head,Mobilon", 
          linkedinId: "sankalp-tiwari-79967321a",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQE3CDw1SQpWqQ/profile-displayphoto-shrink_400_400/B56ZR.vYdMHsAk-/0/1737293138799?e=1747267200&v=beta&t=sdRJu_oPJ7Tz0hev0c9K6PNry-cmxT7Qvu2lX-uvfnY" 
        },
        { 
          name: "Khushi Saroha", 
          position: "Management Co Head,Mobilon", 
          linkedinId: "khushi-saroha-709659301",
          photoUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFKx8d76I66fw/profile-displayphoto-shrink_400_400/B4EZObyGBiHwAk-/0/1733485421175?e=1747267200&v=beta&t=tCH6kcjaGH0CH-Sqvo-qm6Oqjo6ecxKayxwzMDF5Yto" 
        },
        { 
          name: "Peehu Mishra", 
          position: "Tech Head,Mobilon", 
          linkedinId: "peehu-mishra",
          photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQFoFWgFTBzncg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708777290099?e=1747267200&v=beta&t=WOfXbR7qdXPmY3l5Pk9MeZgBdPFdiWR7KA5ATp7hCiI" 
        },
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

  // Function to navigate to LinkedIn profile
  const navigateToLinkedIn = (linkedinId: string) => {
    // Check if the linkedinId is a full URL or just a username
    const url = linkedinId.startsWith('http') 
      ? linkedinId 
      : `https://www.linkedin.com/in/${linkedinId}/`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
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
        <span className="mt-9 relative inline-block">
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

        {/* Leadership Cards with Photos */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-md rounded-lg p-6 flex flex-col justify-between cursor-pointer"
              style={{ minHeight: '280px' }}
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
              <div className="flex flex-col items-center mb-4">
                {/* Photo element with animation */}
                <motion.div
                  className="mb-4 overflow-hidden rounded-full border-4 border-blue-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={leader.photoUrl}
                    alt={`Photo of ${leader.name}`}
                    className="w-32 h-32 object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
                <div className="text-center">
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
              </div>
              <div className="flex items-center justify-center mt-auto">
                {/* LinkedIn link content removed as in the original */}
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

          {/* Scrollable container with animated cards - MODIFIED for side-by-side layout */}
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
                className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-md rounded-lg p-4 flex-shrink-0 w-72 md:w-auto flex flex-col justify-between cursor-pointer"
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
                onClick={() => navigateToLinkedIn(member.linkedinId)}
              >
                {/* New horizontal layout with image on left, content on right */}
                <div className="flex items-start space-x-4 mb-2">
                  {/* Left side - Photo */}
                  <motion.div
                    className="flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img 
                      src={member.photoUrl}
                      alt={`Photo of ${member.name}`}
                      className="w-16 h-16 object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  
                  {/* Right side - Content */}
                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg font-medium mb-1 text-gray-800 leading-tight" 
                      whileHover={{ color: "#2563EB" }}
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-blue-600 text-sm font-medium">{member.position}</p>
                  </div>
                </div>
                
                {/* LinkedIn info at bottom */}
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
                    href={member.linkedinId.startsWith('http') ? member.linkedinId : `https://linkedin.com/in/${member.linkedinId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-words text-sm hover:underline"
                    style={{ wordBreak: "break-all" }}
                    onClick={(e) => e.stopPropagation()} // Prevent triggering the card's onClick
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