![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 27, 2016): Redux Basics - Step 1
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# When We Last Left Off...

* We created some Action handlers for our React/Redux app

# Goals

1. Consider what state we need to track for the app
1. Write our reducers that maintain the state for our app

# ReHacked

## Goal 1: Consider what state we need to track for the app

### Explanation

* Your UI is really just a glorified **State** machine.  What does that exactly mean?
  * When a user performs an **Action**, it follows with a change of **State** of your application. Example flow below.
    1. A user types in their email and password and clicks login
    1. The `requestLogin` action is triggered. It immediately dispatches to the **Store** which will change the app's state with its underlying **Reducers**.
    1. A **Reducer** watching for the `requestLogin` action handles the action, and changes the state of the app to `authenticating`
    1. The `initiateLogin` action is triggered, but does not immediately dispatch to the **Reducer** (this is where `redux-thunk` comes into play)
      1. The app goes out to the Web API with a given `email` and `password` and authenticates
      1. The app receives a response from the Web API.  It then dispatches a `receiveLogin` action to the **Store** with the response from the Web API.
    1. A **Reducer** watching for the `receiveLogin` action handles the action and changes its state based on the server Response

### Instructions

1. With the flow above considered, we can now determine what the shape of our **Root Reducer** will look like.
  1. Note: A **Root Reducer** simply assembles many other **Reducers** into one object.
1. If represented as a simple JavaScript literal, we could consider using the following shape

```javascript
var sampleState = {
  user: {
    status: 'authenticated',
    profile: {
      email: 'some@email.org',
      userName: 'someUser'
    },
    error: null
  }
};
```

## Goal 2: Write our reducers that maintain the state for our app

### Explanation

* Now that we've considered what our **Root Reducer** might look like, let's implement it

### Instructions

1. Create a `/src/common/reducers` folder
2. Create a `user.js` file in the `/src/common/reducers` folder. Copy-pasta time!

```javascript
// Code for /src/common/reducers/user.js

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
      return Object.assign({}, state,  {
        status: 'logged_out',
        profile: null
      });
      break;
    default:
      return state;
  }
}
```

3. Create a `rootReducer.js` in the `/src/common/reducers` folder.  Copy-pasta time!

```javascript
// Code for /src/common/reducers/rootReducer.js

import { combineReducers } from 'redux';
import { user } from './user';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
```

# Summary

In this section, we have accomplished the following:

* Considered the shape of our **Root Reducer** which will tie into our **Store** later, which in turn is the mechanism to which **Actions** get dispatched
* Implemented a `user` **Reducer**, which represents a user object in the overall shape of the application's **State**
* Implemented a `rootReducer` that can, in the future, assemble multiple **Reducers** into one object


[Back to the Start](https://github.com/reactjstampabay/rehacked-redux-basics/tree/initial) || [Continue to Step 2](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-2)
