import React, { useState } from "react";
import CommentSection from "./CommentSection";
import { FaHeart, FaRegComment, FaSave, FaTrash } from "react-icons/fa";
import "./VideoCard.css";


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
        <span>  <p>{video.duration}s</p></span>
       
        <p><em>{video.alt }</em></p>
      </div>

      <div className="video-actions">
        <button onClick={() => onLike(video.id)}>❤️ {video.likes}</button>
        <button onClick={() => onFavorite(video.id)}>
          {video.favorites ? "Retirer" : "⭐ Favori"}
        </button>
        <button onClick={() => setShowComments(!showComments)}>💬</button>
        <button>
          <span>vues {video.views}</span>
        </button>
        
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
