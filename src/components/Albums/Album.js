import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({ album }) => {
  return (
    <li key={Math.floor(Math.random * 100000)}>
        <p><strong>Id:</strong> {album.id}</p>
        <h2><strong>Title:</strong> {album.title} </h2>
        <Link to={`/albums/${album.id}`}>Show More</Link>
    </li>  
  );
};

export default Album;
