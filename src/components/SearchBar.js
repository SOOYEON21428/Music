// src/components/SearchBar.js
import React from 'react';

function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter artist or song"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
