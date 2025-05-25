import { useState } from 'react';
import PortfolioHeader from './components/PortfolioHeader';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="font-sans text-gray-800">
      <PortfolioHeader />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

// DONE