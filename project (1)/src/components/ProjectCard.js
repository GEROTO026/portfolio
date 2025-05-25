import React, { useState } from 'react';

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, codeUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Live Demo
          </a>
          <a 
            href={codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;