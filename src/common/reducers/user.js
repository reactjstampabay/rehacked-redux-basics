import {
  LOGOUT,
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  UPDATE_LOGIN_FIELD
} from '../actions/user';

/**
 * initial reducer state
 */
const initial_user_state = {
  status: 'initial',
  email: '',
  password: ''
};

/**
 * export user reducer
 */
export const user = (state = initial_user_state, action) => {
  switch (action.type) {
    case LOGOUT:
      return logout(state, action);
    case REQUEST_LOGIN:
      return requestLogin(state, action);
    case RECEIVE_LOGIN:
      return receiveLogin(state, action);
    case UPDATE_LOGIN_FIELD:
      return updateLoginField(state, action);
    default:
      return state;
  }
};

function logout(state, action) {
  return Object.assign({}, state, {
    status: 'logged_out',
    profile: null
  });
}

function receiveLogin(state, action) {
  return Object.assign({}, state, {
    profile: action.profile,
    error: action.error,
    status: action.error ? 'unauthorized' : 'authorized',
    password: ''
  });
}

function requestLogin(state, action) {
  return Object.assign({}, state, {
    status: 'authenticating'
  });
}

function updateLoginField(state, action) {
  let user_state = Object.assign({}, state);
  user_state[action.key] = action.value;

  return Object.assign({}, user_state, {
    type: UPDATE_LOGIN_FIELD,
    error: null
  });
}
