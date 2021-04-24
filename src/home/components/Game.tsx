import React from 'react';
import './Game.scss';

function Game() {
  return (
    <div className="Game">
      {/* <p className="Game-title">Ori and the...</p> */}
      <div className="Game-logo">
        <img src={GAME_IMG_URL} className="Logo" alt="logo" />
      </div>
    </div>
  );
}

export default Game;

const GAME_IMG_URL = 'https://cdn.dekudeals.com/images/53e03206d705bb518ef0304c7920c71ed74cb5d5/w500.jpg';