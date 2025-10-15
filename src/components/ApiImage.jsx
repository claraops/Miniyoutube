import React from "react";

function VideoCard({ video, onLike, onDelete }) {
  return (
    <div className="video-card">
      <video width="100%" height="240" controls>
        <source src={video.video_files[0].link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-info">
        <h3>{video.user.name}</h3>
        <p>{video.duration}s</p>
      </div>
      <div className="video-actions">
        <button onClick={() => onLike(video.id)}>❤️ {video.likes}</button>
        <button onClick={() => onDelete(video.id)}>🗑️ Supprimer</button>
      </div>
    </div>
  );
}

export default VideoCard;