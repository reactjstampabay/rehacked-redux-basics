import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOGOUT
} from '../actions/user';

export function user(state = {}, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        status: 'authenticating'
      });
      break;
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        profile: action.profile,
        error: action.error,
        status: action.error ? 'unauthorized' : 'authorized'
      });
      break;
    case LOGOUT:
      return Object.assign({}, state, {
        status: 'logged_out',
        profile: null
      });
      break;
    default:
      return state;
  }
}