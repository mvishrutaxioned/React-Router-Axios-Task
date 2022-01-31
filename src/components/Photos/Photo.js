import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ photo }) => {
  return (
    <li key={Math.floor(Math.random * 100000)}>
        <figure>
          <img src={photo.url} alt="Photo" />
        </figure>
        <p><strong>Id:</strong> {photo.id}</p>
        <h2><strong>Title:</strong> {photo.title} </h2>
        <Link to={`/photos/${photo.id}`}>Show More</Link>
    </li>  
  );
};

export default Photo;
