import React, { useState, useEffect } from "react";
import VideoCard from "./Components/VideoCard";
import FilterBar from "./Components/FilterBar";

import "./App.css";

function App() {
  const apiKey = "PaRMjY6DWN35MiaDcA8Kek4WSOO4C4u9p2rktugYWcRQqjBfCGek4xsc";

  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("nature");
  const [category, setCategory] = useState("nature");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isTikTokMode, setIsTikTokMode] = useState(false);

 
  const fetchVideos = async (searchQuery = "nature") => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.pexels.com/videos/search?query=${searchQuery}&per_page=15`,
        { headers: { Authorization: apiKey } }
      );
      if (!response.ok) throw new Error("Erreur API Pexels");

      const data = await response.json();

      const enriched = data.videos.map((v) => {
        const savedData = JSON.parse(localStorage.getItem(`video_${v.id}`)) || {};
        return {
          ...v,
          likes: savedData.likes || 0,
          views: savedData.views || 0,
          favorites: savedData.favorites || false,
          comments: savedData.comments || [],
        };
      });
      setVideos(enriched);
    } catch (err) {
      setError("Erreur lors du chargement des vidéos");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    videos.forEach((v) => {
      localStorage.setItem(
        `video_${v.id}`,
        JSON.stringify({
          likes: v.likes,
          views: v.views,
          favorites: v.favorites,
          comments: v.comments,
        })
      );
    });
  }, [videos]);

  useEffect(() => {
    fetchVideos(category);
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) fetchVideos(query);
  };

  const handleLike = (id) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, likes: v.likes + 1 } : v))
    );
  };

  const handleView = (id) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, views: v.views + 1 } : v))
    );
  };

  const handleFavorite = (id) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, favorites: !v.favorites } : v))
    );
  };

  const handleComment = (id, text) => {
    setVideos((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, comments: [...v.comments, text] } : v
      )
    );
  };

  return (
    <div className={`app ${isTikTokMode ? "tiktok-mode" : ""}`}>
      <header className="app-header">
        <h1> 🎬 VideoHub - Mini YouTube / TikTok</h1>
        <div className="header-buttons">
          <button onClick={() => setIsTikTokMode(!isTikTokMode)}>
            {isTikTokMode ? "Mode TikTok " : "Mode YouTube"}
          </button>
        </div>
      </header>

      <h2 className="categ">  CATEGORIE </h2>
      <FilterBar category={category} setCategory={setCategory} />

      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}

      <div className={isTikTokMode ? "video-list" : "video-grid"}>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onLike={handleLike}
            onView={handleView}
            onFavorite={handleFavorite}
            onComment={handleComment}
            isTikTokMode={isTikTokMode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
