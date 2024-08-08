import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { searchTracks, getTrendingTracks } from './api/spotify';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Login from './components/login';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState('');
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [activeTab, setActiveTab] = useState('none');

  useEffect(() => {
    const fetchTrending = async () => {
      setLoadingTrending(true);
      try {
        const results = await getTrendingTracks();
        setTrending(results);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoadingTrending(false);
      }
    };

    fetchTrending();
  }, []);

  const handleSearch = async () => {
    if (query.trim()) {
      setLoadingSearch(true);
      try {
        const results = await searchTracks(query);
        setTracks(results);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoadingSearch(false);
      }
    }
  };

  return (
    <div className="App">
      <h1>Music Recommendation App</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      
      <div className="tabs">
        <button
          className={activeTab === 'trending' ? 'active' : ''}
          onClick={() => setActiveTab('trending')}
        >
          Trend Chart
        </button>
        <button
          className={activeTab === 'search' ? 'active' : ''}
          onClick={() => setActiveTab('search')}
        >
          Join
        </button>
      </div>
      
      {error && <p className="error-message">Error: {error}</p>}
      
      {activeTab === 'trending' && (
        <div className="content">
          {loadingTrending ? <p>Loading...</p> : <TrackList tracks={trending} />}
        </div>
      )}
      {activeTab === 'search' && (
        <div className="content">
          {loadingSearch ? <p>Loading...</p> : <TrackList tracks={tracks} />}
        </div>
      )}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
