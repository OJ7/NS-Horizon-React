import React from 'react';
import './GameItem.scss';
import { Game } from '../GameScroll';

type MyProps = { game: Game };
type MyState = { isHovering: boolean };
class GameItem extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  setHoverState(hovering: boolean) {
    this.setState({
      isHovering: hovering
    });
  }

  render() {
    return (
      <div className="GameItem">
        <p className={"Game-title" + (this.state.isHovering ? '' : ' hovering')}>{this.props.game.title}</p>
        <div className="Game-logo"
          onMouseEnter={() => this.setHoverState(true)}
          onMouseLeave={() => this.setHoverState(false)}>
          <img src={this.props.game.coverImgUrl} className="Logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default GameItem;