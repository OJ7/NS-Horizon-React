import React from 'react';
import './HomePage.scss';
import Header from './Header';
import GameScroll from './GameScroll';
import Footer from './Footer';
import ButtonsToolbar from './ButtonsToolbar';

function HomePage() {
  return (
    <div className="HomePage">
      <Header />

      <GameScroll />

      <ButtonsToolbar />

      <Footer />
    </div>
  );
}

export default HomePage;
