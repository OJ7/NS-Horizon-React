import React from 'react';
import './AllSoftwareButton.scss';
import btnImage from '../../assets/all-software-button.png';

type MyState = { isHovering: boolean };
class AllSoftwareButton extends React.Component<{}, MyState> {
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
      <div className="AllSoftwareButton">
        <p className={"Game-title" + (this.state.isHovering ? '' : ' hidden')}>All Software</p>
        <div className="Game-logo"
          onMouseEnter={() => this.setHoverState(true)}
          onMouseLeave={() => this.setHoverState(false)}>
          <img src={btnImage} className="Logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default AllSoftwareButton;