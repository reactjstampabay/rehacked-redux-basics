'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import StartScreen from './components/StartScreen';
import Dashboard from './components/Dashboard';
import './dependencies';

const verifyAuth = (nextState, replace) => {
  var profile = JSON.parse(localStorage['USER_PROFILE'] || '{}');
  if (!profile || profile.status !== 'authenticated') {
    replace({
      pathname: '/',
      state: {nextPathname: nextState.location.pathname}
    });
  }
};

if (document.getElementById('app')) {
  render(
    <Router history={hashHistory}>
      <Route name="root" path="/" component={StartScreen}/>
      <Route name="dashboard" path="dashboard" component={Dashboard} onEnter={verifyAuth}/>
    </Router>,
    document.getElementById('app')
  );
}
