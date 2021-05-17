import React from 'react';
import { MdWifi } from 'react-icons/md';
import { IoBatteryFullSharp } from 'react-icons/io5';
import ProfileButtonItem from './components/ProfileButtonItem';
import './Header.scss';
// import { useDate } from '../utils/useDate';

export type Profile = { name: string, imgUrl: string }
type MyProps = {};
type MyState = { profiles: Profile[], time: string, wifiConnected: boolean, batteryPercent: number };
class Header extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      profiles: [
        { name: 'OJ', imgUrl: 'https://avatars.githubusercontent.com/u/5333243?v=4' },
        { name: 'React', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png' },
      ],
      time: '',
      wifiConnected: true,
      batteryPercent: 99,
    };

  }

  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' }),
    })
  }

  componentDidMount() {
    this.updateTime();
  }

  componentDidUpdate() {
    setTimeout(() => { this.updateTime(); }, 20 * 1000);
  }

  render() {
    return (
      <div className="Header">
        <div className="Profile-buttons">
          {this.state.profiles.map((profile, index) =>
            <ProfileButtonItem profile={profile} key={index}/>
          )}
        </div>

        <div className="System-status">
          {/* hooks not compatible with components, using a temporary state-based solution for now */}
           {/* <p className="Status-icon">{useDate().time}</p> */}
          <p className="Status-icon">{this.state.time}</p>
          {this.state.wifiConnected && <p className="Status-icon icon"><MdWifi /></p>}
          <p className="Status-icon icon">{this.state.batteryPercent} % <IoBatteryFullSharp /></p>
        </div>
      </div>
    );
  }
}

export default Header;
