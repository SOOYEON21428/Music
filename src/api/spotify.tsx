// src/api/spotify.tsx

const CLIENT_ID = '92b2c30da2b042019289806adcbb5bfc';
const CLIENT_SECRET = '08d34d62b77542ce84bc724c85dd81de';

// Track 인터페이스를 export합니다.
export interface Track {
    id: string;
    name: string;
    album: {
        id: string;
        name: string;
        images: { url: string }[];
    };
    artists: { id: string; name: string }[];
}

// Album 인터페이스를 export합니다.
export interface Album {
    id: string;
    name: string;
    images: { url: string }[];
    artists: { id: string; name: string }[];
}

interface SpotifyError {
    error: { status: number; message: string };
}

// 액세스 토큰을 가져오는 함수
const getAccessToken = async (): Promise<string> => {
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
            const error: SpotifyError = await response.json();
            throw new Error(`Error getting access token: ${error.error.message}`);
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error in getAccessToken:', error);
        throw error;
    }
};

// 트랙을 검색하는 함수
export const searchTracks = async (query: string): Promise<Track[]> => {
    try {
        const token = await getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (!response.ok) {
            const error: SpotifyError = await response.json();
            throw new Error(`Error searching tracks: ${error.error.message}`);
        }

        const data = await response.json();
        return data.tracks.items as Track[];
    } catch (error) {
        console.error('Error in searchTracks:', error);
        throw error;
    }
};

// 트렌딩 트랙을 가져오는 함수
export const getTrendingTracks = async (): Promise<Album[]> => {
    try {
        const token = await getAccessToken();
        const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (!response.ok) {
            const error: SpotifyError = await response.json();
            throw new Error(`Failed to fetch trending tracks: ${error.error.message}`);
        }

        const data = await response.json();
        return data.albums.items as Album[];
    } catch (error) {
        console.error('Error in getTrendingTracks:', error);
        throw error;
    }
};
