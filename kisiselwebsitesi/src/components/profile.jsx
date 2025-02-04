import React from 'react';
import { useLanguage } from './languageContext';
import data from '../data.json';

const Profile = () => {
  const { language } = useLanguage();
  const profileData = data.profile;

  return (
    <section className="flex flex-col md:flex-row justify-start items-center p-4"style={{ backgroundColor: "#322ebd" }}>
      <div className="md:w-2/3  text-center">
      <h1 className="text-3xl font-bold mb-4" style={{ color: "#c8e200" }}>
  {language === 'tr' ? 'Profil' : 'Profile'}
</h1>
<h2 className="text-2xl font-semibold mb-4">
  {language === 'tr' ? 'Temel Bilgiler' : 'Basic Information'}
</h2>
<ul className="mb-4">
  <li><span className="text-[#c8e200]">{language === 'tr' ? 'Doğum Tarihi:' : 'Birth Date:'}</span> {profileData.birthDate}</li>
  <li><span className="text-[#c8e200]">{language === 'tr' ? 'Şehir:' : 'City:'}</span> {profileData.city}</li>
  <li><span className="text-[#c8e200]">{language === 'tr' ? 'Eğitim:' : 'Education:'}</span> {profileData.education}</li>
  <li><span className="text-[#c8e200]">{language === 'tr' ? 'Rol:' : 'Role:'}</span> {profileData.role}</li>
</ul>

</div>
<div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
  <img
    src={profileData.foto}
    alt="Profile"
    className="w-100 h-100 object-cover mr-40"
  />
</div>

<div>
<h2 className="text-3xl font-bold mb-4">
  {language === 'tr' ? 'Hakkımda' : 'About Me'}
</h2>
<p className="text-base text-justify max-w-150 break-words">
  {language === 'tr' ? profileData.dream.tr : profileData.dream.en}
</p>
      </div>
    </section>
  );
};

export default Profile;
