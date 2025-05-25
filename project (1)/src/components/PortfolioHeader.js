import React, { useState } from 'react';

const PortfolioHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PortfolioX
        </div>
        
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 my-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        <nav className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioHeader;