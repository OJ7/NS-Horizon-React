import React from 'react';
import ProfileButton from './components/ProfileButton';
import './Header.scss';

function Header() {
  return (
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
  );
}

export default Header;
