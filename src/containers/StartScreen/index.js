import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'; 
import Login from './Login';
import {initiateLogin} from '../../common/actions/user';
import {hashHistory} from 'react-router';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'initial',
      email: '',
      password: ''
    };

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
    let newState = Object.assign({}, this.state);
    newState[field] = event.target.value;
    this.setState(newState);
  }

  _handleLogin() {
    let errors = [];
    if (!this.state.email) {
      errors.push('You must specify an email');
    }
    if (!this.state.password) {
      errors.push('You must specify a password');
    }

    if (errors.length > 0) {
      this._showSnackBar(errors.join('.'));
      let newState = Object.assign({}, this.state);
      newState.status = 'login_error';
      this.setState(newState);
    } else {
      this.props.dispatch(initiateLogin(this.state.email, this.state.password));
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
    return (
      <Login email={this.state.email}
             password={this.state.password}
             handleFieldChange={this._handleFieldChange}
             handleLogin={this._handleLogin}
             loading={this.props.user.status === 'authenticating'}/>
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