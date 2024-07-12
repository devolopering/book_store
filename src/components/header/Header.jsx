import React, { useState, useEffect } from 'react';
import Logo from "../../assets/Logo.svg";
import { FaSearch, FaSun, FaMoon, FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Switch from 'react-switch';
import { useLanguage } from '../../LanguageContext';
import './Header.css';

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className={`header-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <div className="header-left">
          <a href="#" className="logo"><img src={Logo} alt="Logo" /></a> 
          <p>{language === 'UZ' ? 'Mutolaa book.uzdan boshlanar' : 'Чтение начинается с book.uz'}</p>
          <a href="#">{language === 'UZ' ? 'Qanday xarid qilinadi?' : 'Как сделать покупку?'}</a>
        </div>
        <div className="header-right">
          <FaSearch />
          <select value={language} onChange={handleLanguageChange}>
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
          </select> 
          <Switch
            onChange={toggleMode}
            checked={isDarkMode}
            checkedIcon={<FaSun style={{ color: 'yellow', padding: '3px' }} />}
            uncheckedIcon={<FaMoon style={{ color: 'white', padding: '3px' }} />}
            className="mode-toggle"
          />
          <span className="contact-info">+998 71 230 00 50</span>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTelegramPlane /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
