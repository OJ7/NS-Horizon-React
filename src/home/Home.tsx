import React from 'react';
import Game from './components/Game';
import MenuButton from './components/MenuButton';
import ProfileButton from './components/ProfileButton';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <div className="Header">
        <div className="Profile-buttons">
          <ProfileButton />
          <ProfileButton />
        </div>

        <div className="System-status">
          <p>19:05</p>
          <p>Wi-Fi</p>
          <p>99%</p>
        </div>
      </div>

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

      <div className="Bottom-buttons">
        <MenuButton></MenuButton>
        <MenuButton></MenuButton>
        <MenuButton></MenuButton>
        <MenuButton></MenuButton>
        <MenuButton></MenuButton>
        <MenuButton></MenuButton>
        <MenuButton></MenuButton>
      </div>

      <div className="Footer">
        <div className="Controller-container">
          <p> Controller </p>
        </div>

        <div className="Actions-container">
          <p> Options </p>
          <p> Start </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
