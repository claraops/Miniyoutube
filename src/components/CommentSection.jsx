import React, { useState } from "react";

function CommentSection({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    onAddComment(newComment);
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <h4>Commentaires ({comments.length})</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un commentaire..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
      <ul>
        {comments.map((c, i) => (
          <li key={i}>💬 {c}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
