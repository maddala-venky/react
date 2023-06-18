import React from "react";
import { ReactDOM } from "react";

function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);
  

  