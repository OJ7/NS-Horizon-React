import React from 'react';
import './Home.scss';
import Header from './Header';
import GameScroll from './GameScroll';
import Footer from './Footer';
import ButtonsToolbar from './ButtonsToolbar';

function Home() {
  return (
    <div className="Home">
      <Header />

      <GameScroll />

      <ButtonsToolbar />

      <Footer />
    </div>
  );
}

export default Home;
