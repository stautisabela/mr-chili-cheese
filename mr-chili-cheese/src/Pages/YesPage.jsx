import React from 'react'
import './CSS/YesPage.css'
import celebrating from '../Assets/bunny-cute.gif'

function YesPage() {
  return (
    <div className="hero">
      <div className="hero-top">
        <p/>
        <h1>HOORAY!</h1>
      </div>
      <div className="hero-bottom">
        <img src={celebrating} alt="" />
      </div>
    </div>
  );
}

export default YesPage;