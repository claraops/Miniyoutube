
import React, { useState } from "react";


function App() {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [likes3, setLikes3] = useState(0);
  const [likes4, setLikes4] = useState(0);

  return (
    <>
        <h3>BIENVENUE SUR PHOTOTHEQUE</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
            <img src="/photos/1.png" alt="Image 1" style={{ width: "100%" }} />
            <h3>Image 1</h3>
            <button onClick={() => setLikes1(likes1 + 1)}>❤️ Like {likes1}</button>
          </div>

          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
            <img src="/photos/2.png" alt="Image 2" style={{ width: "100%" }} />
            <h3>Image 2</h3>
            <button onClick={() => setLikes2(likes2 + 1)}>❤️ Like {likes2}</button>
          </div>

          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
            <img src="/photos/3.png" alt="Image 3" style={{ width: "100%" }} />
            <h3>Image 3</h3>
            <button onClick={() => setLikes3(likes3 + 1)}>❤️ Like {likes3}</button>
          </div>

          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
            <img src="/photos/4.png" alt="Image 3" style={{ width: "100%" }} />
            <h3>Image 4</h3>
            <button onClick={() => setLikes4(likes4 + 1)}>❤️ Like {likes4}</button>
          </div>
          
        </div>
    </>
  );
}

export default App;
