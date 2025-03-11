import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import ContactForm from './components/ContactForm';
import EventTimeline from './components/EventTimeline';
import TeamPage from './components/Team';
import MarqueeCards from './components/marquee';

function Home() {
  return (
    <div className="min-h-screen w-full  overflow-x-hidden">
      <section id='home'>
        <Hero />
        </section>
        <section id="about">
        <About />
        </section>
      
        <section id="speakers">  <Speakers /></section>
        <MarqueeCards/>
        
      
        {/* <ContactForm /> */}
        
        {/* <section id="timeline"> <EventTimeline/></section> */}
    </div>
  );
}

export default Home;
