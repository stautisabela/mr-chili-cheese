import React from 'react'
import './CSS/MainPage.css'

function MainPage({ onYesClick }) {

  return (
    <div className="hero">
      <div className="hero-top">
        <p>HEY, HANDSOME</p>
        <h1>Do you want to go to Mr. Chili Cheese?</h1>
      </div>
      <div className="hero-bottom">
        <button className='button-yes' onClick={onYesClick}>YES</button>
        <button className='button-no'>NO</button>
      </div>
    </div>
  );
}

export default MainPage