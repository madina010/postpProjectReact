import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './header.css';

const Header = ({ onThemeToggle, theme, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Вызов функции onSearch с новым значением поиска
  };

  return (
    <header className={`header ${theme}`}>
      <div className="header-left">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/working-with-a-laptop.png" alt="working-with-a-laptop"/>      
        <div className='text-logo'>
          <h1>Tproger</h1>
          <p>Все о программировании</p>
        </div>
        <div className='search-cont'>
          <input 
            id="search" 
            type="text" 
            placeholder="Поиск..." 
            value={searchTerm}
            onChange={handleSearch} 
          />
        </div>
      </div>
      <div className="header-right">
        <nav>
          <Link id='addP' to="/new-post">Написать пост</Link>
          <button className="theme-toggle" onClick={onThemeToggle}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
