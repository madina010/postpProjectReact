import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../store/postSlice';
import axios from 'axios';
import "./postList.css";

const PostList = ({ theme, posts }) => {
  const dispatch = useDispatch();
  const storedPosts = useSelector((state) => state.posts.list);

  useEffect(() => {
    if (posts.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          dispatch(setPosts(response.data));
        });
    }
  }, [dispatch, posts]);

  const postsToRender = posts.length > 0 ? posts : storedPosts;

  return (
    <div className={`post-list-container ${theme}`}>
      <div className="post-list">
        <ul>
          {postsToRender.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
