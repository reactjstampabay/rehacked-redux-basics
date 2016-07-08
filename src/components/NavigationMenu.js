import React, {Component} from 'react';

export default class NavigationMenu extends Component {
  render() {
    return (
      <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        <a className="mdl-navigation__link" href="#/dashboard"><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
        <a className="mdl-navigation__link" href="#/dashboard"><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
      </nav>
    );
  }
}
