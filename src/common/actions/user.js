import login from '../services/user';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = 'LOGOUT';

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

function receiveLogin(email, response) {
  return {
    type: RECEIVE_LOGIN,
    profile: response.data,
    error: response.error
  };
}

export function initiateLogin(email, password) {
  return dispatch => {
    dispatch(requestLogin());
    return login(email, password)
      .then(json => dispatch(receiveLogin(email, {data: json})))
      .catch(error => dispatch(receiveLogin(email, {error: error})));
  }
}

export function logout() {
  return {
    type: LOGOUT
  };
}
