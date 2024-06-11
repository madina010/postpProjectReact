import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../actions/postActions';

const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.post);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
