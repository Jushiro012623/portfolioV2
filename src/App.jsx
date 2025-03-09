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
    React.useEffect( ()=>{
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const isMobile = window.innerWidth <= 768
      if (!isMobile) {
        const lenis = new Lenis({
          smooth: 0.2,  
          multiplier: 3,  
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // (uncomment if needed)
        // const links = document.querySelectorAll('a[href^="#"]');
        // links.forEach((link) => {
        //     link.addEventListener("click", (e) => {
        //         e.preventDefault();
        //         const target = document.querySelector(link.getAttribute("href"));
        //         target && lenis.scrollTo(target, {});
        //     });
        // });
      }
    }
    },[]) 
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



    // React.useEffect( ()=>{
    //     const lenis = new Lenis()
    //     function raf(time){
    //       lenis.raf(time)
    //       requestAnimationFrame(raf)
    //     }
    //     requestAnimationFrame(raf)
    //   },[])
