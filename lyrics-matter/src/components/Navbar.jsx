// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lyrics">Lyrics</Link></li>
        <li><Link to="/discussion">Discussion</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
