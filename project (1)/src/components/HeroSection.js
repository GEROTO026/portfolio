import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const texts = ['Frontend Developer', 'UI/UX Designer', 'Experience Creator'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText(texts[currentIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      } else {
        setTypedText(texts[currentIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === texts[currentIndex].length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gerónimo Paye Berli</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-8 h-12">
          {typedText}<span className="animate-pulse">|</span>
        </h2>
        
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;