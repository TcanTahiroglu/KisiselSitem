import React from 'react';
import { useLanguage } from './languageContext';
import data from '../data.json';

const Projects = () => {
  const { language } = useLanguage();
  const projects = data.projects;

  return (
    <section className="px-4 md:px-8" style={{ backgroundColor: "#c8e200" }}>
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#322ebd" }}>{language === 'tr' ? 'Projeler' : 'Projects'}</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center md:items-start border p-4 rounded-lg shadow-lg gap-6"
          >
            <img 
              className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover" 
              src={project.image} 
              alt={project.name[language]} 
            />
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold" style={{ color: "#322ebd" }}>{project.name[language]}</h2>
              <p className="text-gray-700">{project.description[language]}</p>
              
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                {Object.values(project.diller).map((tech, i) => (
                  <button 
                    key={i} 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm " 
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
