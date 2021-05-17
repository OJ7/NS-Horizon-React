import React from 'react';
import './MenuButtonItem.scss';
import { MenuButton } from '../ButtonsToolbar';

type MyProps = { button: MenuButton };
type MyState = { isHovering: boolean };
class MenuButtonItem extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
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
      <div className="Menu-button-item" >
        <span className="Button-container"
          onMouseEnter={() => this.setHoverState(true)}
          onMouseLeave={() => this.setHoverState(false)}>
        </span>
        <p className={"Button-title" + (this.state.isHovering ? '' : ' hidden') + " responsive-text"}>{this.props.button.title}</p>
      </div>
    );
  }
}

export default MenuButtonItem;