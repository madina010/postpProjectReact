import React from 'react';
import { Link } from 'react-router-dom'; 
import './sidebar.css';

const Sidebar = ({ theme }) => (
  <aside className={`sidebar ${theme}`}>
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/feed">Лента</Link>
        </li>
        <li>
          <Link to="/news">Новости</Link>
        </li>
        <li>
          <Link to="/companies">Компании</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
