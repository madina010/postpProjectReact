import React, { useState } from 'react';
import PostList from '../components/postList/postList';
import PostForm from '../components/postForm/postForm';
import "./home.css";

const Home = ({ theme }) => {
  const [posts, setPosts] = useState([]);

  const updatePosts = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  return (
    <main>
      <section>
        <div className="content">
          <PostList theme={theme} posts={posts} />
          <PostForm theme={theme} updatePosts={updatePosts} />
        </div>
      </section>
    </main>
  );
};

export default Home;
