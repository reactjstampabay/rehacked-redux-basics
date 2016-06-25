'use strict';

import React, {Component} from 'react';
import {hashHistory} from 'react-router';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this._logout = this._logout.bind(this);
  }
  componentDidMount() {
    componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  _logout() {
    delete localStorage['USER_PROFILE'];
    hashHistory.replace('/');
  }

  render() {
    return (
      <div>
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Dashboard</span>
              <div className="mdl-layout-spacer"></div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                  <input className="mdl-textfield__input" type="text" id="search"/>
                  <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                </div>
              </div>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
                <i className="material-icons">more_vert</i>
              </button>
              <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
                <li className="mdl-menu__item">About</li>
                <li className="mdl-menu__item">Contact</li>
                <li className="mdl-menu__item">Legal information</li>
              </ul>
            </div>
          </header>

          <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
            <header className="demo-drawer-header">
              <i className="demo-avatar-icon material-icons">face</i>
              <div className="demo-avatar-dropdown">
                <span>hello@example.com</span>
                <div className="mdl-layout-spacer"></div>
                <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                  <i className="material-icons" role="presentation">arrow_drop_down</i>
                  <span className="visuallyhidden">Accounts</span>
                </button>
                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
                  <li className="mdl-menu__item">hello@example.com</li>
                  <li onClick={this._logout} className="mdl-menu__item">Logout</li>
                </ul>
              </div>
            </header>
            <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
              <a className="mdl-navigation__link" href="#/dashboard"><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
              <a className="mdl-navigation__link" href="#/dashboard"><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
            </nav>
          </div>

          <main className="mdl-layout__content mdl-color--grey-100">
            <div className="mdl-grid demo-content">
              <div className="demo-cards mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                  <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
                    <h2 className="mdl-card__title-text">React SPA</h2>
                  </div>
                  <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                    React JS Tampa Bay Meetup is awesome!
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                    <a href="#/dashboard" className="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </main>

        </div>
      </div>
    );
  }
}
