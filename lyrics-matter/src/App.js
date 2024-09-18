// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LyricsPage from './pages/LyricsPage';
import LyricsDetail from './components/LyricsDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import Discussion from './components/Discussion';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="header">
        <img src="/logo.png" alt="Logo" />
        <h1>Lyrics Matter</h1>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lyrics" element={<LyricsPage />} />
        <Route path="/lyrics/:id" element={<LyricsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discussion" element={<Discussion />} />
      </Routes>
    </Router>
  );
};

export default App;
