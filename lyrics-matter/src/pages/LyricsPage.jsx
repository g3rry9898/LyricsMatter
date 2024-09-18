// src/pages/LyricsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LyricsList from '../components/LyricsList';

const LyricsPage = () => {
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await axios.get('/api/lyrics');
        setLyrics(response.data);
      } catch (error) {
        console.error('Error fetching lyrics:', error);
      }
    };

    fetchLyrics();
  }, []);

  return (
    <div>
      <h1>Lyrics</h1>
      <LyricsList lyrics={lyrics} />
    </div>
  );
};

export default LyricsPage;
