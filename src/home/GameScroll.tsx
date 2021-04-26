import React from 'react';
import GameItem from './components/GameItem';
import './GameScroll.scss';
import games from '../data/games.json'

export type Game = { title: string, coverImgUrl: string }
type MyProps = {};
type MyState = { games: Game[] };
class GameScroll extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      games: games
    }
  }

  render() {
    return (
      <div className="Game-scroll" >
        <div className="Scroll-box">
          <div className="Pre-game-scroll"></div>

          {this.state.games.map(game =>
            <GameItem game={game} />
          )}

          <div className="Post-game-scroll"></div>
        </div>
      </div>
    );
  }
}

export default GameScroll;
