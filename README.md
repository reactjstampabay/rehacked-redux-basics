![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 27, 2016): Redux Basics [Step 1]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Install [Redux](https://github.com/gaearon/redux), [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/gaearon/redux-logger)
1. Start to think about our Redux application in terms of Actions
1. Implement some Action handlers

# ReHacked

## Goal 1: Install Redux, redux-thunk, and redux-logger

### Explanation

* **Redux** is the state management library we will use for our React SPA
* **redux-thunk** allows us to manage actions in an asychronous fashion. The most common use case is if we first need to call out to a Web API before dispatching an action.
* **redux-logger** logs state changes to the console for development purposes

### Instructions

1. Execute `npm3 install redux redux-thunk redux-logger --save`
1. Ensure your `package.json` has these entries saved to its dependencies

## Goal 2: Start to think about our Redux application in terms of Actions

### Explanation

* **Actions** are the most basic construct in Redux (and also Flux).  They describe the different behaviors of your application and corresponding data related to that behavior.

### Instructions

1. In terms of our sample app, we can consider a few simple Actions
  1. Request a Login: Initiates our login process and shows our "indeterminate" progress bar
  1. Receive a Login: Once we receive a response from the API, we need to receive it so that our application can react to it properly
  1. Logout: Removes our auth token and profile information from `localStorage` and redirects us back to the `/` route

## Goal 3: Implement some Action handlers

### Explanation

* Now that we've considered what **Actions** this application does (request a login, receive a login, logout), let's implement it

### Instructions

1. Create `/src/common/actions` folder
1. Create a `user.js` file under the newly established `/src/common/actions` subfolder
1. Copy-pasta time!

```javascript
import login from '../services/user';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = 'LOGOUT';

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

function receiveLogin(response) {
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
      .then(json => dispatch(receiveLogin({data: json})))
      .catch(error => dispatch(receiveLogin({error: error})));
  }
}

export function logout() {
  return {
    type: LOGOUT
  };
}
```

# Summary

In this section, we have accomplished the following:

* Installed Redux and some supporting libraries
* Considered what **Actions** a user might take on our Application
* Implemented some User **Actions**


[Back to Initial](https://github.com/reactjstampabay/rehacked-redux-basics/tree/initial) || [Continue to Step 2](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-2)
