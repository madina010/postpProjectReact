// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/home';
import NewPost from './pages/newPost';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const onThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        <Header onThemeToggle={onThemeToggle} theme={theme} />
        <div className="content-container">
          <Sidebar theme={theme} />
          <main className={`main-container ${theme}`}>
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/new-post" element={<NewPost theme={theme}/>} />
            </Routes>
          </main>
        </div>
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
