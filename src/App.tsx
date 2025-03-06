import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Code2, Blocks, AppWindow } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Projects from './components/Projects';
import Herowithimage from './components/Herowithimage';
import ContactForm from './components/ContactForm';
import VideoBackground from './components/VideoBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FFFAF1] to-[#FDF7E9] overflow-hidden">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="container max-w-max">
        {/* <VideoBackground/> */}
        <Hero/>
        {/* <VideoBackground/> */}
        {/* <Herowithimage /> */}
        <About />
        <Speakers />
        <Projects />
        <ContactForm/>
      </main>
    </div>
  );
}

export default App;