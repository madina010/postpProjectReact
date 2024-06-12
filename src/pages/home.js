// Home.js
import React from 'react';
import PostList from '../components/postList/postList';
import './home.css';

const Home = ({ theme, searchTerm }) => {
  return (
    <main>
      <section>
        <div className="content">
          <PostList theme={theme} searchTerm={searchTerm} />
        </div>
      </section>
    </main>
  );
};

export default Home;
