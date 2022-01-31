import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1 className="logo">
          <Link to="/">Routers-Axios</Link>
        </h1>
        <nav>
          <span className="close">close</span>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
          </ul>
          <span className="menu">menu</span>
        </nav>
      </div>
    </header>
  );
};

export default Header
