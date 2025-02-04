import React from 'react';
import { useLanguage } from './languageContext';
import data from '../data.json';

const Skills = () => {
  const { language } = useLanguage();
  const skills = data.skills;

  return (
    <section className='pb-10'>
      <span className="text-[#322ebd] text-3xl font-bold absolute right-[calc(50%+400px)] top-120">
        {language === 'tr' ? 'Beceriler' : 'Skills'}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-80 mt-20">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={skill.icon} 
              alt={skill.name[language]}
              className="w-12 h-12" 
            />
            <span className="text-xl">{skill.name[language]}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
