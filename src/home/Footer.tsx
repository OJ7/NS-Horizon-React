import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="Controller-container responsive-text">
        <p> Controller </p>
      </div>

      <div className="Actions-container responsive-text">
        <p> Options </p>
        <p> Start </p>
      </div>
    </div>
  );
}

export default Footer;
