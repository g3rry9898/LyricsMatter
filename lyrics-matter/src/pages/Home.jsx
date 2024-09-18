// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="welcome">
      <h2>Welcome to Lyrics Matter</h2>
      <p>Analyze and understand the deeper meaning of your favorite songs.</p>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  );
};

export default Home;
