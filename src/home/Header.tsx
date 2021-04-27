import React from 'react';
import { MdWifi } from 'react-icons/md';
import { IoBatteryFullSharp } from 'react-icons/io5';
import ProfileButton from './components/ProfileButton';
import './Header.scss';
import { useDate } from '../utils/useDate';

function Header() {
  return (
    <div className="Header">
      <div className="Profile-buttons">
        <ProfileButton />
        <ProfileButton />
      </div>

      <div className="System-status">
        <p className="Status-icon">{useDate().time}</p>
        <p className="Status-icon icon"><MdWifi /></p>
        <p className="Status-icon icon">99% <IoBatteryFullSharp /></p>
      </div>
    </div>
  );
}

export default Header;
