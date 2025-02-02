import React from 'react';
import data from '../data.json';

const Header = () => {
  return (
    <header className="flex p-0 h-80 ">

      <div className="bg-purple-700 p-0 text-white ">
      <button className="flex content-start">Türkçeye Geç</button>
      <span>{data.user[0].SiteSahibi}</span>
      <div>{data.user[0].baslikTr}
        <div>{data.user[0].aciklamaTr}</div>
      </div>
      <div><button><i className="fab fa-github"></i>Github</button><button><i className="fab fa-linkedin"></i>Linkedin</button></div>
      </div>
      <div className="bg-[#bfe3b4] p-0 text-white">
        <button>Karanlık Tema</button></div>
    </header>
  );
};

export default Header;
