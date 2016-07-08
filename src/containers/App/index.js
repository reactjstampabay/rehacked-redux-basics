import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {validateProfile} from '../../common/actions/user';
import StartScreen from '../StartScreen';
import Dashboard from '../Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.verifyAuth = this.verifyAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this.handleChange.bind(this));
  }

  componentWillMount() {
    this.props.store.dispatch(validateProfile());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange() {
    // behavior on store change would happen here
  }

  verifyAuth(nextState, replace) {
    let store = this.props.store;
    let profile = store.getState().user.profile || JSON.parse(localStorage['USER_PROFILE'] || '{}');
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
    let enhancedHistory = syncHistoryWithStore(hashHistory, this.props.store);

    return (
      <Router history={enhancedHistory}>
        <Route name="root" path="/" component={StartScreen}/>
        <Route name="dashboard" path="dashboard" component={Dashboard} onEnter={this.verifyAuth}/>
      </Router>
    );
  }
}