import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import ProjectPage from './projectpage';
import Footer from './components/Footer';
import TeamPage from './components/Team';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br  from-indigo-50 via-sky-50 to-blue-50 overflow-hidden">
      <Router>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/team" element={<TeamPage />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
