![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 27, 2016): Redux Basics - [Step 3]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# [When We Last Left Off...](https://github.com/reactjstampabay/rehacked-redux-basics/compare/step-1...step-2)

* We considered the shape of the overall **State** of our Redux application
* We implemented a user **Reducer** to represent the state of the user object
* We implemented a **Root Reducer** to consolidate all future reducers into one

# Goals

1. Create a **Store** for our app, which glues React to the **Actions** and **Reducers**
1. Consider Our UI Architecture in Terms of **Containers** and **Components**
1. Wire in Redux to `app.js` and Create an App **Container**
1. Refactor Dashboard and StartScreen to be **Containers** and Use Redux
1. Enhance our `package.json` with a `dev` script that runs `webpack`

# ReHacked

## Goal 1: Create a **Store** for our app, which glues React to the **Actions** and **Reducers**

### Explanation

* A **Store** is the heart of a Redux application.  The **Store** maintains the **State** of your application and handles any **Actions** that get dispatched from Action Creators
* The **Store**, by way of convenience functions, can get automatically wired into any React component so that any change of the **State** can be handled

### Instructions

1. In the root of the project, run `npm3 install react-redux --save`
1. Create a `/src/common/store` directory, then create a `configureStore.js` file in it
1. Copy-pasta time!

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export let configureStore = function(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, createLogger())
  );

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
```

## Goal 2: Consider Our UI Architecture in Terms of **Containers** and **Components**

### Explanation

* While we started simply, we should consider an architecture that will scale with your app
* A **Component** can be considered _stateless_.  That is, it will not maintain a connection to the Redux **Store** nor maintain its own internal **State**.  Any changes are propagated down from their parents.
* A **Container** can be considered _stateful_.  That is, it will maintain a connection to the Redux **Store** for any state changes and propagate them down to their children.  It may also maintain its own internal state.
* Another way of thinking about this is that **Components** are purely presentational, whereas **Containers** encapsulate behaviors and presentation hierarchy.

### Instructions

1. Create a `/src/containers` folder.  Then create an `index.js` file
2. With the definitions above, we can consider that our simple app has two **Containers**: StartScreen and Dashboard
3. We should also encapsulate our entire application in an App **Container** so that our `/src/app.js` folder has only the single responsibility of scaffolding the application

## Goal 3: Wire in Redux to `app.js` and Create an App **Container**

### Explanation

* We want `/src/app.js` to simply scaffold the app with a connection to Redux, so we will break off the React Router logic and verification of auth to its own App **Container**
* The App **Container** should also connect to the Redux **Store** to react to any **State** changes

### Instructions

1. Create a `/src/containers/App/index.js` file.  Copy-pasta the contents of [`src/containers/App/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/94ae7584db4434c36de6620fc620722781ffe6d6/src/containers/App/index.js)
1. Go to `/src/app.js`.  Replace its contents with [`/src/app.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/94ae7584db4434c36de6620fc620722781ffe6d6/src/app.js)


## Goal 4: Refactor Dashboard and StartScreen to be **Containers** and Use Redux

### Explanation

* Dashboard and StartScreen really are **Containers** -- stateful components that then propagate any **State** changes down to their children.
  * **Note**: Other **Containers** can be children of **Containers**, but as general guidance, strive to keep one **Container** be the parent of a chain of stateless **Components**.
* While you could manually subscribe to a Redux **Store** that gets passed down thanks to the **Provider** HOC in our new `app.js`, Redux offers a convenient `connect` function to propagate state changes to your **Containers**
* The **Actions** we created earlier can be simply imported into a **Container** the used in conjunction with a `dispatch` function that gets passed down thanks to the **Provider** HOC in our `app.js`.

### Instructions

1. Create a `/src/containers` folder
2. Move the `/src/components/Dashboard` and `/src/components/StartScreen` folders to `/src/containers`
3. Replace the contents of `/src/containers/Dashboard/index.js` with [`/src/containers/Dashboard/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/5b75f17f98dcb5c1074e18bd43314036b562724f/src/containers/Dashboard/index.js)
4. Replace the contents of `/src/containers/StartScreen/index.js` with [`/src/containers/StartScreen/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/5b75f17f98dcb5c1074e18bd43314036b562724f/src/containers/StartScreen/index.js)

## Goal 5: Enhance our `package.json` with a `dev` script that runs `webpack-dev-server`

### Explanation

* We will simply add a new entry to the `scripts` section of `package.json` called `dev` that launches `webpack-dev-server`

### Instructions

1. Edit `/src/package.json` and add this line to the `scripts` section: `"dev": "webpack-dev-server --config webpack.config.js --content-base build/ --inline --hot",`

# Summary

In this section, we have accomplished the following:

* Created a **Store** for our Redux app that React can use
* Implemented the concept of **Components** and **Containers** in our app
* Refactored our `app.js` to be simply concerned with scaffolding the app
* Created an App **Container** that contains the `react-router` config and supporting functions for auth
* Refactored our `StartScreen` and `Dashboard` to be **Containers** and wired them into Redux

[Back to the Step 2](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-2) || [Continue to Step 4](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-4)
