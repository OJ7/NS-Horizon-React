import React from 'react';
import MenuButtonItem from './components/MenuButtonItem';
import './ButtonsToolbar.scss';

export type MenuButton = { title: string, color: string }
type MyProps = {};
type MyState = { buttons: MenuButton[] };
class ButtonsToolbar extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      buttons: [
        { title: 'Nintendo Switch Online', color: '', },
        { title: 'News', color: '', },
        { title: 'Nintendo eShop', color: '', },
        { title: 'Album', color: '', },
        { title: 'Controllers', color: '', },
        { title: 'System Settings', color: '', },
        { title: 'Sleep Mode', color: '', },
      ]
    };
  }

  render() {
    return (
      <div className="Buttons-toolbar">
        {this.state.buttons.map(button =>
          <MenuButtonItem button={button} />
        )}
      </div>
    );
  }
}

export default ButtonsToolbar;
