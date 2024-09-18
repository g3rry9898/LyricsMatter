// src/components/LyricsList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LyricsList = ({ lyrics }) => {
  return (
    <ul>
      {lyrics.map((lyric) => (
        <li key={lyric.id}>
          <Link to={`/lyrics/${lyric.id}`}>{lyric.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LyricsList;
