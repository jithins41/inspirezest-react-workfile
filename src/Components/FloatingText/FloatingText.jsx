import React from "react";
import "./FloatingText.css";

function FloatingText({text}) {
  return (
    <div className="content">
      <h2>{text}</h2>
      <h2>{text}</h2>
    </div>
  );
}

export default FloatingText;
