import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import React from 'react';
// import Lenis from 'lenis';
// import { ScrollTrigger } from 'gsap/all';
// import gsap from 'gsap';

// gsap.registerPlugin(ScrollTrigger)
const App = () => {
//     const lenis = new Lenis();

//     // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
//     lenis.on('scroll', ScrollTrigger.update);

// // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
//     // This ensures Lenis's smooth scroll animation updates on each GSAP tick
//     gsap.ticker.add((time) => {
//     lenis.raf(time * 1000); // Convert time from seconds to milliseconds
//     });

//     // Disable lag smoothing in GSAP to prevent any delay in scroll animations
//     gsap.ticker.lagSmoothing(0);
    return (
        <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* <Clients /> */}
        <WorkExperience />
        <Contact />
        <Footer />
        </main>
    );
};

export default App;
