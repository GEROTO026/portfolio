import React from 'react';
import ProjectCard from './ProjectCard';

// /components/ProjectsSection.js
const ProjectsSection = () => {
  const projects = [
    {
      title: "Interactive Dashboard",
      description: "Control panel with data visualization and interactive charts.",
      tags: ["JavaScript", "Chart.js", "API"],
      imageUrl: "https://i.ibb.co/7tRM1kcS/Captura-de-pantalla-2025-05-09-161504.png",
      liveUrl: "https://dashboard-interactive1project.netlify.app/",
      codeUrl: "https://github.com/GEROTO026/Project-1-Dashboard-Interactive"
    },
    {
      title: "Advanced To-Do List",
      description: "Task application with data persistence.",
      tags: ["HTML", "LocalStorage", "CSS"],
      imageUrl: "https://i.ibb.co/n80Qqb7w/Captura-de-pantalla-2025-05-09-161101.png",
      liveUrl: "https://to-do-list2project.netlify.app/",
      codeUrl: "https://github.com/GEROTO026/Project-2-To-Do-List"
    },
    {
      title: "NTX LP Clone",
      description: "Modern landing page with responsive design (Netflix).",
      tags: ["HTML", "CSS"],
      imageUrl: "https://i.ibb.co/5h4nn9QM/Captura-de-pantalla-2025-05-09-160617.png",
      liveUrl: "https://ntx-lp-clone3project.netlify.app/",
      codeUrl: "https://github.com/GEROTO026/Project-3-Netflix-Clone"
    },
    {
      title: "Online Clothing Store",
      description: "Complete e-commerce with shopping cart.",
      tags: ["React", "HTML", "TailwindCSS"],
      imageUrl: "https://i.ibb.co/rfm2t577/Captura-de-pantalla-2025-05-12-184242.png",
      liveUrl: "https://fashionmxmodernclothingstore.netlify.app/",
      codeUrl: "https://github.com/GEROTO026/Project-4-Clothing-store-2.0"
    },
    {
      title: "Scientific Calculator",
      description: "Calculator with advanced functions and scientific mode for complex calculations.",
      tags: ["JavaScript", "CSS", "UX"],
      imageUrl: "https://i.ibb.co/VW9w9Rzz/Captura-de-pantalla-2025-03-09-001246.png",
      liveUrl: "https://scientific-calculator-project5.netlify.app/",
      codeUrl: "https://github.com/GEROTO026/Project-5-Scientific-Calculator"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Classic game with interactive board.",
      tags: ["CSS", "Game Dev", "JavaScript"],
      imageUrl: "https://i.ibb.co/RTdfF6KB/Captura-de-pantalla-2025-03-09-001336.png",
      liveUrl: "https://project-6-tic-toc-toe.netlify.app/",
      codeUrl: "https://github.com/GEROTO026/Project-6-Tic-Tac-Toe"
    },
    {
      title: "AI Tools Directory",
      description: "AI tools directory with different categories to filter.",
      tags: ["HTML", "AI", "CSS"],
      imageUrl: "https://i.ibb.co/5m8t0tJ/Captura-de-pantalla-2025-05-09-160422.png",
      liveUrl: "https://the-best-ais-for-everything-project7.netlify.app/",
      codeUrl: "https://github.com/GEROTO026/Project-7-The-Best-AIs-for-Everything"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;