import React, { useState } from 'react';
import myLogo from '../assets/algoraLogo (2).jpg';
import { Menu, X } from 'lucide-react';




const Navbar = () => {
  // State to track if the mobile menu is open/visible
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    const [activeLinkName, setActiveLinkName] = useState('Landing');
  const getLinkClasses = (linkName) => {
    const baseClasses = "overflow-hidden relative font-medium text-gray-600 hover:text-button   focus:outline-none px-4 py-2 rounded focus:text-gray-400 dark:text-neutral-400 z-10 dark:focus:text-neutral-500  before:absolute before:inset-0  before:bg-white  before:transform before:-translate-x-full hover:before:block hover:before:translate-x-0 before:transition-transform before:duration-300 ";
    
    // Check if the current link is the active one
    if (activeLinkName === linkName) {
      // Styles for the active link (e.g., blue background, white text)
      return `$ text-button bg-white rounded focus:outline-none focus:text-gray-400 font-medium z-10 px-4 py-2  dark:focus:text-neutral-500  `; 
    } else {
      // Styles for inactive links (your original complex hover/before styles)
      // Note: I simplified some of your original complex 'before' classes for clarity, 
      // but you can re-integrate them into this string if needed.
      return `${baseClasses} `;
    }
  };

  // 2. Click handler function to update the state
  const handleLinkClick = (linkName, event) => {
    event.preventDefault(); // Prevents default anchor link behavior
    setActiveLinkName(linkName); // Update the state
    setIsMenuOpen(false); // Close menu after clicking a link on mobile
        // The browser handles the scroll because of href="#ID"
  };


  return (
    <header className="fixed top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3 bg-darkmode">
      <nav className=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:gap-20">
        <div className="flex items-center justify-between ">
         
            <div className="flex w-45">
             <h1 className=''>Algora</h1>
            </div>
          
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              id="hs-navbar-example-collapse"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              {isMenuOpen ? (
             <X className="shrink-0 size-4" size={16} />
              ):(
              <Menu className="shrink-0 size-4" size={16} />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          // className="hidden hs-collapse overflow-hidden transition-all flex sm:justify-center  duration-300 grow sm:block"
          className={`${isMenuOpen ? 'block' : 'hidden'} sm:block 
                                overflow-hidden transition-all duration-300 grow`}
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-evenly sm:mt-0 sm:ps-5">
            <a
              
              href="#home-section"
              className={getLinkClasses('Home')}
              onClick={(e) => handleLinkClick('Home', e)}
               aria-current={activeLinkName === 'Home' ? 'page' : undefined}
            >
               <span className="relative z-20 hover:text-button">Home</span>
            </a>
            <a
             className={getLinkClasses('Testimonial')}
              href="#login-section"
               onClick={(e) => handleLinkClick('Testimonial', e)}
            >
                 <span className="relative z-20 hover:text-button">Testimonials</span>
              
            </a>
            <a
             className={getLinkClasses('Courses')}
              href="#register-section"
               onClick={(e) => handleLinkClick('Courses', e)}
            >
                 <span className="relative z-20 hover:text-button">Courses</span>
              
            </a>
            <a
               className={getLinkClasses('About')}
              href="#about-section"
               onClick={(e) => handleLinkClick('About', e)}
            >
                 <span className="relative z-20 hover:text-button">About</span>
             
            </a>
          </div>
        </div>
        <div className="flex w-44">
          <button className='flex items-center hidden sm:block justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-button hover:bg-white hover:text-button active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto'>join group</button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;

