// src/api/spotify.js

const CLIENT_ID = '92b2c30da2b042019289806adcbb5bfc';
const CLIENT_SECRET = '08d34d62b77542ce84bc724c85dd81de';

// 액세스 토큰을 가져오는 함수
const getAccessToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials'
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error getting access token: ${error}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error in getAccessToken:', error);
    throw error;
  }
};

// 트랙을 검색하는 함수
export const searchTracks = async (query) => {
  try {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error searching tracks: ${error}`);
    }

    const data = await response.json();
    return data.tracks.items;
  } catch (error) {
    console.error('Error in searchTracks:', error);
    throw error;
  }
  
};
export const getTrendingTracks = async () => {
    const token = await getAccessToken();
    const result = await fetch('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
  
    if (!result.ok) {
      throw new Error('Failed to fetch trending tracks');
    }
  
    const data = await result.json();
    return data.albums.items; // Albums with new releases
  };
