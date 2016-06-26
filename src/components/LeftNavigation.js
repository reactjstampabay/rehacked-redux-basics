'use strict';
import React, {Component} from 'react';
import Avatar from './Avatar';
import NavigationMenu from './NavigationMenu';

export default class LeftNavigation extends Component {
  render() {
    var {handleLogout, user} = this.props;
    return (
      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <Avatar user={user} handleLogout={handleLogout} />
        <NavigationMenu />
      </div>
    );
  }
}