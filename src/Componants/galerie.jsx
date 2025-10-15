import React, { useState } from "react";

function Galerie({imageUrl, title}){
    const [likes, setLikes] = useState(0);

return (
    <div style={{border: "1px solid #ccc", padding: "10px", width: "200px", margin: "10px" }}>
        <img src={imageUrl} alt={title} style={{ width: "100%" }} />
        <h3>{title}</h3>
        <button onClick={() => setLikes(likes + 1)}>
            ❤️ Like {likes}
        </button>
    </div>
  );
}

export default Galerie;