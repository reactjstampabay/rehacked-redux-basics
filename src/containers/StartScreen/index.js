import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {initiateLogin, updateLoginField, validateProfile} from '../../common/actions/user';
import Login from './Login';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this._handleFieldChange = this._handleFieldChange.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  componentWillMount() {
    this.props.dispatch(validateProfile());
  }

  _handleFieldChange(field, event) {
    this.props.dispatch(updateLoginField(field, event.target.value));
  }

  _handleLogin() {
    let user = this.props.user;
    if (!user.email || !user.password) {
      this._showSnackBar('Email and Password are required');
      return;
    }

    this.props.dispatch(initiateLogin(user.email, user.password));
  }

  _showSnackBar(message) {
    let data = {message: message, timeout: 2500};
    let snackbarContainer = document.querySelector('#login-snack-bar');
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }

  render() {
    let {user} = this.props;
    return (
      <Login email={user.email}
             password={user.password}
             handleFieldChange={this._handleFieldChange}
             handleLogin={this._handleLogin}
             loading={user.status === 'authenticating'}/>
    );
  }
}

StartScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(StartScreen);
