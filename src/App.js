import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <h1>VipRecipes</h1>
      <p>Celebrating with this iframe tag</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xy96ui8kRYg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
