// src/components/LyricsDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LyricsDetail = () => {
  const { id } = useParams();
  const [lyric, setLyric] = useState(null);

  useEffect(() => {
    const fetchLyric = async () => {
      try {
        const response = await axios.get(`/api/lyrics/${id}`);
        setLyric(response.data);
      } catch (error) {
        console.error('Error fetching lyric:', error);
      }
    };

    fetchLyric();
  }, [id]);

  return (
    <div>
      {lyric ? (
        <div>
          <h1>{lyric.title}</h1>
          <pre>{lyric.content}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LyricsDetail;
