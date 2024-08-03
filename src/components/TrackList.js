import React from 'react';
import './TrackList.css';

const TrackList = ({ tracks }) => {
  // 배열을 가로열로 구분하여 홀수 및 짝수 행으로 나누기
  const rows = tracks.reduce((acc, track, index) => {
    const rowIndex = Math.floor(index / 3); // 각 행의 항목 수를 조정
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
          {row.map(track => (
            <div key={track.id} className="track-card">
              <img src={track.images[0]?.url} alt={track.name} />
              <div>
                <h2>{track.name}</h2>
                <p>{track.artists.map(artist => artist.name).join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TrackList;
