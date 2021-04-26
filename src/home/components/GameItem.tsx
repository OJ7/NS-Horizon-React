import React from 'react';
import './GameItem.scss';
import { Game } from '../GameScroll';

type MyProps = { game: Game };
type MyState = {};
class GameItem extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="GameItem">
        <p className="Game-title">{this.props.game.title}</p>
        <div className="Game-logo">
          <img src={this.props.game.coverImgUrl} className="Logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default GameItem;