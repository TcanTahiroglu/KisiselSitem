import React from 'react';
import { useLanguage } from './languageContext';
import { useTheme } from './ThemeContext';
import data from '../data.json';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme(); 

  return (
<header className="p-8 bg-gradient-to-r from-purple-400 to-lime-400 text-white" style={{ backgroundImage: 'linear-gradient(to right, #322ebd 70%, #c8e200 30%)' }}>
  <div className="flex justify-between items-center mb-4">
  <div >{data.profile.name}</div>
    <span 
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}              //dil seçeneği
      className="cursor-pointer text-lg text-gray-900 dark:text-white pl-175 text-s"
    >
      {language === 'tr' ? 'İngilizce' : 'Türkçe'}
    </span>

    <div className="flex items-center pr-55">
    <span className="text-sm text-gray-900 font-bold dark:text-[#322ebd] mr-2">
  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
</span>

      <label className="inline-flex items-center cursor-pointer  ">
  <div
    className={`relative inline-block w-8 h-4 transition-all duration-300 ease-in-out ${
      theme === 'dark' ? 'bg-blue-600' : 'bg-gray-400'
    } rounded-full`}
    onClick={toggleTheme}                                                                         //tema seçeneği
  >
    <span
      className={`absolute left-0.5 top-0.5 w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
        theme === 'dark' ? 'translate-x-4 bg-white' : 'translate-x-0 bg-white'
      }`}
    ></span>
  </div>
</label>

    </div>
  </div>

  <div className="banner mb-4">
    <h1 className="text-3xl font-semibold text-gray-900 dark:text-white max-w-150 break-words pl-22 mt-10">
      {language === 'tr' ? data.profile.me.tr : data.profile.me.en}
    </h1>
    <img 
  src="/images/ornek.png"
  alt="Örnek Resim" 
  className="absolute top-20 left-[calc(50%+260px)] transform -translate-x-1/2 w-50 h-50 rounded"
/>

<p className="text-3 font-semibold text-gray-900 dark:text-white max-w-[600px] break-words block pl-10 mt-5">
{language === 'tr' ? data.profile.about.tr : data.profile.about.en}</p>

<div className="flex space-x-4 pl-50 mt-10">
  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300">
    <i className="fab fa-linkedin mr-2"></i> LinkedIn
  </button>
  <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-all duration-300">
    <i className="fab fa-github mr-2"></i> GitHub
  </button>
</div>
  </div>
</header>
  );
};

export default Header;
