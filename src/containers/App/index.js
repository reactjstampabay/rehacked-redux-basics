import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {receiveLogin} from '../../common/actions/user';
import StartScreen from '../StartScreen';
import Dashboard from '../Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.verifyAuth = this.verifyAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    // behavior on store change would happen here
    
    // Persist the latest copy of the user state to localStorage for later retrieval
    var user = this.props.store.getState().user;
    if (user.status === 'authorized') {
      localStorage['USER_PROFILE'] = JSON.stringify(user);
    } else {
      delete localStorage['USER_PROFILE'];
    }
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this.handleChange.bind(this));
  }

  componentWillMount() {
    if (localStorage['USER_PROFILE']) {
      var user = JSON.parse(localStorage['USER_PROFILE']);
      this.props.store.dispatch(receiveLogin({data: user.profile}));
      hashHistory.push('/dashboard');
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  verifyAuth(nextState, replace) {
    var store = this.props.store;
    var profile = store.getState().user.profile || JSON.parse(localStorage['USER_PROFILE'] || '{}');
    if (!profile || profile.status !== 'authenticated') {
      replace({
        pathname: '/',
        state: {nextPathname: nextState.location.pathname}
      });
    }
  }

  render() {
    /**
     * Create an enhanced history that syncs navigation events with the store
     */
    var enhancedHistory = syncHistoryWithStore(hashHistory, this.props.store);

    return (
      <Router history={enhancedHistory}>
        <Route name="root" path="/" component={StartScreen}/>
        <Route name="dashboard" path="dashboard" component={Dashboard} onEnter={this.verifyAuth}/>
      </Router>
    );
  }
}