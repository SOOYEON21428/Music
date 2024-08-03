import React, { useState, useEffect } from 'react';
import { searchTracks, getTrendingTracks } from './api/spotify'; // `getTrendingTracks` 추가
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const results = await getTrendingTracks();
        setTrending(results);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchTrending();
  }, []);

  const handleSearch = async () => {
    if (query.trim()) {
      try {
        const results = await searchTracks(query);
        setTracks(results);
      } catch (e) {
        setError(e.message);
      }
    }
  };

  return (
    <div className="App">
      <h1>Music Recommendation App</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {error && <p>Error: {error}</p>}
      <div className="trending-section">
        <h2>Trending Albums</h2>
        <TrackList tracks={trending} />
      </div>
      <div className="search-results">
        <h2>Search Results</h2>
        <TrackList tracks={tracks} />
      </div>
    </div>
  );
}

export default App;
