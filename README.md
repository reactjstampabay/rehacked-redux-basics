![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 13, 2016): Redux Basics - [Step 6]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# [When We Last Left Off...](https://github.com/reactjstampabay/rehacked-redux-basics/compare/step-4...step-5)

* Installed [redux-devtools](https://github.com/gaearon/redux-devtools) to allow hot reloading, action replay, etc.
* Enhanced our Webpack configs to be environmentally aware to ensure `redux-devtools` are only available for local development
* Refactored `configureStore.js` to be environmentally specific

# Goals

1. Install [react-router-redux](https://github.com/reactjs/react-router-redux) 
2. Create baseline middleware, so we can apply routing middleware and share common middleware across environment specific stores
3. Add login and logout related routing to Redux layer
4. Move StartScreen state into Redux layer
5. Convert stateless components into simple functions

# ReHacked

## Goal 1: Install [react-router-redux](https://github.com/reactjs/react-router-redux) 

### Explanation

* [react-router-redux](https://github.com/reactjs/react-router-redux) is an optional add-on that allows you to easily keep your router in sync with application state

### Instructions

1. If you are currently running `webpack-dev-server`, exit the process for now.
2. Open a terminal in the root of the application. Execute `npm3 install react-router-redux --save`
3. Edit `/src/containers/App/index.js`.  Import `syncHistoryWithStore` and create an enhanced routing history like the following:
    * The library simply enhances a history instance to allow it to synchronize any changes it receives into application state. 
    
  ```javascript
    import {syncHistoryWithStore} from 'react-router-redux';
  ```
  
  ```javascript
  render() {
      /**
       * Create an enhanced history that syncs navigation events with the store
       */
      let enhancedHistory = syncHistoryWithStore(hashHistory, this.props.store);
  
      return (
        <Router history={enhancedHistory}>
          <Route name="root" path="/" component={StartScreen}/>
          <Route name="dashboard" path="dashboard" component={Dashboard} onEnter={this.verifyAuth}/>
        </Router>
      );
    }
  ```

## Goal 2: Create baseline middleware, so we can apply routing middleware and share common middleware across environment specific stores

### Explanation
* We want to apply routing middleware to our Redux store to capture dispatched actions
* We want a common location to apply middleware that is shared across all store configurations

### Instructions

1. Edit `/src/app.js`. Modify the `import {configureStore}` statement to look like the following:
 ```javascript
 import configureStore from './common/store/configureStore';
 ```
2. Establish a `/src/common/middleware/baseline.js` file.  Copy and paste [`/src/common/middleware/baseline.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/step-6/src/common/middleware/baseline.js)
3. Edit `/src/common/store/configureStore.dev.js`.  Replace its contents with [`/src/common/store/configureStore.dev.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/step-6/src/common/store/configureStore.dev.js)
4. Edit `/src/common/store/configureStore.prod.js`.  Replace its contents with [`/src/common/store/configureStore.prod.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/step-6/src/common/store/configureStore.prod.js)
5. Edit `/src/common/reducers/rootReducer.js`.  Replace the contents to look like the following:

  ```javascript
  import {combineReducers} from 'redux';
  import {routerReducer} from 'react-router-redux';
  import {user} from './user';
  
  const rootReducer = combineReducers({
    user,
    routing: routerReducer
  });
  
  export default rootReducer;
  ```
## Goal 3: Add login and logout related routing to Redux layer

### Explanation
* We want to dispatch actions to handle navigation
* We want to dispatch actions to save to local storage
* We want to dispatch actions to validate a user's profile

### Instructions

1. Edit `/src/common/actions/user.js`.  Replace its contents with [`/src/common/actions/user.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/common/actions/user.js)
2. Edit `/src/common/reducers/user.js`. Replace its contents with [`/src/common/reducers/user.js`](https://github.com/reactjstampabay/rehacked-redux-basics/blob/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/common/reducers/user.js)

[Back to the Step 5](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-5)
