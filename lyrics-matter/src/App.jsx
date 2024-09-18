// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LyricsPage from './pages/LyricsPage';
import LyricsDetail from './components/LyricsDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lyrics" exact component={LyricsPage} />
        <Route path="/lyrics/:id" component={LyricsDetail} />
      </Switch>
    </Router>
  );
};

export default App;
