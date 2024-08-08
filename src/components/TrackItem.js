// src/components/TrackItem.js
import React from 'react';

function TrackItem({ track }) {
  return (
    <li>
      <img src={track.album.images[0].url} alt={track.name} width="50" />
      {track.name} by {track.artists.map(artist => artist.name).join(', ')}
    </li>
  );
}

export default TrackItem;
