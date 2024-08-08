// src/components/TrackList.js
import React from 'react';
import './TrackList.css';

const TrackList = ({ tracks }) => {
  if (!tracks || !Array.isArray(tracks)) {
    return <p>No tracks available.</p>;
  }

  const rows = tracks.reduce((acc, track, index) => {
    const rowIndex = Math.floor(index / 5); // 한 줄에 5개 트랙
    if (!acc[rowIndex]) acc[rowIndex] = [];
    acc[rowIndex].push(track);
    return acc;
  }, []);

  return (
    <div className="track-list">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`track-row ${rowIndex % 2 === 0 ? 'left-to-right' : 'right-to-left'}`}
        >
          {row.map((track, index) => (
            <div key={track.id} className="track-card">
              {/* 데이터의 유효성을 체크 */}
              <img src={track.images && track.images[0] ? track.images[0].url : 'default-image-url.jpg'} alt={track.name || 'No Name'} />
              <div>
                <h2>{track.name || 'No Name'}</h2>
                <p>{track.artists ? track.artists.map(artist => artist.name).join(', ') : 'Unknown Artist'}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TrackList;
