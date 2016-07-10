import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOGOUT
} from '../actions/user';

let initial_user_state = {
  status: 'initial',
  email: '',
  password: ''
};

export function user(state = initial_user_state, action) {
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
      return Object.assign({}, state,  {
        status: 'logged_out',
        profile: null
      });
      break;
    default:
      return state;
  }
}