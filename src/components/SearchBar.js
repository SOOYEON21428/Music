// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // 스타일을 위한 CSS 파일

function SearchBar({ query, setQuery, handleSearch }) {
  // 상태를 추가하여 폼 제출을 처리
  const [localQuery, setLocalQuery] = useState(query);

  const handleInputChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={localQuery}
        onChange={handleInputChange}
        placeholder="Enter artist or song"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
