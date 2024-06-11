import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './header.css';

const Header = ({ onThemeToggle, theme }) => (
  <header className={`header ${theme}`}>
    <div className="header-left">
      <img width="48" height="48" src="https://img.icons8.com/fluency/48/working-with-a-laptop.png" alt="working-with-a-laptop"/>      
      <div className='text-logo'>
        <h1>Tproger</h1>
        <p>Все о программировании</p>
      </div>
      <div className='search-cont'>
        <input id="search" type="text" placeholder="Поиск..." />
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

export default Header;
