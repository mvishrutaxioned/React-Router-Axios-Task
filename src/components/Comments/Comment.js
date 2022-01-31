import React from 'react';
import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
  return (
    <li key={Math.floor(Math.random * 100000)}>
        <p><strong>Id:</strong> {comment.id}</p>
        <p><strong>Name:</strong> {comment.name}</p>
        <p><strong>Email:</strong> {comment.email}</p>
        <Link to={`/comments/${comment.id}`}>Show More</Link>
    </li>  
  );
};

export default Comment;
