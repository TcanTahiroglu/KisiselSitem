import React, { useEffect, useState } from 'react';
import data from '../data.json';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data.user[0].skills);
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <ul className="flex flex-wrap">
        {skills.map((skill, index) => (
          <li key={index} className="w-1/2 p-2 flex items-center">
            <i className={`${skill.icon} mr-2`}></i>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
