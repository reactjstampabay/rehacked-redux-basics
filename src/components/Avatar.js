import React, {Component} from 'react';

export default class Avatar extends Component {
  render() {
    var {user, handleLogout} = this.props;
    return (
      <header className="demo-drawer-header">
        <i className="demo-avatar-icon material-icons">face</i>
        <div className="demo-avatar-dropdown">
          <span>{user.profile.email}</span>
          <div className="mdl-layout-spacer"></div>
          <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
            <i className="material-icons" role="presentation">arrow_drop_down</i>
            <span className="visuallyhidden">Accounts</span>
          </button>
          <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
            <li onClick={handleLogout} className="mdl-menu__item">Logout</li>
          </ul>
        </div>
      </header>
    );
  }
}