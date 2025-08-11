import React from 'react'
import './CSS/MainPage.css'

function MainPage({ onYesClick }) {
  return (
    <div className="hero">
      <div className="hero-top">
        <p>HEY, BEAUTIFUL</p>
        <h1>Do you want to go to Mr. Chili Cheese?</h1>
      </div>
      <div className="hero-bottom">
        <button onClick={onYesClick}>YES</button>
        <button>NO</button>
      </div>
    </div>
  );
}

export default MainPage