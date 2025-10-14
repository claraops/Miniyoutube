
import { useState, useEffect } from 'react'
import React from 'react'


function App() {
  const apiKey = "PaRMjY6DWN35MiaDcA8Kek4WSOO4C4u9p2rktugYWcRQqjBfCGek4xsc";
  const videoUrl = "https://api.pexels.com/videos/popular?per_page=3&page=1";

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('nature');


  const fetchVideos = async (searchQuery = 'nature' ) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(videoUrl, {
        headers: {
          Authorization: apiKey
        }
      });
      console.log(response);
      

      if (!response.ok) {
        throw new Error('Erreur API Pexels');
      }

      console.log(response);
      
      const data = await response.json();
      
      setVideos(data.videos);
    } catch (err) {
      setError('Erreur lors du chargement des vidéos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchVideos(query);
    }
  };

  useEffect(() => { 
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Vidéo depuis Pexels</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Rechercher des vidéos..." 
        />
        <button type="submit">Recherche</button>
      </form>
      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <video width="320" height="240" controls>
              <source src={video.video_files[0].link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p><strong>description :</strong> {video.user.name}</p>
          </div>
        ))}
      </div>
        
    </div>  

      
     
    );
}

export default App;

















