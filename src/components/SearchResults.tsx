// src/components/SearchResults.tsx
import React, { useEffect, useRef, useCallback } from 'react';
import { Track } from '../api/spotify';
import './SearchResults.css';

interface SearchResultsProps {
    results: Track[] | null;
    fetchMoreResults: () => void; // 더 많은 결과를 불러오는 함수
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, fetchMoreResults }) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const lastTrackElementRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    fetchMoreResults();
                }
            });
            if (node) observer.current.observe(node);
        },
        [fetchMoreResults]
    );

    if (!results || results.length === 0) return <div>No results found</div>;

    return (
        <div className="search-results">
            {results.map((track, index) => {
                if (index === results.length - 1) {
                    return (
                        <div ref={lastTrackElementRef} key={track.id} className="result-item">
                            <img src={track.album.images[0]?.url} alt={track.name} />
                            <div>
                                <h3>{track.name}</h3>
                                <p className="artist">{track.artists.map((artist) => artist.name).join(', ')}</p>
                                <p className="album">{track.album.name}</p>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div key={track.id} className="result-item">
                            <img src={track.album.images[0]?.url} alt={track.name} />
                            <div>
                                <h3>{track.name}</h3>
                                <p className="artist">{track.artists.map((artist) => artist.name).join(', ')}</p>
                                <p className="album">{track.album.name}</p>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default SearchResults;
