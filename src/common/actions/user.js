import * as UserService from '../services/user';
import {push} from 'react-router-redux';

export const LOGOUT = 'LOGOUT';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

export function receiveLogin(response) {
  return {
    type: RECEIVE_LOGIN,
    profile: response.data,
    error: response.error
  };
}

export function initiateLogin(email, password) {
  return dispatch => {
    dispatch(requestLogin());
    return UserService.login(email, password)
      .then(json => {
        dispatch(receiveLogin({data: json}));
        dispatch(push('/dashboard'));
      })
      .catch(error => dispatch(receiveLogin({error: error})));
  }
}

export function logout() {
  delete localStorage['USER_PROFILE'];
  return {
    type: LOGOUT
  };
}

/**
 * set the value for a login field (email, password, etc.)
 */
export function updateLoginField(key, value) {
  return dispatch => {
    let dispatch_payload = {
      type: UPDATE_LOGIN_FIELD,
      key: key,
      value: value
    };

    dispatch(dispatch_payload);
  }
}

// export function validateProfile() {
//
// }
