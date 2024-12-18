import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import React from 'react';
import Lenis from 'lenis';

const App = () => {
    // const lenis = new Lenis()
    // React.useEffect( ()=>{
    //     function raf(time){
    //       lenis.raf(time)
    //       requestAnimationFrame(raf)
    //     }
    //     requestAnimationFrame(raf)
    //   },[])
      
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
