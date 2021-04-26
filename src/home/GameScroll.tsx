import React from 'react';
import Game from './components/Game';
import './GameScroll.scss';

function GameScroll() {
  return (
    <div className="Game-scroll">
      <div className="Scroll-box">
        <div className="Pre-game-scroll"></div>
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <div className="Pre-game-scroll"></div>
      </div>
    </div>
  );
}

export default GameScroll;
