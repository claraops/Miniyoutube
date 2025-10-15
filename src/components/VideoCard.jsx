import React, { useState } from "react";
import CommentSection from "./CommentSection";

function VideoCard({ video, onLike, onView, onFavorite, onComment, isTikTokMode }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className={`video-card ${isTikTokMode ? "vertical" : ""}`}>
      <video
        width="100%"
        height={isTikTokMode ? "600px" : "240px"}
        controls
        onPlay={() => onView(video.id)}
      >
        <source src={video.video_files[0].link} type="video/mp4" />
      </video>

      <div className="video-info">
        <h3><strong>{video.user.name}</strong></h3>
        <p>{video.duration}s</p>
        <p><em>{video.alt || "Aucune description disponible"}</em></p>
      </div>

      <div className="video-actions">
        <button onClick={() => onLike(video.id)}>❤️ {video.likes}</button>
        <button onClick={() => onFavorite(video.id)}>
          {video.favorites ? "⭐ Retirer" : "⭐ Favori"}
        </button>
        <button onClick={() => setShowComments(!showComments)}>💬</button>
        <span>👁️ {video.views}</span>
      </div>

      {showComments && (
        <CommentSection
          comments={video.comments}
          onAddComment={(text) => onComment(video.id, text)}
        />
      )}
    </div>
  );
}

export default VideoCard;
