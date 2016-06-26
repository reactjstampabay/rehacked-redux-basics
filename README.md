![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 27, 2016): Redux Basics
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# [When We Last Left Our Intrepid Adventurers...](#overview)

* We created a rudimentary React SPA setup from the last [ReHacked Lab](https://github.com/reactjstampabay/rehacked-spa-basics-solution-set)

# Goals

1. Install[Redux](), [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/gaearon/redux-logger)
1. Start to think about our Redux application in terms of Actions
1. Implement some Action handlers

# ReHacked

## Prerequisites

1. Fork `https://github.com/reactjstampabay/rehacked-redux-basics` to your personal GitHub
1. In a shell, execute `git clone https://github.com/[your GH username]/rehacked-redux-basics.git`
1. Execute `git checkout initial`
1. Execute `npm3 install`

## Install Redux, redux-thunk, and redux-logger

### Overview

* **Redux** is the state management library we will use for our React SPA
* **redux-thunk** allows us to manage actions in an asychronous fashion. The most common use case is if we first need to call out to a Web API before dispatching an action.
* **redux-logger** logs state changes to the console for development purposes

### Run npm install for Redux, redux-thunk, and redux-logger

1. Execute `npm3 install redux redux-thunk redux-logger --save`
1. Ensure your `package.json` has these entries saved to its dependencies

## Think of the app in terms of Actions

### Overview

* **Actions** are the most basic construct in Redux (and also Flux).  They describe the different behaviors of your application and corresponding data related to that behavior.

### Create our first Action handler

1. Create an `/actions` subfolder under `/common`
1. Create a `user.js` file under the newly established `/actions` subfolder
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
