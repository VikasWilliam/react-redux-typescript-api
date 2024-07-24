import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPosts } from './postsSlice';
import Spinner from './Spinner';

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  return (
    <div>
      <button style={{backgroundColor:"lightblue"}} onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
      {status === 'loading' && <Spinner/>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
