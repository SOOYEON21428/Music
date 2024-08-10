import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import { searchTracks, Track } from './api/spotify';
import SearchResults from './components/SearchResults';

function App() {
    const [activeTab, setActiveTab] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Track[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (searchTerm) {
            const fetchTracks = async () => {
                const newResults = await searchTracks(searchTerm);
                setSearchResults(newResults);
            };
            fetchTracks();
        }
    }, [searchTerm]);

    const fetchMoreResults = async () => {
        if (searchTerm) {
            const newResults = await searchTracks(searchTerm);
            setSearchResults(prevResults => [...prevResults, ...newResults]);
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <Router>
            <div className="App">
                <h1>Musitify</h1>
                <input
                    type="text"
                    placeholder="Search for music..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <div className="tabs">
                    <button
                        className={activeTab === 'trending' ? 'active' : ''}
                        onClick={() => setActiveTab('trending')}
                    >
                        Trend Chart
                    </button>
                    <Link to="/join">
                        <button
                            className={activeTab === 'join' ? 'active' : ''}
                            onClick={() => setActiveTab('join')}
                        >
                            Join
                        </button>
                    </Link>
                </div>

                {searchResults && (
                    <SearchResults results={searchResults} fetchMoreResults={fetchMoreResults} />
                )}

                <Routes>
                    <Route path="/join" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
