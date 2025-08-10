import React from 'react'
import './CSS/MainPage.css'

function MainPage() {
  return (
    <div className="hero">
      <div className="hero-top">
        <p>HEY, BEAUTIFUL</p>
        <h1>Would you like to go to Mr. Chili Cheese?</h1>
      </div>
      <div className="hero-bottom">
        <button>YES</button>
        <button>NO</button>
      </div>
    </div>
  );
}

export default MainPage