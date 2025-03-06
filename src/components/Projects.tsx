import React from 'react';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'CrossPlatform Health Tracker',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    description: 'A comprehensive health tracking application built with React Native and Flutter, demonstrating cross-platform development capabilities. Features include real-time health monitoring, workout tracking, and nutrition planning.',
    technologies: ['React Native', 'Flutter', 'Firebase'],
    github: 'https://github.com',
    live: 'https://demo.com',
  },
  {
    title: 'Smart City Navigation',
    coverImage: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&q=80&w=1200',
    description: 'An innovative city navigation app developed for iOS and Android using native technologies. Incorporates AR features for real-time navigation, local business discovery, and public transport tracking.',
    technologies: ['Swift', 'Kotlin', 'ARKit', 'ARCore'],
    github: 'https://github.com',
    live: 'https://demo.com',
  },
  {
    title: 'Social Commerce PWA',
    coverImage: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=1200',
    description: 'A Progressive Web App that transforms social media engagement into shopping experiences. Features offline capabilities, push notifications, and seamless payment integration.',
    technologies: ['PWA', 'React', 'Node.js', 'Stripe'],
    github: 'https://github.com',
    live: 'https://demo.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 z-0"></div>
      
      {/* Animated floating bubbles */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-52 h-52 rounded-full bg-indigo-500/10 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-purple-500/10 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="block mb-3 text-blue-400 font-medium tracking-wider">SHOWCASING INNOVATION</span>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-8 animate-shimmer">Featured Projects</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">Innovative mobile solutions showcased at the conference, designed with cutting-edge technology</p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row gap-12 bg-blue-900/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg shadow-blue-500/5 border border-blue-200/20 hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2 h-[350px] lg:h-auto relative overflow-hidden group">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              <div className="lg:w-1/2 p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-500/30 text-blue-300 text-xs font-medium uppercase tracking-wider rounded-full mb-4">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 relative inline-block">
                    {project.title}
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-400 rounded-full"></span>
                  </h3>
                  <p className="text-gray-200 mb-8 leading-relaxed text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm backdrop-blur-sm hover:bg-blue-500/30 transition-colors duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-blue-900/50 hover:bg-blue-800 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Github size={20} className="animate-float" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
                  >
                    <Globe size={20} className="animate-float" style={{ animationDelay: '0.2s' }} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Extra aesthetic element: decorative dots */}
      <div className="absolute right-12 top-32 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
        ))}
      </div>
      
      {/* Extra aesthetic element: vertical line */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-blue-400/0 via-blue-400/30 to-blue-400/0"></div>
    </section>
  );
};

// Add these animation keyframes to your global CSS
const globalStyles = `
@keyframes shimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.4;
  }
}

.animate-shimmer {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8), rgba(59, 130, 246, 0.8));
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}

.animate-float {
  animation: float 3s ease infinite;
}

.animate-pulse {
  animation: pulse 4s ease infinite;
}
`;

export default Projects;