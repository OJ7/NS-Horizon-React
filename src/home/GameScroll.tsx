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

          {this.state.games.slice(0, 12).map((game, index) =>
            <GameItem game={game} key={index} />
          )}

          {/* All Softare Button */}
          {this.state.games.length > 12 &&
            <GameItem game={{ title: 'All Software' } as Game} />
          }

          <div className="Post-game-scroll"></div>
        </div>
      </div>
    );
  }
}

export default GameScroll;
