import React from 'react';
import './ProfileButtonItem.scss';
import { Profile } from '../Header';

type MyProps = { profile: Profile };
type MyState = { isHovering: boolean };
class ProfileButtonItem extends React.Component<MyProps, MyState> {
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
      <div className="Profile-button-item" >
        <span className="Button-container"
          onMouseEnter={() => this.setHoverState(true)}
          onMouseLeave={() => this.setHoverState(false)}>
            <img src={this.props.profile.imgUrl} className="Profile-img" alt="profile" />
        </span>
        <p className={"Button-title" + (this.state.isHovering ? '' : ' hidden')}>{this.props.profile.name}'s Page</p>
      </div>
    );
  }
}

export default ProfileButtonItem;