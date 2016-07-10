import React from 'react';
import Avatar from './Avatar';
import NavigationMenu from './NavigationMenu';

export default ({handleLogout, user}) => {
  return (
    <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
      <Avatar user={user} handleLogout={handleLogout}/>
      <NavigationMenu />
    </div>
  );
}
