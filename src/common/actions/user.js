import * as UserService from '../services/user';
import {push} from 'react-router-redux';

export const LOGOUT = 'LOGOUT';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

/**
 * invoked when a login is requested
 */
function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

/**
 * invoked when a login is received - success or error
 */
export function receiveLogin(response) {
  return {
    type: RECEIVE_LOGIN,
    profile: response.data,
    error: response.error
  };
}

/**
 * initiates a login request
 */
export function initiateLogin(email, password) {
  return dispatch => {
    dispatch(requestLogin());

    return UserService.login(email, password)
      .then(profile => {
        dispatch(receiveLogin({data: profile}));
        dispatch(saveProfile(profile));
        dispatch(push('/dashboard'));
      })
      .catch(error => dispatch(receiveLogin({error: error})));
  }
}

/**
 * logout user - delete profile, redirect to /
 */
export function logout() {
  return dispatch => {
    delete localStorage['USER_PROFILE'];
    dispatch(push('/'));
    dispatch({type: LOGOUT});
  }
}

/**
 * save profile to storage - could be expanded to be cross platform (react-native-storage)
 */
export function saveProfile(profile) {
  return dispatch => {
    localStorage['USER_PROFILE'] = JSON.stringify(profile);
    dispatch({type: SAVE_PROFILE});
  }
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
