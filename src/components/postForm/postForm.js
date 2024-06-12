import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/postSlice';
import { useNavigate } from 'react-router-dom'; 

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, body };
    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
    navigate('/'); 
  };

  return (
    <div>
      <div className="post-form-container">
        <h2>Написать пост</h2>
        <form className="post-form" onSubmit={handleSubmit}>
          <div>
            <label>Заголовок:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Содержимое:</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
          <button type="submit">Добавить пост</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
