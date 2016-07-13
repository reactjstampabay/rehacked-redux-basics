![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 13, 2016): Redux Basics - [Step 6]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# [When We Last Left Off...](https://github.com/reactjstampabay/rehacked-redux-basics/compare/step-4...step-5)

* Installed [redux-devtools](https://github.com/gaearon/redux-devtools) to allow hot reloading, action replay, etc.
* Enhanced our Webpack configs to be environmentally aware
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
* The library simply enhances a history instance to allow it to synchronize any changes it receives into application state

### Instructions

1. If you are currently running `webpack-dev-server`, exit the process for now.
2. Open a terminal in the root of the application. Execute `npm3 install react-router-redux --save`
3. Edit `/src/containers/App/index.js`. Import `syncHistoryWithStore` and create an enhanced routing history like the following:

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
2. Establish a `/src/common/middleware/baseline.js` file. Copy and paste [`/src/common/middleware/baseline.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/step-6/src/common/middleware/baseline.js)
3. Edit `/src/common/store/configureStore.dev.js`. Replace its contents with [`/src/common/store/configureStore.dev.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/step-6/src/common/store/configureStore.dev.js)
4. Edit `/src/common/store/configureStore.prod.js`. Replace its contents with [`/src/common/store/configureStore.prod.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/step-6/src/common/store/configureStore.prod.js)
5. Edit `/src/common/reducers/rootReducer.js`. Replace the contents to look like the following:

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

1. Edit `/src/common/actions/user.js`. Replace its contents with [`/src/common/actions/user.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/common/actions/user.js)
2. Edit `/src/common/reducers/user.js`. Replace its contents with [`/src/common/reducers/user.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/d2ac4b30bf4b25c4722c8f629215fb8aa538f216/src/common/reducers/user.js)

## Goal 4: Move StartScreen state into Redux layer

### Explanation

* We want to demonstrate how localized state can be managed via Redux

### Instructions

1. Edit `/src/containers/StartScreen/index.js`. Replace its contents with [`/src/containers/StartScreen/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/containers/StartScreen/index.js)
2. Edit `/src/containers/App/index.js`. Replace its contents with [`/src/containers/App/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/containers/App/index.js)
3. Edit `/src/containers/Dashboard/index.js`. Replace its contents with [`/src/containers/Dashboard/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/containers/Dashboard/index.js)

## Goal 5: Convert stateless components into simple functions

### Explanation

* We want to demonstrate how stateless components can be composed with simple functions

### Instructions

1. Edit `/src/components/Avatar.js`. Replace its contents with [`/src/components/Avatar.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/components/Avatar.js)
2. Edit `/src/components/Header.js`. Replace its contents with [`/src/components/Header.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/components/Header.js)
3. Edit `/src/components/LeftNavigation.js`. Replace its contents with [`/src/components/LeftNavigation.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/components/LeftNavigation.js)
4. Edit `/src/components/NavigationMenu.js`. Replace its contents with [`/src/components/NavigationMenu.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/components/NavigationMenu.js)
5. Edit `/src/containers/Dashboard/DashboardContent/index.js`. Replace its contents with [`/src/containers/Dashboard/DashboardContent/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/containers/Dashboard/DashboardContent/index.js)
6. Edit `/src/containers/StartScreen/Login/index.js`. Replace its contents with [`/src/containers/StartScreen/Login/index.js`](https://github.com/reactjstampabay/rehacked-redux-basics/blob/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/containers/StartScreen/Login/index.js)
7. Edit `/src/containers/StartScreen/Login/Loading/index.js`. Replace its contents with [`/src/containers/StartScreen/Login/Loading/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/14cbb8f4870dd38f8adaf4c8c6662bc372826ccf/src/containers/StartScreen/Login/Loading/index.js)

[Back to the Step 5](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-5)
