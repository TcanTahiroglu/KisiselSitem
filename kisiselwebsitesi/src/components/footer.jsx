import React from 'react';
import { useLanguage } from './languageContext';
import data from '../data.json';

const Footer = () => {
  const { language } = useLanguage();
  const footerData = data.footer;

  return (
    <footer>
      <h1 className="text-2xl font-semibold mb-4" style={{ color: "#322ebd" }}>
        {language === 'tr' ? 'Bana mesaj yolla!..' : 'Send me a message!..'}
      </h1>
      <h3>{language === 'tr' ? footerData.contact.message.tr : footerData.contact.message.en}</h3>
      <div>
        <ul className="flex justify-center space-x-4">
          <li>
            <i className={footerData.socialMedia.twitter}></i> Twitter
          </li>
          <li>
            <i className={footerData.socialMedia.instagram}></i> Instagram
          </li>
          <li>
            <i className={footerData.socialMedia.email}></i> E-mail
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
