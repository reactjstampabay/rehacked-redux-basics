import React from 'react';

export default () => {
  return (
    <main className="mdl-layout__content mdl-color--grey-100">
      <div className="mdl-grid demo-content">
        <div className="demo-cards mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
          <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
            <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
              <h2 className="mdl-card__title-text">Dashboard</h2>
            </div>
            <div className="mdl-card__supporting-text mdl-color-text--grey-600">
              This is the Dashboard route
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a href="#/dashboard" className="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}