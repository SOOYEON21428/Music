import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';

function App() {
    const [activeTab, setActiveTab] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');

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

                <Routes>
                    <Route path="/join" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
