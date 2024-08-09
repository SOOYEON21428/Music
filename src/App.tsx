import React, { useState } from 'react';

import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('none');

    return (
        <div className="App">
            <h1>Musitify</h1>
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
        </div>
    );
}

export default App;
