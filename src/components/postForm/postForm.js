import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../store/postSlice';
import '../../pages/newPost.css'

const PostForm = ({ theme }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, body };
    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <div className={`post-form-container ${currentTheme}`}>
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
