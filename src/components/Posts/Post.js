import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <li key={Math.floor(Math.random * 100000)}>
        <p><strong>Id:</strong> {post.id}</p>
        <h2><strong>Title:</strong> {post.title} </h2>
        <Link to={`/posts/${post.id}`}>Show More</Link>
    </li>  
  );
};

export default Post;
