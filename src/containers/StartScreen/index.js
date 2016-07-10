import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'; 
import Login from '../../components/Login';
import {initiateLogin, updateLoginField} from '../../common/actions/user';
import {hashHistory} from 'react-router';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authorized') {
      localStorage['USER_PROFILE'] = JSON.stringify(nextProps.user);
      hashHistory.push('/dashboard');
    }
  }

  _handleFieldChange(field, event) {
    this.props.dispatch(updateLoginField(field, event.target.value));
  }

  _handleLogin() {
    let errors = [];
    let user = this.props.user;
    if (!user.email) {
      errors.push('You must specify an email');
    }
    if (!user.password) {
      errors.push('You must specify a password');
    }

    if (errors.length > 0) {
      this._showSnackBar(errors.join('.'));
    } else {
      this.props.dispatch(initiateLogin(user.email, user.password));
    }
  }

  _showSnackBar(message) {
    let data = {
      message: message,
      timeout: 2500
    };
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
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(StartScreen);