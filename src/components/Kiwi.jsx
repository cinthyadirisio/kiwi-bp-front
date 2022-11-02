import React from 'react';
import '../style/Kiwi.css';
import {Link as LinkRouter} from 'react-router-dom';

export default function Kiwi() {
  return (
    <div>
      <div className="App-header">
        <div>
        <img src="http://drive.google.com/uc?export=view&id=1e97q_y-fHOu6r_91jjBfbHmLyPiKD5XR" className="App-logo" alt="logo" />
        </div>
        
        <h1 className='title-kiwi'>Kiwi</h1>
        <h2 className='slogan-kiwi'>BACKLOG PROJECT</h2>
        <p>From Developers for Developers</p>
        <button className='btn btn-primary btn-outline-dark btn-enter' >Enter</button>
      </div>

    </div>
  )
}
