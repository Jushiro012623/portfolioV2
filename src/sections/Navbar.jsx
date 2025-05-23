import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { navLinks } from '../constants/index.js';
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import useSmoothScroll from '../hooks/useSmoothScroll';
const NavItems = ({ onClick = () => {} }) => {
    const {smoothScroll} = useSmoothScroll()
    // const smoothScroll = el => {
    //     setTimeout(() => { 
    //         el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //     }, 200); 
    // };
    return (
        <ul className="nav-ul">
            {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <HashLink  to={item.href} smooth scroll={smoothScroll} className="nav-li_a" onClick={onClick}>
                {item.name}
                </HashLink>
            </li>
            ))}
        </ul>
    )
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const navContainerRef = React.useRef(null)
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const [isNavVisible, setIsNavVisible] = React.useState(0)
    const { y: currentScrollY } = useWindowScroll()
    React.useEffect(() => {
        if(currentScrollY === 0){
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        }else if(currentScrollY > lastScrollY){
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav')
        }else if(currentScrollY < lastScrollY){
            setIsNavVisible(true)
            navContainerRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY)
    },[currentScrollY,lastScrollY ])

    React.useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    },[isNavVisible])
  return (
    <header ref={navContainerRef} className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Ivan
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
