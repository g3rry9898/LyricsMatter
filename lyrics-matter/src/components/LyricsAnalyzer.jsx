// src/components/LyricsAnalyzer.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LyricsAnalyzer = () => {
  const [lyrics, setLyrics] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const analyzeLyrics = async () => {
    try {
      const response = await axios.post('/api/analyze', { lyrics });
      setAnalysis(response.data);
    } catch (error) {
      console.error('Error analyzing lyrics:', error);
    }
  };

  return (
    <div>
      <textarea
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
        placeholder="Enter lyrics here..."
      />
      <button onClick={analyzeLyrics}>Analyze</button>
      {analysis && <div>{JSON.stringify(analysis, null, 2)}</div>}
    </div>
  );
};

export default LyricsAnalyzer;
