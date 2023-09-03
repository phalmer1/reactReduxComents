import React  from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const PostsList = () => {
  const posts = useSelector(state => state.posts.posts)
  return (
    <div style={{width: '100%'}}>
     {posts.map((post, index)=>(
      <div key={index}>
        <Post index={index} key={index} post={post}/>
      </div>
     ))}
    </div>
  );
};

export default PostsList;